import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";

function BoldTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {fields.title && (
        <div
          style={{
            position: "absolute",
            right: 40,
            top: -40,
            fontSize: 300,
            fontWeight: 900,
            color: "rgba(255,255,255,0.04)",
            lineHeight: 1,
            pointerEvents: "none",
          }}
        >
          {fields.title.charAt(0)}
        </div>
      )}

      <div
        className="flex flex-col justify-center w-full h-full relative z-10"
        style={{ padding: 80 }}
      >
        {fields.logoUrl && (
          <img
            src={fields.logoUrl}
            alt="Logo"
            style={{ maxHeight: 40, width: "auto", alignSelf: "flex-start" }}
          />
        )}

        {fields.brandName && (
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "rgba(255,255,255,0.7)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginTop: fields.logoUrl ? 8 : 0,
            }}
          >
            {fields.brandName}
          </div>
        )}

        {fields.title && (
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#ffffff",
              textTransform: "uppercase",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              marginTop: 24,
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
              fontSize: 22,
              fontWeight: 400,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.4,
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

export { BoldTemplate };
