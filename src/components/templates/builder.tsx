import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";
import { NOISE_PATTERN } from "@/lib/template-styles";

function BuilderTemplate({ fields }: TemplateProps) {
  // Convert percentage positions to actual coordinates
  // Canvas is 1200x630
  const canvasWidth = 1200;
  const canvasHeight = 630;

  const titleLeft = (fields.titleX / 100) * canvasWidth;
  const titleTop = (fields.titleY / 100) * canvasHeight;
  const titleWidthPx = (fields.titleWidth / 100) * canvasWidth;

  const subtitleLeft = (fields.subtitleX / 100) * canvasWidth;
  const subtitleTop = (fields.subtitleY / 100) * canvasHeight;
  const subtitleWidthPx = (fields.subtitleWidth / 100) * canvasWidth;

  const brandNameLeft = (fields.brandNameX / 100) * canvasWidth;
  const brandNameTop = (fields.brandNameY / 100) * canvasHeight;

  const logoLeft = (fields.logoX / 100) * canvasWidth;
  const logoTop = (fields.logoY / 100) * canvasHeight;
  const logoHeightPx = (fields.logoWidth / 100) * canvasHeight;

  return (
    <TemplateWrapper fields={fields}>
      {/* Subtle noise texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE_PATTERN,
          opacity: 0.03,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Draggable elements layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
        }}
      >
        {/* Logo element */}
        {fields.logoUrl && (
          <div
            style={{
              position: "absolute",
              left: logoLeft - logoHeightPx / 2,
              top: logoTop - logoHeightPx / 2,
              transform: `rotate(${fields.logoRotation}deg)`,
              zIndex: 10,
            }}
          >
            <img
              src={fields.logoUrl}
              alt="Logo"
              style={{
                height: logoHeightPx,
                maxWidth: logoHeightPx * 4,
                objectFit: "contain",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
              }}
            />
          </div>
        )}

        {/* Title element */}
        {fields.title && (
          <div
            style={{
              position: "absolute",
              left: titleLeft,
              top: titleTop,
              width: titleWidthPx,
              transform: `translateX(-50%) rotate(${fields.titleRotation}deg)`,
              textAlign: "center",
              zIndex: 20,
            }}
          >
            <h1
              style={{
                fontSize: 48,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: fields.accentColor,
                lineHeight: 1.1,
                margin: 0,
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                wordBreak: "break-word",
              }}
            >
              {fields.title}
            </h1>
          </div>
        )}

        {/* Subtitle element */}
        {fields.subtitle && (
          <div
            style={{
              position: "absolute",
              left: subtitleLeft,
              top: subtitleTop,
              width: subtitleWidthPx,
              transform: `translateX(-50%) rotate(${fields.subtitleRotation}deg)`,
              textAlign: "center",
              zIndex: 15,
            }}
          >
            <p
              style={{
                fontSize: 24,
                fontWeight: 400,
                color: fields.accentColor,
                opacity: 0.8,
                lineHeight: 1.4,
                margin: 0,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                wordBreak: "break-word",
              }}
            >
              {fields.subtitle}
            </p>
          </div>
        )}

        {/* Brand Name element */}
        {fields.brandName && (
          <div
            style={{
              position: "absolute",
              left: brandNameLeft,
              top: brandNameTop,
              transform: `translateX(-50%) rotate(${fields.brandNameRotation}deg)`,
              textAlign: "center",
              zIndex: 5,
            }}
          >
            <span
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: fields.accentColor,
                opacity: 0.6,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              {fields.brandName}
            </span>
          </div>
        )}
      </div>
    </TemplateWrapper>
  );
}

export { BuilderTemplate };
