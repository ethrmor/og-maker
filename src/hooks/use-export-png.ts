import { useCallback, type RefObject } from "react";
import { exportToPng, downloadDataUrl, copyImageToClipboard, generateFilename } from "@/lib/export";
import { useToast } from "@/components/ui/toast";

interface UseExportPngOptions {
  canvasRef: RefObject<HTMLDivElement | null>;
  onExportStart?: () => void;
  onExportEnd?: () => void;
  brandName?: string;
}

export function useExportPng({
  canvasRef,
  onExportStart,
  onExportEnd,
  brandName,
}: UseExportPngOptions) {
  const { showToast } = useToast();

  const download = useCallback(
    async (filename?: string) => {
      const finalFilename = filename ?? generateFilename(brandName);
      const el = canvasRef.current;
      if (!el) return;

      try {
        onExportStart?.();
        const dataUrl = await exportToPng(el);
        downloadDataUrl(dataUrl, finalFilename);
        showToast("Image downloaded successfully", "success");
      } catch (error) {
        console.error("Failed to export PNG:", error);
        showToast("Failed to download image", "error");
      } finally {
        onExportEnd?.();
      }
    },
    [canvasRef, onExportStart, onExportEnd, showToast, brandName]
  );

  const copyToClipboard = useCallback(async () => {
    const el = canvasRef.current;
    if (!el) return;

    try {
      onExportStart?.();
      const dataUrl = await exportToPng(el);
      await copyImageToClipboard(dataUrl);
      showToast("Copied to clipboard", "success");
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      showToast("Failed to copy to clipboard", "error");
    } finally {
      onExportEnd?.();
    }
  }, [canvasRef, onExportStart, onExportEnd, showToast]);

  return { download, copyToClipboard };
}
