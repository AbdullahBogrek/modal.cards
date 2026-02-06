import { useState, useCallback } from "react";
import { uploadToR2, UploadError } from "../lib/uploadToR2";

interface UseImageUploadOptions {
  purpose: "logo" | "cover";
  onSuccess: (publicUrl: string) => void;
}

interface UseImageUploadReturn {
  upload: (file: File) => Promise<void>;
  isUploading: boolean;
  progress: number;
  error: string | null;
  clearError: () => void;
}

export function useImageUpload({ purpose, onSuccess }: UseImageUploadOptions): UseImageUploadReturn {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const upload = useCallback(async (file: File) => {
    setIsUploading(true);
    setProgress(0);
    setError(null);

    try {
      const result = await uploadToR2({
        file,
        purpose,
        onProgress: setProgress,
      });

      onSuccess(result.publicUrl);
    } catch (err) {
      const message = err instanceof UploadError
        ? err.message
        : "An unexpected error occurred during upload.";
      setError(message);
    } finally {
      setIsUploading(false);
    }
  }, [purpose, onSuccess]);

  const clearError = useCallback(() => setError(null), []);

  return { upload, isUploading, progress, error, clearError };
}
