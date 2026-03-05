import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";
import { hexToRgba, NOISE_PATTERN, TYPOGRAPHY, LOGO_SHADOW } from "@/lib/template-styles";

function HorizonTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Sky gradient - transitions from accent color to warm tones */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(180deg, 
            ${hexToRgba(fields.accentColor, 0.2)} 0%, 
            ${hexToRgba(fields.accentColor, 0.1)} 30%,
            #fef3c7 60%,
            #fde68a 80%,
            #fbbf24 100%
          )`,
          zIndex: 0,
        }}
      />

      {/* Sun - large glowing circle at horizon */}
      <div
        style={{
          position: "absolute",
          width: 350,
          height: 350,
          left: "50%",
          bottom: 180,
          transform: "translateX(-50%)",
          background: `radial-gradient(circle at 30% 30%, #fffbeb 0%, #fef3c7 20%, #fbbf24 50%, ${fields.accentColor} 100%)`,
          borderRadius: "50%",
          zIndex: 0,
          boxShadow: `0 0 100px ${hexToRgba(fields.accentColor, 0.6)}, 0 0 200px ${hexToRgba(fields.accentColor, 0.3)}`,
        }}
      />

      {/* Sun glow rays */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 300,
          left: "50%",
          bottom: 200,
          transform: "translateX(-50%)",
          background: `radial-gradient(ellipse 50% 100% at center bottom, ${hexToRgba(fields.accentColor, 0.3)} 0%, transparent 70%)`,
          zIndex: 0,
        }}
      />

      {/* Cloud shapes - soft and organic */}
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 80,
          left: 80,
          top: 100,
          background: "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)",
          borderRadius: "40px",
          filter: "blur(20px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 200,
          height: 60,
          left: 250,
          top: 130,
          background: "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 100%)",
          borderRadius: "30px",
          filter: "blur(15px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 250,
          height: 70,
          right: 150,
          top: 80,
          background: "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.2) 100%)",
          borderRadius: "35px",
          filter: "blur(18px)",
          zIndex: 0,
        }}
      />

      {/* Cloud - small accent */}
      <div
        style={{
          position: "absolute",
          width: 180,
          height: 50,
          right: 80,
          top: 160,
          background: "linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.1) 100%)",
          borderRadius: "25px",
          filter: "blur(12px)",
          zIndex: 0,
        }}
      />

      {/* Horizon line */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 315,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${hexToRgba(fields.accentColor, 0.4)}, transparent)`,
          zIndex: 1,
        }}
      />

      {/* Water reflection - bottom gradient */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 315,
          background: `linear-gradient(180deg, 
            rgba(251, 191, 36, 0.3) 0%,
            rgba(245, 158, 11, 0.2) 50%,
            rgba(217, 119, 6, 0.4) 100%
          )`,
          zIndex: 0,
        }}
      />

      {/* Water reflection lines */}
      <div
        style={{
          position: "absolute",
          left: "10%",
          right: "10%",
          bottom: 80,
          height: 150,
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 8px,
            rgba(255,255,255,0.15) 8px,
            rgba(255,255,255,0.15) 10px
          )`,
          maskImage: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%)",
          zIndex: 1,
        }}
      />

      {/* Noise overlay for texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE_PATTERN,
          opacity: 0.03,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Content card - floating above the horizon */}
      <div
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          top: 60,
          bottom: 340,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          zIndex: 2,
        }}
      >
        {/* Glass panel for content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 40,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(12px)",
            borderRadius: 24,
            border: "1px solid rgba(255, 255, 255, 0.3)",
            maxWidth: 650,
          }}
        >
          {/* Logo and brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
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
              <div
                style={{
                  ...TYPOGRAPHY.brand,
                  color: "#78350f",
                  letterSpacing: "0.2em",
                }}
              >
                {fields.brandName}
              </div>
            )}
          </div>

          {/* Title */}
          {fields.title && (
            <div
              style={{
                fontSize: 54,
                fontWeight: 750,
                color: "#451a03",
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
                fontSize: 20,
                fontWeight: 450,
                color: "#92400e",
                marginTop: 16,
                lineHeight: 1.5,
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

      {/* Birds silhouettes - small details */}
      <svg
        style={{
          position: "absolute",
          right: 200,
          top: 200,
          width: 100,
          height: 50,
          zIndex: 1,
          opacity: 0.3,
        }}
      >
        <path
          d="M10,25 Q20,20 30,25 Q20,30 10,25"
          fill="#451a03"
        />
        <path
          d="M50,20 Q60,15 70,20 Q60,25 50,20"
          fill="#451a03"
        />
        <path
          d="M30,35 Q40,30 50,35 Q40,40 30,35"
          fill="#451a03"
        />
      </svg>
    </TemplateWrapper>
  );
}

export { HorizonTemplate };
