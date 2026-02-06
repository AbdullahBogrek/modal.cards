export interface UploadOptions {
  file: File;
  purpose: "logo" | "cover";
  onProgress?: (percent: number) => void;
}

export interface UploadResult {
  publicUrl: string;
  key: string;
}

export class UploadError extends Error {
  statusCode?: number;

  constructor(message: string, statusCode?: number) {
    super(message);
    this.name = "UploadError";
    this.statusCode = statusCode;
  }
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/svg+xml",
]);

export async function uploadToR2({ file, purpose, onProgress }: UploadOptions): Promise<UploadResult> {
  if (!ALLOWED_TYPES.has(file.type)) {
    throw new UploadError(
      `Invalid file type "${file.type}". Allowed: JPEG, PNG, GIF, WebP, SVG.`
    );
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new UploadError(
      `File too large (${(file.size / (1024 * 1024)).toFixed(1)}MB). Maximum: 5MB.`
    );
  }

  const presignRes = await fetch("/api/upload/presign", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contentType: file.type,
      fileSize: file.size,
      purpose,
    }),
  });

  if (!presignRes.ok) {
    const data = await presignRes.json().catch(() => ({ error: "Unknown error" }));
    throw new UploadError(data.error || "Failed to get upload URL.", presignRes.status);
  }

  const { uploadUrl, publicUrl, key } = await presignRes.json();

  await new Promise<void>((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable && onProgress) {
        onProgress(Math.round((event.loaded / event.total) * 100));
      }
    });

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve();
      } else {
        reject(new UploadError(`Upload failed with status ${xhr.status}.`, xhr.status));
      }
    });

    xhr.addEventListener("error", () => {
      reject(new UploadError("Network error during upload."));
    });

    xhr.open("PUT", uploadUrl);
    xhr.setRequestHeader("Content-Type", file.type);
    xhr.send(file);
  });

  return { publicUrl, key };
}
