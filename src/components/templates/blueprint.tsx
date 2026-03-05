import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";
import { hexToRgba, TYPOGRAPHY, LOGO_SHADOW } from "@/lib/template-styles";

function BlueprintTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Blueprint paper background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#1a365d",
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          zIndex: 0,
        }}
      />

      {/* Faint construction lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(45deg, transparent 48%, rgba(59, 130, 246, 0.05) 49%, rgba(59, 130, 246, 0.05) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(59, 130, 246, 0.05) 49%, rgba(59, 130, 246, 0.05) 51%, transparent 52%)
          `,
          backgroundSize: "80px 80px",
          zIndex: 0,
        }}
      />

      {/* Blueprint corner marks - top left */}
      <svg
        style={{
          position: "absolute",
          top: 30,
          left: 30,
          width: 80,
          height: 80,
          zIndex: 1,
        }}
      >
        <line x1="0" y1="60" x2="0" y2="0" stroke={hexToRgba(fields.accentColor, 0.4)} strokeWidth="1.5" />
        <line x1="0" y1="0" x2="60" y2="0" stroke={hexToRgba(fields.accentColor, 0.4)} strokeWidth="1.5" />
        <circle cx="8" cy="8" r="2" fill={hexToRgba(fields.accentColor, 0.5)} />
        <text x="15" y="12" fill={hexToRgba(fields.accentColor, 0.6)} fontSize="8" fontFamily="monospace">A1</text>
      </svg>

      {/* Blueprint corner marks - top right */}
      <svg
        style={{
          position: "absolute",
          top: 30,
          right: 30,
          width: 80,
          height: 80,
          zIndex: 1,
        }}
      >
        <line x1="80" y1="60" x2="80" y2="0" stroke={hexToRgba(fields.accentColor, 0.4)} strokeWidth="1.5" />
        <line x1="80" y1="0" x2="20" y2="0" stroke={hexToRgba(fields.accentColor, 0.4)} strokeWidth="1.5" />
        <circle cx="72" cy="8" r="2" fill={hexToRgba(fields.accentColor, 0.5)} />
        <text x="50" y="12" fill={hexToRgba(fields.accentColor, 0.6)} fontSize="8" fontFamily="monospace">B1</text>
      </svg>

      {/* Blueprint corner marks - bottom left */}
      <svg
        style={{
          position: "absolute",
          bottom: 30,
          left: 30,
          width: 80,
          height: 80,
          zIndex: 1,
        }}
      >
        <line x1="0" y1="20" x2="0" y2="80" stroke={hexToRgba(fields.accentColor, 0.4)} strokeWidth="1.5" />
        <line x1="0" y1="80" x2="60" y2="80" stroke={hexToRgba(fields.accentColor, 0.4)} strokeWidth="1.5" />
        <circle cx="8" cy="72" r="2" fill={hexToRgba(fields.accentColor, 0.5)} />
        <text x="15" y="70" fill={hexToRgba(fields.accentColor, 0.6)} fontSize="8" fontFamily="monospace">A2</text>
      </svg>

      {/* Blueprint corner marks - bottom right */}
      <svg
        style={{
          position: "absolute",
          bottom: 30,
          right: 30,
          width: 80,
          height: 80,
          zIndex: 1,
        }}
      >
        <line x1="80" y1="20" x2="80" y2="80" stroke={hexToRgba(fields.accentColor, 0.4)} strokeWidth="1.5" />
        <line x1="80" y1="80" x2="20" y2="80" stroke={hexToRgba(fields.accentColor, 0.4)} strokeWidth="1.5" />
        <circle cx="72" cy="72" r="2" fill={hexToRgba(fields.accentColor, 0.5)} />
        <text x="50" y="70" fill={hexToRgba(fields.accentColor, 0.6)} fontSize="8" fontFamily="monospace">B2</text>
      </svg>

      {/* Technical border frame */}
      <div
        style={{
          position: "absolute",
          left: 60,
          top: 60,
          right: 60,
          bottom: 60,
          border: `1.5px solid ${hexToRgba(fields.accentColor, 0.3)}`,
          zIndex: 1,
        }}
      />

      {/* Dimension line - top */}
      <div
        style={{
          position: "absolute",
          top: 42,
          left: 120,
          right: 120,
          height: 20,
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 0,
            right: 0,
            height: 1,
            backgroundColor: hexToRgba(fields.accentColor, 0.3),
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 6,
            left: 0,
            width: 1,
            height: 8,
            backgroundColor: hexToRgba(fields.accentColor, 0.4),
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 6,
            right: 0,
            width: 1,
            height: 8,
            backgroundColor: hexToRgba(fields.accentColor, 0.4),
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            color: hexToRgba(fields.accentColor, 0.5),
            fontSize: 10,
            fontFamily: "monospace",
            letterSpacing: "0.1em",
          }}
        >
          1200
        </div>
      </div>

      {/* Geometric accent - circle with diameter */}
      <svg
        style={{
          position: "absolute",
          right: 100,
          bottom: 100,
          width: 200,
          height: 200,
          zIndex: 0,
          opacity: 0.15,
        }}
      >
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke={fields.accentColor}
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <line x1="20" y1="100" x2="180" y2="100" stroke={fields.accentColor} strokeWidth="0.5" />
        <line x1="100" y1="20" x2="100" y2="180" stroke={fields.accentColor} strokeWidth="0.5" />
        <text x="105" y="95" fill={fields.accentColor} fontSize="10" fontFamily="monospace">Ø</text>
      </svg>

      {/* Main content area */}
      <div
        style={{
          position: "absolute",
          left: 100,
          right: 100,
          top: 100,
          bottom: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        {/* Logo and brand row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 40,
          }}
        >
          {fields.logoUrl && (
            <img
              src={fields.logoUrl}
              alt="Logo"
              style={{
                maxHeight: 48,
                objectFit: "contain",
                filter: `${LOGO_SHADOW} brightness(0) invert(1)`,
              }}
            />
          )}
          
          {fields.brandName && (
            <div
              style={{
                ...TYPOGRAPHY.brand,
                color: hexToRgba(fields.accentColor, 0.9),
                fontFamily: "monospace",
                letterSpacing: "0.15em",
                borderLeft: `2px solid ${hexToRgba(fields.accentColor, 0.5)}`,
                paddingLeft: 20,
              }}
            >
              {fields.brandName}
            </div>
          )}
        </div>

        {/* Title with technical styling */}
        {fields.title && (
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "0.02em",
              lineHeight: 1.15,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              fontFamily: "'Geist Variable', sans-serif",
            }}
          >
            {fields.title}
          </div>
        )}

        {/* Decorative line under title */}
        <div
          style={{
            width: 80,
            height: 2,
            backgroundColor: fields.accentColor,
            marginTop: 24,
            marginBottom: 24,
          }}
        />

        {/* Subtitle */}
        {fields.subtitle && (
          <div
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: hexToRgba(fields.accentColor, 0.7),
              lineHeight: 1.6,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              maxWidth: 700,
              fontFamily: "monospace",
              letterSpacing: "0.02em",
            }}
          >
            {fields.subtitle}
          </div>
        )}

        {/* Technical specs row */}
        <div
          style={{
            display: "flex",
            gap: 40,
            marginTop: 40,
            color: hexToRgba(fields.accentColor, 0.5),
            fontSize: 11,
            fontFamily: "monospace",
            letterSpacing: "0.1em",
          }}
        >
          <span>REV. 1.0</span>
          <span>SCALE 1:1</span>
          <span>OPEN GRAPH</span>
        </div>
      </div>
    </TemplateWrapper>
  );
}

export { BlueprintTemplate };
