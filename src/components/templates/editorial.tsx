import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";
import { NOISE_PATTERN, LOGO_SHADOW } from "@/lib/template-styles";

function EditorialTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Warm paper texture background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#F4F0EA",
          zIndex: 0,
        }}
      />

      {/* Subtle noise overlay for paper texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE_PATTERN,
          opacity: 0.03,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Hairline grid borders */}
      <div
        style={{
          position: "absolute",
          inset: 40,
          border: "1px solid rgba(10,10,10,0.08)",
          zIndex: 0,
        }}
      />

      {/* Massive background ampersand */}
      <div
        style={{
          position: "absolute",
          right: -100,
          bottom: -150,
          fontSize: 600,
          fontWeight: 300,
          fontFamily: "Georgia, serif",
          color: fields.accentColor,
          opacity: 0.04,
          zIndex: 0,
          lineHeight: 1,
          pointerEvents: "none",
        }}
      >
        &amp;
      </div>

      {/* Vertical dividing line - accent color */}
      <div
        style={{
          position: "absolute",
          left: 280,
          top: 60,
          bottom: 60,
          width: 2,
          backgroundColor: fields.accentColor,
          zIndex: 1,
        }}
      />

      {/* Left column - metadata area */}
      <div
        style={{
          position: "absolute",
          left: 60,
          top: 60,
          width: 200,
          bottom: 60,
          display: "flex",
          flexDirection: "column",
          zIndex: 2,
        }}
      >
        {/* Logo */}
        {fields.logoUrl && (
          <img
            src={fields.logoUrl}
            alt="Logo"
            style={{
              maxHeight: 36,
              objectFit: "contain",
              filter: LOGO_SHADOW,
              marginBottom: 40,
            }}
          />
        )}

        {/* Brand name - micro typography */}
        {fields.brandName && (
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: fields.accentColor,
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              marginTop: "auto",
            }}
          >
            {fields.brandName}
          </div>
        )}

        {/* Faux print metadata */}
        <div
          style={{
            fontSize: 10,
            fontWeight: 500,
            color: "#6b7280",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginTop: 12,
          }}
        >
          VOL. 01 // ED. 04
        </div>
      </div>

      {/* Right area - main content */}
      <div
        style={{
          position: "absolute",
          left: 320,
          top: 60,
          right: 60,
          bottom: 60,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        {/* Title with geometric period */}
        <div style={{ position: "relative" }}>
          {fields.title && (
            <div
              style={{
                fontSize: 64,
                fontWeight: 600,
                color: "#0A0A0A",
                fontFamily: "Georgia, 'Times New Roman', serif",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                maxWidth: 800,
              }}
            >
              {fields.title}
            </div>
          )}

          {/* Accent circle as typographic period */}
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: 16,
              width: 16,
              height: 16,
              backgroundColor: fields.accentColor,
              borderRadius: "50%",
            }}
          />
        </div>

        {/* Subtitle - micro typography */}
        {fields.subtitle && (
          <div
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: "#4b5563",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginTop: 32,
              maxWidth: 500,
              lineHeight: 1.6,
            }}
          >
            {fields.subtitle}
          </div>
        )}
      </div>
    </TemplateWrapper>
  );
}

export { EditorialTemplate };
