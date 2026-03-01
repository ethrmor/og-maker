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

interface FieldRendererProps {
  field: FieldConfig;
  value: TemplateFields[keyof TemplateFields];
  onChange: (value: string | null | boolean) => void;
}

const FieldRenderer = React.forwardRef<HTMLDivElement, FieldRendererProps>(
  ({ field, value, onChange }, ref) => {
    const renderInput = () => {
      switch (field.type) {
        case "text":
          return (
            <Input
              id={field.key}
              value={(value as string) ?? ""}
              onChange={(e) => onChange(e.target.value)}
              placeholder={field.placeholder}
              className="h-8"
            />
          );

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
          const isScreenshot = field.key === "screenshotUrl";

          return (
            <FileUpload
              value={(value as string | null) ?? null}
              onChange={(url) => onChange(url)}
              accept="image/*"
              label={isLogo ? "Upload logo" : isScreenshot ? "Upload screenshot" : "Upload image"}
              fit={isLogo ? "contain" : "cover"}
              maxPreviewHeight={isLogo ? 32 : isScreenshot ? 64 : 48}
            />
          );
        }

        case "toggle":
          return (
            <button
              type="button"
              id={field.key}
              onClick={() => onChange(!(value as boolean))}
              aria-pressed={value as boolean}
              className={cn(
                "flex items-center justify-between w-full h-8 px-3 rounded-md border text-xs transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                value
                  ? "bg-primary/10 border-primary text-primary"
                  : "bg-muted/30 border-border text-muted-foreground hover:text-foreground"
              )}
            >
              <span>{value ? "On" : "Off"}</span>
              <span
                className={cn(
                  "w-8 h-4 rounded-full relative transition-colors",
                  value ? "bg-primary" : "bg-muted-foreground/30"
                )}
              >
                <span
                  className={cn(
                    "absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all",
                    value ? "left-[calc(100%-14px)]" : "left-0.5"
                  )}
                />
              </span>
            </button>
          );

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
