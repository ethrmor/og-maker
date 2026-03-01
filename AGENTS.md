# OG MAKER — PROJECT KNOWLEDGE BASE

**Generated:** 2026-03-01  
**Commit:** 85c692a  
**Stack:** React 19 + TypeScript + Vite + shadcn/ui + Tailwind v4

---

## OVERVIEW

OG Maker is a browser-based Open Graph image generator. Users select from 12+ visual templates, customize content/brand/colors, and export 1200×630 PNGs for social sharing.

---

## STRUCTURE

```
.
├── src/
│   ├── components/
│   │   ├── editor/        # Editor UI (sidebar, canvas, picker)
│   │   ├── templates/     # 12+ OG image templates
│   │   └── ui/            # shadcn/ui components
│   ├── hooks/             # use-og-editor.ts, use-export-png.ts
│   ├── lib/               # Templates registry, gradients, export, utils
│   ├── types/             # TemplateFields, TemplateMeta, EditorState
│   └── assets/            # Static assets
├── dist/                  # Vite build output
├── public/                # Static files
└── components.json        # shadcn/ui config
```

---

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Add new template | `src/components/templates/` + `src/lib/templates.ts` | Register in TEMPLATES array + TEMPLATE_COMPONENTS map |
| Add new gradient | `src/lib/gradients.ts` | Add to GRADIENT_PRESETS |
| Add new UI component | `src/components/ui/` | Use shadcn CLI or manual add |
| Change export dimensions | `src/lib/export.ts` | domToPng width/height |
| Modify editor layout | `src/components/editor/og-editor.tsx` | Grid columns, header structure |
| Update field labels | `src/lib/templates.ts` | EDITOR_FIELDS array |

---

## CONVENTIONS

### Imports
- **Path alias:** `@/` maps to `./src/` (via Vite resolve.alias)
- **Group order:** React → Types → Lib → Components
- **Absolute imports:** Always use `@/` for cross-module imports

### Naming
- **Components:** PascalCase (`OgEditor.tsx`, `MinimalTemplate.tsx`)
- **Hooks:** kebab-case with `use-` prefix (`use-og-editor.ts`)
- **Lib files:** kebab-case (`templates.ts`, `export.ts`)
- **Types:** PascalCase interfaces in `types/template.ts`

### Exports
- **Named exports:** Prefer `export function` / `export const`
- **Barrel exports:** `src/components/templates/index.ts` maps template IDs to components
- **No default exports:** Except in `App.tsx` for Vite HMR compatibility

### Styling
- **Utility classes:** Use `cn()` from `src/lib/utils.ts` for conditional classes
- **Tailwind v4:** Uses `@import "tailwindcss"` syntax (not @tailwind directives)
- **CSS variables:** shadcn theme vars in `src/index.css` (oklch colors)

---

## UNIQUE PATTERNS

### Template System
Templates are pure components receiving `TemplateProps { fields: TemplateFields }`:

```tsx
// Template must use TemplateWrapper for consistent background handling
import { TemplateWrapper } from "./template-wrapper";

export function MyTemplate({ fields }: TemplateProps) {
  return (
    <TemplateWrapper fields={fields}>
      {/* 1200×630 canvas content */}
    </TemplateWrapper>
  );
}
```

### Editor State
- **Reducer pattern:** `useOgEditor()` uses React `useReducer` with discriminated union actions
- **Content preservation:** When switching templates, `title/subtitle/brandName/logoUrl` persist
- **Visual reset:** `backgroundType/Color/gradientPreset` reset to template defaults

### Export Flow
- **modern-screenshot:** Uses `domToPng()` with 2x scale for retina quality
- **Dimensions:** Fixed 1200×630 (Open Graph standard)
- **Methods:** Download to file OR copy to clipboard

---

## COMMANDS

```bash
# Development
npm run dev

# Production build
npm run build

# Linting
npm run lint

# Preview build
npm run preview
```

---

## NOTES

- **No tests:** Project has no test suite currently
- **No CI/CD:** No `.github/workflows/` configured
- **Strict TypeScript:** `~5.9.3` with strict mode implied
- **Tailwind v4:** Uses new CSS-first config (no tailwind.config.js)
- **shadcn/ui:** "base-nova" style with hugeicons icon library
- **Font:** Geist Variable loaded via `@fontsource-variable/geist`
