import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";

function GeometricTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Concentric rings — structured, intentional, mathematical */}
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          right: -100,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 0,
        }}
      >
        {/* Outermost ring */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            border: `2px solid ${fields.accentColor}`,
            borderRadius: "50%",
            opacity: 0.1,
          }}
        />
        {/* Middle ring */}
        <div
          style={{
            position: "absolute",
            inset: 80,
            border: `2px solid ${fields.accentColor}`,
            borderRadius: "50%",
            opacity: 0.16,
          }}
        />
        {/* Inner ring */}
        <div
          style={{
            position: "absolute",
            inset: 160,
            border: `2px solid ${fields.accentColor}`,
            borderRadius: "50%",
            opacity: 0.22,
          }}
        />
        {/* Core dot */}
        <div
          style={{
            position: "absolute",
            inset: 230,
            backgroundColor: fields.accentColor,
            borderRadius: "50%",
            opacity: 0.12,
          }}
        />
      </div>

      {/* Small accent dots — placed precisely for rhythm */}
      <div
        style={{
          position: "absolute",
          width: 8,
          height: 8,
          backgroundColor: fields.accentColor,
          borderRadius: "50%",
          opacity: 0.25,
          right: 280,
          top: 64,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 6,
          height: 6,
          backgroundColor: fields.accentColor,
          borderRadius: "50%",
          opacity: 0.2,
          right: 160,
          bottom: 80,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        className="flex flex-col justify-center"
        style={{
          width: "58%",
          height: "100%",
          padding: 64,
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

        <div style={{ display: "flex", flexDirection: "column", marginTop: 32 }}>
          {fields.title && (
            <div
              style={{
                fontSize: 64,
                fontWeight: 700,
                color: "#0f172a",
                maxWidth: 600,
                lineHeight: 1.15,
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
                fontSize: 22,
                fontWeight: 450,
                color: "#475569",
                maxWidth: 540,
                marginTop: 14,
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
    </TemplateWrapper>
  );
}

export { GeometricTemplate };
