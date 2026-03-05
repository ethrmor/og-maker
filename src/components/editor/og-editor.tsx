import { useCallback, useRef, type ComponentType } from "react";
import type { TemplateProps } from "@/types/template";
import { useOgEditor } from "@/hooks/use-og-editor";

import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts";
import { EditorSidebar } from "@/components/editor/editor-sidebar";
import { PreviewCanvas, type PreviewCanvasRef } from "@/components/editor/preview-canvas";
import { ShareButton } from "@/components/editor/share-button";
import { TEMPLATE_COMPONENTS } from "@/components/templates";
import { ThemeToggle } from "@/components/editor/theme-toggle";
import { LogoMark } from "@/components/ui/logo-mark";
import { RotateCcw, Undo2, Redo2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function OgEditor() {
  const { state, selectTemplate, updateField, setExporting, resetStyle, clearContent, clearAll, undo, redo, canUndo, canRedo, patchFields, setStep, goToNextStep, goToPrevStep, isFirstStep, isLastStep, STEP_ORDER } = useOgEditor();
  const previewRef = useRef<PreviewCanvasRef>(null);
  const TemplateComponent: ComponentType<TemplateProps> =
    state.selectedTemplateId.startsWith("custom-")
      ? TEMPLATE_COMPONENTS["custom"]
      : TEMPLATE_COMPONENTS[state.selectedTemplateId] ??
        TEMPLATE_COMPONENTS["minimal"];

  const handleExportStart = useCallback(() => setExporting(true), [setExporting]);
  const handleExportEnd = useCallback(() => setExporting(false), [setExporting]);

  // Keyboard shortcuts
  useKeyboardShortcuts({
    onDownload: () => previewRef.current?.download(),
    onCopy: () => previewRef.current?.copyToClipboard(),
    onUndo: undo,
    onRedo: redo,
  });

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background text-foreground">
      {/* Header */}
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-border/50 shadow-[0_1px_3px_-1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_3px_-1px_rgba(0,0,0,0.3)] px-5">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center size-7 rounded-lg bg-primary/10">
            <LogoMark className="size-4 text-primary" />
          </div>
          <span className="text-[15px] font-bold">OG Maker</span>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={undo}
            disabled={!canUndo}
            className="text-muted-foreground hover:text-foreground h-8 px-2 disabled:opacity-30"
            title="Undo (⌘Z)"
          >
            <Undo2 className="size-4 mr-1" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={redo}
            disabled={!canRedo}
            className="text-muted-foreground hover:text-foreground h-8 px-2 disabled:opacity-30"
            title="Redo (⌘Shift+Z)"
          >
            <Redo2 className="size-4 mr-1" />
          </Button>
          <div className="w-px h-4 bg-border mx-1" />
          <ShareButton templateId={state.selectedTemplateId} fields={state.fields} />
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAll}
            className="text-muted-foreground hover:text-foreground h-8 px-2"
          >
            <RotateCcw className="size-4 mr-1" />
            Reset all
          </Button>
          <ThemeToggle />
        </div>
      </header>

      {/* Editor body */}
      <div className="grid flex-1 overflow-hidden" style={{ gridTemplateColumns: "380px 1fr" }}>
        <EditorSidebar
          fields={state.fields}
          selectedTemplateId={state.selectedTemplateId}
          currentStep={state.currentStep}
          onSelectTemplate={selectTemplate}
          onUpdateField={updateField}
          onResetStyle={resetStyle}
          onClearContent={clearContent}
          onPatchFields={patchFields}
          onSetStep={setStep}
          onNextStep={goToNextStep}
          onPrevStep={goToPrevStep}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          stepOrder={STEP_ORDER}
        />
        <PreviewCanvas
          ref={previewRef}
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
