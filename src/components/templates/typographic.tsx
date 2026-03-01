import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";
import { NOISE_PATTERN } from "@/lib/template-styles";

function TypographicTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* White base */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#ffffff",
          zIndex: 0,
        }}
      />

      {/* Thick border - accent color */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          border: `12px solid ${fields.accentColor}`,
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      {/* Subtle noise */}
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

      {/* Background outlined title - bleeding off edges */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: 200,
          fontWeight: 900,
          color: "transparent",
          WebkitTextStroke: `2px ${fields.accentColor}`,
          textTransform: "uppercase",
          letterSpacing: "-0.03em",
          whiteSpace: "nowrap",
          zIndex: 0,
          opacity: 0.15,
          lineHeight: 1,
        }}
      >
        {fields.title || "TITLE"}
      </div>

      {/* Second background title - rotated */}
      <div
        style={{
          position: "absolute",
          right: -100,
          bottom: 50,
          fontSize: 180,
          fontWeight: 900,
          color: "transparent",
          WebkitTextStroke: `1px ${fields.accentColor}`,
          textTransform: "uppercase",
          letterSpacing: "-0.03em",
          whiteSpace: "nowrap",
          zIndex: 0,
          opacity: 0.08,
          transform: "rotate(-90deg)",
          transformOrigin: "right bottom",
          lineHeight: 1,
        }}
      >
        {fields.title || "TITLE"}
      </div>

      {/* Crosshairs in corners */}
      <div
        style={{
          position: "absolute",
          left: 60,
          top: 60,
          width: 40,
          height: 40,
          zIndex: 1,
        }}
      >
        <div style={{ position: "absolute", left: 20, top: 0, width: 1, height: 40, backgroundColor: "#000" }} />
        <div style={{ position: "absolute", left: 0, top: 20, width: 40, height: 1, backgroundColor: "#000" }} />
      </div>
      <div
        style={{
          position: "absolute",
          right: 60,
          top: 60,
          width: 40,
          height: 40,
          zIndex: 1,
        }}
      >
        <div style={{ position: "absolute", left: 20, top: 0, width: 1, height: 40, backgroundColor: "#000" }} />
        <div style={{ position: "absolute", left: 0, top: 20, width: 40, height: 1, backgroundColor: "#000" }} />
      </div>
      <div
        style={{
          position: "absolute",
          left: 60,
          bottom: 60,
          width: 40,
          height: 40,
          zIndex: 1,
        }}
      >
        <div style={{ position: "absolute", left: 20, top: 0, width: 1, height: 40, backgroundColor: "#000" }} />
        <div style={{ position: "absolute", left: 0, top: 20, width: 40, height: 1, backgroundColor: "#000" }} />
      </div>
      <div
        style={{
          position: "absolute",
          right: 60,
          bottom: 60,
          width: 40,
          height: 40,
          zIndex: 1,
        }}
      >
        <div style={{ position: "absolute", left: 20, top: 0, width: 1, height: 40, backgroundColor: "#000" }} />
        <div style={{ position: "absolute", left: 0, top: 20, width: 40, height: 1, backgroundColor: "#000" }} />
      </div>

      {/* Main content area */}
      <div
        style={{
          position: "absolute",
          inset: 100,
          display: "flex",
          flexDirection: "column",
          zIndex: 2,
        }}
      >
        {/* Top row - logo and brand badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {fields.logoUrl && (
            <img
              src={fields.logoUrl}
              alt="Logo"
              style={{
                maxHeight: 40,
                objectFit: "contain",
              }}
            />
          )}

          {/* Brand badge - pill shaped */}
          {fields.brandName && (
            <div
              style={{
                backgroundColor: fields.accentColor,
                color: "#ffffff",
                padding: "8px 20px",
                borderRadius: 100,
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              {fields.brandName}
            </div>
          )}
        </div>

        {/* Main content - centered */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Title */}
          {fields.title && (
            <div
              style={{
                fontSize: 68,
                fontWeight: 900,
                color: "#000000",
                textTransform: "uppercase",
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {fields.title}
            </div>
          )}
        </div>
      </div>

      {/* Marquee subtitle at bottom */}
      {fields.subtitle && (
        <div
          style={{
            position: "absolute",
            left: 12,
            right: 12,
            bottom: 12,
            backgroundColor: "#000000",
            padding: "16px 40px",
            zIndex: 3,
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {fields.subtitle} • {fields.subtitle} • {fields.subtitle} • {fields.subtitle} • {fields.subtitle}
          </div>
        </div>
      )}
    </TemplateWrapper>
  );
}

export { TypographicTemplate };
