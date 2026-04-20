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

// Background patterns for Builder template
export const BACKGROUND_PATTERNS = {
  none: null,
  grid: (color: string, opacity: number, scale: number) =>
    `url("data:image/svg+xml,%3Csvg width='${40 * scale}' height='${40 * scale}' viewBox='0 0 ${40 * scale} ${40 * scale}' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M ${40 * scale} 0 L 0 0 0 ${40 * scale}' fill='none' stroke='${encodeURIComponent(color)}' stroke-opacity='${opacity / 100}' stroke-width='1'/%3E%3C/svg%3E")`,
  dots: (color: string, opacity: number, scale: number) =>
    `url("data:image/svg+xml,%3Csvg width='${20 * scale}' height='${20 * scale}' viewBox='0 0 ${20 * scale} ${20 * scale}' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='${10 * scale}' cy='${10 * scale}' r='${2 * scale}' fill='${encodeURIComponent(color)}' fill-opacity='${opacity / 100}'/%3E%3C/svg%3E")`,
  lines: (color: string, opacity: number, scale: number) =>
    `url("data:image/svg+xml,%3Csvg width='${10 * scale}' height='${40 * scale}' viewBox='0 0 ${10 * scale} ${40 * scale}' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M ${5 * scale} 0 L ${5 * scale} ${40 * scale}' fill='none' stroke='${encodeURIComponent(color)}' stroke-opacity='${opacity / 100}' stroke-width='1'/%3E%3C/svg%3E")`,
  noise: (_color: string, opacity: number, scale: number) =>
    `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${0.65 / scale}' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='${opacity / 100}'/%3E%3C/svg%3E")`,
  waves: (color: string, opacity: number, scale: number) =>
    `url("data:image/svg+xml,%3Csvg width='${60 * scale}' height='${30 * scale}' viewBox='0 0 ${60 * scale} ${30 * scale}' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 ${15 * scale} Q ${15 * scale} 0 ${30 * scale} ${15 * scale} T ${60 * scale} ${15 * scale}' fill='none' stroke='${encodeURIComponent(color)}' stroke-opacity='${opacity / 100}' stroke-width='2'/%3E%3C/svg%3E")`,
  hexagons: (color: string, opacity: number, scale: number) =>
    `url("data:image/svg+xml,%3Csvg width='${28 * scale}' height='${49 * scale}' viewBox='0 0 28 49' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${encodeURIComponent(color)}' fill-opacity='${opacity / 100}'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49.28V41L3 33.69v2.3l11.99 6.99V49.28h2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
};

// Background masks for Builder template
export const BACKGROUND_MASKS = {
  none: null,
  vignette: (intensity: number) => `radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,${intensity / 100}) 100%)`,
  radial: (intensity: number) => `radial-gradient(circle at 50% 50%, rgba(0,0,0,${intensity / 100}) 0%, transparent 70%)`,
  linear: (intensity: number) => `linear-gradient(to bottom, rgba(0,0,0,${intensity / 100}) 0%, transparent 50%, rgba(0,0,0,${intensity / 100}) 100%)`,
  spotlight: (intensity: number) => `radial-gradient(ellipse at 50% 30%, rgba(255,255,255,${(intensity / 100) * 0.3}) 0%, rgba(0,0,0,${intensity / 100}) 70%)`,
};

// Pattern options for select dropdown
export const PATTERN_OPTIONS = [
  { value: "none", label: "None" },
  { value: "grid", label: "Grid" },
  { value: "dots", label: "Dots" },
  { value: "lines", label: "Lines" },
  { value: "noise", label: "Noise" },
  { value: "waves", label: "Waves" },
  { value: "hexagons", label: "Hexagons" },
];

// Mask options for select dropdown
export const MASK_OPTIONS = [
  { value: "none", label: "None" },
  { value: "vignette", label: "Vignette" },
  { value: "radial", label: "Radial" },
  { value: "linear", label: "Linear" },
  { value: "spotlight", label: "Spotlight" },
];
