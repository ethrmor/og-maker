import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";
import { hexToRgba, NOISE_PATTERN, TYPOGRAPHY, LOGO_SHADOW } from "@/lib/template-styles";

function RetroTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Sunset gradient background - vaporwave style */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(180deg, 
            #1a0a2e 0%,
            #2d1b4e 30%,
            #4a1c6b 50%,
            #ff6b6b 70%,
            #ffd93d 85%,
            #ff8c42 100%
          )`,
          zIndex: 0,
        }}
      />

      {/* Sun - gradient circle on horizon */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          left: "50%",
          bottom: -100,
          transform: "translateX(-50%)",
          background: `radial-gradient(circle, 
            #ffd93d 0%,
            #ff8c42 40%,
            #ff6b6b 60%,
            transparent 70%
          )`,
          borderRadius: "50%",
          zIndex: 0,
          opacity: 0.9,
        }}
      />

      {/* Grid floor - perspective lines */}
      <div
        style={{
          position: "absolute",
          left: "-50%",
          right: "-50%",
          bottom: 0,
          height: "50%",
          backgroundImage: `
            linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "center bottom",
          zIndex: 0,
          opacity: 0.6,
          maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 100%)",
        }}
      />

      {/* Mountains silhouette */}
      <svg
        style={{
          position: "absolute",
          bottom: "25%",
          left: 0,
          width: "100%",
          height: 150,
          zIndex: 0,
          opacity: 0.7,
        }}
        viewBox="0 0 1200 150"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,150 150,50 300,100 450,30 600,80 750,20 900,90 1050,40 1200,120 1200,150"
          fill="#1a0a2e"
        />
      </svg>

      {/* Scanlines overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0, 0, 0, 0.15) 3px,
            rgba(0, 0, 0, 0.15) 6px
          )`,
          zIndex: 1,
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />

      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at center, transparent 40%, rgba(26, 10, 46, 0.6) 100%)`,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Neon palm tree silhouettes (simplified geometric) */}
      <svg
        style={{
          position: "absolute",
          left: 80,
          bottom: "22%",
          width: 120,
          height: 200,
          zIndex: 0,
          opacity: 0.4,
        }}
      >
        <line x1="60" y1="200" x2="60" y2="80" stroke="#ff6b6b" strokeWidth="8" />
        <line x1="60" y1="100" x2="20" y2="60" stroke="#ff6b6b" strokeWidth="4" />
        <line x1="60" y1="90" x2="100" y2="50" stroke="#ff6b6b" strokeWidth="4" />
        <line x1="60" y1="110" x2="30" y2="80" stroke="#ff6b6b" strokeWidth="3" />
        <line x1="60" y1="105" x2="90" y2="75" stroke="#ff6b6b" strokeWidth="3" />
      </svg>
      <svg
        style={{
          position: "absolute",
          right: 100,
          bottom: "22%",
          width: 100,
          height: 180,
          zIndex: 0,
          opacity: 0.3,
        }}
      >
        <line x1="50" y1="180" x2="50" y2="70" stroke="#ffd93d" strokeWidth="6" />
        <line x1="50" y1="85" x2="15" y2="50" stroke="#ffd93d" strokeWidth="3" />
        <line x1="50" y1="80" x2="85" y2="45" stroke="#ffd93d" strokeWidth="3" />
      </svg>

      {/* Floating geometric shapes - 80s style */}
      <div
        style={{
          position: "absolute",
          width: 80,
          height: 80,
          right: 200,
          top: 120,
          border: `3px solid #ff6b6b`,
          borderRadius: "50%",
          zIndex: 0,
          opacity: 0.6,
          boxShadow: "0 0 20px rgba(255, 107, 107, 0.5), inset 0 0 20px rgba(255, 107, 107, 0.2)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          left: 150,
          top: 180,
          borderLeft: "40px solid transparent",
          borderRight: "40px solid transparent",
          borderBottom: `70px solid ${hexToRgba("#ffd93d", 0.5)}`,
          zIndex: 0,
          filter: "drop-shadow(0 0 15px rgba(255, 217, 61, 0.4))",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 50,
          height: 50,
          right: 150,
          bottom: 250,
          border: `3px solid #ff8c42`,
          transform: "rotate(45deg)",
          zIndex: 0,
          opacity: 0.5,
          boxShadow: "0 0 15px rgba(255, 140, 66, 0.4)",
        }}
      />

      {/* Noise texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE_PATTERN,
          opacity: 0.05,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Main content card - glass style with neon border */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "42%",
          transform: "translate(-50%, -50%)",
          width: 850,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "48px 64px",
          backgroundColor: "rgba(26, 10, 46, 0.4)",
          backdropFilter: "blur(20px)",
          borderRadius: 24,
          border: "2px solid rgba(255, 107, 107, 0.3)",
          boxShadow: `
            0 0 60px rgba(255, 107, 107, 0.2),
            inset 0 1px 0 rgba(255,255,255,0.1),
            0 20px 60px rgba(0,0,0,0.3)
          `,
        }}
      >
        {/* Logo */}
        {fields.logoUrl && (
          <img
            src={fields.logoUrl}
            alt="Logo"
            style={{
              maxHeight: 50,
              objectFit: "contain",
              filter: LOGO_SHADOW,
              marginBottom: 24,
            }}
          />
        )}

        {/* Brand name - retro neon style */}
        {fields.brandName && (
          <div
            style={{
              ...TYPOGRAPHY.brand,
              color: "#ffd93d",
              marginBottom: 32,
              letterSpacing: "0.35em",
              textShadow: "0 0 20px rgba(255, 217, 61, 0.6), 0 0 40px rgba(255, 217, 61, 0.3)",
            }}
          >
            {fields.brandName}
          </div>
        )}

        {/* Title - bold retro */}
        {fields.title && (
          <div
            style={{
              fontSize: 58,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              textShadow: `
                0 0 30px rgba(255, 107, 107, 0.5),
                0 0 60px rgba(255, 107, 107, 0.3),
                4px 4px 0 rgba(255, 107, 107, 0.3)
              `,
            }}
          >
            {fields.title}
          </div>
        )}

        {/* Decorative line - neon */}
        <div
          style={{
            width: 120,
            height: 3,
            background: "linear-gradient(90deg, #ff6b6b, #ffd93d)",
            marginTop: 28,
            marginBottom: 28,
            borderRadius: 2,
            boxShadow: "0 0 20px rgba(255, 107, 107, 0.6)",
          }}
        />

        {/* Subtitle */}
        {fields.subtitle && (
          <div
            style={{
              fontSize: 22,
              fontWeight: 450,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.5,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              maxWidth: 680,
            }}
          >
            {fields.subtitle}
          </div>
        )}
      </div>

      {/* Corner decorations - retro blocks */}
      <div
        style={{
          position: "absolute",
          left: 40,
          top: 40,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          zIndex: 1,
        }}
      >
        <div style={{ width: 20, height: 20, backgroundColor: "#ff6b6b", opacity: 0.6 }} />
        <div style={{ width: 20, height: 20, backgroundColor: "#ffd93d", opacity: 0.5 }} />
      </div>
      <div
        style={{
          position: "absolute",
          right: 40,
          top: 40,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          zIndex: 1,
        }}
      >
        <div style={{ width: 20, height: 20, backgroundColor: "#ffd93d", opacity: 0.5 }} />
        <div style={{ width: 20, height: 20, backgroundColor: "#ff6b6b", opacity: 0.6 }} />
      </div>
    </TemplateWrapper>
  );
}

export { RetroTemplate };
