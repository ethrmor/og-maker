import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "@/components/templates/template-wrapper";
import { hexToRgba, NOISE_PATTERN, TYPOGRAPHY, LOGO_SHADOW } from "@/lib/template-styles";

function GeometricTemplate({ fields }: TemplateProps) {
  // Grid configuration - everything aligns to 44px grid
  const GRID_SIZE = 44;
  const nodes = [
    { col: 3, row: 3, size: 16, opacity: 0.5 },    // (132, 132)
    { col: 6, row: 3, size: 12, opacity: 0.4 },    // (264, 132)
    { col: 6, row: 6, size: 16, opacity: 0.55 },   // (264, 264)
    { col: 3, row: 9, size: 12, opacity: 0.4 },    // (132, 396)
    { col: 1, row: 9, size: 20, opacity: 0.3 },    // (44, 396)
  ];

  const connections = [
    { from: [3, 3], to: [6, 3] },      // Horizontal
    { from: [6, 3], to: [6, 6] },      // Vertical
    { from: [6, 6], to: [3, 9] },      // Diagonal
    { from: [3, 9], to: [1, 9] },      // Horizontal to edge
  ];

  return (
    <TemplateWrapper fields={fields}>
      {/* Noise Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE_PATTERN,
          opacity: 0.05,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Tech Grid - clean line grid */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "65%",
          backgroundImage: `linear-gradient(to right, rgba(2,6,23,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,6,23,0.03) 1px, transparent 1px)`,
          backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      {/* Large geometric arc - partial circle */}
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          right: -250,
          top: -100,
          border: `3px solid ${hexToRgba(fields.accentColor, 0.12)}`,
          borderStyle: "dashed",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          right: -150,
          bottom: -100,
          border: `2px solid ${hexToRgba(fields.accentColor, 0.08)}`,
          borderStyle: "dashed",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      {/* Grid-aligned Network */}
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "65%", zIndex: 0 }}>
        {/* Connection lines - precisely aligned to grid */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          {connections.map((conn, i) => {
            const x1 = `calc(100% - ${conn.from[0] * GRID_SIZE}px)`;
            const y1 = conn.from[1] * GRID_SIZE;
            const x2 = `calc(100% - ${conn.to[0] * GRID_SIZE}px)`;
            const y2 = conn.to[1] * GRID_SIZE;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={hexToRgba(fields.accentColor, 0.3)}
                strokeWidth="2"
              />
            );
          })}
        </svg>

        {/* Nodes - centered on grid intersections */}
        {nodes.map((node, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              right: node.col * GRID_SIZE - node.size / 2,
              top: node.row * GRID_SIZE - node.size / 2,
              width: node.size,
              height: node.size,
              border: `2px solid ${hexToRgba(fields.accentColor, node.opacity)}`,
              backgroundColor: "transparent",
              borderRadius: "50%",
              zIndex: 1,
            }}
          />
        ))}
        {/* Glowing intersection point */}
        <div style={{ position: "absolute", right: 3 * 44 - 20, top: 3 * 44 - 20, width: 40, height: 40, background: `radial-gradient(circle, ${hexToRgba(fields.accentColor, 0.5)} 0%, transparent 70%)`, zIndex: 2 }} />
      </div>

      {/* Content */}
      <div
        className="flex flex-col justify-center"
        style={{
          width: "62%",
          height: "100%",
          padding: 64,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            ...(fields.backgroundType === "image" || fields.backgroundType === "gradient"
              ? {
                  backgroundColor: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.6)",
                  borderRadius: 28,
                  boxShadow: "0 30px 80px rgba(15,23,42,0.12)",
                  padding: 48,
                }
              : {}),
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {fields.logoUrl && (
              <img
                src={fields.logoUrl}
                alt="Logo"
                style={{
                  maxHeight: 44,
                  objectFit: "contain",
                  alignSelf: "flex-start",
                  filter: LOGO_SHADOW,
                }}
              />
            )}

            {fields.brandName && (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div
                  style={{
                    ...TYPOGRAPHY.brand,
                    color: "#374151",
                  }}
                >
                  {fields.brandName}
                </div>
                <div
                  style={{
                    width: 24,
                    height: 2,
                    backgroundColor: hexToRgba(fields.accentColor, 0.6),
                  }}
                />
              </div>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginTop: 32 }}>
            {fields.title && (
              <div
                style={{
                  fontSize: 60,
                  fontWeight: 740,
                  letterSpacing: "-0.02em",
                  color: "#0f172a",
                  maxWidth: 680,
                  lineHeight: 1.1,
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
                  color: "#475569",
                  maxWidth: 540,
                  marginTop: 14,
                  lineHeight: 1.5,
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
      </div>
    </TemplateWrapper>
  );
}

export { GeometricTemplate };
