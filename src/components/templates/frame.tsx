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

      {/* Watermark Logo */}
      {fields.logoUrl && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.03,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <img
            src={fields.logoUrl}
            alt="Watermark"
            style={{
              width: "60%",
              height: "60%",
              objectFit: "contain",
            }}
          />
        </div>
      )}
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
          border: "1px solid",
          borderColor: `${fields.accentColor}66`,
          boxShadow: `inset 0 0 0 8px transparent, inset 0 0 0 9px ${fields.accentColor}40`,
          borderRadius: 12,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Corner Brackets */}
      {/* Top Left */}
      <div style={{ position: "absolute", top: 20, left: 20, width: 16, height: 1, backgroundColor: fields.accentColor, opacity: 0.8, zIndex: 0 }} />
      <div style={{ position: "absolute", top: 20, left: 20, width: 1, height: 16, backgroundColor: fields.accentColor, opacity: 0.8, zIndex: 0 }} />
      
      {/* Top Right */}
      <div style={{ position: "absolute", top: 20, right: 20, width: 16, height: 1, backgroundColor: fields.accentColor, opacity: 0.8, zIndex: 0 }} />
      <div style={{ position: "absolute", top: 20, right: 20, width: 1, height: 16, backgroundColor: fields.accentColor, opacity: 0.8, zIndex: 0 }} />
      
      {/* Bottom Left */}
      <div style={{ position: "absolute", bottom: 20, left: 20, width: 16, height: 1, backgroundColor: fields.accentColor, opacity: 0.8, zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: 20, left: 20, width: 1, height: 16, backgroundColor: fields.accentColor, opacity: 0.8, zIndex: 0 }} />
      
      {/* Bottom Right */}
      <div style={{ position: "absolute", bottom: 20, right: 20, width: 16, height: 1, backgroundColor: fields.accentColor, opacity: 0.8, zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: 20, right: 20, width: 1, height: 16, backgroundColor: fields.accentColor, opacity: 0.8, zIndex: 0 }} />

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
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: 9999,
                  backgroundColor: fields.accentColor,
                }}
              />
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
              <div
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: 9999,
                  backgroundColor: fields.accentColor,
                }}
              />
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 32 }}>
          {fields.title && (
            <div
              style={{
                fontSize: 64,
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
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
