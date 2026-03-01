import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";

function SplitTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      <div className="flex w-full h-full">
        {/* Left panel — content */}
        <div
          className="flex flex-col justify-center"
          style={{
            width: "55%",
            height: "100%",
            padding: "64px 48px 64px 64px",
          }}
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
                fontSize: 15,
                fontWeight: 600,
                color: "#374151",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginTop: fields.logoUrl ? 10 : 0,
              }}
            >
              {fields.brandName}
            </div>
          )}

          <div className="flex flex-col justify-center flex-1">
            {fields.title && (
              <div
                style={{
                  fontSize: 56,
                  fontWeight: 700,
                  color: "#111827",
                  lineHeight: 1.15,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
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
                  fontWeight: 450,
                  color: "#4b5563",
                  marginTop: 14,
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
        </div>

        {/* Right panel — accent color, clean */}
        <div
          style={{
            width: "45%",
            height: "100%",
            backgroundColor: fields.accentColor,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle depth gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(0,0,0,0.08) 100%)",
            }}
          />
          {/* Single thin horizontal line for structure */}
          <div
            style={{
              position: "absolute",
              left: 40,
              right: 40,
              top: "62%",
              height: 1,
              backgroundColor: "rgba(255,255,255,0.15)",
            }}
          />
        </div>
      </div>
    </TemplateWrapper>
  );
}

export { SplitTemplate };
