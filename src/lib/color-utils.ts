/**
 * Calculate relative luminance of a color (WCAG formula)
 * Returns value between 0 (black) and 1 (white)
 */
export function getLuminance(hex: string): number {
  // Remove # if present
  const cleanHex = hex.replace("#", "");
  
  // Parse RGB
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;

  // Calculate luminance using WCAG formula
  const [lr, lg, lb] = [r, g, b].map((c) => {
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb;
}

/**
 * Determine if text should be dark or light based on background luminance
 * Uses 0.5 threshold for optimal contrast
 */
export function getContrastTextColor(backgroundColor: string): "#111827" | "#ffffff" {
  const luminance = getLuminance(backgroundColor);
  return luminance > 0.5 ? "#111827" : "#ffffff";
}

/**
 * Determine if text is on a light background
 */
export function isLightBackground(backgroundColor: string): boolean {
  return getLuminance(backgroundColor) > 0.5;
}

/**
 * Get subtitle color based on background (slightly muted)
 */
export function getContrastSubtitleColor(backgroundColor: string): "#4b5563" | "rgba(255,255,255,0.8)" {
  const luminance = getLuminance(backgroundColor);
  return luminance > 0.5 ? "#4b5563" : "rgba(255,255,255,0.8)";
}
