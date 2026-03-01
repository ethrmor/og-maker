import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";

function DiagonalTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Accent bar at bottom */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 140,
          backgroundColor: fields.accentColor,
          zIndex: 0,
        }}
      >
        {/* Subtle gradient for depth */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 40%, rgba(0,0,0,0.05) 100%)",
          }}
        />
      </div>

      {/* Thin accent line above the bar for separation */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 140,
          height: 3,
          backgroundColor: fields.accentColor,
          opacity: 0.2,
          zIndex: 0,
        }}
      />

      {/* Content — sits in the top white zone */}
      <div
        className="flex flex-col"
        style={{
          width: "100%",
          height: "100%",
          padding: "64px 64px 0 64px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {fields.logoUrl && (
            <img
              src={fields.logoUrl}
              alt="Logo"
              style={{
                maxHeight: 44,
                objectFit: "contain",
                alignSelf: "flex-start",
              }}
            />
          )}

          {fields.brandName && (
            <div
              style={{
                fontSize: 15,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontWeight: 600,
                color: "#374151",
              }}
            >
              {fields.brandName}
            </div>
          )}
        </div>

        {/* Title & subtitle — vertically centered in the available white space */}
        <div
          className="flex flex-col justify-center"
          style={{ flex: 1, paddingBottom: 24 }}
        >
          {fields.title && (
            <div
              style={{
                fontSize: 68,
                fontWeight: 700,
                color: "#0f172a",
                maxWidth: 900,
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

          {fields.subtitle && (
            <div
              style={{
                fontSize: 24,
                fontWeight: 450,
                color: "#475569",
                marginTop: 16,
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

      {/* Brand name repeated in accent bar — right-aligned, white */}
      {fields.brandName && (
        <div
          style={{
            position: "absolute",
            right: 64,
            bottom: 52,
            fontSize: 14,
            fontWeight: 600,
            color: "rgba(255,255,255,0.75)",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            zIndex: 1,
          }}
        >
          {fields.brandName}
        </div>
      )}
    </TemplateWrapper>
  );
}

export { DiagonalTemplate };
