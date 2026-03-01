import { TEMPLATES } from "@/lib/templates";
import { cn } from "@/lib/utils";

interface TemplatePickerProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

function TemplatePicker({ selectedId, onSelect }: TemplatePickerProps) {
  return (
    <div className="flex flex-col gap-2">
      <span
        className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
        style={{ letterSpacing: "0.1em" }}
      >
        Template
      </span>
      <div className="grid grid-cols-4 gap-2">
        {TEMPLATES.map((template) => (
          <button
            key={template.id}
            type="button"
            onClick={() => onSelect(template.id)}
            className={cn(
              "group relative flex flex-col items-center gap-1.5 rounded-lg border-2 p-1.5 transition-all",
              selectedId === template.id
                ? "border-primary ring-2 ring-primary/20"
                : "border-transparent hover:border-border"
            )}
          >
            {/* Thumbnail */}
            <div
              className={cn(
                "aspect-video w-full rounded-md border",
                selectedId === template.id
                  ? "border-primary/30"
                  : "border-border"
              )}
              style={{ background: template.thumbnailGradient }}
            />
            {/* Name */}
            <span
              className={cn(
                "text-xs font-medium",
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
    </div>
  );
}

export { TemplatePicker };
