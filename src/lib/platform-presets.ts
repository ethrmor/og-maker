export interface PlatformPreset {
  id: string;
  name: string;
  width: number;
  height: number;
  description: string;
}

export const PLATFORM_PRESETS: PlatformPreset[] = [
  { id: "og", name: "Open Graph", width: 1200, height: 630, description: "Universal social preview" },
  { id: "twitter", name: "Twitter/X", width: 1200, height: 675, description: "Twitter cards" },
  { id: "linkedin", name: "LinkedIn", width: 1200, height: 627, description: "LinkedIn posts" },
  { id: "facebook", name: "Facebook", width: 1200, height: 630, description: "Facebook shares" },
];

export const DEFAULT_PRESET = PLATFORM_PRESETS[0];

export function getPresetById(id: string): PlatformPreset {
  return PLATFORM_PRESETS.find((p) => p.id === id) || DEFAULT_PRESET;
}

export function getAspectRatio(width: number, height: number): string {
  return `${width}/${height}`;
}
