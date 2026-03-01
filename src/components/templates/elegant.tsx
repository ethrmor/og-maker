import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";

function ElegantTemplate({ fields }: TemplateProps) {
  // Convert hex to rgba for the gradient and shadow if possible, but since we only have hex,
  // we can use a trick or just use the hex color directly in the gradient.
  // CSS gradients support hex colors with opacity in modern browsers (e.g., #RRGGBBAA).
  // However, to be safe and match the prompt's `rgba(201,169,110,0.06)`, we can just use the hex color
  // and rely on the fact that it will blend, or we can use the hex color directly.
  // Actually, the prompt says: `radial-gradient(ellipse at 80% 80%, rgba(201,169,110,0.06) 0%, transparent 60%)` using accentColor.
  // Let's use the accentColor directly but we can't easily add opacity to a hex string in inline styles without a helper.
  // Wait, we can use `color-mix(in srgb, ${fields.accentColor} 6%, transparent)` for modern CSS, or just use the hex color if it's a string.
  // Let's use `color-mix(in srgb, ${fields.accentColor} 6%, transparent)` for the gradient and 20% for the shadow.
  
  return (
    <TemplateWrapper fields={fields}>
      {/* Background gradients */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%), radial-gradient(ellipse at 80% 80%, color-mix(in srgb, ${fields.accentColor} 6%, transparent) 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />

      {/* Noise overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }}
      />

      <div
        className="flex flex-col items-center justify-center w-full h-full relative z-10"
        style={{ padding: 64 }}
      >
        {fields.logoUrl && (
          <img
            src={fields.logoUrl}
            alt="Logo"
            style={{
              maxHeight: 48,
              width: "auto",
              filter: `drop-shadow(0 0 30px color-mix(in srgb, ${fields.accentColor} 20%, transparent))`,
            }}
          />
        )}

        {fields.brandName && (
          <div
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: fields.accentColor,
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              marginTop: fields.logoUrl ? 16 : 0,
              textAlign: "center",
            }}
          >
            {fields.brandName}
          </div>
        )}

        <div
          style={{
            width: 100,
            height: 1.5,
            backgroundColor: fields.accentColor,
            opacity: 0.5,
            marginTop: 32,
            marginBottom: 32,
          }}
        />

        {fields.title && (
          <div
            style={{
              fontSize: 56,
              fontWeight: 600,
              color: "#f8fafc",
              textAlign: "center",
              textWrap: "balance",
              lineHeight: 1.2,
              letterSpacing: "0.01em",
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
              color: "rgba(255,255,255,0.6)",
              textAlign: "center",
              lineHeight: 1.5,
              marginTop: 18,
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
            width: 100,
            height: 1.5,
            backgroundColor: fields.accentColor,
            opacity: 0.5,
            marginTop: 32,
          }}
        />
      </div>
    </TemplateWrapper>
  );
}

export { ElegantTemplate };
