import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";

function SplitTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      <div className="flex w-full h-full relative">
        {/* Left panel */}
        <div
          className="flex flex-col justify-center"
          style={{
            width: "58%",
            height: "100%",
            padding: "80px 40px 80px 80px",
            backgroundColor: "transparent",
          }}
        >
          {fields.logoUrl && (
            <img
              src={fields.logoUrl}
              alt="Logo"
              style={{ maxHeight: 36, width: "auto", alignSelf: "flex-start" }}
            />
          )}

          {fields.brandName && (
            <div
              style={{
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontWeight: 500,
                color: "#9ca3af",
                marginTop: fields.logoUrl ? 8 : 0,
              }}
            >
              {fields.brandName}
            </div>
          )}

          <div className="flex flex-col justify-center flex-1">
            {fields.title && (
              <div
                style={{
                  fontSize: 44,
                  fontWeight: 700,
                  color: "#111827",
                  lineHeight: 1.2,
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
                  fontSize: 17,
                  fontWeight: 400,
                  color: "#6b7280",
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
        </div>

        {/* Right panel */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "42%",
            height: "100%",
            backgroundColor: fields.accentColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 300,
              height: 300,
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: "50%",
              transform: "translateY(30px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 16,
              top: 0,
              bottom: 0,
              width: 1,
              backgroundColor: "rgba(255,255,255,0.2)",
            }}
          />
        </div>
      </div>
    </TemplateWrapper>
  );
}

export { SplitTemplate };
