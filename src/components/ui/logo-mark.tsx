import { cn } from "@/lib/utils";

export function LogoMark({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("shrink-0", className)}
      {...props}
    >
      <rect width="20" height="14" x="2" y="5" rx="3" />
      <circle cx="9.5" cy="12" r="3" />
      <path d="M14.5 9a3 3 0 1 0 3 3h-2" />
    </svg>
  );
}
