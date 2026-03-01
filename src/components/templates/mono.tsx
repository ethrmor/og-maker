import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";

function MonoTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Solid Accent Background Override */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: fields.accentColor,
          zIndex: 0,
        }}
      />

      {/* Decorative Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(0,0,0,0.12) 100%)",
          zIndex: 0,
        }}
      />

      {/* Large Circle */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          backgroundColor: "rgba(255,255,255,0.05)",
          borderRadius: "50%",
          right: -100,
          bottom: -100,
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

        {fields.title && (
          <div
            className="line-clamp-2"
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#ffffff",
              textTransform: "uppercase",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
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
              fontSize: 20,
              fontWeight: 400,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.4,
              marginTop: 16,
            }}
          >
            {fields.subtitle}
          </div>
        )}

        {fields.brandName && (
          <div
            style={{
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              fontWeight: 500,
              color: "rgba(255,255,255,0.5)",
              marginTop: "auto",
            }}
          >
            {fields.brandName}
          </div>
        )}
      </div>
    </TemplateWrapper>
  );
}

export { MonoTemplate };
