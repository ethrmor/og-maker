import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";

function ElegantTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
        }}
      />
      
      <div
        className="flex flex-col items-center justify-center w-full h-full relative z-10"
        style={{ padding: 80 }}
      >
        {fields.logoUrl && (
          <img
            src={fields.logoUrl}
            alt="Logo"
            style={{
              maxHeight: 44,
              width: "auto",
              filter: "drop-shadow(0 0 20px rgba(255,255,255,0.1))",
            }}
          />
        )}

        {fields.brandName && (
          <div
            style={{
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              fontWeight: 400,
              color: fields.accentColor,
              marginTop: fields.logoUrl ? 16 : 0,
              textAlign: "center",
            }}
          >
            {fields.brandName}
          </div>
        )}

        <div
          style={{
            width: 60,
            height: 1,
            backgroundColor: fields.accentColor,
            opacity: 0.4,
            marginTop: 32,
            marginBottom: 32,
          }}
        />

        {fields.title && (
          <div
            style={{
              fontSize: 46,
              fontWeight: 600,
              color: "#f1f5f9",
              textAlign: "center",
              textWrap: "balance",
              lineHeight: 1.25,
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
              fontSize: 18,
              fontWeight: 300,
              color: "rgba(255,255,255,0.45)",
              textAlign: "center",
              lineHeight: 1.6,
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

        <div
          style={{
            width: 60,
            height: 1,
            backgroundColor: fields.accentColor,
            opacity: 0.4,
            marginTop: 32,
          }}
        />
      </div>
    </TemplateWrapper>
  );
}

export { ElegantTemplate };
