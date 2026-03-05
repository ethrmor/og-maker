import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";
import { hexToRgba, NOISE_PATTERN, TYPOGRAPHY, LOGO_SHADOW } from "@/lib/template-styles";

function PaperTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Soft textured background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#f5f0e8",
          zIndex: 0,
        }}
      />

      {/* Paper texture grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE_PATTERN,
          opacity: 0.06,
          zIndex: 0,
        }}
      />

      {/* Large background paper layer - beige */}
      <div
        style={{
          position: "absolute",
          width: 1000,
          height: 550,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%) rotate(-1deg)",
          backgroundColor: "#e8e0d5",
          borderRadius: 4,
          boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
          zIndex: 0,
        }}
      />

      {/* Secondary paper layer - warm white */}
      <div
        style={{
          position: "absolute",
          width: 980,
          height: 530,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%) rotate(0.5deg)",
          backgroundColor: "#faf8f5",
          borderRadius: 4,
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
          zIndex: 0,
        }}
      />

      {/* Torn edge effect - top paper layer */}
      <svg
        style={{
          position: "absolute",
          left: 100,
          top: 60,
          width: 450,
          height: 520,
          zIndex: 0,
          opacity: 0.7,
        }}
      >
        <defs>
          <filter id="roughPaper">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="#fffefc"
          filter="url(#roughPaper)"
          rx="2"
        />
      </svg>

      {/* Photo corner accents - washi tape style */}
      <div
        style={{
          position: "absolute",
          width: 80,
          height: 25,
          left: 80,
          top: 50,
          backgroundColor: hexToRgba(fields.accentColor, 0.25),
          transform: "rotate(-35deg)",
          zIndex: 1,
          opacity: 0.7,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 80,
          height: 25,
          right: 80,
          top: 80,
          backgroundColor: hexToRgba(fields.accentColor, 0.2),
          transform: "rotate(25deg)",
          zIndex: 1,
          opacity: 0.6,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      />

      {/* Hand-drawn style decorative circle */}
      <svg
        style={{
          position: "absolute",
          right: 150,
          top: 150,
          width: 200,
          height: 200,
          zIndex: 0,
          opacity: 0.15,
        }}
      >
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke={fields.accentColor}
          strokeWidth="2"
          strokeDasharray="8 4"
        />
        <circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke={fields.accentColor}
          strokeWidth="1"
          strokeDasharray="4 6"
        />
      </svg>

      {/* Sticker-style geometric shapes */}
      <div
        style={{
          position: "absolute",
          width: 60,
          height: 60,
          right: 200,
          bottom: 180,
          backgroundColor: hexToRgba(fields.accentColor, 0.15),
          borderRadius: "50%",
          zIndex: 0,
          boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 40,
          height: 40,
          left: 150,
          bottom: 200,
          backgroundColor: hexToRgba(fields.accentColor, 0.12),
          transform: "rotate(15deg)",
          zIndex: 0,
          boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
        }}
      />

      {/* Paperclip decoration */}
      <svg
        style={{
          position: "absolute",
          right: 120,
          top: 120,
          width: 40,
          height: 80,
          zIndex: 1,
          opacity: 0.4,
        }}
      >
        <path
          d="M10,70 L10,20 Q10,5 20,5 Q30,5 30,20 L30,60"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      {/* Coffee stain / ink splatter effect (decorative circles) */}
      <div
        style={{
          position: "absolute",
          width: 120,
          height: 120,
          left: 80,
          bottom: 100,
          border: `2px solid ${hexToRgba(fields.accentColor, 0.1)}`,
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 80,
          height: 80,
          left: 100,
          bottom: 120,
          border: `1px solid ${hexToRgba(fields.accentColor, 0.08)}`,
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      {/* Hand-drawn underline decoration */}
      <svg
        style={{
          position: "absolute",
          left: 100,
          bottom: 80,
          width: 200,
          height: 20,
          zIndex: 0,
          opacity: 0.3,
        }}
      >
        <path
          d="M0,10 Q50,5 100,10 T200,10"
          fill="none"
          stroke={fields.accentColor}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* Main content - paper card style */}
      <div
        style={{
          position: "absolute",
          left: 150,
          top: 80,
          width: 450,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          padding: "40px",
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

        {/* Brand name - hand-lettered feel */}
        {fields.brandName && (
          <div
            style={{
              ...TYPOGRAPHY.brand,
              color: hexToRgba(fields.accentColor, 0.8),
              marginBottom: 28,
              letterSpacing: "0.15em",
              fontWeight: 600,
            }}
          >
            {fields.brandName}
          </div>
        )}

        {/* Title - editorial magazine style */}
        {fields.title && (
          <div
            style={{
              fontSize: 52,
              fontWeight: 750,
              color: "#2d2a26",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
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
              fontSize: 20,
              fontWeight: 450,
              color: "#5c5753",
              marginTop: 20,
              lineHeight: 1.6,
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

      {/* Right side - decorative text block area */}
      <div
        style={{
          position: "absolute",
          right: 100,
          top: 200,
          width: 350,
          zIndex: 2,
          padding: "30px",
          backgroundColor: "rgba(255,255,255,0.6)",
          borderLeft: `3px solid ${hexToRgba(fields.accentColor, 0.3)}`,
        }}
      >
        {/* Decorative lines simulating text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ height: 3, backgroundColor: hexToRgba(fields.accentColor, 0.15), width: "80%" }} />
          <div style={{ height: 3, backgroundColor: hexToRgba(fields.accentColor, 0.12), width: "100%" }} />
          <div style={{ height: 3, backgroundColor: hexToRgba(fields.accentColor, 0.1), width: "90%" }} />
          <div style={{ height: 3, backgroundColor: hexToRgba(fields.accentColor, 0.08), width: "70%" }} />
        </div>

        {/* Small accent shapes */}
        <div style={{ marginTop: 30, display: "flex", gap: 8, alignItems: "center" }}>
          <div style={{ width: 8, height: 8, backgroundColor: fields.accentColor, borderRadius: "50%", opacity: 0.4 }} />
          <div style={{ width: 12, height: 12, backgroundColor: hexToRgba(fields.accentColor, 0.3), borderRadius: 2, transform: "rotate(45deg)" }} />
          <div style={{ width: 6, height: 6, backgroundColor: hexToRgba(fields.accentColor, 0.2), borderRadius: "50%" }} />
        </div>
      </div>

      {/* Date stamp simulation */}
      <div
        style={{
          position: "absolute",
          left: 150,
          bottom: 60,
          zIndex: 2,
          fontFamily: "monospace",
          fontSize: 12,
          color: hexToRgba("#8b7355", 0.6),
          letterSpacing: "0.1em",
        }}
      >
        ISSUE 001 // 2024
      </div>

      {/* Hand-drawn squiggles */}
      <svg
        style={{
          position: "absolute",
          right: 200,
          bottom: 100,
          width: 100,
          height: 60,
          zIndex: 0,
          opacity: 0.2,
        }}
      >
        <path
          d="M0,30 Q25,10 50,30 T100,30"
          fill="none"
          stroke={fields.accentColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10,50 Q35,30 60,50 T110,50"
          fill="none"
          stroke={fields.accentColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </TemplateWrapper>
  );
}

export { PaperTemplate };
