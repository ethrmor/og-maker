import * as React from "react";
import { GRADIENT_PRESETS } from "@/lib/gradients";
import { cn } from "@/lib/utils";

interface GradientPresetPickerProps {
  value: string;
  onChange: (presetId: string) => void;
  columns?: number;
}

const GradientPresetPicker = React.forwardRef<HTMLDivElement, GradientPresetPickerProps>(
  ({ value, onChange, columns = 4 }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("grid gap-1.5", columns === 4 ? "grid-cols-4" : columns === 3 ? "grid-cols-3" : "grid-cols-4")}
        role="radiogroup"
        aria-label="Select gradient preset"
      >
        {GRADIENT_PRESETS.map((preset) => {
          const isSelected = value === preset.id;
          return (
            <button
              key={preset.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onChange(preset.id)}
              title={preset.name}
              className={cn(
                "aspect-square rounded-md ring-1 transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                isSelected
                  ? "ring-primary ring-offset-1 ring-offset-background"
                  : "ring-border hover:ring-primary/50"
              )}
              style={{ background: preset.css }}
            >
              <span className="sr-only">{preset.name}</span>
            </button>
          );
        })}
      </div>
    );
  }
);

GradientPresetPicker.displayName = "GradientPresetPicker";

export { GradientPresetPicker };
export type { GradientPresetPickerProps };
