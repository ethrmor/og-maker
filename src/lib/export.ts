import { domToPng } from "modern-screenshot";

export async function exportToPng(element: HTMLElement, width: number, height: number): Promise<string> {
  return domToPng(element, {
    width,
    height,
    scale: 2, // 2x retina quality
    quality: 1.0,
  });
}

export function downloadDataUrl(dataUrl: string, filename: string): void {
  const link = document.createElement("a");
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Generate a filename for the OG image
 * Pattern: og-{brand}-{YYYY-MM-DD}.png
 * Sanitizes brand name and adds date for uniqueness
 */
export function generateFilename(brandName?: string): string {
  const date = new Date().toISOString().split("T")[0];
  const sanitizedBrand = brandName
    ? brandName
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .slice(0, 30)
    : "untitled";
  return `og-${sanitizedBrand}-${date}.png`;
}

export async function copyImageToClipboard(dataUrl: string): Promise<void> {
  const response = await fetch(dataUrl);
  const blob = await response.blob();
  await navigator.clipboard.write([
    new ClipboardItem({ "image/png": blob }),
  ]);
}
