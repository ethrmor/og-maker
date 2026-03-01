import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";

function MonoTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Solid Accent Background Override */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: fields.accentColor,
          zIndex: 0,
        }}
      />

      {/* Decorative Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 40%, rgba(0,0,0,0.18) 100%)",
          zIndex: 0,
        }}
      />

      {/* Noise Texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          zIndex: 0,
        }}
      />

      {/* Large Circle */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
          backgroundColor: "transparent",
          borderRadius: "50%",
          right: -120,
          bottom: -120,
          zIndex: 0,
        }}
      />

      {/* Small Circle */}
      <div
        style={{
          position: "absolute",
          width: 200,
          height: 200,
          background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
          backgroundColor: "transparent",
          borderRadius: "50%",
          right: 100,
          top: -60,
          zIndex: 0,
        }}
      />

      {/* Decorative Quote Mark */}
      <div
        style={{
          position: "absolute",
          bottom: -80,
          right: 20,
          fontSize: 800,
          fontWeight: 900,
          color: "#ffffff",
          opacity: 0.05,
          lineHeight: 1,
          fontFamily: "serif",
          zIndex: 0,
        }}
      >
        "
      </div>

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: 64,
          position: "relative",
          zIndex: 1,
          boxShadow: "inset 0 0 200px rgba(0,0,0,0.3)",
        }}
      >
        {fields.logoUrl && (
          <img
            src={fields.logoUrl}
            alt="Logo"
            style={{
              maxHeight: 44,
              objectFit: "contain",
              alignSelf: "flex-start",
              filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.2))",
            }}
          />
        )}

        <div style={{ display: "flex", flexDirection: "column", marginTop: 28 }}>
          {fields.title && (
            <div
              style={{
                fontSize: 76,
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                textShadow: "0 4px 16px rgba(0,0,0,0.15)",
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
                fontSize: 26,
                fontWeight: 450,
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.4,
                marginTop: 18,
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

        {fields.brandName && (
          <div
            style={{
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              fontWeight: 600,
              color: "rgba(255,255,255,0.65)",
              marginTop: "auto",
            }}
          >
            {fields.brandName}
          </div>
        )}
      </div>
    </TemplateWrapper>
  );
}

export { MonoTemplate };
