import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";
import { NOISE_PATTERN, TYPOGRAPHY, LOGO_SHADOW } from "@/lib/template-styles";

function SpotlightTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Pitch black base */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#050505",
          zIndex: 0,
        }}
      />

      {/* Dramatic spotlight effect from top */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 80% 60% at 50% -10%, ${fields.accentColor}40 0%, transparent 60%)`,
          zIndex: 0,
        }}
      />

      {/* Secondary ambient glow */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 400,
          left: "50%",
          top: 0,
          transform: "translateX(-50%)",
          background: `radial-gradient(ellipse at center top, ${fields.accentColor}30 0%, transparent 70%)`,
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      {/* Topographic grid pattern - only visible in spotlight */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px),
                           repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px)`,
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* Heavy film grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE_PATTERN,
          opacity: 0.08,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Content area */}
      <div
        style={{
          position: "absolute",
          inset: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          zIndex: 1,
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
              marginBottom: 32,
            }}
          />
        )}

        {/* Brand name with glow */}
        {fields.brandName && (
          <div
            style={{
              ...TYPOGRAPHY.brand,
              color: "rgba(255,255,255,0.8)",
              textShadow: `0 0 30px ${fields.accentColor}80`,
              marginBottom: 40,
            }}
          >
            {fields.brandName}
          </div>
        )}

        {/* Title - pure white */}
        {fields.title && (
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              maxWidth: 900,
            }}
          >
            {fields.title}
          </div>
        )}

        {/* Glowing divider line */}
        <div
          style={{
            width: 100,
            height: 1,
            backgroundColor: fields.accentColor,
            boxShadow: `0 0 20px ${fields.accentColor}`,
            margin: "32px 0",
          }}
        />

        {/* Subtitle - muted gray */}
        {fields.subtitle && (
          <div
            style={{
              fontSize: 22,
              fontWeight: 450,
              color: "rgba(255,255,255,0.5)",
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
      </div>
    </TemplateWrapper>
  );
}

export { SpotlightTemplate };
