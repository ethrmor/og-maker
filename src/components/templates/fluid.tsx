import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";
import { hexToRgba, NOISE_PATTERN, TYPOGRAPHY, LOGO_SHADOW } from "@/lib/template-styles";

function FluidTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Deep background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#0f172a",
          zIndex: 0,
        }}
      />

      {/* Large organic blob - primary */}
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 600,
          left: "20%",
          top: "10%",
          background: `radial-gradient(ellipse 60% 80% at 40% 50%, ${hexToRgba(fields.accentColor, 0.4)} 0%, transparent 70%)`,
          filter: "blur(80px)",
          zIndex: 0,
          borderRadius: "60% 40% 70% 30% / 40% 50% 60% 50%",
        }}
      />

      {/* Secondary blob - complementary */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 450,
          right: "10%",
          bottom: "5%",
          background: `radial-gradient(ellipse 70% 60% at 60% 40%, ${hexToRgba(fields.accentColor, 0.25)} 0%, transparent 65%)`,
          filter: "blur(60px)",
          zIndex: 0,
          borderRadius: "50% 50% 40% 60% / 60% 40% 60% 40%",
        }}
      />

      {/* Tertiary accent blob */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 350,
          left: "5%",
          bottom: "20%",
          background: `radial-gradient(ellipse 80% 60% at 30% 70%, ${hexToRgba(fields.accentColor, 0.2)} 0%, transparent 70%)`,
          filter: "blur(50px)",
          zIndex: 0,
          borderRadius: "40% 60% 50% 50% / 50% 40% 60% 50%",
        }}
      />

      {/* Top right accent */}
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          right: "25%",
          top: "5%",
          background: `radial-gradient(circle at 50% 50%, ${hexToRgba(fields.accentColor, 0.15)} 0%, transparent 70%)`,
          filter: "blur(40px)",
          zIndex: 0,
          borderRadius: "50%",
        }}
      />

      {/* Organic wave shapes using SVG */}
      <svg
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "60%",
          zIndex: 0,
          opacity: 0.1,
        }}
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,200 C200,150 400,250 600,200 C800,150 1000,100 1200,180 L1200,400 L0,400 Z"
          fill={fields.accentColor}
        />
      </svg>

      <svg
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "45%",
          zIndex: 0,
          opacity: 0.08,
        }}
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C300,200 500,50 800,150 C1000,220 1100,80 1200,120 L1200,300 L0,300 Z"
          fill={fields.accentColor}
        />
      </svg>

      {/* Floating organic circles */}
      <div
        style={{
          position: "absolute",
          width: 150,
          height: 150,
          left: 80,
          top: 100,
          border: `2px solid ${hexToRgba(fields.accentColor, 0.2)}`,
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 80,
          height: 80,
          right: 120,
          top: 200,
          backgroundColor: hexToRgba(fields.accentColor, 0.1),
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 40,
          height: 40,
          left: 200,
          bottom: 180,
          backgroundColor: hexToRgba(fields.accentColor, 0.15),
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 100,
          height: 100,
          right: 200,
          bottom: 120,
          border: `2px solid ${hexToRgba(fields.accentColor, 0.12)}`,
          borderRadius: "40% 60% 60% 40% / 60% 40% 60% 40%",
          transform: "rotate(30deg)",
          zIndex: 0,
        }}
      />

      {/* Noise texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE_PATTERN,
          opacity: 0.04,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Glass morphism content card */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 850,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "56px 72px",
          backgroundColor: "rgba(15, 23, 42, 0.3)",
          backdropFilter: "blur(40px)",
          borderRadius: 40,
          border: `1px solid ${hexToRgba(fields.accentColor, 0.2)}`,
          boxShadow: `
            0 0 100px ${hexToRgba(fields.accentColor, 0.15)},
            inset 0 1px 0 rgba(255,255,255,0.05)
          `,
        }}
      >
        {/* Logo */}
        {fields.logoUrl && (
          <img
            src={fields.logoUrl}
            alt="Logo"
            style={{
              maxHeight: 48,
              objectFit: "contain",
              filter: LOGO_SHADOW,
              marginBottom: 24,
            }}
          />
        )}

        {/* Brand name */}
        {fields.brandName && (
          <div
            style={{
              ...TYPOGRAPHY.brand,
              color: hexToRgba(fields.accentColor, 0.8),
              marginBottom: 32,
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
              lineHeight: 1.08,
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

        {/* Decorative fluid line */}
        <svg
          style={{
            width: 140,
            height: 8,
            marginTop: 28,
            marginBottom: 28,
          }}
        >
          <path
            d="M0,4 Q35,0 70,4 T140,4"
            fill="none"
            stroke={fields.accentColor}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        {/* Subtitle */}
        {fields.subtitle && (
          <div
            style={{
              fontSize: 22,
              fontWeight: 450,
              color: "rgba(255,255,255,0.7)",
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

      {/* Corner organic shapes */}
      <div
        style={{
          position: "absolute",
          left: 60,
          bottom: 60,
          width: 60,
          height: 60,
          borderLeft: `3px solid ${hexToRgba(fields.accentColor, 0.25)}`,
          borderBottom: `3px solid ${hexToRgba(fields.accentColor, 0.25)}`,
          borderRadius: "0 0 0 20px",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 60,
          top: 60,
          width: 60,
          height: 60,
          borderRight: `3px solid ${hexToRgba(fields.accentColor, 0.25)}`,
          borderTop: `3px solid ${hexToRgba(fields.accentColor, 0.25)}`,
          borderRadius: "0 20px 0 0",
          zIndex: 1,
        }}
      />
    </TemplateWrapper>
  );
}

export { FluidTemplate };
