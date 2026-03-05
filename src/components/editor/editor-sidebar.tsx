import type { TemplateFields, EditorStep } from "@/types/template";
import { EDITOR_FIELDS, TEMPLATES } from "@/lib/templates";
import { Separator } from "@/components/ui/separator";
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
import { Wand2 } from "lucide-react";
import { generateSampleContent } from "@/lib/sample-content";
import { useToast } from "@/components/ui/toast";
import { PLATFORM_PRESETS } from "@/lib/platform-presets";
import { cn } from "@/lib/utils";

interface EditorSidebarProps {
  fields: TemplateFields;
  selectedTemplateId: string;
  currentStep: EditorStep;
  onSelectTemplate: (id: string) => void;
  onUpdateField: (key: keyof TemplateFields, value: string | null | boolean) => void;
  onResetStyle?: () => void;
  onClearContent?: () => void;
  onPatchFields?: (patch: Partial<TemplateFields>) => void;
  platformPresetId?: string;
  onSetPlatformPreset?: (presetId: string) => void;
  onSetStep: (step: EditorStep) => void;
  onNextStep: () => void;
  onPrevStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  stepOrder: EditorStep[];
}

const STEP_CONFIG: Record<EditorStep, { label: string; description: string }> = {
  template: { label: "Template", description: "Choose your style" },
  content: { label: "Content", description: "Add your text" },
  branding: { label: "Branding", description: "Logo & colors" },
  visuals: { label: "Visuals", description: "Background & finish" },
};

function EditorSidebar({
  fields,
  selectedTemplateId,
  currentStep,
  onSelectTemplate,
  onUpdateField,
  onResetStyle,
  onClearContent,
  onPatchFields,
  platformPresetId = "og",
  onSetPlatformPreset,
  onSetStep,
}: EditorSidebarProps) {
  const contentFields = EDITOR_FIELDS.filter((f) => f.group === "content");
  const brandingFields = EDITOR_FIELDS.filter((f) => f.group === "branding");
  const { showToast } = useToast();

  const handleFillSampleData = () => {
    const sampleContent = generateSampleContent();
    onPatchFields?.(sampleContent);
    showToast("Filled with sample content", "success");
  };

  const isStepActive = (step: EditorStep) => currentStep === step;
  const isStepCompleted = (step: EditorStep) => {
    const allSteps: EditorStep[] = ["template", "content", "branding", "visuals"];
    const stepIndex = allSteps.indexOf(step);
    const currentIndex = allSteps.indexOf(currentStep);
    return stepIndex < currentIndex;
  };

  return (
    <div className="flex h-full flex-col min-h-0 border-r border-border bg-surface overflow-hidden">
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="sticky top-0 z-10 bg-surface border-b border-border px-4 py-3 shadow-sm">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Template
              </span>
              <span className="text-[10px] text-muted-foreground/70 italic">
                Click to switch
              </span>
            </div>
            
            <div className="grid grid-cols-6 gap-1">
              {TEMPLATES.map((template) => (
                <button
                  key={template.id}
                  type="button"
                  onClick={() => {
                    onSelectTemplate(template.id);
                    onSetStep("content");
                  }}
                  className={cn(
                    "group relative flex items-center justify-center rounded-md border-2 p-0.5 transition-all duration-150 cursor-pointer",
                    selectedTemplateId === template.id
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border/50 hover:border-border hover:shadow-sm"
                  )}
                  title={template.name}
                >
                  <div
                    className="aspect-[3/2] w-full rounded-[2px] overflow-hidden"
                    style={{ background: template.thumbnailGradient }}
                  >
                    {selectedTemplateId === template.id && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-primary text-primary-foreground text-[8px] font-bold px-1 py-0.5 rounded shadow-sm">
                          ✓
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-1">
              <Select
                value={platformPresetId}
                onValueChange={(value) => value && onSetPlatformPreset?.(value)}
              >
                <SelectTrigger className="h-6 text-[10px] w-[110px]">
                  <SelectValue placeholder="Platform" />
                </SelectTrigger>
                <SelectContent>
                  {PLATFORM_PRESETS.map((preset) => (
                    <SelectItem key={preset.id} value={preset.id} className="text-xs">
                      {preset.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <div className="flex gap-1 ml-auto">
                <Button
                  variant="ghost"
                  size="xs"
                  onClick={onResetStyle}
                  className="h-6 px-1.5 text-[10px] text-muted-foreground hover:text-foreground"
                >
                  <RotateCcw className="size-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="xs"
                  onClick={onClearContent}
                  className="h-6 px-1.5 text-[10px] text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="size-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "transition-all duration-300",
            isStepActive("content") ? "opacity-100" : isStepCompleted("content") ? "opacity-70" : "opacity-40"
          )}
        >
          <SidebarSection
            title={STEP_CONFIG.content.label}
            description={STEP_CONFIG.content.description}
            open={isStepActive("content")}
            onOpenChange={(open) => {
              if (open) onSetStep("content");
            }}
            className={cn(!isStepActive("content") && "cursor-pointer")}
            action={
              isStepActive("content") ? (
                <Button
                  variant="ghost"
                  size="xs"
                  onClick={handleFillSampleData}
                  className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground"
                >
                  <Wand2 className="size-3 mr-1" />
                  Fill sample
                </Button>
              ) : undefined
            }
          >
            <div className="grid gap-4">
              {contentFields.map((field) => (
                <FieldRenderer
                  key={field.key}
                  field={field}
                  value={fields[field.key]}
                  onChange={(val) => onUpdateField(field.key, val)}
                />
              ))}
            </div>
          </SidebarSection>
        </div>

        <Separator className="my-1" />

        <div
          className={cn(
            "transition-all duration-300",
            isStepActive("branding") ? "opacity-100" : isStepCompleted("branding") ? "opacity-70" : "opacity-40"
          )}
        >
          <SidebarSection
            title={STEP_CONFIG.branding.label}
            description={STEP_CONFIG.branding.description}
            open={isStepActive("branding")}
            onOpenChange={(open) => {
              if (open) onSetStep("branding");
            }}
            className={cn(!isStepActive("branding") && "cursor-pointer")}
          >
            <div className="grid gap-4">
              {brandingFields.map((field) => (
                <FieldRenderer
                  key={field.key}
                  field={field}
                  value={fields[field.key]}
                  onChange={(val) => onUpdateField(field.key, val)}
                />
              ))}
            </div>
          </SidebarSection>
        </div>

        <Separator className="my-1" />

        <div
          className={cn(
            "transition-all duration-300",
            isStepActive("visuals") ? "opacity-100" : isStepCompleted("visuals") ? "opacity-70" : "opacity-40"
          )}
        >
          <SidebarSection
            title={STEP_CONFIG.visuals.label}
            description={STEP_CONFIG.visuals.description}
            open={isStepActive("visuals")}
            onOpenChange={(open) => {
              if (open) onSetStep("visuals");
            }}
            className={cn(!isStepActive("visuals") && "cursor-pointer")}
          >
            <div className="grid gap-4">
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
            </div>
          </SidebarSection>
        </div>
      </div>

      <div className="shrink-0 border-t border-border/60 px-5 py-5 bg-muted/20 flex flex-col justify-center shadow-[0_-1px_3px_-1px_rgba(0,0,0,0.06)] dark:shadow-[0_-1px_3px_-1px_rgba(0,0,0,0.3)]">
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
