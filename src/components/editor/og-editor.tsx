import { useCallback, type ComponentType } from "react";
import type { TemplateProps } from "@/types/template";
import { useOgEditor } from "@/hooks/use-og-editor";
import { EditorSidebar } from "@/components/editor/editor-sidebar";
import { PreviewCanvas } from "@/components/editor/preview-canvas";
import { TEMPLATE_COMPONENTS } from "@/components/templates";
import { ThemeToggle } from "@/components/editor/theme-toggle";

function OgEditor() {
  const { state, selectTemplate, updateField, setExporting, resetStyle, clearContent } = useOgEditor();

  const TemplateComponent: ComponentType<TemplateProps> =
    TEMPLATE_COMPONENTS[state.selectedTemplateId] ??
    TEMPLATE_COMPONENTS["minimal"];

  const handleExportStart = useCallback(() => setExporting(true), [setExporting]);
  const handleExportEnd = useCallback(() => setExporting(false), [setExporting]);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background text-foreground">
      {/* Header */}
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-border/50 shadow-[0_1px_3px_-1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_3px_-1px_rgba(0,0,0,0.3)] px-5">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center size-7 rounded-lg bg-primary/10">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          </div>
          <span className="text-[15px] font-bold">OG Maker</span>
        </div>
        <ThemeToggle />
      </header>

      {/* Editor body */}
      <div className="grid flex-1 overflow-hidden" style={{ gridTemplateColumns: "380px 1fr" }}>
        <EditorSidebar
          fields={state.fields}
          selectedTemplateId={state.selectedTemplateId}
          onSelectTemplate={selectTemplate}
          onUpdateField={updateField}
          onResetStyle={resetStyle}
          onClearContent={clearContent}
        />
        <PreviewCanvas
          fields={state.fields}
          TemplateComponent={TemplateComponent}
          isExporting={state.isExporting}
          onExportStart={handleExportStart}
          onExportEnd={handleExportEnd}
        />
      </div>
    </div>
  );
}

export { OgEditor };
