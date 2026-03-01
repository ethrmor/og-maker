import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";

interface FileUploadProps {
  value: string | null;
  onChange: (url: string | null) => void;
  accept?: string;
  label?: string;
  hint?: string;
  previewClassName?: string;
  fit?: "cover" | "contain";
  maxPreviewHeight?: number;
}

const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      value,
      onChange,
      accept = "image/*",
      label = "Upload image",
      hint,
      previewClassName,
      fit = "contain",
      maxPreviewHeight = 32,
    },
    ref
  ) => {
    const objectUrlRef = React.useRef<string | null>(null);

    // Cleanup object URL on unmount or when value changes
    React.useEffect(() => {
      return () => {
        if (objectUrlRef.current) {
          URL.revokeObjectURL(objectUrlRef.current);
          objectUrlRef.current = null;
        }
      };
    }, [value]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        // Revoke previous URL if exists
        if (objectUrlRef.current) {
          URL.revokeObjectURL(objectUrlRef.current);
        }
        const url = URL.createObjectURL(file);
        objectUrlRef.current = url;
        onChange(url);
      }
    };

    const handleClear = () => {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
        objectUrlRef.current = null;
      }
      onChange(null);
    };

    const previewHeightClass =
      maxPreviewHeight <= 32
        ? "h-8"
        : maxPreviewHeight <= 48
          ? "h-12"
          : "h-16";

    return (
      <div ref={ref} className="flex flex-col gap-2">
        {/* Preview row */}
        {value && (
          <div className="flex items-center gap-2">
            <img
              src={value}
              alt="Preview"
              className={cn(
                "w-auto rounded border border-border",
                previewHeightClass,
                fit === "cover" ? "object-cover" : "object-contain p-0.5",
                previewClassName
              )}
            />
            <Button
              type="button"
              variant="ghost"
              size="xs"
              onClick={handleClear}
              className="text-xs text-muted-foreground hover:text-destructive h-6 px-2"
            >
              <X className="size-3 mr-1" />
              Remove
            </Button>
          </div>
        )}

        {/* Dropzone */}
        <label
          className={cn(
            "flex items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border/70 bg-muted/20 px-3 py-3 text-xs text-muted-foreground cursor-pointer transition-colors",
            "hover:bg-muted/30 hover:border-primary/40 hover:text-foreground",
            "focus-within:ring-3 focus-within:ring-ring/50"
          )}
        >
          <Upload className="size-4" />
          <span>{label}</span>
          <input
            type="file"
            accept={accept}
            onChange={handleFileChange}
            className="sr-only"
          />
        </label>

        {/* Hint */}
        {hint && (
          <p className="text-xs text-muted-foreground">{hint}</p>
        )}
      </div>
    );
  }
);

FileUpload.displayName = "FileUpload";

export { FileUpload };
export type { FileUploadProps };
