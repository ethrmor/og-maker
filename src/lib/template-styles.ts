/**
 * Convert hex color to rgba string
 * Handles 3-digit (#RGB) and 6-digit (#RRGGBB) hex codes
 */
export function hexToRgba(hex: string, alpha: number): string {
  // Remove # if present
  const cleanHex = hex.replace("#", "");

  let r: number;
  let g: number;
  let b: number;

  if (cleanHex.length === 3) {
    // 3-digit hex (#RGB)
    r = parseInt(cleanHex[0] + cleanHex[0], 16);
    g = parseInt(cleanHex[1] + cleanHex[1], 16);
    b = parseInt(cleanHex[2] + cleanHex[2], 16);
  } else if (cleanHex.length === 6) {
    // 6-digit hex (#RRGGBB)
    r = parseInt(cleanHex.substring(0, 2), 16);
    g = parseInt(cleanHex.substring(2, 4), 16);
    b = parseInt(cleanHex.substring(4, 6), 16);
  } else {
    // Fallback to black if invalid
    return `rgba(0, 0, 0, ${alpha})`;
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Shared noise overlay SVG data URI
 * Used across templates for texture depth
 */
export const NOISE_PATTERN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;

/**
 * Shared drop shadow for logos
 */
export const LOGO_SHADOW = "drop-shadow(0 2px 8px rgba(0,0,0,0.12))";

/**
 * Standard content surface styles for readability on busy backgrounds
 */
export const CONTENT_SURFACE = {
  backgroundColor: "rgba(255, 255, 255, 0.90)",
  borderRadius: 28,
  boxShadow: "0 30px 80px rgba(15, 23, 42, 0.10)",
};

/**
 * Stronger surface for image backgrounds
 */
export const CONTENT_SURFACE_STRONG = {
  backgroundColor: "rgba(255, 255, 255, 0.94)",
  borderRadius: 28,
  boxShadow: "0 40px 100px rgba(15, 23, 42, 0.14)",
};

/**
 * Standard typography scale
 */
export const TYPOGRAPHY = {
  brand: {
    fontSize: 14,
    fontWeight: 650,
    letterSpacing: "0.22em",
    textTransform: "uppercase" as const,
    color: "#334155",
  },
  title: {
    fontSize: 60,
    fontWeight: 750,
    letterSpacing: "-0.02em",
    lineHeight: 1.08,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 450,
    color: "#475569",
    lineHeight: 1.45,
  },
};
