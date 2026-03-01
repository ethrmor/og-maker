import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";
import { hexToRgba, NOISE_PATTERN, TYPOGRAPHY } from "@/lib/template-styles";

function AuroraTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Dark base */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#0a0a0f",
          zIndex: 0,
        }}
      />

      {/* Blurred organic blobs */}
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          left: -200,
          top: -200,
          background: `radial-gradient(circle, ${hexToRgba(fields.accentColor, 0.4)} 0%, transparent 60%)`,
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          right: -150,
          bottom: -100,
          background: `radial-gradient(circle, ${hexToRgba(fields.accentColor, 0.3)} 0%, transparent 65%)`,
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          left: "30%",
          top: "40%",
          background: `radial-gradient(circle, ${hexToRgba(fields.accentColor, 0.25)} 0%, transparent 70%)`,
          filter: "blur(90px)",
          zIndex: 0,
        }}
      />

      {/* Noise overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE_PATTERN,
          opacity: 0.05,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Glassmorphism card */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          height: 480,
          backgroundColor: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(24px)",
          borderRadius: 32,
          border: `1px solid ${hexToRgba(fields.accentColor, 0.3)}`,
          boxShadow: `0 40px 100px ${hexToRgba(fields.accentColor, 0.15)}`,
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "64px 80px",
        }}
      >
        {/* Logo with colored drop shadow */}
        {fields.logoUrl && (
          <img
            src={fields.logoUrl}
            alt="Logo"
            style={{
              maxHeight: 44,
              objectFit: "contain",
              alignSelf: "flex-start",
              filter: `drop-shadow(0 4px 20px ${hexToRgba(fields.accentColor, 0.5)})`,
              marginBottom: 24,
            }}
          />
        )}

        {/* Brand name */}
        {fields.brandName && (
          <div
            style={{
              ...TYPOGRAPHY.brand,
              color: "rgba(255,255,255,0.7)",
              fontSize: 13,
              letterSpacing: "0.3em",
              marginBottom: 40,
            }}
          >
            {fields.brandName}
          </div>
        )}

        {/* Title */}
        {fields.title && (
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
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
              fontSize: 22,
              fontWeight: 450,
              color: "rgba(255,255,255,0.6)",
              marginTop: 20,
              lineHeight: 1.5,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              maxWidth: 700,
            }}
          >
            {fields.subtitle}
          </div>
        )}
      </div>
    </TemplateWrapper>
  );
}

export { AuroraTemplate };
