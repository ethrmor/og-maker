import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";

function GeometricTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Geometric Shapes Background */}
      <div
        style={{
          position: "absolute",
          width: 240,
          height: 240,
          backgroundColor: fields.accentColor,
          opacity: 0.12,
          borderRadius: "50%",
          right: 60,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 140,
          height: 140,
          backgroundColor: fields.accentColor,
          opacity: 0.08,
          transform: "rotate(45deg)",
          right: 180,
          top: 80,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 80,
          height: 80,
          backgroundColor: fields.accentColor,
          opacity: 0.18,
          borderRadius: "50%",
          right: 40,
          top: 60,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: 1,
          backgroundColor: fields.accentColor,
          opacity: 0.1,
          bottom: 200,
          left: 0,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 12,
          height: 12,
          backgroundColor: fields.accentColor,
          opacity: 0.3,
          borderRadius: "50%",
          left: 300,
          bottom: 100,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        className="flex flex-col justify-center w-full h-full"
        style={{
          padding: 80,
          position: "relative",
          zIndex: 1,
        }}
      >
        {fields.logoUrl && (
          <img
            src={fields.logoUrl}
            alt="Logo"
            style={{
              maxHeight: 40,
              objectFit: "contain",
              alignSelf: "flex-start",
            }}
          />
        )}

        {fields.brandName && (
          <div
            style={{
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontWeight: 500,
              color: "#94a3b8",
              marginTop: fields.logoUrl ? 8 : 0,
            }}
          >
            {fields.brandName}
          </div>
        )}

        {fields.title && (
          <div
            className="line-clamp-3"
            style={{
              fontSize: 50,
              fontWeight: 700,
              color: "#0f172a",
              maxWidth: 580,
              lineHeight: 1.2,
              marginTop: 24,
            }}
          >
            {fields.title}
          </div>
        )}

        {fields.subtitle && (
          <div
            className="line-clamp-2"
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: "#64748b",
              maxWidth: 520,
              marginTop: 12,
            }}
          >
            {fields.subtitle}
          </div>
        )}
      </div>
    </TemplateWrapper>
  );
}

export { GeometricTemplate };
