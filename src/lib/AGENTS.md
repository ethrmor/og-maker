# LIB — AGENTS.md

**Scope:** Core utilities, registries, and pure functions  
**Pattern:** Export named functions/consts, no React components

---

## WHERE TO LOOK

| Task | File | Notes |
|------|------|-------|
| Add template metadata | `templates.ts` | TEMPLATES array + EDITOR_FIELDS |
| Add gradient preset | `gradients.ts` | GRADIENT_PRESETS array |
| Add shared style | `template-styles.ts` | CSS snippets, patterns |
| Export image | `export.ts` | domToPng wrapper |
| Class merging | `utils.ts` | `cn()` function |

---

## CONVENTIONS

### File Organization
- **Pure functions only** (no React components or hooks)
- **Named exports** (no defaults)
- **Co-locate related data** (templates + fields in one file)

### Data Structures

#### Template Registry (`templates.ts`)
```typescript
// Template definition
export interface TemplateMeta {
  id: string;                    // Unique kebab-case ID
  name: string;                  // Display name
  description: string;           // Picker card subtitle
  thumbnailGradient: string;     // CSS gradient for preview
  defaults: {
    accentColor: string;
    backgroundType: "solid" | "gradient" | "image";
    backgroundColor: string;
    gradientPreset: string;
  };
}

// Field definition for editor
export interface FieldConfig {
  key: keyof TemplateFields;
  label: string;
  type: "text" | "textarea" | "color" | "file";
  placeholder?: string;
  required?: boolean;
  group: "content" | "branding";
}
```

#### Gradient Presets (`gradients.ts`)
```typescript
export interface GradientPreset {
  id: string;        // Reference from template defaults
  name: string;      // Display name
  css: string;       // Full CSS gradient value
}

// Use getGradientCss(id) to resolve preset ID to CSS
export function getGradientCss(presetId: string): string;
```

---

## FILE REFERENCE

```
src/lib/
├── templates.ts        # TEMPLATES[], EDITOR_FIELDS[], getTemplate(), DEFAULT_FIELDS
├── gradients.ts        # GRADIENT_PRESETS[], getGradientCss()
├── template-styles.ts  # NOISE_PATTERN, LOGO_SHADOW, shared CSS
├── export.ts           # exportToPng(), downloadDataUrl(), copyImageToClipboard()
└── utils.ts            # cn() - Tailwind class merging
```

### templates.ts Key Exports
- `TEMPLATES: TemplateMeta[]` - All template metadata
- `EDITOR_FIELDS: FieldConfig[]` - Sidebar form fields
- `DEFAULT_FIELDS: TemplateFields` - Fallback values
- `getTemplate(id: string): TemplateMeta` - Lookup helper

### gradients.ts Key Exports
- `GRADIENT_PRESETS: GradientPreset[]` - All available gradients
- `getGradientCss(presetId: string): string` - Resolve ID to CSS

### export.ts Key Exports
- `exportToPng(element): Promise<string>` - Returns data URL
- `downloadDataUrl(dataUrl, filename)` - Triggers download
- `copyImageToClipboard(dataUrl)` - Copies to system clipboard

---

## ANTI-PATTERNS

- **DON'T** add React components here (use `components/`)
- **DON'T** add hooks here (use `hooks/`)
- **DON'T** hardcode template IDs as strings (use TEMPLATES[].id)
- **DON'T** modify GRADIENT_PRESETS without checking template defaults

---

## DEPENDENCIES

- `modern-screenshot` - DOM to PNG conversion
- `clsx` + `tailwind-merge` - Class name utilities
- No React imports in this directory (keep pure)
