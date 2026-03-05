import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";
import { hexToRgba, NOISE_PATTERN, TYPOGRAPHY, LOGO_SHADOW } from "@/lib/template-styles";

function KineticTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Base background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#fafafa",
          zIndex: 0,
        }}
      />

      {/* Large diagonal stripe - background */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 1200,
          left: "35%",
          top: "-20%",
          background: `linear-gradient(135deg, ${hexToRgba(fields.accentColor, 0.08)} 0%, ${hexToRgba(fields.accentColor, 0.03)} 100%)`,
          transform: "rotate(-35deg)",
          zIndex: 0,
        }}
      />

      {/* Secondary diagonal stripe */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 1200,
          left: "55%",
          top: "-10%",
          background: `linear-gradient(135deg, ${hexToRgba(fields.accentColor, 0.12)} 0%, transparent 100%)`,
          transform: "rotate(-35deg)",
          zIndex: 0,
        }}
      />

      {/* Accent diagonal line - thin */}
      <div
        style={{
          position: "absolute",
          width: 4,
          height: 900,
          left: "42%",
          top: "-100px",
          backgroundColor: fields.accentColor,
          transform: "rotate(-35deg)",
          zIndex: 1,
          opacity: 0.8,
        }}
      />

      {/* Speed lines - horizontal blur strokes */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "30%",
          height: 2,
          background: `linear-gradient(90deg, transparent, ${hexToRgba(fields.accentColor, 0.2)}, transparent)`,
          filter: "blur(1px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "45%",
          height: 1,
          background: `linear-gradient(90deg, transparent, ${hexToRgba(fields.accentColor, 0.15)}, transparent)`,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "60%",
          height: 3,
          background: `linear-gradient(90deg, transparent, ${hexToRgba(fields.accentColor, 0.1)}, transparent)`,
          filter: "blur(2px)",
          zIndex: 0,
        }}
      />

      {/* Floating geometric shapes */}
      {/* Circle */}
      <div
        style={{
          position: "absolute",
          width: 120,
          height: 120,
          right: 180,
          top: 100,
          border: `3px solid ${hexToRgba(fields.accentColor, 0.2)}`,
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 60,
          height: 60,
          right: 210,
          top: 130,
          backgroundColor: hexToRgba(fields.accentColor, 0.1),
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      {/* Triangle accent */}
      <div
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          right: 100,
          bottom: 150,
          borderLeft: "40px solid transparent",
          borderRight: "40px solid transparent",
          borderBottom: `70px solid ${hexToRgba(fields.accentColor, 0.15)}`,
          zIndex: 0,
        }}
      />

      {/* Small square */}
      <div
        style={{
          position: "absolute",
          width: 30,
          height: 30,
          left: 100,
          bottom: 200,
          backgroundColor: hexToRgba(fields.accentColor, 0.25),
          transform: "rotate(45deg)",
          zIndex: 0,
        }}
      />

      {/* Arrow accent - bottom right */}
      <svg
        style={{
          position: "absolute",
          right: 60,
          bottom: 60,
          width: 100,
          height: 100,
          zIndex: 0,
          opacity: 0.2,
        }}
      >
        <line x1="10" y1="90" x2="90" y2="10" stroke={fields.accentColor} strokeWidth="3" />
        <polyline points="60,10 90,10 90,40" fill="none" stroke={fields.accentColor} strokeWidth="3" />
      </svg>

      {/* Noise texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE_PATTERN,
          opacity: 0.03,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Main content area - offset to the left */}
      <div
        style={{
          position: "absolute",
          left: 0,
          width: "58%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          zIndex: 2,
        }}
      >
        {/* Content card with subtle background */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: 48,
            borderRadius: 24,
            boxShadow: "0 30px 80px rgba(0,0,0,0.08)",
            borderLeft: `6px solid ${fields.accentColor}`,
          }}
        >
          {/* Logo */}
          {fields.logoUrl && (
            <img
              src={fields.logoUrl}
              alt="Logo"
              style={{
                maxHeight: 44,
                objectFit: "contain",
                filter: LOGO_SHADOW,
                marginBottom: 24,
              }}
            />
          )}

          {/* Brand name with accent */}
          {fields.brandName && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 32,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: fields.accentColor,
                  transform: "rotate(45deg)",
                }}
              />
              <div
                style={{
                  ...TYPOGRAPHY.brand,
                  color: "#374151",
                  letterSpacing: "0.2em",
                }}
              >
                {fields.brandName}
              </div>
            </div>
          )}

          {/* Title - bold and dynamic */}
          {fields.title && (
            <div
              style={{
                fontSize: 58,
                fontWeight: 800,
                color: "#0f172a",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
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
                color: "#475569",
                marginTop: 20,
                lineHeight: 1.5,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                maxWidth: 500,
              }}
            >
              {fields.subtitle}
            </div>
          )}
        </div>
      </div>

      {/* Motion accent - curved path line */}
      <svg
        style={{
          position: "absolute",
          right: 200,
          bottom: 300,
          width: 300,
          height: 200,
          zIndex: 0,
          opacity: 0.15,
        }}
      >
        <path
          d="M0,100 Q100,0 200,50 T300,80"
          fill="none"
          stroke={fields.accentColor}
          strokeWidth="3"
          strokeDasharray="10 5"
        />
      </svg>
    </TemplateWrapper>
  );
}

export { KineticTemplate };
