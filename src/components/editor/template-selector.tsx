
import type { TemplateMeta } from "@/types/template";
import { TEMPLATES } from "@/lib/templates";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Check } from "lucide-react";

interface TemplateSelectorProps {
  selectedId: string;
  onSelect: (id: string) => void;
  templates?: TemplateMeta[];
}

function TemplateSelector({ selectedId, onSelect, templates = TEMPLATES }: TemplateSelectorProps) {
  const selectedTemplate = templates.find((t) => t.id === selectedId) ?? templates[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="outline"
          className="w-full justify-between h-10 px-3"
        >
          <div className="flex items-center gap-2">
            <div
              className="aspect-video w-8 rounded-md ring-1 ring-border shrink-0"
              style={{ background: selectedTemplate.thumbnailGradient }}
            />
            <span className="text-sm font-medium truncate">
              {selectedTemplate.name}
            </span>
          </div>
          <ChevronDown className="size-4 text-muted-foreground shrink-0" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[280px]" align="start">
        <DropdownMenuRadioGroup value={selectedId} onValueChange={onSelect}>
          {templates.map((template) => (
            <DropdownMenuRadioItem
              key={template.id}
              value={template.id}
              className="cursor-pointer p-2"
            >
              <div className="flex items-center gap-3 w-full">
                <div
                  className="aspect-video w-10 rounded-md ring-1 ring-border shrink-0"
                  style={{ background: template.thumbnailGradient }}
                />
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-sm font-medium truncate">
                    {template.name}
                  </span>
                  <span className="text-xs text-muted-foreground line-clamp-1">
                    {template.description}
                  </span>
                </div>
                {selectedId === template.id && (
                  <Check className="size-4 text-primary shrink-0" />
                )}
              </div>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { TemplateSelector };
export type { TemplateSelectorProps };
