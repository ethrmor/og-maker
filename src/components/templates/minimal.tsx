import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";

function MinimalTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      <div
        className="flex flex-col items-center justify-center w-full h-full"
        style={{ padding: 80 }}
      >
        {fields.logoUrl && (
          <img
            src={fields.logoUrl}
            alt="Logo"
            style={{ maxHeight: 48, width: "auto" }}
          />
        )}

        {fields.brandName && (
          <div
            style={{
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontWeight: 500,
              color: "#9ca3af",
              marginTop: fields.logoUrl ? 12 : 0,
            }}
          >
            {fields.brandName}
          </div>
        )}

        <div
          style={{
            width: 40,
            height: 2,
            backgroundColor: fields.accentColor,
            marginTop: 24,
            marginBottom: 24,
          }}
        />

        {fields.title && (
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#111827",
              textAlign: "center",
              textWrap: "balance",
              lineHeight: 1.15,
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
              fontSize: 20,
              fontWeight: 400,
              color: "#6b7280",
              textAlign: "center",
              lineHeight: 1.5,
              marginTop: 12,
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
