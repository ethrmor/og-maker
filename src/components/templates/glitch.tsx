import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";
import { hexToRgba, NOISE_PATTERN, TYPOGRAPHY, LOGO_SHADOW } from "@/lib/template-styles";

function GlitchTemplate({ fields }: TemplateProps) {
  const glitchColor1 = "#ff0040"; // Red
  const glitchColor2 = "#00ff9f"; // Cyan

  return (
    <TemplateWrapper fields={fields}>
      {/* Dark cyber base */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#0a0a0f",
          zIndex: 0,
        }}
      />

      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 255, 159, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 159, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          zIndex: 0,
        }}
      />

      {/* RGB split glitch effect - cyan offset */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, ${hexToRgba(glitchColor2, 0.1)} 0%, transparent 50%)`,
          transform: "translateX(-8px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* RGB split glitch effect - red offset */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, transparent 50%, ${hexToRgba(glitchColor1, 0.1)} 100%)`,
          transform: "translateX(8px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Scanlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.3) 2px,
            rgba(0, 0, 0, 0.3) 4px
          )`,
          zIndex: 1,
          pointerEvents: "none",
          opacity: 0.6,
        }}
      />

      {/* Horizontal glitch bars */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "25%",
          height: 4,
          backgroundColor: hexToRgba(fields.accentColor, 0.3),
          transform: "translateX(-5px)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "60%",
          height: 2,
          backgroundColor: hexToRgba(glitchColor2, 0.4),
          transform: "translateX(10px)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "78%",
          height: 3,
          backgroundColor: hexToRgba(glitchColor1, 0.25),
          zIndex: 1,
        }}
      />

      {/* Vertical distortion lines */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          opacity: 0.15,
        }}
      >
        <line x1="150" y1="0" x2="145" y2="630" stroke={fields.accentColor} strokeWidth="2" />
        <line x1="400" y1="0" x2="405" y2="630" stroke={glitchColor1} strokeWidth="1" />
        <line x1="850" y1="0" x2="845" y2="630" stroke={glitchColor2} strokeWidth="2" />
        <line x1="1100" y1="0" x2="1105" y2="630" stroke={fields.accentColor} strokeWidth="1" />
      </svg>

      {/* Corner brackets - cyber frame */}
      <svg
        style={{
          position: "absolute",
          left: 40,
          top: 40,
          width: 80,
          height: 80,
          zIndex: 1,
          opacity: 0.5,
        }}
      >
        <path
          d="M0,30 L0,0 L30,0"
          fill="none"
          stroke={fields.accentColor}
          strokeWidth="3"
        />
      </svg>
      <svg
        style={{
          position: "absolute",
          right: 40,
          top: 40,
          width: 80,
          height: 80,
          zIndex: 1,
          opacity: 0.5,
        }}
      >
        <path
          d="M50,0 L80,0 L80,30"
          fill="none"
          stroke={fields.accentColor}
          strokeWidth="3"
        />
      </svg>
      <svg
        style={{
          position: "absolute",
          left: 40,
          bottom: 40,
          width: 80,
          height: 80,
          zIndex: 1,
          opacity: 0.5,
        }}
      >
        <path
          d="M0,50 L0,80 L30,80"
          fill="none"
          stroke={fields.accentColor}
          strokeWidth="3"
        />
      </svg>
      <svg
        style={{
          position: "absolute",
          right: 40,
          bottom: 40,
          width: 80,
          height: 80,
          zIndex: 1,
          opacity: 0.5,
        }}
      >
        <path
          d="M50,80 L80,80 L80,50"
          fill="none"
          stroke={fields.accentColor}
          strokeWidth="3"
        />
      </svg>

      {/* Floating geometric shapes - circuit vibes */}
      <div
        style={{
          position: "absolute",
          width: 60,
          height: 60,
          right: 150,
          top: 100,
          border: `2px solid ${hexToRgba(fields.accentColor, 0.3)}`,
          transform: "rotate(45deg)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 30,
          height: 30,
          left: 100,
          bottom: 150,
          backgroundColor: hexToRgba(glitchColor2, 0.2),
          transform: "rotate(45deg)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 8,
          height: 80,
          left: 200,
          top: 80,
          backgroundColor: hexToRgba(glitchColor1, 0.15),
          zIndex: 0,
        }}
      />

      {/* Digital noise */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE_PATTERN,
          opacity: 0.08,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Binary code decoration */}
      <div
        style={{
          position: "absolute",
          left: 50,
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "monospace",
          fontSize: 12,
          color: hexToRgba(fields.accentColor, 0.15),
          lineHeight: 1.6,
          zIndex: 0,
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          letterSpacing: "0.3em",
        }}
      >
        01001100 01001111 01000111 01001001 01001110
      </div>

      {/* Main content card with glitch border */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        {/* Logo with glitch effect */}
        {fields.logoUrl && (
          <div style={{ position: "relative", marginBottom: 24 }}>
            <img
              src={fields.logoUrl}
              alt="Logo"
              style={{
                maxHeight: 48,
                objectFit: "contain",
                filter: LOGO_SHADOW,
                position: "relative",
                zIndex: 2,
              }}
            />
            {/* Glitch shadow layers */}
            <img
              src={fields.logoUrl}
              alt=""
              style={{
                maxHeight: 48,
                objectFit: "contain",
                position: "absolute",
                left: -3,
                top: 0,
                opacity: 0.4,
                filter: `hue-rotate(-60deg)`,
                zIndex: 1,
              }}
            />
          </div>
        )}

        {/* Brand name - digital style */}
        {fields.brandName && (
          <div
            style={{
              ...TYPOGRAPHY.brand,
              color: hexToRgba(fields.accentColor, 0.8),
              marginBottom: 32,
              letterSpacing: "0.4em",
              fontFamily: "monospace",
            }}
          >
            {fields.brandName}
          </div>
        )}

        {/* Title with text shadow glitch */}
        {fields.title && (
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              textShadow: `
                -3px 0 ${hexToRgba(glitchColor1, 0.7)},
                3px 0 ${hexToRgba(glitchColor2, 0.7)},
                0 0 40px ${hexToRgba(fields.accentColor, 0.5)}
              `,
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
              color: hexToRgba("#ffffff", 0.7),
              marginTop: 24,
              lineHeight: 1.5,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              maxWidth: 700,
              fontFamily: "monospace",
            }}
          >
            {fields.subtitle}
          </div>
        )}

        {/* Decorative glitch bars under content */}
        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 4,
            alignItems: "center",
          }}
        >
          <div style={{ width: 40, height: 4, backgroundColor: fields.accentColor }} />
          <div style={{ width: 20, height: 4, backgroundColor: hexToRgba(glitchColor1, 0.6) }} />
          <div style={{ width: 60, height: 4, backgroundColor: hexToRgba(glitchColor2, 0.6) }} />
          <div style={{ width: 30, height: 4, backgroundColor: fields.accentColor }} />
        </div>
      </div>

      {/* Bottom status bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 30,
          backgroundColor: hexToRgba(fields.accentColor, 0.1),
          borderTop: `1px solid ${hexToRgba(fields.accentColor, 0.3)}`,
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
        }}
      >
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 11,
            color: hexToRgba(fields.accentColor, 0.6),
          }}
        >
          SYS.READY // 200 OK
        </span>
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 11,
            color: hexToRgba(fields.accentColor, 0.6),
          }}
        >
          v2.0.4
        </span>
      </div>
    </TemplateWrapper>
  );
}

export { GlitchTemplate };
