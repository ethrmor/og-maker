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
    <div className="flex h-full flex-col overflow-y-auto border-r border-border bg-surface">
      <div className="flex flex-col gap-8 p-5">
        {/* Template picker */}
        <TemplatePicker
          selectedId={selectedTemplateId}
          onSelect={onSelectTemplate}
        />

        {/* Divider */}
        <div className="h-px bg-border/60" />

        {/* Content fields */}
        <fieldset className="flex flex-col gap-3">
          <legend className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
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
                  <label className="flex items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border/70 bg-muted/30 px-3 py-2.5 text-xs text-muted-foreground cursor-pointer transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-foreground">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                    Upload image
                    <Input
                      id={field.key}
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const url = URL.createObjectURL(file);
                          onUpdateField("logoUrl", url);
                        }
                      }}
                    />
                  </label>
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
        <div className="h-px bg-border/60" />

        {/* Branding fields (non-content, non-file) */}
        <fieldset className="flex flex-col gap-3">
          <legend className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
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
                  <label className="flex items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border/70 bg-muted/30 px-3 py-2.5 text-xs text-muted-foreground cursor-pointer transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-foreground">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                    Upload image
                    <Input
                      id={field.key}
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const url = URL.createObjectURL(file);
                          onUpdateField("logoUrl", url);
                        }
                      }}
                    />
                  </label>
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
        <div className="h-px bg-border/60" />

        {/* Background section */}
        <fieldset className="flex flex-col gap-3">
          <legend className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
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
              <label className="flex items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border/70 bg-muted/30 px-3 py-2.5 text-xs text-muted-foreground cursor-pointer transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-foreground">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                Upload image
                <Input
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const url = URL.createObjectURL(file);
                      onUpdateField("backgroundImageUrl", url);
                    }
                  }}
                />
              </label>
            </div>
          )}
        </fieldset>
      </div>
    </div>
  );
}

export { EditorSidebar };
