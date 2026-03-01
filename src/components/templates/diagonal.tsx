import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";

function DiagonalTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Diagonal Bands */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: fields.accentColor,
          clipPath: "polygon(0 65%, 100% 30%, 100% 100%, 0 100%)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: fields.accentColor,
          opacity: 0.3,
          clipPath: "polygon(0 62%, 100% 27%, 100% 28%, 0 63%)",
          zIndex: 0,
        }}
      />

      {/* Small White Circle */}
      <div
        style={{
          position: "absolute",
          width: 40,
          height: 40,
          backgroundColor: "rgba(255,255,255,0.15)",
          borderRadius: "50%",
          right: 120,
          bottom: 80,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        className="flex flex-col justify-start w-full h-full"
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
            className="line-clamp-2"
            style={{
              fontSize: 50,
              fontWeight: 700,
              color: "#0f172a",
              maxWidth: 700,
              lineHeight: 1.15,
              marginTop: 32,
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

export { DiagonalTemplate };
