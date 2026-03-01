export interface GradientPreset {
  id: string;
  name: string;
  css: string;
}

export const GRADIENT_PRESETS: GradientPreset[] = [
  {
    id: "sunset",
    name: "Sunset",
    css: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: "ocean",
    name: "Ocean",
    css: "linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)",
  },
  {
    id: "fire",
    name: "Fire",
    css: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    id: "forest",
    name: "Forest",
    css: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
  },
  {
    id: "midnight",
    name: "Midnight",
    css: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
  },
  {
    id: "aurora",
    name: "Aurora",
    css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  },
  {
    id: "warm",
    name: "Warm",
    css: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
  },
  {
    id: "indigo",
    name: "Indigo",
    css: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)",
  },
  {
    id: "ember",
    name: "Ember",
    css: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
  },
  {
    id: "amber",
    name: "Amber",
    css: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
  },
  {
    id: "slate",
    name: "Slate",
    css: "linear-gradient(135deg, #334155 0%, #1e293b 100%)",
  },
  {
    id: "rose",
    name: "Rose",
    css: "linear-gradient(135deg, #f43f5e 0%, #e11d48 50%, #be123c 100%)",
  },
];

export function getGradientCss(presetId: string): string {
  const preset = GRADIENT_PRESETS.find((p) => p.id === presetId);
  return preset?.css ?? GRADIENT_PRESETS[0].css;
}
