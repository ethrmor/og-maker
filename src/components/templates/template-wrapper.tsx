import type { TemplateFields } from "@/types/template";
import { getGradientCss } from "@/lib/gradients";

interface TemplateWrapperProps {
  fields: TemplateFields;
  children: React.ReactNode;
}

function getBackgroundStyle(fields: TemplateFields): React.CSSProperties {
  switch (fields.backgroundType) {
    case "gradient":
      return { background: getGradientCss(fields.gradientPreset) };
    case "image":
      return fields.backgroundImageUrl
        ? {
            backgroundImage: `url(${fields.backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }
        : { backgroundColor: fields.backgroundColor };
    case "solid":
    default:
      return { backgroundColor: fields.backgroundColor };
  }
}

function TemplateWrapper({ fields, children }: TemplateWrapperProps) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: 1200,
        height: 630,
        fontFamily: "'Geist Variable', sans-serif",
        ...getBackgroundStyle(fields),
      }}
    >
      {children}
    </div>
  );
}

export { TemplateWrapper, getBackgroundStyle };
