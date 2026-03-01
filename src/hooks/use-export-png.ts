import { useCallback, type RefObject } from "react";
import { exportToPng, downloadDataUrl, copyImageToClipboard } from "@/lib/export";

interface UseExportPngOptions {
  canvasRef: RefObject<HTMLDivElement | null>;
  onExportStart?: () => void;
  onExportEnd?: () => void;
}

export function useExportPng({
  canvasRef,
  onExportStart,
  onExportEnd,
}: UseExportPngOptions) {
  const download = useCallback(
    async (filename = "og-image.png") => {
      const el = canvasRef.current;
      if (!el) return;

      try {
        onExportStart?.();
        const dataUrl = await exportToPng(el);
        downloadDataUrl(dataUrl, filename);
      } catch (error) {
        console.error("Failed to export PNG:", error);
      } finally {
        onExportEnd?.();
      }
    },
    [canvasRef, onExportStart, onExportEnd]
  );

  const copyToClipboard = useCallback(async () => {
    const el = canvasRef.current;
    if (!el) return;

    try {
      onExportStart?.();
      const dataUrl = await exportToPng(el);
      await copyImageToClipboard(dataUrl);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    } finally {
      onExportEnd?.();
    }
  }, [canvasRef, onExportStart, onExportEnd]);

  return { download, copyToClipboard };
}
