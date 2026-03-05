import { createElement, useCallback, useState, type ComponentType } from "react";
import { createRoot } from "react-dom/client";
import JSZip from "jszip";
import { useToast } from "@/components/ui/toast";
import { TEMPLATE_COMPONENTS } from "@/components/templates";
import { exportToPng } from "@/lib/export";
import { TEMPLATES } from "@/lib/templates";
import type { TemplateFields, TemplateProps } from "@/types/template";

interface UseBatchExportOptions {
  currentFields: TemplateFields;
  onProgress?: (current: number, total: number) => void;
}

interface UseBatchExportResult {
  exportAll: () => Promise<void>;
  isExporting: boolean;
  progress: { current: number; total: number };
}

const TOTAL_TEMPLATES = TEMPLATES.length;

function waitForNextFrame(): Promise<void> {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}

function waitForImagesInContainer(container: HTMLElement): Promise<void> {
  const images = Array.from(container.querySelectorAll("img"));

  if (images.length === 0) {
    return Promise.resolve();
  }

  return Promise.all(
    images.map(
      (image) =>
        new Promise<void>((resolve) => {
          if (image.complete) {
            resolve();
            return;
          }

          const cleanup = () => {
            image.removeEventListener("load", onLoad);
            image.removeEventListener("error", onError);
          };

          const onLoad = () => {
            cleanup();
            resolve();
          };

          const onError = () => {
            cleanup();
            resolve();
          };

          image.addEventListener("load", onLoad, { once: true });
          image.addEventListener("error", onError, { once: true });
        })
    )
  ).then(() => undefined);
}

function waitForImageUrl(url: string | null): Promise<void> {
  if (!url) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const image = new Image();

    const cleanup = () => {
      image.onload = null;
      image.onerror = null;
    };

    image.onload = () => {
      cleanup();
      resolve();
    };

    image.onerror = () => {
      cleanup();
      resolve();
    };

    image.src = url;
  });
}

async function dataUrlToBlob(dataUrl: string): Promise<Blob> {
  const response = await fetch(dataUrl);
  return response.blob();
}

function sanitizeForFilename(value: string | null | undefined): string {
  const sanitized = value
    ?.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 30);

  return sanitized && sanitized.length > 0 ? sanitized : "untitled";
}

function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function useBatchExport({ currentFields, onProgress }: UseBatchExportOptions): UseBatchExportResult {
  const { showToast } = useToast();
  const [isExporting, setIsExporting] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: TOTAL_TEMPLATES });

  const exportAll = useCallback(async () => {
    if (isExporting) {
      return;
    }

    const date = new Date().toISOString().split("T")[0];
    const zip = new JSZip();
    const failures: string[] = [];
    const brand = sanitizeForFilename(currentFields.brandName);

    setIsExporting(true);
    setProgress({ current: 0, total: TOTAL_TEMPLATES });
    onProgress?.(0, TOTAL_TEMPLATES);

    const container = document.createElement("div");
    container.style.cssText = "position:fixed;left:-9999px;top:0;width:1200px;height:630px;pointer-events:none;opacity:0;";
    document.body.appendChild(container);

    const root = createRoot(container);

    try {
      for (const [index, template] of TEMPLATES.entries()) {
        const current = index + 1;

        try {
          const TemplateComponent = TEMPLATE_COMPONENTS[template.id] as ComponentType<TemplateProps> | undefined;
          if (!TemplateComponent) {
            throw new Error(`Template component not found for '${template.id}'`);
          }

          const exportFields: TemplateFields = {
            ...currentFields,
            ...template.defaults,
          };

          root.render(createElement(TemplateComponent, { fields: exportFields }));

          await waitForNextFrame();
          await waitForNextFrame();
          await Promise.all([
            waitForImageUrl(exportFields.backgroundImageUrl),
            waitForImagesInContainer(container),
          ]);

          const dataUrl = await exportToPng(container);
          const pngBlob = await dataUrlToBlob(dataUrl);
          const pngFilename = `og-${brand}-${template.id}-${date}.png`;
          zip.file(pngFilename, pngBlob);
        } catch (error) {
          console.error(`Failed to export template '${template.id}':`, error);
          failures.push(template.id);
        } finally {
          setProgress({ current, total: TOTAL_TEMPLATES });
          onProgress?.(current, TOTAL_TEMPLATES);
          root.render(null);
          await waitForNextFrame();
        }
      }

      const successCount = TOTAL_TEMPLATES - failures.length;
      if (successCount === 0) {
        throw new Error("Unable to export any templates");
      }

      const zipBlob = await zip.generateAsync({ type: "blob" });
      downloadBlob(zipBlob, `og-all-templates-${date}.zip`);

      if (failures.length === 0) {
        showToast("All templates exported", "success");
      } else {
        showToast(`Exported ${successCount}/${TOTAL_TEMPLATES} templates`, "info");
      }
    } catch (error) {
      console.error("Batch export failed:", error);
      showToast("Export failed", "error");
      throw error;
    } finally {
      root.unmount();
      document.body.removeChild(container);
      setIsExporting(false);
    }
  }, [currentFields, isExporting, onProgress, showToast]);

  return { exportAll, isExporting, progress };
}

export type { UseBatchExportOptions, UseBatchExportResult };
