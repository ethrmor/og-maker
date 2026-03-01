import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";
import {
  NOISE_PATTERN,
  TYPOGRAPHY,
  LOGO_SHADOW,
} from "@/lib/template-styles";

function SplitTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      <div className="flex w-full h-full relative">
        {/* Left panel — content */}
        <div
          className="flex flex-col justify-center relative z-10"
          style={{
            width: "58%",
            height: "100%",
            padding: "64px",
          }}
        >
          {/* Content Surface for readability */}
          <div
            className="flex flex-col h-full justify-center"
            style={{
              backgroundColor: "rgba(255,255,255,0.95)",
              borderRadius: 28,
              border: "1px solid rgba(255,255,255,0.5)",
              boxShadow: "0 40px 100px rgba(15,23,42,0.08)",
              padding: "48px",
            }}
          >
            <div className="flex items-center gap-4">
              {fields.logoUrl && (
                <img
                  src={fields.logoUrl}
                  alt="Logo"
                  style={{
                    maxHeight: 44,
                    width: "auto",
                    filter: LOGO_SHADOW,
                  }}
                />
              )}

              {fields.brandName && (
                <div className="flex items-center gap-3" style={{ marginTop: fields.logoUrl ? 4 : 0 }}>
                  {fields.logoUrl && (
                    <div
                      style={{
                        width: 32,
                        height: 3,
                        backgroundColor: fields.accentColor,
                        opacity: 0.8,
                        borderRadius: 2,
                      }}
                    />
                  )}
                  <div
                    style={{
                      ...TYPOGRAPHY.brand,
                      color: "#374151",
                    }}
                  >
                    {fields.brandName}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center flex-1 mt-12">
              {fields.title && (
                <div
                  style={{
                    fontSize: 62,
                    fontWeight: 750,
                    letterSpacing: "-0.02em",
                    color: "#111827",
                    lineHeight: 1.08,
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {fields.title}
                </div>
              )}

              {fields.subtitle && (
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 450,
                    color: "#475569",
                    marginTop: 16,
                    lineHeight: 1.45,
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
        </div>

        {/* Seam detail */}
        <div
          style={{
            position: "absolute",
            left: "58%",
            top: 0,
            bottom: 0,
            width: 2,
            background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.15), transparent)",
            zIndex: 20,
            transform: "translateX(-50%)",
          }}
        />

        {/* Right panel — accent color, layered */}
        <div
          style={{
            width: "42%",
            height: "100%",
            backgroundColor: fields.accentColor,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glowing orb */}
          <div style={{ position: "absolute", top: -150, right: -150, width: 500, height: 500, background: "radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)" }} />

          {/* Depth gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.14) 0%, transparent 45%, rgba(0,0,0,0.14) 100%)",
            }}
          />
          
          {/* Soft vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 30% 40%, rgba(0,0,0,0.18) 0%, transparent 55%)",
              opacity: 0.6,
            }}
          />

          {/* Subtle dot grid pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              opacity: 0.25,
            }}
          />

          {/* Angled sweep element */}
          <div
            style={{
              position: "absolute",
              right: -380,
              top: 120,
              width: 1400,
              height: 420,
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
              transform: "rotate(-10deg)",
              transformOrigin: "center",
            }}
          />

          {/* Noise overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: NOISE_PATTERN,
              opacity: 0.06,
              mixBlendMode: "overlay",
            }}
          />
        </div>
      </div>
    </TemplateWrapper>
  );
}

export { SplitTemplate };
