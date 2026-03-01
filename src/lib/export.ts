import { domToPng } from "modern-screenshot";

export async function exportToPng(element: HTMLElement): Promise<string> {
  return domToPng(element, {
    width: 1200,
    height: 630,
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

export async function copyImageToClipboard(dataUrl: string): Promise<void> {
  const response = await fetch(dataUrl);
  const blob = await response.blob();
  await navigator.clipboard.write([
    new ClipboardItem({ "image/png": blob }),
  ]);
}
