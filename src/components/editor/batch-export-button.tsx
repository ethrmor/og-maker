import { Package } from "lucide-react";
import { useBatchExport } from "@/hooks/use-batch-export";
import { TEMPLATES } from "@/lib/templates";
import type { TemplateFields } from "@/types/template";
import { useToast } from "@/components/ui/toast";

interface BatchExportButtonProps {
  fields: TemplateFields;
  disabled?: boolean;
  onExportStart?: () => void;
  onExportEnd?: () => void;
}

export function BatchExportButton({
  fields,
  disabled = false,
  onExportStart,
  onExportEnd,
}: BatchExportButtonProps) {
  const { showToast } = useToast();
  const { exportAll, isExporting, progress } = useBatchExport({
    currentFields: fields,
  });

  const handleExportAll = async () => {
    onExportStart?.();
    showToast(`Exporting ${TEMPLATES.length} templates...`, "info");

    try {
      await exportAll();
    } catch (error) {
      console.error("Batch export failed:", error);
    } finally {
      onExportEnd?.();
    }
  };

  return (
    <button
      type="button"
      onClick={handleExportAll}
      disabled={disabled || isExporting}
      className="inline-flex h-10 items-center gap-2 rounded-lg border border-input bg-background px-4 text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:shadow-sm disabled:pointer-events-none disabled:opacity-50"
    >
      {isExporting ? (
        <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        <Package className="size-4" />
      )}
      {isExporting
        ? `Exporting ${progress.current}/${progress.total}...`
        : "Export all templates"}
    </button>
  );
}
