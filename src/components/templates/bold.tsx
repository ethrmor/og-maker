import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";

function BoldTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Background accent color */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: `color-mix(in srgb, ${fields.accentColor} 10%, #0f172a)`,
          zIndex: 0,
        }}
      />
      {/* Angled accent slash */}
      <div
        style={{
          position: "absolute",
          width: "150%",
          height: 2,
          backgroundColor: fields.accentColor,
          transform: "rotate(-15deg)",
          top: "40%",
          left: "-25%",
          opacity: 0.4,
        }}
      />
      {/* Noise overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.07,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }}
      />

      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          right: -80,
          top: -80,
          width: 500,
          height: 500,
          backgroundColor: fields.accentColor,
          filter: "blur(60px)",
          opacity: 0.15,
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 180,
          bottom: 60,
          width: 200,
          height: 200,
          backgroundColor: fields.accentColor,
          filter: "blur(60px)",
          opacity: 0.15,
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        className="flex flex-col justify-center w-full h-full relative z-10"
        style={{ padding: 64 }}
      >
        {fields.logoUrl && (
          <img
            src={fields.logoUrl}
            alt="Logo"
            style={{
              maxHeight: 44,
              width: "auto",
              alignSelf: "flex-start",
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.15))",
            }}
          />
        )}

        {fields.brandName && (
          <div
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "rgba(255,255,255,0.85)",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              marginTop: fields.logoUrl ? 12 : 0,
            }}
          >
            {fields.brandName}
          </div>
        )}

        {fields.title && (
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              color: "#ffffff",
              textTransform: "uppercase",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              marginTop: 28,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              textShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            {fields.title}
          </div>
        )}

        {fields.subtitle && (
          <div
            style={{
              fontSize: 26,
              fontWeight: 450,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.4,
              marginTop: 20,
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

export { BoldTemplate };
