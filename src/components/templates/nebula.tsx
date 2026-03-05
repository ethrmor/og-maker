import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";
import { hexToRgba, NOISE_PATTERN, TYPOGRAPHY, LOGO_SHADOW } from "@/lib/template-styles";

// Floating particle positions
const particles = [
  { x: 80, y: 120, size: 6, opacity: 0.6, blur: 2 },
  { x: 250, y: 80, size: 8, opacity: 0.4, blur: 3 },
  { x: 400, y: 180, size: 10, opacity: 0.5, blur: 2 },
  { x: 1000, y: 200, size: 7, opacity: 0.55, blur: 2 },
  { x: 1050, y: 400, size: 12, opacity: 0.35, blur: 4 },
  { x: 900, y: 500, size: 6, opacity: 0.5, blur: 2 },
  { x: 150, y: 500, size: 9, opacity: 0.4, blur: 3 },
  { x: 300, y: 550, size: 5, opacity: 0.65, blur: 1 },
  { x: 1100, y: 100, size: 8, opacity: 0.45, blur: 2 },
  { x: 700, y: 80, size: 4, opacity: 0.7, blur: 1 },
  { x: 550, y: 600, size: 11, opacity: 0.3, blur: 4 },
  { x: 50, y: 300, size: 7, opacity: 0.5, blur: 2 },
];

function NebulaTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Deep space base */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#080811",
          zIndex: 0,
        }}
      />

      {/* Primary nebula glow - large diffused area */}
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 600,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(ellipse 70% 60% at center, ${hexToRgba(fields.accentColor, 0.25)} 0%, transparent 70%)`,
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      {/* Secondary nebula accent - top right */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 500,
          right: -100,
          top: -50,
          background: `radial-gradient(ellipse at center, ${hexToRgba(fields.accentColor, 0.15)} 0%, transparent 65%)`,
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      {/* Subtle purple-pink accent for depth */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          left: -50,
          bottom: -50,
          background: `radial-gradient(ellipse at center, ${hexToRgba(fields.accentColor, 0.12)} 0%, transparent 70%)`,
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />

      {/* Star field - tiny dots */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.4) 1px, transparent 1px),
                           radial-gradient(1px 1px at 30% 40%, rgba(255,255,255,0.3) 1px, transparent 1px),
                           radial-gradient(1px 1px at 50% 60%, rgba(255,255,255,0.5) 1px, transparent 1px),
                           radial-gradient(1px 1px at 70% 10%, rgba(255,255,255,0.35) 1px, transparent 1px),
                           radial-gradient(1px 1px at 80% 80%, rgba(255,255,255,0.4) 1px, transparent 1px),
                           radial-gradient(1px 1px at 90% 30%, rgba(255,255,255,0.3) 1px, transparent 1px),
                           radial-gradient(1px 1px at 20% 70%, rgba(255,255,255,0.45) 1px, transparent 1px),
                           radial-gradient(1px 1px at 60% 90%, rgba(255,255,255,0.35) 1px, transparent 1px)`,
          backgroundSize: "200px 200px",
          zIndex: 0,
          opacity: 0.8,
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: hexToRgba(fields.accentColor, p.opacity),
            borderRadius: "50%",
            filter: `blur(${p.blur}px)`,
            zIndex: 1,
            boxShadow: `0 0 ${p.size * 2}px ${hexToRgba(fields.accentColor, p.opacity * 0.5)}`,
          }}
        />
      ))}

      {/* Subtle noise overlay */}
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

      {/* Main content card with glass effect */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 850,
          height: 420,
          backgroundColor: "rgba(8, 8, 17, 0.6)",
          backdropFilter: "blur(40px)",
          borderRadius: 40,
          border: `1px solid ${hexToRgba(fields.accentColor, 0.2)}`,
          boxShadow: `0 0 100px ${hexToRgba(fields.accentColor, 0.15)}, inset 0 1px 0 rgba(255,255,255,0.05)`,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          padding: "56px 72px",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 72,
            right: 72,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${fields.accentColor}, transparent)`,
            opacity: 0.5,
          }}
        />

        {/* Logo */}
        {fields.logoUrl && (
          <img
            src={fields.logoUrl}
            alt="Logo"
            style={{
              maxHeight: 44,
              objectFit: "contain",
              alignSelf: "flex-start",
              filter: LOGO_SHADOW,
              marginBottom: 20,
            }}
          />
        )}

        {/* Brand name */}
        {fields.brandName && (
          <div
            style={{
              ...TYPOGRAPHY.brand,
              color: hexToRgba(fields.accentColor, 0.8),
              marginBottom: 28,
              letterSpacing: "0.3em",
            }}
          >
            {fields.brandName}
          </div>
        )}

        {/* Title */}
        {fields.title && (
          <div
            style={{
              fontSize: 60,
              fontWeight: 750,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              textShadow: `0 0 60px ${hexToRgba(fields.accentColor, 0.4)}`,
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
              color: "rgba(255,255,255,0.65)",
              marginTop: 20,
              lineHeight: 1.5,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              maxWidth: 650,
            }}
          >
            {fields.subtitle}
          </div>
        )}
      </div>
    </TemplateWrapper>
  );
}

export { NebulaTemplate };
