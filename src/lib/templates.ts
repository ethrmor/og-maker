import type { FieldConfig, TemplateMeta, TemplateFields } from "@/types/template";

// Shared field definitions — all templates use the same fields
export const EDITOR_FIELDS: FieldConfig[] = [
  {
    key: "title",
    label: "Title",
    type: "text",
    placeholder: "Your headline here",
    required: true,
    group: "content",
  },
  {
    key: "subtitle",
    label: "Subtitle",
    type: "text",
    placeholder: "A brief tagline or description",
    group: "content",
  },
  {
    key: "brandName",
    label: "Brand / Site Name",
    type: "text",
    placeholder: "Acme Inc.",
    group: "content",
  },
  {
    key: "logoUrl",
    label: "Logo",
    type: "file",
    group: "branding",
  },
  {
    key: "accentColor",
    label: "Accent Color",
    type: "color",
    group: "branding",
  },
  // Customization fields (shown for custom template)
  {
    key: "layout",
    label: "Layout",
    type: "select",
    group: "customization",
    options: [
      { value: "centered", label: "Centered" },
      { value: "left", label: "Left Aligned" },
      { value: "right", label: "Right Aligned" },
    ],
  },
  {
    key: "textAlign",
    label: "Text Alignment",
    type: "select",
    group: "customization",
    options: [
      { value: "left", label: "Left" },
      { value: "center", label: "Center" },
      { value: "right", label: "Right" },
    ],
  },
  {
    key: "titleSize",
    label: "Title Size",
    type: "select",
    group: "customization",
    options: [
      { value: "sm", label: "Small" },
      { value: "md", label: "Medium" },
      { value: "lg", label: "Large" },
      { value: "xl", label: "Extra Large" },
    ],
  },
  {
    key: "subtitleSize",
    label: "Subtitle Size",
    type: "select",
    group: "customization",
    options: [
      { value: "sm", label: "Small" },
      { value: "md", label: "Medium" },
      { value: "lg", label: "Large" },
    ],
  },
  {
    key: "padding",
    label: "Padding",
    type: "select",
    group: "customization",
    options: [
      { value: "sm", label: "Small" },
      { value: "md", label: "Medium" },
      { value: "lg", label: "Large" },
      { value: "xl", label: "Extra Large" },
    ],
  },
  {
    key: "showLogo",
    label: "Show Logo",
    type: "toggle",
    group: "customization",
  },
  {
    key: "screenshotUrl",
    label: "Screenshot",
    type: "file",
    group: "customization",
  },
];

// Template registry
export const TEMPLATES: TemplateMeta[] = [
  {
    id: "minimal",
    name: "Minimal",
    description: "Clean, centered, whitespace-forward",
    thumbnailGradient: "#ffffff",
    defaults: {
      accentColor: "#6366f1",
      backgroundType: "solid",
      backgroundColor: "#ffffff",
      gradientPreset: "sunset",
    },
  },
  {
    id: "bold",
    name: "Bold",
    description: "Vibrant gradient, large text",
    thumbnailGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    defaults: {
      accentColor: "#ffffff",
      backgroundType: "gradient",
      backgroundColor: "#667eea",
      gradientPreset: "sunset",
    },
  },
  {
    id: "split",
    name: "Split",
    description: "Asymmetric two-tone, editorial",
    thumbnailGradient: "linear-gradient(90deg, #ffffff 58%, #2563eb 58%)",
    defaults: {
      accentColor: "#2563eb",
      backgroundType: "solid",
      backgroundColor: "#ffffff",
      gradientPreset: "ocean",
    },
  },
  {
    id: "elegant",
    name: "Elegant",
    description: "Dark background, refined luxury",
    thumbnailGradient: "linear-gradient(135deg, #0a0a0b 0%, #1a1a2e 100%)",
    defaults: {
      accentColor: "#c9a96e",
      backgroundType: "solid",
      backgroundColor: "#0a0a0b",
      gradientPreset: "midnight",
    },
  },
  {
    id: "geometric",
    name: "Geometric",
    description: "Abstract shapes, modern tech",
    thumbnailGradient: "#f8fafc",
    defaults: {
      accentColor: "#8b5cf6",
      backgroundType: "solid",
      backgroundColor: "#f8fafc",
      gradientPreset: "sunset",
    },
  },
  {
    id: "frame",
    name: "Frame",
    description: "Decorative border, poster feel",
    thumbnailGradient: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)",
    defaults: {
      accentColor: "#e2e8f0",
      backgroundType: "gradient",
      backgroundColor: "#1e1b4b",
      gradientPreset: "indigo",
    },
  },
  {
    id: "layers",
    name: "Layers",
    description: "Overlapping cards, depth and dimension",
    thumbnailGradient: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
    defaults: {
      accentColor: "#0ea5e9",
      backgroundType: "solid",
      backgroundColor: "#f8fafc",
      gradientPreset: "ocean",
    },
  },
  {
    id: "mono",
    name: "Mono",
    description: "Single accent color dominates",
    thumbnailGradient: "#dc2626",
    defaults: {
      accentColor: "#dc2626",
      backgroundType: "solid",
      backgroundColor: "#dc2626",
      gradientPreset: "ember",
    },
  },
  {
    id: "editorial",
    name: "Editorial",
    description: "Magazine-style layout with elegant typography",
    thumbnailGradient: "#F4F0EA",
    defaults: {
      accentColor: "#8b4513",
      backgroundType: "solid",
      backgroundColor: "#F4F0EA",
      gradientPreset: "sunset",
    },
  },
  {
    id: "aurora",
    name: "Aurora",
    description: "Organic flowing shapes with glassmorphism",
    thumbnailGradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    defaults: {
      accentColor: "#7c3aed",
      backgroundType: "solid",
      backgroundColor: "#0a0a0f",
      gradientPreset: "midnight",
    },
  },
  {
    id: "spotlight",
    name: "Spotlight",
    description: "Dramatic lighting with cinematic feel",
    thumbnailGradient: "#050505",
    defaults: {
      accentColor: "#f59e0b",
      backgroundType: "solid",
      backgroundColor: "#050505",
      gradientPreset: "midnight",
    },
  },
  {
    id: "typographic",
    name: "Typographic",
    description: "Bold typography as art, Swiss poster style",
    thumbnailGradient: "#ffffff",
    defaults: {
      accentColor: "#ec4899",
      backgroundType: "solid",
      backgroundColor: "#ffffff",
      gradientPreset: "sunset",
    },
  },
  {
    id: "custom",
    name: "Custom",
    description: "Full control over layout, spacing, and typography",
    thumbnailGradient: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
    defaults: {
      accentColor: "#6366f1",
      backgroundType: "solid",
      backgroundColor: "#ffffff",
      gradientPreset: "sunset",
    },
  },
];

export function getTemplate(id: string): TemplateMeta {
  return TEMPLATES.find((t) => t.id === id) ?? TEMPLATES[0];
}

export const DEFAULT_FIELDS: TemplateFields = {
  title: "",
  subtitle: "",
  brandName: "",
  logoUrl: null,
  accentColor: "#6366f1",
  backgroundType: "solid",
  backgroundColor: "#ffffff",
  gradientPreset: "sunset",
  backgroundImageUrl: null,
  // Customization defaults
  layout: "centered",
  textAlign: "center",
  titleSize: "lg",
  subtitleSize: "md",
  padding: "lg",
  showLogo: true,
  screenshotUrl: null,
};
