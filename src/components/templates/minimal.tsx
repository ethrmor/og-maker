import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";

function MinimalTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Dot grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      <div
        className="flex flex-col items-center justify-center w-full h-full relative z-10"
        style={{
          padding: 64,
          transform: "translateY(-10px)",
        }}
      >
        {fields.logoUrl && (
          <img
            src={fields.logoUrl}
            alt="Logo"
            style={{ maxHeight: 44, width: "auto" }}
          />
        )}

        {fields.brandName && (
          <div
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "#374151",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              marginTop: fields.logoUrl ? 12 : 0,
            }}
          >
            {fields.brandName}
          </div>
        )}

        <div
          style={{
            width: 80,
            height: 3,
            backgroundColor: fields.accentColor,
            marginTop: 32,
            marginBottom: 32,
          }}
        />

        {fields.title && (
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#111827",
              textAlign: "center",
              textWrap: "balance",
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
              color: "#4b5563",
              textAlign: "center",
              lineHeight: 1.5,
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
    </TemplateWrapper>
  );
}

export { MinimalTemplate };
