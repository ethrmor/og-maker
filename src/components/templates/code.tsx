import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";
import { hexToRgba, TYPOGRAPHY, LOGO_SHADOW } from "@/lib/template-styles";

function CodeTemplate({ fields }: TemplateProps) {
  const codeBg = "#0d1117";
  const lineNumberColor = "#484f58";
  const commentColor = "#8b949e";
  const keywordColor = "#ff7b72";
  const stringColor = "#a5d6ff";
  const functionColor = "#d2a8ff";

  return (
    <TemplateWrapper fields={fields}>
      {/* Terminal background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: codeBg,
          zIndex: 0,
        }}
      />

      {/* Subtle grid pattern for code feel */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(48, 54, 61, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(48, 54, 61, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          zIndex: 0,
          opacity: 0.5,
        }}
      />

      {/* Window chrome bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 40,
          backgroundColor: "#161b22",
          borderBottom: "1px solid #30363d",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          gap: 8,
        }}
      >
        {/* Window controls */}
        <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#ff5f56" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#ffbd2e" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#27c93f" }} />

        {/* Window title */}
        <div
          style={{
            marginLeft: 20,
            fontFamily: "monospace",
            fontSize: 13,
            color: "#8b949e",
          }}
        >
          og-image.ts — {fields.brandName || "untitled"}
        </div>
      </div>

      {/* Sidebar with file tree */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 40,
          width: 220,
          bottom: 0,
          backgroundColor: "#0d1117",
          borderRight: "1px solid #30363d",
          zIndex: 0,
          padding: "20px 16px",
        }}
      >
        {/* File tree items */}
        <div style={{ fontFamily: "monospace", fontSize: 13, color: commentColor, marginBottom: 16 }}>
          EXPLORER
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: keywordColor }}>📁</span>
            <span style={{ fontFamily: "monospace", fontSize: 13, color: "#c9d1d9" }}>src</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, paddingLeft: 20 }}>
            <span style={{ color: stringColor }}>📄</span>
            <span style={{ fontFamily: "monospace", fontSize: 13, color: "#c9d1d9" }}>App.tsx</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, paddingLeft: 20 }}>
            <span style={{ color: stringColor }}>📄</span>
            <span style={{ fontFamily: "monospace", fontSize: 13, color: "#c9d1d9" }}>index.css</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, paddingLeft: 20 }}>
            <span style={{ color: functionColor, fontWeight: 600 }}>📄</span>
            <span style={{ fontFamily: "monospace", fontSize: 13, color: "#c9d1d9" }}>og-image.ts</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: keywordColor }}>📁</span>
            <span style={{ fontFamily: "monospace", fontSize: 13, color: "#c9d1d9" }}>public</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: keywordColor }}>📁</span>
            <span style={{ fontFamily: "monospace", fontSize: 13, color: "#c9d1d9" }}>assets</span>
          </div>
        </div>
      </div>

      {/* Code editor background */}
      <div
        style={{
          position: "absolute",
          left: 220,
          top: 40,
          right: 0,
          bottom: 0,
          backgroundColor: codeBg,
          zIndex: 0,
        }}
      />

      {/* Line numbers column */}
      <div
        style={{
          position: "absolute",
          left: 220,
          top: 60,
          width: 50,
          zIndex: 1,
          fontFamily: "monospace",
          fontSize: 14,
          lineHeight: "28px",
          color: lineNumberColor,
          textAlign: "right",
          paddingRight: 20,
        }}
      >
        1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11<br />12<br />13<br />14<br />15
      </div>

      {/* Code content decoration */}
      <div
        style={{
          position: "absolute",
          left: 290,
          top: 60,
          right: 100,
          zIndex: 1,
          fontFamily: "monospace",
          fontSize: 14,
          lineHeight: "28px",
        }}
      >
        <div>
          <span style={{ color: commentColor }}>{`// Generate OG image for social sharing`}</span>
        </div>
        <div>
          <span style={{ color: keywordColor }}>import</span>
          <span style={{ color: "#c9d1d9" }}> {`{ OGImage }`} </span>
          <span style={{ color: keywordColor }}>from</span>
          <span style={{ color: stringColor }}> &quot;@/components/og&quot;</span>
        </div>
        <div style={{ color: "#c9d1d9" }}>&nbsp;</div>
        <div>
          <span style={{ color: keywordColor }}>export const</span>
          <span style={{ color: functionColor }}> metadata</span>
          <span style={{ color: "#c9d1d9" }}> = {`{`}</span>
        </div>
        <div style={{ paddingLeft: 20 }}>
          <span style={{ color: "#c9d1d9" }}>title:</span>
          <span style={{ color: stringColor }}> &quot;{fields.title || "Your Title Here"}&quot;</span>
          <span style={{ color: "#c9d1d9" }}>,</span>
        </div>
        <div style={{ paddingLeft: 20 }}>
          <span style={{ color: "#c9d1d9" }}>description:</span>
          <span style={{ color: stringColor }}> &quot;{fields.subtitle || "Your description here..."}&quot;</span>
          <span style={{ color: "#c9d1d9" }}>,</span>
        </div>
        <div style={{ paddingLeft: 20 }}>
          <span style={{ color: "#c9d1d9" }}>openGraph: {`{`}</span>
        </div>
        <div style={{ paddingLeft: 40 }}>
          <span style={{ color: "#c9d1d9" }}>images: [{`{`} url: </span>
          <span style={{ color: stringColor }}>&quot;/og-image.png&quot;</span>
          <span style={{ color: "#c9d1d9" }}> {`}`}],</span>
        </div>
        <div style={{ paddingLeft: 20 }}>
          <span style={{ color: "#c9d1d9" }}>{`}`},</span>
        </div>
        <div style={{ color: "#c9d1d9" }}>{`}`}</div>
        <div style={{ color: "#c9d1d9" }}>&nbsp;</div>
        <div>
          <span style={{ color: keywordColor }}>export default function</span>
          <span style={{ color: functionColor }}> Page</span>
          <span style={{ color: "#c9d1d9" }}>() {`{`}</span>
        </div>
        <div style={{ paddingLeft: 20 }}>
          <span style={{ color: keywordColor }}>return</span>
          <span style={{ color: "#c9d1d9" }}> &lt;OGImage /&gt;</span>
        </div>
        <div style={{ color: "#c9d1d9" }}>{`}`}</div>
      </div>

      {/* Main content overlay - floating card */}
      <div
        style={{
          position: "absolute",
          right: 80,
          top: "50%",
          transform: "translateY(-50%)",
          width: 420,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          padding: "40px",
          backgroundColor: "rgba(22, 27, 34, 0.95)",
          borderRadius: 16,
          border: `2px solid ${hexToRgba(fields.accentColor, 0.3)}`,
          boxShadow: `
            0 0 40px ${hexToRgba(fields.accentColor, 0.2)},
            0 20px 60px rgba(0,0,0,0.5)
          `,
        }}
      >
        {/* Terminal-style header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
            paddingBottom: 16,
            borderBottom: "1px solid #30363d",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              backgroundColor: fields.accentColor,
              borderRadius: "50%",
              boxShadow: `0 0 10px ${fields.accentColor}`,
            }}
          />
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 12,
              color: hexToRgba(fields.accentColor, 0.8),
              letterSpacing: "0.1em",
            }}
          >
            OUTPUT
          </span>
        </div>

        {/* Logo */}
        {fields.logoUrl && (
          <img
            src={fields.logoUrl}
            alt="Logo"
            style={{
              maxHeight: 44,
              objectFit: "contain",
              filter: LOGO_SHADOW,
              marginBottom: 20,
              alignSelf: "flex-start",
            }}
          />
        )}

        {/* Brand name */}
        {fields.brandName && (
          <div
            style={{
              ...TYPOGRAPHY.brand,
              color: hexToRgba(fields.accentColor, 0.9),
              marginBottom: 24,
              letterSpacing: "0.2em",
              fontFamily: "monospace",
            }}
          >
            {fields.brandName}
          </div>
        )}

        {/* Title */}
        {fields.title && (
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#f0f6fc",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              marginBottom: 16,
            }}
          >
            {fields.title}
          </div>
        )}

        {/* Subtitle */}
        {fields.subtitle && (
          <div
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: "#8b949e",
              lineHeight: 1.5,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              fontFamily: "monospace",
            }}
          >
            {`// ${fields.subtitle}`}
          </div>
        )}

        {/* Command prompt style footer */}
        <div
          style={{
            marginTop: "auto",
            paddingTop: 20,
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "monospace",
            fontSize: 13,
          }}
        >
          <span style={{ color: fields.accentColor }}>➜</span>
          <span style={{ color: functionColor }}>~</span>
          <span style={{ color: "#8b949e" }}>git:(</span>
          <span style={{ color: keywordColor }}>main</span>
          <span style={{ color: "#8b949e" }}>)</span>
          <span style={{ color: "#c9d1d9" }}>✓</span>
        </div>
      </div>

      {/* Blinking cursor at the end */}
      <div
        style={{
          position: "absolute",
          left: 290,
          top: 472,
          width: 8,
          height: 18,
          backgroundColor: fields.accentColor,
          zIndex: 1,
          animation: "blink 1s infinite",
        }}
      />

      {/* CSS animation for cursor */}
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </TemplateWrapper>
  );
}

export { CodeTemplate };
