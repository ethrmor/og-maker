# UI COMPONENTS — AGENTS.md

**Scope:** shadcn/ui base components and custom UI primitives  
**Pattern:** Controlled components with composition API

---

## WHERE TO LOOK

| Task | File | Notes |
|------|------|-------|
| Add shadcn component | Run CLI | `npx shadcn add [component]` |
| Custom color picker | `color-picker.tsx` | Wrapper around react-colorful |
| Form field wrapper | `field.tsx` | Combines Label + Input + error state |
| Combobox pattern | `combobox.tsx` | Base-UI based with search |

---

## CONVENTIONS

### Component Structure
- **Composition pattern:** Components expose sub-components (Trigger, Content, etc.)
- **Forward refs:** All inputs use `React.forwardRef`
- **Controlled only:** No uncontrolled mode support

### Styling
```tsx
// Always use cn() for className merging
import { cn } from "@/lib/utils";

<div className={cn("base-classes", className)} />
```

### Props Pattern
- **Extends HTML:** `React.InputHTMLAttributes<HTMLInputElement>`
- **Variants:** Use `class-variance-authority` for style variants
- **No default exports:** Named exports only

---

## FILE ORGANIZATION

```
src/components/ui/
├── alert-dialog.tsx      # Modal dialogs (Base UI)
├── badge.tsx             # Status badges
├── button.tsx            # Button variants
├── card.tsx              # Card container
├── color-picker.tsx      # Custom: react-colorful wrapper
├── combobox.tsx          # Searchable select
├── dropdown-menu.tsx     # Context menus
├── field.tsx             # Form field composition
├── input-group.tsx       # Input with addons
├── input.tsx             # Text input
├── label.tsx             # Form labels
├── select.tsx            # Native select replacement
├── separator.tsx         # Visual divider
├── textarea.tsx          # Multi-line input
└── (no index.ts)         # Import directly from files
```

---

## ANTI-PATTERNS

- **DON'T** add barrel exports here (import directly from file)
- **DON'T** use uncontrolled components
- **DON'T** inline styles (use Tailwind + cn())
- **DON'T** import from `@radix-ui` directly (use Base UI exports from shadcn)

---

## CUSTOM COMPONENTS

### ColorPicker
Wrapper around `react-colorful` with popover trigger:
```tsx
import { ColorPicker } from "@/components/ui/color-picker";

<ColorPicker value={color} onChange={setColor} />
```

### Field
Combines label, input, and error text:
```tsx
import { Field } from "@/components/ui/field";

<Field label="Title" error={errors.title}>
  <Input {...props} />
</Field>
```
