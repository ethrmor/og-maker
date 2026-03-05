import { TEMPLATES } from "@/lib/templates";
import { cn } from "@/lib/utils";

interface TemplatePickerProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

function TemplatePicker({
  selectedId,
  onSelect,
}: TemplatePickerProps) {
  const handleSelect = (id: string) => {
    onSelect(id);
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {TEMPLATES.map((template) => (
        <button
          key={template.id}
          type="button"
          onClick={() => handleSelect(template.id)}
          className={cn(
            "group relative flex flex-col items-center gap-1.5 rounded-lg border-2 p-2 transition-all duration-200",
            selectedId === template.id
              ? "border-primary shadow-[0_0_0_3px] shadow-primary/15 ring-0"
              : "border-transparent hover:border-border hover:scale-[1.02]"
          )}
        >
          <div
            className={cn(
              "aspect-video w-full rounded-md border overflow-hidden",
              selectedId === template.id ? "border-primary/30" : "border-border"
            )}
            style={{ background: template.thumbnailGradient }}
          />
          <span
            className={cn(
              "text-[11px] font-medium text-center leading-tight truncate w-full",
              selectedId === template.id
                ? "text-foreground"
                : "text-muted-foreground group-hover:text-foreground"
            )}
          >
            {template.name}
          </span>
        </button>
      ))}
    </div>
  );
}

export { TemplatePicker };
