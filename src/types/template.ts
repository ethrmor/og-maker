// === Field values the user edits ===
export interface TemplateFields {
  // Content
  title: string;
  subtitle: string;
  brandName: string;

  // Branding
  logoUrl: string | null;
  accentColor: string; // Hex, e.g. "#6366f1"

  // Background
  backgroundType: "solid" | "gradient" | "image";
  backgroundColor: string; // Hex
  gradientPreset: string; // Preset ID from gradients.ts
  backgroundImageUrl: string | null;

  // Customization (for custom template)
  layout: "centered" | "left" | "right";
  textAlign: "left" | "center" | "right";
  titleSize: "sm" | "md" | "lg" | "xl";
  subtitleSize: "sm" | "md" | "lg";
  padding: "sm" | "md" | "lg" | "xl";
  showLogo: boolean;
  screenshotUrl: string | null;
}

// === Per-field rendering config ===
export interface FieldConfig {
  key: keyof TemplateFields;
  label: string;
  type: "text" | "textarea" | "color" | "file" | "select" | "toggle";
  placeholder?: string;
  required?: boolean;
  group: "content" | "branding" | "customization";
  options?: { value: string; label: string }[]; // For select type
}

// === Template metadata ===
export interface TemplateMeta {
  id: string;
  name: string;
  description: string;
  thumbnailGradient: string; // CSS gradient/color for picker card
  defaults: Pick<
    TemplateFields,
    "accentColor" | "backgroundType" | "backgroundColor" | "gradientPreset"
  >;
}

// === Props every template component receives ===
export interface TemplateProps {
  fields: TemplateFields;
}

// === Editor state ===
export interface EditorState {
  selectedTemplateId: string;
  fields: TemplateFields;
  isExporting: boolean;
}

export type EditorAction =
  | { type: "SELECT_TEMPLATE"; templateId: string }
  | { type: "UPDATE_FIELD"; key: keyof TemplateFields; value: string | null | boolean }
  | { type: "SET_EXPORTING"; value: boolean }
  | { type: "RESET_STYLE" }
  | { type: "CLEAR_CONTENT" };
