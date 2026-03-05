import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";
import { hexToRgba, NOISE_PATTERN, TYPOGRAPHY, LOGO_SHADOW } from "@/lib/template-styles";

function PrismTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Soft gradient base */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)`,
          zIndex: 0,
        }}
      />

      {/* Prism light dispersion - rainbow edge effect */}
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 800,
          right: 100,
          top: -100,
          background: `linear-gradient(180deg, 
            rgba(239, 68, 68, 0.15) 0%,
            rgba(249, 115, 22, 0.15) 16%,
            rgba(234, 179, 8, 0.15) 33%,
            rgba(34, 197, 94, 0.15) 50%,
            rgba(59, 130, 246, 0.15) 66%,
            rgba(99, 102, 241, 0.15) 83%,
            rgba(168, 85, 247, 0.15) 100%
          )`,
          filter: "blur(60px)",
          transform: "rotate(-15deg)",
          zIndex: 0,
        }}
      />

      {/* Secondary prism glow */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          left: 50,
          bottom: 50,
          background: `radial-gradient(ellipse at center, ${hexToRgba(fields.accentColor, 0.15)} 0%, transparent 70%)`,
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      {/* Geometric crystal shapes */}
      {/* Large triangle prism */}
      <svg
        style={{
          position: "absolute",
          right: 80,
          top: 80,
          width: 200,
          height: 250,
          zIndex: 0,
          opacity: 0.3,
        }}
      >
        <defs>
          <linearGradient id="prismGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={fields.accentColor} stopOpacity="0.4" />
            <stop offset="50%" stopColor={fields.accentColor} stopOpacity="0.1" />
            <stop offset="100%" stopColor={fields.accentColor} stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <polygon
          points="100,10 190,240 10,240"
          fill="url(#prismGrad1)"
          stroke={fields.accentColor}
          strokeWidth="1"
          strokeOpacity="0.3"
        />
      </svg>

      {/* Small crystal diamond */}
      <svg
        style={{
          position: "absolute",
          right: 300,
          bottom: 150,
          width: 120,
          height: 120,
          zIndex: 0,
          opacity: 0.25,
        }}
      >
        <defs>
          <linearGradient id="prismGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={fields.accentColor} stopOpacity="0.5" />
            <stop offset="100%" stopColor={fields.accentColor} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <polygon
          points="60,5 115,60 60,115 5,60"
          fill="url(#prismGrad2)"
          stroke={fields.accentColor}
          strokeWidth="1"
          strokeOpacity="0.4"
        />
      </svg>

      {/* Hexagon accent */}
      <svg
        style={{
          position: "absolute",
          left: 60,
          top: 100,
          width: 80,
          height: 80,
          zIndex: 0,
          opacity: 0.2,
        }}
      >
        <polygon
          points="40,5 75,22.5 75,57.5 40,75 5,57.5 5,22.5"
          fill="none"
          stroke={fields.accentColor}
          strokeWidth="1.5"
        />
      </svg>

      {/* Light ray lines */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          opacity: 0.15,
        }}
      >
        <line x1="0" y1="0" x2="400" y2="630" stroke={fields.accentColor} strokeWidth="1" />
        <line x1="200" y1="0" x2="600" y2="630" stroke={fields.accentColor} strokeWidth="0.5" />
        <line x1="400" y1="0" x2="800" y2="500" stroke={fields.accentColor} strokeWidth="0.8" />
      </svg>

      {/* Noise overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE_PATTERN,
          opacity: 0.02,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Main glass card */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          height: 460,
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(40px)",
          borderRadius: 32,
          border: "1px solid rgba(255, 255, 255, 0.5)",
          boxShadow: `
            0 40px 100px rgba(0,0,0,0.08),
            inset 0 1px 0 rgba(255,255,255,0.6),
            0 0 0 1px rgba(255,255,255,0.3)
          `,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          padding: "56px 72px",
          overflow: "hidden",
        }}
      >
        {/* Internal rainbow edge */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 200,
            height: "100%",
            background: `linear-gradient(180deg, 
              rgba(239, 68, 68, 0.2) 0%,
              rgba(249, 115, 22, 0.15) 20%,
              rgba(59, 130, 246, 0.15) 50%,
              rgba(168, 85, 247, 0.2) 100%
            )`,
            opacity: 0.5,
          }}
        />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", height: "100%", position: "relative", zIndex: 1 }}>
          {/* Top row - logo and brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
            {fields.logoUrl && (
              <img
                src={fields.logoUrl}
                alt="Logo"
                style={{
                  maxHeight: 44,
                  objectFit: "contain",
                  filter: LOGO_SHADOW,
                }}
              />
            )}
            
            {fields.brandName && (
              <div
                style={{
                  ...TYPOGRAPHY.brand,
                  color: "#475569",
                  letterSpacing: "0.25em",
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
                fontSize: 56,
                fontWeight: 750,
                color: "#0f172a",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                textShadow: "0 2px 20px rgba(255,255,255,0.5)",
              }}
            >
              {fields.title}
            </div>
          )}

          {/* Decorative accent line with gradient */}
          <div
            style={{
              width: 100,
              height: 3,
              background: `linear-gradient(90deg, ${fields.accentColor}, rgba(99, 102, 241, 0.5))`,
              marginTop: 28,
              marginBottom: 28,
              borderRadius: 2,
            }}
          />

          {/* Subtitle */}
          {fields.subtitle && (
            <div
              style={{
                fontSize: 22,
                fontWeight: 450,
                color: "#64748b",
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

          {/* Bottom accent - small crystal shapes */}
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              gap: 8,
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                backgroundColor: fields.accentColor,
                transform: "rotate(45deg)",
                opacity: 0.6,
              }}
            />
            <div
              style={{
                width: 8,
                height: 8,
                backgroundColor: fields.accentColor,
                transform: "rotate(45deg)",
                opacity: 0.4,
              }}
            />
            <div
              style={{
                width: 4,
                height: 4,
                backgroundColor: fields.accentColor,
                transform: "rotate(45deg)",
                opacity: 0.3,
              }}
            />
          </div>
        </div>
      </div>

      {/* Floating light spots */}
      <div
        style={{
          position: "absolute",
          width: 100,
          height: 100,
          left: 150,
          bottom: 100,
          background: `radial-gradient(circle, ${hexToRgba(fields.accentColor, 0.3)} 0%, transparent 70%)`,
          filter: "blur(20px)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 60,
          height: 60,
          right: 400,
          top: 80,
          background: `radial-gradient(circle, ${hexToRgba(fields.accentColor, 0.2)} 0%, transparent 70%)`,
          filter: "blur(15px)",
          zIndex: 1,
        }}
      />
    </TemplateWrapper>
  );
}

export { PrismTemplate };
