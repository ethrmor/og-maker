import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";
import { hexToRgba, TYPOGRAPHY, LOGO_SHADOW } from "@/lib/template-styles";

function NoirTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Deep black base */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#0a0a0a",
          zIndex: 0,
        }}
      />

      {/* Subtle vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 80% 80% at center, transparent 0%, rgba(0,0,0,0.6) 100%)`,
          zIndex: 0,
        }}
      />

      {/* Single dramatic light source - angled spotlight */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 800,
          left: "15%",
          top: "-10%",
          background: `linear-gradient(135deg, ${hexToRgba(fields.accentColor, 0.15)} 0%, transparent 60%)`,
          filter: "blur(40px)",
          transform: "rotate(-20deg)",
          zIndex: 0,
        }}
      />

      {/* Contrast accent glow */}
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          right: "20%",
          bottom: "10%",
          background: `radial-gradient(circle, ${hexToRgba(fields.accentColor, 0.08)} 0%, transparent 70%)`,
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      {/* Heavy film grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.12,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Scratches effect - subtle lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(90deg, transparent 99.5%, rgba(255,255,255,0.03) 99.5%),
            linear-gradient(0deg, transparent 99.5%, rgba(255,255,255,0.02) 99.5%)
          `,
          backgroundSize: "200px 200px",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Cinematic frame lines */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 60,
          right: 60,
          height: 1,
          background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)`,
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 60,
          right: 60,
          height: 1,
          background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)`,
          zIndex: 2,
        }}
      />

      {/* Corner brackets - cinematic style */}
      <svg
        style={{
          position: "absolute",
          top: 50,
          left: 50,
          width: 60,
          height: 60,
          zIndex: 2,
          opacity: 0.3,
        }}
      >
        <line x1="0" y1="20" x2="0" y2="0" stroke="white" strokeWidth="1" />
        <line x1="0" y1="0" x2="20" y2="0" stroke="white" strokeWidth="1" />
      </svg>
      <svg
        style={{
          position: "absolute",
          top: 50,
          right: 50,
          width: 60,
          height: 60,
          zIndex: 2,
          opacity: 0.3,
        }}
      >
        <line x1="60" y1="20" x2="60" y2="0" stroke="white" strokeWidth="1" />
        <line x1="60" y1="0" x2="40" y2="0" stroke="white" strokeWidth="1" />
      </svg>
      <svg
        style={{
          position: "absolute",
          bottom: 50,
          left: 50,
          width: 60,
          height: 60,
          zIndex: 2,
          opacity: 0.3,
        }}
      >
        <line x1="0" y1="40" x2="0" y2="60" stroke="white" strokeWidth="1" />
        <line x1="0" y1="60" x2="20" y2="60" stroke="white" strokeWidth="1" />
      </svg>
      <svg
        style={{
          position: "absolute",
          bottom: 50,
          right: 50,
          width: 60,
          height: 60,
          zIndex: 2,
          opacity: 0.3,
        }}
      >
        <line x1="60" y1="40" x2="60" y2="60" stroke="white" strokeWidth="1" />
        <line x1="60" y1="60" x2="40" y2="60" stroke="white" strokeWidth="1" />
      </svg>

      {/* Main content area */}
      <div
        style={{
          position: "absolute",
          inset: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          zIndex: 3,
        }}
      >
        {/* Logo with glow */}
        {fields.logoUrl && (
          <img
            src={fields.logoUrl}
            alt="Logo"
            style={{
              maxHeight: 52,
              objectFit: "contain",
              filter: `${LOGO_SHADOW} brightness(0) invert(1)`,
              marginBottom: 32,
              opacity: 0.9,
            }}
          />
        )}

        {/* Brand name - classic Hollywood style */}
        {fields.brandName && (
          <div
            style={{
              ...TYPOGRAPHY.brand,
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.4em",
              fontWeight: 400,
              marginBottom: 48,
            }}
          >
            {fields.brandName}
          </div>
        )}

        {/* Title - dramatic serif-like weight */}
        {fields.title && (
          <div
            style={{
              fontSize: 68,
              fontWeight: 300,
              color: "#ffffff",
              letterSpacing: "0.02em",
              lineHeight: 1.15,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              textShadow: `0 0 40px ${hexToRgba(fields.accentColor, 0.3)}`,
              maxWidth: 900,
            }}
          >
            {fields.title}
          </div>
        )}

        {/* Cinematic divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            margin: "40px 0",
          }}
        >
          <div
            style={{
              width: 60,
              height: 1,
              backgroundColor: "rgba(255,255,255,0.2)",
            }}
          />
          <div
            style={{
              width: 6,
              height: 6,
              backgroundColor: fields.accentColor,
              transform: "rotate(45deg)",
              opacity: 0.8,
            }}
          />
          <div
            style={{
              width: 60,
              height: 1,
              backgroundColor: "rgba(255,255,255,0.2)",
            }}
          />
        </div>

        {/* Subtitle */}
        {fields.subtitle && (
          <div
            style={{
              fontSize: 20,
              fontWeight: 350,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.6,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              maxWidth: 700,
              letterSpacing: "0.03em",
            }}
          >
            {fields.subtitle}
          </div>
        )}
      </div>

      {/* Bottom technical info - cinematic style */}
      <div
        style={{
          position: "absolute",
          bottom: 55,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 40,
          fontSize: 10,
          fontFamily: "monospace",
          letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.25)",
          zIndex: 2,
        }}
      >
        <span>01</span>
        <span>OG</span>
        <span>1200×630</span>
      </div>
    </TemplateWrapper>
  );
}

export { NoirTemplate };
