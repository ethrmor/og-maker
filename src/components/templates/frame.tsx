import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";

function FrameTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Outer Frame */}
      <div
        style={{
          position: "absolute",
          inset: 28,
          border: "2px solid",
          borderColor: fields.accentColor,
          opacity: 0.8,
          borderRadius: 8,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Inner Frame */}
      <div
        style={{
          position: "absolute",
          inset: 36,
          border: "1px solid",
          borderColor: fields.accentColor,
          opacity: 0.3,
          borderRadius: 4,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Corner Ornaments */}
      <div
        style={{
          position: "absolute",
          width: 6,
          height: 6,
          backgroundColor: fields.accentColor,
          opacity: 0.6,
          top: 25,
          left: 25,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 6,
          height: 6,
          backgroundColor: fields.accentColor,
          opacity: 0.6,
          top: 25,
          right: 25,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 6,
          height: 6,
          backgroundColor: fields.accentColor,
          opacity: 0.6,
          bottom: 25,
          left: 25,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 6,
          height: 6,
          backgroundColor: fields.accentColor,
          opacity: 0.6,
          bottom: 25,
          right: 25,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        className="flex flex-col items-center justify-center w-full h-full"
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
              maxHeight: 44,
              objectFit: "contain",
            }}
          />
        )}

        {fields.brandName && (
          <div
            className="text-center"
            style={{
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              fontWeight: 400,
              color: "rgba(255,255,255,0.6)",
              marginTop: fields.logoUrl ? 12 : 0,
            }}
          >
            {fields.brandName}
          </div>
        )}

        {fields.title && (
          <div
            className="text-center line-clamp-2"
            style={{
              fontSize: 46,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
              textWrap: "balance",
              marginTop: 28,
            }}
          >
            {fields.title}
          </div>
        )}

        {fields.subtitle && (
          <div
            className="text-center line-clamp-2"
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: "rgba(255,255,255,0.55)",
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

export { FrameTemplate };
