import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";

function FrameTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Grain/Noise Texture Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          zIndex: 0,
        }}
      />

      {/* Outer Frame */}
      <div
        style={{
          position: "absolute",
          inset: 24,
          border: "2.5px solid",
          borderColor: fields.accentColor,
          opacity: 0.9,
          borderRadius: 12,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Corner Ornaments */}
      <div
        style={{
          position: "absolute",
          width: 10,
          height: 10,
          backgroundColor: fields.accentColor,
          opacity: 0.8,
          borderRadius: 2,
          top: 19,
          left: 19,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 10,
          height: 10,
          backgroundColor: fields.accentColor,
          opacity: 0.8,
          borderRadius: 2,
          top: 19,
          right: 19,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 10,
          height: 10,
          backgroundColor: fields.accentColor,
          opacity: 0.8,
          borderRadius: 2,
          bottom: 19,
          left: 19,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 10,
          height: 10,
          backgroundColor: fields.accentColor,
          opacity: 0.8,
          borderRadius: 2,
          bottom: 19,
          right: 19,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: 72,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          {fields.logoUrl && (
            <img
              src={fields.logoUrl}
              alt="Logo"
              style={{
                maxHeight: 48,
                objectFit: "contain",
              }}
            />
          )}

          {fields.brandName && (
            <div
              style={{
                fontSize: 15,
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                fontWeight: 500,
                color: "rgba(255,255,255,0.75)",
                textAlign: "center",
              }}
            >
              {fields.brandName}
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 32 }}>
          {fields.title && (
            <div
              style={{
                fontSize: 56,
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.15,
                textWrap: "balance",
                textAlign: "center",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {fields.title}
            </div>
          )}

          {fields.subtitle && (
            <div
              style={{
                fontSize: 22,
                fontWeight: 450,
                color: "rgba(255,255,255,0.7)",
                textAlign: "center",
                marginTop: 14,
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
      </div>
    </TemplateWrapper>
  );
}

export { FrameTemplate };
