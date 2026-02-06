import type { NextApiRequest, NextApiResponse } from "next";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { r2Client, R2_BUCKET, R2_PUBLIC_URL } from "../../../lib/r2";

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

interface PresignResponse {
  uploadUrl: string;
  publicUrl: string;
  key: string;
}

interface ErrorResponse {
  error: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PresignResponse | ErrorResponse>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { contentType, fileSize, purpose } = req.body;

  if (!contentType || !ALLOWED_TYPES.has(contentType)) {
    return res.status(400).json({
      error: `Invalid file type. Allowed: JPEG, PNG, GIF, WebP, SVG.`,
    });
  }

  if (!fileSize || fileSize > MAX_FILE_SIZE) {
    return res.status(400).json({
      error: `File too large. Maximum size: ${MAX_FILE_SIZE / (1024 * 1024)}MB.`,
    });
  }

  if (purpose !== "logo" && purpose !== "cover") {
    return res.status(400).json({ error: "Invalid purpose. Must be 'logo' or 'cover'." });
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

    return res.status(200).json({ uploadUrl, publicUrl, key });
  } catch (error) {
    console.error("Presign error:", error);
    return res.status(500).json({ error: "Failed to generate upload URL." });
  }
}
