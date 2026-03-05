import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";
import { hexToRgba, NOISE_PATTERN, TYPOGRAPHY, LOGO_SHADOW } from "@/lib/template-styles";

function MosaicTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* White base background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#fafafa",
          zIndex: 0,
        }}
      />

      {/* Geometric tile pattern - main mosaic */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "60%",
          height: "100%",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        {/* Large square tiles */}
        <div
          style={{
            position: "absolute",
            width: 200,
            height: 200,
            left: 40,
            top: 40,
            backgroundColor: hexToRgba(fields.accentColor, 0.08),
            borderRadius: 8,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 150,
            height: 150,
            left: 260,
            top: 100,
            backgroundColor: hexToRgba(fields.accentColor, 0.12),
            borderRadius: 8,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 180,
            height: 180,
            left: 60,
            top: 260,
            backgroundColor: hexToRgba(fields.accentColor, 0.06),
            borderRadius: 8,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 120,
            height: 120,
            left: 260,
            top: 270,
            backgroundColor: hexToRgba(fields.accentColor, 0.15),
            borderRadius: 8,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 160,
            height: 160,
            left: 80,
            top: 460,
            backgroundColor: hexToRgba(fields.accentColor, 0.1),
            borderRadius: 8,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 140,
            height: 140,
            left: 260,
            top: 410,
            backgroundColor: hexToRgba(fields.accentColor, 0.07),
            borderRadius: 8,
          }}
        />

        {/* Small accent tiles */}
        <div
          style={{
            position: "absolute",
            width: 60,
            height: 60,
            left: 430,
            top: 60,
            backgroundColor: fields.accentColor,
            borderRadius: 6,
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 50,
            height: 50,
            left: 430,
            top: 140,
            backgroundColor: hexToRgba(fields.accentColor, 0.4),
            borderRadius: 6,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 70,
            height: 70,
            left: 430,
            top: 360,
            backgroundColor: hexToRgba(fields.accentColor, 0.25),
            borderRadius: 6,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 55,
            height: 55,
            left: 430,
            top: 450,
            backgroundColor: hexToRgba(fields.accentColor, 0.35),
            borderRadius: 6,
          }}
        />

        {/* Vertical connecting lines between tiles */}
        <svg
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            opacity: 0.15,
          }}
        >
          <line x1="240" y1="40" x2="240" y2="240" stroke={fields.accentColor} strokeWidth="2" />
          <line x1="240" y1="240" x2="240" y2="440" stroke={fields.accentColor} strokeWidth="2" />
          <line x1="420" y1="100" x2="420" y2="300" stroke={fields.accentColor} strokeWidth="2" />
          <line x1="420" y1="360" x2="420" y2="560" stroke={fields.accentColor} strokeWidth="2" />
          <line x1="40" y1="240" x2="240" y2="240" stroke={fields.accentColor} strokeWidth="2" />
          <line x1="260" y1="270" x2="420" y2="270" stroke={fields.accentColor} strokeWidth="2" />
        </svg>
      </div>

      {/* Diagonal accent stripe */}
      <div
        style={{
          position: "absolute",
          width: 8,
          height: 800,
          left: "58%",
          top: -100,
          backgroundColor: hexToRgba(fields.accentColor, 0.2),
          transform: "rotate(-15deg)",
          zIndex: 0,
        }}
      />

      {/* Right side gradient wash */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "50%",
          height: "100%",
          background: `linear-gradient(135deg, transparent 0%, ${hexToRgba(fields.accentColor, 0.05)} 100%)`,
          zIndex: 0,
        }}
      />

      {/* Geometric border frame - right side */}
      <div
        style={{
          position: "absolute",
          right: 60,
          top: 60,
          width: 200,
          height: 200,
          border: `3px solid ${hexToRgba(fields.accentColor, 0.15)}`,
          borderRadius: 16,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 100,
          bottom: 80,
          width: 120,
          height: 120,
          border: `2px solid ${hexToRgba(fields.accentColor, 0.12)}`,
          borderRadius: 12,
          zIndex: 0,
        }}
      />

      {/* Diamond shapes */}
      <div
        style={{
          position: "absolute",
          width: 80,
          height: 80,
          right: 150,
          top: 280,
          backgroundColor: hexToRgba(fields.accentColor, 0.2),
          transform: "rotate(45deg)",
          borderRadius: 8,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 50,
          height: 50,
          right: 80,
          top: 350,
          border: `3px solid ${hexToRgba(fields.accentColor, 0.25)}`,
          transform: "rotate(45deg)",
          borderRadius: 6,
          zIndex: 0,
        }}
      />

      {/* Noise texture */}
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

      {/* Main content area - floating card */}
      <div
        style={{
          position: "absolute",
          left: "55%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          padding: "48px",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: 24,
          boxShadow: `
            0 40px 100px rgba(0,0,0,0.1),
            0 0 0 1px rgba(0,0,0,0.05)
          `,
          border: `2px solid ${hexToRgba(fields.accentColor, 0.15)}`,
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 48,
            right: 48,
            height: 4,
            backgroundColor: fields.accentColor,
            borderRadius: "0 0 4px 4px",
            opacity: 0.6,
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
              filter: LOGO_SHADOW,
              marginBottom: 24,
              alignSelf: "flex-start",
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
              letterSpacing: "0.25em",
            }}
          >
            {fields.brandName}
          </div>
        )}

        {/* Title */}
        {fields.title && (
          <div
            style={{
              fontSize: 48,
              fontWeight: 750,
              color: "#1a1a1a",
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

        {/* Decorative tile row */}
        <div
          style={{
            marginTop: 28,
            marginBottom: 28,
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              backgroundColor: fields.accentColor,
              borderRadius: 4,
              opacity: 0.6,
            }}
          />
          <div
            style={{
              width: 24,
              height: 24,
              backgroundColor: hexToRgba(fields.accentColor, 0.4),
              borderRadius: 4,
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              backgroundColor: hexToRgba(fields.accentColor, 0.3),
              borderRadius: 4,
            }}
          />
          <div
            style={{
              width: 80,
              height: 3,
              backgroundColor: hexToRgba(fields.accentColor, 0.2),
              borderRadius: 2,
              marginLeft: 8,
            }}
          />
        </div>

        {/* Subtitle */}
        {fields.subtitle && (
          <div
            style={{
              fontSize: 20,
              fontWeight: 450,
              color: "#525252",
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

        {/* Bottom corner accent */}
        <div
          style={{
            position: "absolute",
            right: 24,
            bottom: 24,
            width: 40,
            height: 40,
            borderRight: `3px solid ${hexToRgba(fields.accentColor, 0.2)}`,
            borderBottom: `3px solid ${hexToRgba(fields.accentColor, 0.2)}`,
            borderRadius: "0 0 12px 0",
          }}
        />
      </div>

      {/* Floating geometric accents around content */}
      <div
        style={{
          position: "absolute",
          width: 30,
          height: 30,
          left: "35%",
          top: "25%",
          backgroundColor: hexToRgba(fields.accentColor, 0.15),
          transform: "rotate(45deg)",
          borderRadius: 4,
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 20,
          height: 20,
          left: "40%",
          bottom: "20%",
          border: `2px solid ${hexToRgba(fields.accentColor, 0.2)}`,
          transform: "rotate(20deg)",
          borderRadius: 4,
          zIndex: 1,
        }}
      />
    </TemplateWrapper>
  );
}

export { MosaicTemplate };
