import { useRef, useState, useEffect, useCallback, type ComponentType } from "react";
import type { TemplateProps, TemplateFields } from "@/types/template";
import { useExportPng } from "@/hooks/use-export-png";

interface PreviewCanvasProps {
  fields: TemplateFields;
  TemplateComponent: ComponentType<TemplateProps>;
  isExporting: boolean;
  onExportStart: () => void;
  onExportEnd: () => void;
}

function PreviewCanvas({
  fields,
  TemplateComponent,
  isExporting,
  onExportStart,
  onExportEnd,
}: PreviewCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  const { download, copyToClipboard } = useExportPng({
    canvasRef,
    onExportStart,
    onExportEnd,
  });

  const updateScale = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const { width, height } = container.getBoundingClientRect();
    // Leave some padding around the preview
    const padding = 48;
    const scaleX = (width - padding) / 1200;
    const scaleY = (height - padding) / 630;
    setScale(Math.min(scaleX, scaleY, 1));
  }, []);

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
        className="flex flex-1 items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      >
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center",
            width: 1200,
            height: 630,
            flexShrink: 0,
          }}
        >
          <div
            ref={canvasRef}
            style={{ width: 1200, height: 630 }}
            className="shadow-2xl"
          >
            <TemplateComponent fields={fields} />
          </div>
        </div>
      </div>

      {/* Export actions */}
      <div className="flex items-center justify-center gap-3 border-t border-border bg-background px-6 py-4">
        <button
          type="button"
          onClick={() => download()}
          disabled={isExporting}
          className="inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
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
          className="inline-flex h-9 items-center gap-2 rounded-lg border border-input bg-background px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
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
      </div>
    </div>
  );
}

export { PreviewCanvas };
