import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { r2Client, R2_BUCKET, R2_PUBLIC_URL } from "../../../lib/r2";

export const config = {
  runtime: 'edge',
};

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/svg+xml",
]);

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const MIME_TO_EXT: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/gif": "gif",
  "image/webp": "webp",
  "image/svg+xml": "svg",
};

function jsonResponse(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });
}

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const { contentType, fileSize, purpose } = await req.json();

  if (!contentType || !ALLOWED_TYPES.has(contentType)) {
    return jsonResponse({
      error: "Invalid file type. Allowed: JPEG, PNG, GIF, WebP, SVG.",
    }, 400);
  }

  if (!fileSize || fileSize > MAX_FILE_SIZE) {
    return jsonResponse({
      error: `File too large. Maximum size: ${MAX_FILE_SIZE / (1024 * 1024)}MB.`,
    }, 400);
  }

  if (purpose !== "logo" && purpose !== "cover") {
    return jsonResponse({ error: "Invalid purpose. Must be 'logo' or 'cover'." }, 400);
  }

  try {
    const ext = MIME_TO_EXT[contentType] || "bin";
    const uniqueId = crypto.randomUUID();
    const key = `${purpose}/${uniqueId}.${ext}`;

    const command = new PutObjectCommand({
      Bucket: R2_BUCKET,
      Key: key,
      ContentType: contentType,
      ContentLength: fileSize,
    });

    const uploadUrl = await getSignedUrl(r2Client, command, { expiresIn: 60 });
    const publicUrl = `${R2_PUBLIC_URL}/${key}`;

    return jsonResponse({ uploadUrl, publicUrl, key });
  } catch (error) {
    console.error("Presign error:", error);
    return jsonResponse({ error: "Failed to generate upload URL." }, 500);
  }
}
