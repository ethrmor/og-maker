import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  className?: string;
}

function ColorPicker({ value, onChange, className }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div data-slot="color-picker" className={cn("flex flex-col gap-2", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-8 items-center gap-2 rounded-lg border border-input px-2.5 py-1.5 text-sm transition-colors hover:bg-accent"
      >
        <span
          className="size-4 rounded-full border border-border shrink-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]"
          style={{ backgroundColor: value }}
        />
        <span className="text-muted-foreground font-mono text-xs">
          {value.toUpperCase()}
        </span>
      </button>
      {isOpen && (
        <div className="flex flex-col gap-2">
          <HexColorPicker
            color={value}
            onChange={onChange}
            style={{ width: "100%", height: 160 }}
          />
          <Input
            value={value}
            onChange={(e) => {
              const v = e.target.value;
              if (/^#[0-9a-fA-F]{0,6}$/.test(v)) {
                onChange(v);
              }
            }}
            className="font-mono text-xs"
            placeholder="#000000"
          />
        </div>
      )}
    </div>
  );
}

export { ColorPicker };
