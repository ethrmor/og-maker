import type { TemplateFields } from "@/types/template";
import { EDITOR_FIELDS } from "@/lib/templates";
import { Separator } from "@/components/ui/separator";
import { TemplateSelector } from "@/components/editor/template-selector";
import { SidebarSection, FieldRenderer } from "@/components/editor/sidebar";
import { GradientPresetPicker } from "@/components/editor/sidebar/gradient-preset-picker";
import { FileUpload } from "@/components/ui/file-upload";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ColorPicker } from "@/components/ui/color-picker";
import { Button } from "@/components/ui/button";
import { RotateCcw, Trash2 } from "lucide-react";

interface EditorSidebarProps {
  fields: TemplateFields;
  selectedTemplateId: string;
  onSelectTemplate: (id: string) => void;
  onUpdateField: (key: keyof TemplateFields, value: string | null | boolean) => void;
  onResetStyle?: () => void;
  onClearContent?: () => void;
}

function EditorSidebar({
  fields,
  selectedTemplateId,
  onSelectTemplate,
  onUpdateField,
  onResetStyle,
  onClearContent,
}: EditorSidebarProps) {
  const contentFields = EDITOR_FIELDS.filter((f) => f.group === "content");
  const brandingFields = EDITOR_FIELDS.filter((f) => f.group === "branding");
  const customizationFields = EDITOR_FIELDS.filter((f) => f.group === "customization");
  const isCustomTemplate = selectedTemplateId === "custom";

  return (
    <div className="flex h-full flex-col min-h-0 border-r border-border bg-surface">
      {/* Header - Template Selector + Actions */}
      <div className="shrink-0 border-b border-border/60 px-5 py-4 space-y-3">
        <div className="flex flex-col gap-1.5">
          <Label className="text-xs text-muted-foreground uppercase tracking-wider">
            Template
          </Label>
          <TemplateSelector
            selectedId={selectedTemplateId}
            onSelect={onSelectTemplate}
          />
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="xs"
            onClick={onResetStyle}
            className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground"
          >
            <RotateCcw className="size-3.5 mr-1" />
            Reset style
          </Button>
          <Button
            variant="ghost"
            size="xs"
            onClick={onClearContent}
            className="h-7 px-2 text-xs text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="size-3.5 mr-1" />
            Clear
          </Button>
        </div>
      </div>

      {/* Scrollable Body */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        {/* Content Section */}
        <SidebarSection title="Content" defaultOpen={true}>
          {contentFields.map((field) => (
            <FieldRenderer
              key={field.key}
              field={field}
              value={fields[field.key]}
              onChange={(val) => onUpdateField(field.key, val)}
            />
          ))}
        </SidebarSection>

        <Separator className="my-1" />

        {/* Branding Section */}
        <SidebarSection title="Branding" defaultOpen={true}>
          {brandingFields.map((field) => (
            <FieldRenderer
              key={field.key}
              field={field}
              value={fields[field.key]}
              onChange={(val) => onUpdateField(field.key, val)}
            />
          ))}
        </SidebarSection>

        <Separator className="my-1" />

        {/* Background Section */}
        <SidebarSection title="Background" defaultOpen={true}>
          {/* Background Type */}
          <div className="space-y-1.5">
            <Label className="text-xs">Type</Label>
            <Select
              value={fields.backgroundType}
              onValueChange={(value) => onUpdateField("backgroundType", value)}
            >
              <SelectTrigger className="h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solid">Solid Color</SelectItem>
                <SelectItem value="gradient">Gradient</SelectItem>
                <SelectItem value="image">Image</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Conditional Fields */}
          {fields.backgroundType === "solid" && (
            <div className="space-y-1.5">
              <Label className="text-xs">Color</Label>
              <ColorPicker
                value={fields.backgroundColor}
                onChange={(color) => onUpdateField("backgroundColor", color)}
              />
            </div>
          )}

          {fields.backgroundType === "gradient" && (
            <div className="space-y-1.5">
              <Label className="text-xs">Preset</Label>
              <GradientPresetPicker
                value={fields.gradientPreset}
                onChange={(preset) => onUpdateField("gradientPreset", preset)}
              />
            </div>
          )}

          {fields.backgroundType === "image" && (
            <FileUpload
              value={fields.backgroundImageUrl}
              onChange={(url) => onUpdateField("backgroundImageUrl", url)}
              accept="image/*"
              label="Upload background"
              fit="cover"
              maxPreviewHeight={48}
            />
          )}
        </SidebarSection>

        {/* Customization Section - Only for Custom Template */}
        {isCustomTemplate && customizationFields.length > 0 && (
          <>
            <Separator className="my-1" />
            <SidebarSection title="Layout & Style" defaultOpen={true}>
              {customizationFields.map((field) => (
                <FieldRenderer
                  key={field.key}
                  field={field}
                  value={fields[field.key]}
                  onChange={(val) => onUpdateField(field.key, val)}
                />
              ))}
            </SidebarSection>
          </>
        )}
      </div>

      {/* Footer - Tips */}
      <div className="shrink-0 border-t border-border/60 px-5 py-5 bg-muted/20 h-[81px] flex flex-col justify-center shadow-[0_-1px_3px_-1px_rgba(0,0,0,0.06)] dark:shadow-[0_-1px_3px_-1px_rgba(0,0,0,0.3)]">
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          Changes are previewed instantly. Use the buttons below the canvas to export your OG image.
        </p>
        <p className="text-[10px] text-muted-foreground/60 mt-1">
          © {new Date().getFullYear()} ethrmor
        </p>
      </div>
    </div>
  );
}

export { EditorSidebar };
export type { EditorSidebarProps };
