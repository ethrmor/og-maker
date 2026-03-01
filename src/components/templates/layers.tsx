import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";
import { hexToRgba, NOISE_PATTERN, TYPOGRAPHY, LOGO_SHADOW } from "@/lib/template-styles";

function LayersTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Noise texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE_PATTERN,
          opacity: 0.04,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Background accent gradient blob */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 600,
          right: -200,
          top: -100,
          background: `radial-gradient(ellipse at center, ${hexToRgba(fields.accentColor, 0.15)} 0%, transparent 70%)`,
          zIndex: 0,
        }}
      />

      {/* Secondary accent blob - bottom left */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 500,
          left: -150,
          bottom: -150,
          background: `radial-gradient(ellipse at center, ${hexToRgba(fields.accentColor, 0.1)} 0%, transparent 65%)`,
          zIndex: 0,
        }}
      />

      {/* Layer 1 - Back card (large, offset) */}
      <div
        style={{
          position: "absolute",
          left: 120,
          top: 80,
          right: 120,
          bottom: 80,
          backgroundColor: hexToRgba(fields.accentColor, 0.08),
          borderRadius: 32,
          transform: "rotate(-1deg)",
          zIndex: 0,
        }}
      />

      {/* Layer 2 - Middle card (medium, opposite offset) */}
      <div
        style={{
          position: "absolute",
          left: 100,
          top: 100,
          right: 140,
          bottom: 100,
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          borderRadius: 28,
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
          transform: "rotate(0.5deg)",
          zIndex: 1,
        }}
      />

      {/* Main Content Layer - Front card */}
      <div
        style={{
          position: "absolute",
          left: 80,
          top: 60,
          right: 80,
          bottom: 60,
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: 24,
          boxShadow: "inset 0 1px 0 rgba(255,255,255,1), 0 40px 100px rgba(15, 23, 42, 0.08), 0 10px 40px rgba(15, 23, 42, 0.04)",
          borderLeft: `6px solid ${fields.accentColor}`,
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          padding: "56px 64px",
        }}
      >
        {/* Top row: Logo and Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {fields.logoUrl && (
            <img
              src={fields.logoUrl}
              alt="Logo"
              style={{
                maxHeight: 40,
                objectFit: "contain",
                filter: LOGO_SHADOW,
              }}
            />
          )}
          
          {fields.brandName && (
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div
                style={{
                  ...TYPOGRAPHY.brand,
                  color: "#374151",
                }}
              >
                {fields.brandName}
              </div>
            </div>
          )}
        </div>

        {/* Accent line under brand */}
        {fields.brandName && (
          <div
            style={{
              width: 40,
              height: 3,
              backgroundColor: fields.accentColor,
              marginTop: 12,
              borderRadius: 2,
            }}
          />
        )}

        {/* Main content - vertically centered */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: 24,
          }}
        >
          {fields.title && (
            <div
              style={{
                fontSize: 58,
                fontWeight: 750,
                letterSpacing: "-0.02em",
                color: "#0f172a",
                lineHeight: 1.08,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            >
              {fields.title}
            </div>
          )}

          {fields.subtitle && (
            <div
              style={{
                fontSize: 24,
                fontWeight: 450,
                color: "#475569",
                marginTop: 18,
                lineHeight: 1.5,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                maxWidth: 800,
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

export { LayersTemplate };
