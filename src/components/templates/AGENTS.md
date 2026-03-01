# TEMPLATES — AGENTS.md

**Scope:** OG image template components  
**Pattern:** Pure components with TemplateProps, wrapped in TemplateWrapper

---

## WHERE TO LOOK

| Task | File | Notes |
|------|------|-------|
| Add new template | Create `.tsx` + register in `index.ts` | Must use TemplateWrapper |
| Template registry | `index.ts` | Maps IDs to components |
| Background styles | `template-wrapper.tsx` | Handles solid/gradient/image |
| Template metadata | `src/lib/templates.ts` | TEMPLATES array |
| Shared styles | `src/lib/template-styles.ts` | Noise patterns, shadows |

---

## CONVENTIONS

### Template Component Structure
```tsx
import type { TemplateProps } from "@/types/template";
import { TemplateWrapper } from "./template-wrapper";

export function MyTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* Content at 1200×630 canvas size */}
    </TemplateWrapper>
  );
}
```

### Required Template Fields (from TemplateProps)
- `fields.title` - Main headline
- `fields.subtitle` - Secondary text
- `fields.brandName` - Brand/site name
- `fields.logoUrl` - Logo image URL (nullable)
- `fields.accentColor` - Theme color (hex)
- `fields.backgroundType` - "solid" | "gradient" | "image"
- `fields.backgroundColor` - Fallback/primary color (hex)
- `fields.gradientPreset` - Preset ID from gradients.ts
- `fields.backgroundImageUrl` - Custom image (nullable)

### Adding a New Template

1. **Create component** in `src/components/templates/my-template.tsx`:
```tsx
export function MyTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      <div className="flex items-center justify-center h-full">
        <h1 style={{ color: fields.accentColor }}>{fields.title}</h1>
      </div>
    </TemplateWrapper>
  );
}
```

2. **Register in barrel** `src/components/templates/index.ts`:
```tsx
import { MyTemplate } from "./my-template";

export const TEMPLATE_COMPONENTS = {
  // ... existing templates
  mytemplate: MyTemplate,
};
```

3. **Add metadata** in `src/lib/templates.ts`:
```tsx
export const TEMPLATES: TemplateMeta[] = [
  // ... existing templates
  {
    id: "mytemplate",
    name: "My Template",
    description: "Brief description for picker",
    thumbnailGradient: "#6366f1", // Preview card background
    defaults: {
      accentColor: "#6366f1",
      backgroundType: "solid",
      backgroundColor: "#ffffff",
      gradientPreset: "sunset",
    },
  },
];
```

---

## FILE ORGANIZATION

```
src/components/templates/
├── index.ts              # Barrel: TEMPLATE_COMPONENTS map
├── template-wrapper.tsx  # Background handling wrapper
├── minimal.tsx           # Clean, centered
├── bold.tsx              # Vibrant gradient, large text
├── split.tsx             # Asymmetric two-tone
├── elegant.tsx           # Dark luxury
├── geometric.tsx         # Abstract shapes
├── frame.tsx             # Decorative border
├── layers.tsx            # Overlapping cards
├── mono.tsx              # Single accent color
├── editorial.tsx         # Magazine layout
├── aurora.tsx            # Gradient mesh effect
├── spotlight.tsx         # Focus highlight
├── typographic.tsx       # Type-driven design
└── (14 templates total)
```

---

## ANTI-PATTERNS

- **DON'T** handle background styling in templates (TemplateWrapper does this)
- **DON'T** hardcode dimensions (use relative sizing within 1200×630)
- **DON'T** import gradient CSS directly (use `getGradientCss()` from lib)
- **DON'T** forget to register in BOTH `index.ts` and `templates.ts`

---

## SHARED UTILITIES

### TemplateWrapper
Handles all background logic (solid/gradient/image):
```tsx
<TemplateWrapper fields={fields}>
  {/* Children render on top of background */}
</TemplateWrapper>
```

### Noise/Pattern Overlays
From `src/lib/template-styles.ts`:
- `NOISE_PATTERN` - SVG noise texture
- `LOGO_SHADOW` - Drop shadow for logos
- Import as needed for texture effects
