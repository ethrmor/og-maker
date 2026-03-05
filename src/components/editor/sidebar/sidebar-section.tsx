import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarSectionProps {
  title: string;
  description?: string;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
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
      action,
    },
    ref,
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
    const isOpen = controlledOpen ?? internalOpen;

    const handleToggle = () => {
      const nextOpen = !isOpen;

      if (controlledOpen === undefined) {
        setInternalOpen(nextOpen);
      }

      onOpenChange?.(nextOpen);
    };

    return (
      <div
        ref={ref}
        className={cn("flex flex-col", className)}
        data-state={isOpen ? "open" : "closed"}
      >
        <div className="border-b border-border/60 bg-surface">
          <button
            type="button"
            onClick={handleToggle}
            aria-expanded={isOpen}
            className="flex w-full items-center justify-between px-5 py-3 text-sm font-medium transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <div className="flex flex-col items-start gap-0.5">
              <span className="text-foreground">{title}</span>
              {description && (
                <span className="text-xs font-normal text-muted-foreground">
                  {description}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {action && <div className="flex items-center">{action}</div>}
              <ChevronDown
                className={cn(
                  "size-4 text-muted-foreground transition-transform duration-200",
                  isOpen && "rotate-180",
                )}
              />
            </div>
          </button>
        </div>

        <div
          className={cn(
            "overflow-hidden transition-all duration-200 ease-in-out",
            isOpen ? "max-h-none opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="grid gap-4 px-5 py-4">{children}</div>
        </div>
      </div>
    );
  },
);

SidebarSection.displayName = "SidebarSection";

export { SidebarSection };
export type { SidebarSectionProps };
