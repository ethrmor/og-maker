import type { TemplateFields } from "@/types/template";
import { EDITOR_FIELDS } from "@/lib/templates";
import { GRADIENT_PRESETS } from "@/lib/gradients";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ColorPicker } from "@/components/ui/color-picker";
import { TemplatePicker } from "@/components/editor/template-picker";

interface EditorSidebarProps {
  fields: TemplateFields;
  selectedTemplateId: string;
  onSelectTemplate: (id: string) => void;
  onUpdateField: (key: keyof TemplateFields, value: string | null) => void;
}

function EditorSidebar({
  fields,
  selectedTemplateId,
  onSelectTemplate,
  onUpdateField,
}: EditorSidebarProps) {
  const contentFields = EDITOR_FIELDS.filter((f) => f.group === "content");
  const brandingFields = EDITOR_FIELDS.filter((f) => f.group === "branding");

  return (
    <div className="flex h-full flex-col overflow-y-auto border-r border-border bg-background">
      <div className="flex flex-col gap-6 p-5">
        {/* Template picker */}
        <TemplatePicker
          selectedId={selectedTemplateId}
          onSelect={onSelectTemplate}
        />

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Content fields */}
        <fieldset className="flex flex-col gap-3">
          <legend className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Content
          </legend>
          {contentFields.map((field) => (
            <div key={field.key} className="flex flex-col gap-1.5">
              <Label htmlFor={field.key} className="text-xs">
                {field.label}
                {field.required && (
                  <span className="text-destructive ml-0.5">*</span>
                )}
              </Label>
              {field.type === "text" && (
                <Input
                  id={field.key}
                  value={(fields[field.key] as string) ?? ""}
                  onChange={(e) => onUpdateField(field.key, e.target.value)}
                  placeholder={field.placeholder}
                />
              )}
              {field.type === "file" && (
                <div className="flex flex-col gap-2">
                  {fields.logoUrl && (
                    <div className="flex items-center gap-2">
                      <img
                        src={fields.logoUrl}
                        alt="Logo preview"
                        className="h-8 w-auto rounded border border-border object-contain p-0.5"
                      />
                      <button
                        type="button"
                        onClick={() => onUpdateField("logoUrl", null)}
                        className="text-xs text-muted-foreground hover:text-destructive"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                  <Input
                    id={field.key}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const url = URL.createObjectURL(file);
                        onUpdateField("logoUrl", url);
                      }
                    }}
                  />
                </div>
              )}
              {field.type === "color" && (
                <ColorPicker
                  value={(fields[field.key] as string) ?? "#000000"}
                  onChange={(color) => onUpdateField(field.key, color)}
                />
              )}
            </div>
          ))}
        </fieldset>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Branding fields (non-content, non-file) */}
        <fieldset className="flex flex-col gap-3">
          <legend className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Branding
          </legend>
          {brandingFields.map((field) => (
            <div key={field.key} className="flex flex-col gap-1.5">
              <Label htmlFor={field.key} className="text-xs">
                {field.label}
              </Label>
              {field.type === "file" && (
                <div className="flex flex-col gap-2">
                  {fields.logoUrl && (
                    <div className="flex items-center gap-2">
                      <img
                        src={fields.logoUrl}
                        alt="Logo preview"
                        className="h-8 w-auto rounded border border-border object-contain p-0.5"
                      />
                      <button
                        type="button"
                        onClick={() => onUpdateField("logoUrl", null)}
                        className="text-xs text-muted-foreground hover:text-destructive"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                  <Input
                    id={field.key}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const url = URL.createObjectURL(file);
                        onUpdateField("logoUrl", url);
                      }
                    }}
                  />
                </div>
              )}
              {field.type === "color" && (
                <ColorPicker
                  value={(fields[field.key] as string) ?? "#000000"}
                  onChange={(color) => onUpdateField(field.key, color)}
                />
              )}
            </div>
          ))}
        </fieldset>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Background section */}
        <fieldset className="flex flex-col gap-3">
          <legend className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Background
          </legend>

          {/* Background type */}
          <div className="flex flex-col gap-1.5">
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

          {/* Conditional fields based on background type */}
          {fields.backgroundType === "solid" && (
            <div className="flex flex-col gap-1.5">
              <Label className="text-xs">Color</Label>
              <ColorPicker
                value={fields.backgroundColor}
                onChange={(color) => onUpdateField("backgroundColor", color)}
              />
            </div>
          )}

          {fields.backgroundType === "gradient" && (
            <div className="flex flex-col gap-1.5">
              <Label className="text-xs">Preset</Label>
              <div className="grid grid-cols-4 gap-1.5">
                {GRADIENT_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => onUpdateField("gradientPreset", preset.id)}
                    className={`aspect-square rounded-md border-2 transition-all ${
                      fields.gradientPreset === preset.id
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-transparent hover:border-border"
                    }`}
                    style={{ background: preset.css }}
                    title={preset.name}
                  />
                ))}
              </div>
            </div>
          )}

          {fields.backgroundType === "image" && (
            <div className="flex flex-col gap-2">
              {fields.backgroundImageUrl && (
                <div className="flex items-center gap-2">
                  <img
                    src={fields.backgroundImageUrl}
                    alt="Background preview"
                    className="h-12 w-auto rounded border border-border object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => onUpdateField("backgroundImageUrl", null)}
                    className="text-xs text-muted-foreground hover:text-destructive"
                  >
                    Remove
                  </button>
                </div>
              )}
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const url = URL.createObjectURL(file);
                    onUpdateField("backgroundImageUrl", url);
                  }
                }}
              />
            </div>
          )}
        </fieldset>
      </div>
    </div>
  );
}

export { EditorSidebar };
