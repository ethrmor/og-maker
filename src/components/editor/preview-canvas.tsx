import { useRef, useState, useEffect, useCallback, useImperativeHandle, forwardRef, type ComponentType } from "react";
import type { TemplateProps, TemplateFields } from "@/types/template";
import { useExportPng } from "@/hooks/use-export-png";
import { BatchExportButton } from "@/components/editor/batch-export-button";
import { getPresetById } from "@/lib/platform-presets";

interface PreviewCanvasProps {
  fields: TemplateFields;
  TemplateComponent: ComponentType<TemplateProps>;
  isExporting: boolean;
  onExportStart: () => void;
  onExportEnd: () => void;
  platformPresetId: string;
}

export interface PreviewCanvasRef {
  download: () => Promise<void>;
  copyToClipboard: () => Promise<void>;
}

const PreviewCanvas = forwardRef<PreviewCanvasRef, PreviewCanvasProps>(function PreviewCanvas({
  fields,
  TemplateComponent,
  isExporting,
  onExportStart,
  onExportEnd,
  platformPresetId,
}, ref) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  const preset = getPresetById(platformPresetId);
  const canvasWidth = preset.width;
  const canvasHeight = preset.height;

  const { download, copyToClipboard } = useExportPng({
    canvasRef,
    onExportStart,
    onExportEnd,
    brandName: fields.brandName,
    canvasWidth,
    canvasHeight,
  });

  // Expose actions via ref for keyboard shortcuts
  useImperativeHandle(ref, () => ({
    download,
    copyToClipboard,
  }), [download, copyToClipboard]);

  const updateScale = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const { width, height } = container.getBoundingClientRect();
    // Leave some padding around the preview
    const padding = 48;
    const scaleX = (width - padding) / canvasWidth;
    const scaleY = (height - padding) / canvasHeight;
    setScale(Math.min(scaleX, scaleY, 1));
  }, [canvasWidth, canvasHeight]);

  useEffect(() => {
    updateScale();
    const observer = new ResizeObserver(updateScale);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [updateScale]);

  return (
    <div className="flex h-full flex-col">
      {/* Preview area */}
      <div
        ref={containerRef}
        className="flex flex-1 items-center justify-center overflow-hidden min-h-0 min-w-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in oklch, var(--color-border) 40%, transparent) 0.75px, transparent 0.75px)",
          backgroundSize: "16px 16px",
        }}
      >
        {/* Layout wrapper with scaled dimensions */}
        <div
          style={{
            width: canvasWidth * scale,
            height: canvasHeight * scale,
            flexShrink: 0,
          }}
        >
          {/* Scaled content wrapper */}
          <div
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              width: canvasWidth,
              height: canvasHeight,
            }}
          >
            <div
              ref={canvasRef}
              style={{ width: canvasWidth, height: canvasHeight }}
              className="shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_10px_25px_-5px_rgba(0,0,0,0.08),0_25px_50px_-12px_rgba(0,0,0,0.15)]"
            >
              <TemplateComponent fields={fields} />
            </div>
          </div>
        </div>
      </div>

      {/* Export actions */}
      <div className="flex items-center justify-center gap-3 border-t border-border/50 shadow-[0_-1px_3px_-1px_rgba(0,0,0,0.06)] dark:shadow-[0_-1px_3px_-1px_rgba(0,0,0,0.3)] bg-background px-6 py-5">
        <button
          type="button"
          onClick={() => download()}
          disabled={isExporting}
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.05),0_6px_16px_rgba(0,0,0,0.12)] disabled:pointer-events-none disabled:opacity-50"
        >
          {isExporting ? (
            <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          )}
          Download PNG
        </button>
        <button
          type="button"
          onClick={() => copyToClipboard()}
          disabled={isExporting}
          className="inline-flex h-10 items-center gap-2 rounded-lg border border-input bg-background px-4 text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:shadow-sm disabled:pointer-events-none disabled:opacity-50"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
          Copy to Clipboard
        </button>
        <BatchExportButton
          fields={fields}
          disabled={isExporting}
          onExportStart={onExportStart}
          onExportEnd={onExportEnd}
          platformPresetId={platformPresetId}
        />
      </div>
    </div>
  );
});

export { PreviewCanvas };
export type { PreviewCanvasProps };
