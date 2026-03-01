import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";

function CustomTemplate({ fields }: TemplateProps) {
  // Map customization options to actual values
  const paddingMap = {
    sm: 32,
    md: 48,
    lg: 64,
    xl: 96,
  };

  const titleSizeMap = {
    sm: 48,
    md: 64,
    lg: 80,
    xl: 96,
  };

  const subtitleSizeMap = {
    sm: 18,
    md: 24,
    lg: 32,
  };

  const padding = paddingMap[fields.padding] ?? 64;
  const titleSize = titleSizeMap[fields.titleSize] ?? 80;
  const subtitleSize = subtitleSizeMap[fields.subtitleSize] ?? 24;
  const textAlign = fields.textAlign ?? "center";
  const layout = fields.layout ?? "centered";
  const showLogo = fields.showLogo ?? true;

  // Determine layout styles
  const getLayoutStyles = () => {
    switch (layout) {
      case "left":
        return {
          alignItems: "flex-start" as const,
          justifyContent: "center" as const,
        };
      case "right":
        return {
          alignItems: "flex-end" as const,
          justifyContent: "center" as const,
        };
      case "centered":
      default:
        return {
          alignItems: "center" as const,
          justifyContent: "center" as const,
        };
    }
  };

  const layoutStyles = getLayoutStyles();

  return (
    <TemplateWrapper fields={fields}>
      {/* Subtle noise texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
          opacity: 0.03,
          pointerEvents: "none",
          mixBlendMode: "overlay",
        }}
      />

      {/* Accent glow effect */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          background: `radial-gradient(circle, ${fields.accentColor}12 0%, transparent 65%)`,
          top: layoutStyles.justifyContent === "center" ? "50%" : "30%",
          left: layoutStyles.alignItems === "center" ? "50%" : layoutStyles.alignItems === "flex-start" ? "20%" : "80%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="flex flex-col w-full h-full relative z-10 gap-5"
        style={{
          padding,
          alignItems: layoutStyles.alignItems,
          justifyContent: layoutStyles.justifyContent,
        }}
      >
        {/* Logo */}
        {showLogo && fields.logoUrl && (
          <img
            src={fields.logoUrl}
            alt="Logo"
            style={{
              maxHeight: 40,
              width: "auto",
              marginBottom: 16,
            }}
          />
        )}

        {/* Brand Name */}
        {fields.brandName && (
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: fields.accentColor,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              textAlign,
              marginBottom: 8,
            }}
          >
            {fields.brandName}
          </div>
        )}

        {/* Screenshot - displayed prominently */}
        {fields.screenshotUrl && (
          <div
            style={{
              width: layout === "centered" ? "60%" : "50%",
              maxWidth: 500,
              marginBottom: 24,
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: `0 20px 40px -10px ${fields.accentColor}30`,
              border: `2px solid ${fields.accentColor}20`,
            }}
          >
            <img
              src={fields.screenshotUrl}
              alt="Screenshot"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        )}

        {/* Title */}
        {fields.title && (
          <div
            style={{
              fontSize: titleSize,
              fontWeight: 700,
              color: fields.backgroundType === "solid" && fields.backgroundColor.toLowerCase() === "#ffffff"
                ? "#111827"
                : "#ffffff",
              textAlign,
              textWrap: "balance",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              maxWidth: layout === "centered" ? "80%" : "70%",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {fields.title}
          </div>
        )}

        {/* Subtitle */}
        {fields.subtitle && (
          <div
            style={{
              fontSize: subtitleSize,
              fontWeight: 400,
              color: fields.backgroundType === "solid" && fields.backgroundColor.toLowerCase() === "#ffffff"
                ? "#4b5563"
                : "rgba(255, 255, 255, 0.8)",
              textAlign,
              textWrap: "balance",
              lineHeight: 1.5,
              maxWidth: layout === "centered" ? "70%" : "60%",
              marginTop: 8,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {fields.subtitle}
          </div>
        )}
      </div>
    </TemplateWrapper>
  );
}

export { CustomTemplate };
