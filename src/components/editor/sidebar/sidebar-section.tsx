import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface SidebarSectionProps {
  title: string;
  description?: string;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

const SidebarSection = React.forwardRef<HTMLDivElement, SidebarSectionProps>(
  (
    {
      title,
      description,
      defaultOpen = true,
      open: controlledOpen,
      onOpenChange,
      children,
      className,
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
    const isOpen = controlledOpen ?? internalOpen;

    const handleToggle = () => {
      const newOpen = !isOpen;
      if (controlledOpen === undefined) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    };

    return (
      <div
        ref={ref}
        className={cn("flex flex-col", className)}
        data-state={isOpen ? "open" : "closed"}
      >
        {/* Header */}
        <div className="bg-surface border-b border-border/60">
          <button
            type="button"
            onClick={handleToggle}
            aria-expanded={isOpen}
            className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <div className="flex flex-col items-start gap-0.5">
              <span className="text-foreground">{title}</span>
              {description && (
                <span className="text-xs text-muted-foreground font-normal">
                  {description}
                </span>
              )}
            </div>
            <ChevronDown
              className={cn(
                "size-4 text-muted-foreground transition-transform duration-200",
                isOpen && "rotate-180"
              )}
            />
          </button>
        </div>

        {/* Collapsible Content */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-200 ease-in-out",
            isOpen ? "opacity-100 max-h-none" : "opacity-0 max-h-0"
          )}
        >
          <div className="px-5 py-4 grid gap-4">{children}</div>
        </div>
      </div>
    );
  }
);

SidebarSection.displayName = "SidebarSection";

export { SidebarSection };
export type { SidebarSectionProps };
