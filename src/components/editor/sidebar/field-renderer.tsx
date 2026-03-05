import * as React from "react";
import type { FieldConfig, TemplateFields } from "@/types/template";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ColorPicker } from "@/components/ui/color-picker";
import { FileUpload } from "@/components/ui/file-upload";
import { cn } from "@/lib/utils";

// OG image character limits
const CHARACTER_LIMITS: Partial<Record<keyof TemplateFields, { max: number; warning: number }>> = {
  title: { max: 70, warning: 60 },
  subtitle: { max: 120, warning: 100 },
  brandName: { max: 50, warning: 40 },
};

interface FieldRendererProps {
  field: FieldConfig;
  value: TemplateFields[keyof TemplateFields];
  onChange: (value: string | null | boolean) => void;
}

const FieldRenderer = React.forwardRef<HTMLDivElement, FieldRendererProps>(
  ({ field, value, onChange }, ref) => {
    const renderInput = () => {
      switch (field.type) {
        case "text": {
          const strValue = (value as string) ?? "";
          const limit = CHARACTER_LIMITS[field.key];
          const charCount = strValue.length;
          const isOverLimit = limit && charCount > limit.max;
          const isNearLimit = limit && charCount > limit.warning && charCount <= limit.max;

          return (
            <div className="space-y-1">
              <Input
                id={field.key}
                value={strValue}
                onChange={(e) => onChange(e.target.value)}
                placeholder={field.placeholder}
                className="h-8"
              />
              {limit && (
                <div className="flex justify-end">
                  <span
                    className={cn(
                      "text-[10px]",
                      isOverLimit
                        ? "text-destructive font-medium"
                        : isNearLimit
                        ? "text-amber-500"
                        : "text-muted-foreground"
                    )}
                  >
                    {charCount}/{limit.max}
                  </span>
                </div>
              )}
            </div>
          );
        }

        case "select":
          return (
            <Select
              value={(value as string) ?? ""}
              onValueChange={(v) => onChange(v)}
            >
              <SelectTrigger className="h-8" id={field.key}>
                <SelectValue placeholder={field.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {field.options?.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          );

        case "color":
          return (
            <ColorPicker
              value={(value as string) ?? "#000000"}
              onChange={(color) => onChange(color)}
            />
          );

        case "file": {
          const isLogo = field.key === "logoUrl";

          return (
            <FileUpload
              value={(value as string | null) ?? null}
              onChange={(url) => onChange(url)}
              accept="image/*"
              label={isLogo ? "Upload logo" : "Upload image"}
              fit={isLogo ? "contain" : "cover"}
              maxPreviewHeight={isLogo ? 32 : 48}
            />
          );
        }

        default:
          return null;
      }
    };

    return (
      <Field ref={ref} orientation="vertical" className="gap-1.5">
        <FieldLabel htmlFor={field.key} className="text-xs">
          {field.label}
          {field.required && (
            <span className="text-destructive ml-0.5">*</span>
          )}
        </FieldLabel>
        {renderInput()}
      </Field>
    );
  }
);

FieldRenderer.displayName = "FieldRenderer";

export { FieldRenderer };
export type { FieldRendererProps };
