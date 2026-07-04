# CLAUDE.md

Rules of engagement for any AI agent (and human) working in this repository.
Read this file **fully** before running commands or writing code. When a rule
here conflicts with a habit or a default, this file wins.

---

## 1. What this repo is

A Turborepo monorepo (pnpm workspaces) hosting a small marketing/community
website built with **Astro**, plus a component library, a Storybook, and shared
tooling. Styling is done with **vanilla-extract** on top of a two-layer,
theme-aware design-token system.

```
.
├── apps/
│   ├── website/          # the site itself (Astro)
│   └── storybook/        # component demo (@storybook-astro/framework)
├── packages/
│   ├── ui/               # Astro components + their vanilla-extract styles + design tokens
│   ├── icons/            # source SVGs -> SVGO-cleaned, generated .astro icon components
│   ├── fonts/            # @font-face css + font files
│   ├── eslint-config/    # shared flat ESLint config (single source of truth)
│   └── typescript-config/# shared tsconfig bases (single source of truth)
├── plop-templates/       # generators used by new:* scripts
├── turbo.json
├── pnpm-workspace.yaml
├── .npmrc
└── package.json
```

Workspace package names use the `@moscowcss/*` scope: `@moscowcss/ui`, `@moscowcss/icons`,
`@moscowcss/fonts`, `@moscowcss/eslint-config`, `@moscowcss/typescript-config`.

---

## 2. Golden rules (non-negotiable)

1. **pnpm only.** Never run `npm install` / `yarn`. Never hand-edit a lockfile.
2. **Always install the latest version.** Add every dependency with
   `pnpm add <pkg>` (or `pnpm add -D <pkg>`) so the current published version is
   resolved. **Never** type a version range into `package.json` by hand, and
   **never** pin a version from memory — you don't know what is current, `pnpm`
   does.
3. **Exact versions, no ranges.** `.npmrc` sets `save-exact=true` and
   `save-prefix=''`, so `pnpm add` writes exact versions (`"astro": "5.13.2"`,
   not `"^5.13.2"`). Keep it that way.
4. **Install into the package that uses it.** Run `pnpm add` from inside the
   target package directory, or use `pnpm --filter <pkg> add <dep>`. Shared
   tooling that every workspace uses (turbo, prettier) lives at the root with
   `pnpm add -Dw`.
5. **Internal deps use the workspace protocol:** `"@moscowcss/ui": "workspace:*"`.
6. **Tooling config has exactly one home.** ESLint and TypeScript settings live
   in `packages/eslint-config` and `packages/typescript-config`. Every other
   package *extends* those. If a rule needs changing globally, change it there.
   Only add local overrides when something is genuinely unique to that package.
7. **Never downgrade the recommendation.** No "this is just a demo / MVP /
   student project" shortcuts. Always the current best-practice setup.
8. **`pnpm lint` and `pnpm build` must pass** before you consider a task done.
9. **The user always decides when and what to commit.** Never `git commit` or
   `git push` on your own initiative — not at the end of a task, not "to be
   helpful". Do it only when the user explicitly asks, and commit exactly what
   they specify. When work is done, report status and let the user drive git.

---

## 3. Package manager & dependency policy

`.npmrc` (do not remove these lines):

```properties
save-exact=true
save-prefix=''
```

Adding dependencies:

```bash
# a runtime dep in the website
pnpm --filter website add <pkg>

# a dev dep in the ui package
pnpm --filter @moscowcss/ui add -D <pkg>

# a repo-wide dev tool (turbo, prettier, syncpack…)
pnpm add -Dw <pkg>

# link an internal package
pnpm --filter website add @moscowcss/ui@workspace:*
```

Node & pnpm:

- Node: use the **current LTS** (hard floor is **>= 20.16**, required by
  `@storybook-astro/framework`). `engines.node` enforces the floor.
- Pin pnpm via Corepack — run `corepack use pnpm@latest` once; it writes the
  `packageManager` field. Do not guess/pin a pnpm version by hand.

---

## 4. Scripts (run from repo root)

| Script                | What it does                                                        |
| --------------------- | ------------------------------------------------------------------- |
| `pnpm dev`            | Runs the **website** dev server (Astro).                            |
| `pnpm storybook`      | Runs **Storybook** for the UI components.                           |
| `pnpm build`          | Production build of the **website**.                                |
| `pnpm build:storybook`| Static Storybook build (for deploy).                                |
| `pnpm lint`           | Lints **and** applies safe autofixes across all packages.           |
| `pnpm new:component`  | Scaffolds a new component in `packages/ui` (plop).                  |
| `pnpm new:speaker`    | Scaffolds a speaker content page in the website (stub).             |
| `pnpm new:event`      | Scaffolds an event content page in the website (stub).              |
| `pnpm new:report`     | Scaffolds a report content page in the website (stub).             |

Notes:

- `lint` = ESLint with `--fix`: autofixable issues are fixed, the rest are
  reported (non-zero exit). There is no separate "fix" script by design.
- `dev`/`storybook` are long-running (Turborepo `persistent`, uncached).
- `@moscowcss/ui` and `@moscowcss/fonts` are **source-only** packages (they export
  `.astro` / `.css.ts` / `.css` directly, no build step), so their changes are
  picked up live by the website's and Storybook's Vite dev servers.
- `@moscowcss/icons` **does** have a build step (SVG → generated `.astro`), so the
  website/storybook `build` depends on it topologically via `^build`.

---

## 5. Design tokens & theming (the heart of the system)

Tokens live in **`packages/ui/src/theme`** and are the *only* place values are
defined. Components never contain raw hex colours, raw pixel sizes, or literal
breakpoints.

### Two layers

1. **Primitive palette** — raw values, named by *what they are*
   (`palette.green = '#00FF00'`). Plain TS constants in `palette.ts`.
2. **Semantic contract** — named by *what they mean*
   (`vars.color.success` → `palette.green`). Components consume **only** this
   layer.

### Tooling choice

Use vanilla-extract's **`createGlobalThemeContract`** (not `createThemeContract`)
so the emitted CSS custom properties get **readable, stable names** like
`--padding-medium` and `--font-caption` instead of hashed ones. The naming
mapper turns the token path into the variable name (`padding.medium` →
`--padding-medium`).

Themes are applied with **`createGlobalTheme`**:

- `:root` gets the **light** theme values.
- `[data-theme="dark"]` gets the **dark** theme values.

> Current state: **dark duplicates light exactly.** Build everything in light
> now; later we only change the *values* passed to the dark theme — the contract
> and every component stay untouched. That is the whole point of the contract.

### Breakpoints are special

CSS media queries **cannot** read `var()`. So breakpoints (and anything used
inside `@media`) are **build-time TS constants** in `breakpoints.ts`, imported
into `.css.ts` files. Everything else (spacing, colour, radius, typography) is a
runtime CSS variable from the contract. Do not try to put breakpoints in the
contract.

### The rule for components

```ts
// ✅ correct — semantic vars + breakpoint constant
import { vars, breakpoints } from '@moscowcss/ui/theme';
export const card = style({
  padding: vars.padding.medium,
  color: vars.color.success,
  font: vars.font.caption,
  '@media': { [`(min-width: ${breakpoints.md})`]: { padding: vars.padding.large } },
});

// ❌ forbidden in a component
export const card = style({ padding: '16px', color: '#00FF00' }); // raw values
export const card = style({ color: vars.palette.green });         // primitive layer
```

File layout in `packages/ui/src/theme`:

```
theme/
├── palette.ts        # primitives: green, blue, gray100…  (raw values, no vars)
├── contract.ts       # createGlobalThemeContract -> `vars` (readable var names)
├── themes.css.ts     # createGlobalTheme(':root', …) light + ([data-theme=dark]) dark
├── breakpoints.ts    # sm/md/lg/xl string constants for @media
└── index.ts          # re-exports { vars, breakpoints }
```

---

## 6. `packages/ui` — components

- Components are **Astro components** (`.astro`).
- Each component gets its own folder under `src/components/`:
  `src/components/Button/Button.astro`, `Button.css.ts` (vanilla-extract),
  `Button.stories.ts`, `index.ts`. Consumers import a component by folder:
  `import Button from '@moscowcss/ui/components/Button'` (see the `exports` map,
  `./components/*`).
- Import styles from the colocated `.css.ts`; import tokens from
  `@moscowcss/ui/theme`. No inline `style="..."` with literal values.
- vanilla-extract runs via `@vanilla-extract/vite-plugin`, wired into both the
  website's `astro.config.mjs` and Storybook's Vite config.
- Add a new component with `pnpm new:component` — do not create the files by
  hand, so structure stays uniform.

### Document every prop (mandatory)

Storybook autodocs derives each control's **description** from the JSDoc comment
on the corresponding member of the component's `Props`. So **every field of a
UI component's `Props` type MUST carry a short, self-contained JSDoc comment**
describing what it does. This is the one place doc-comments are *required* — it
is not "useless commenting" (§14), it is the source of the Storybook docs table.

Rules:

- Use a `/** … */` JSDoc block **directly above** each prop — a line `//`
  comment is **not** picked up by autodocs.
- One line, terse, describes the prop's *purpose* (not its type — the type is
  already visible). Written in **Russian**, like all other repo comments (§14).
- Applies to every member, including optional ones. When a `Props` extends a
  native type (e.g. `HTMLAttributes<'button'>`), document the props **you** add;
  the inherited ones are documented upstream.

```astro
---
import { button } from './Button.css';

interface Props {
  /** HTML-тип кнопки: обычная, отправка формы или сброс */
  type?: 'button' | 'submit' | 'reset';
  /** Визуальный вариант: акцентная или второстепенная */
  variant?: 'primary' | 'secondary';
  /** Блокирует кнопку и запрещает клики */
  disabled?: boolean;
}

const { type = 'button', variant = 'primary', disabled = false } = Astro.props;
---
```

---

## 7. `packages/icons` — SVGO + generated Astro components

The "SVGR for Astro" of this repo. Source SVGs are cleaned with **SVGO** and
compiled into ready-to-import `.astro` icon components at build time — no
runtime cost, props forwarded to the root `<svg>`.

Pipeline:

1. Drop raw icons into `packages/icons/src/svg/<name>.svg`.
2. `pnpm --filter @moscowcss/icons build` (or the root `build`, which depends on it)
   runs `scripts/generate.mjs`:
   - optimizes each SVG with SVGO using `svgo.config.mjs`
     (strips fixed width/height so size is controllable, normalizes colours to
     `currentColor` for monochrome icons);
   - emits `src/generated/<PascalName>.astro`, each rendering `<svg>` with
     `width/height` defaulting to `1em`, `fill="currentColor"`,
     `aria-hidden="true"`, and **all extra props spread onto the `<svg>`**;
   - regenerates `src/generated/index.ts` (a barrel re-exporting every icon).
3. Consume:

   ```astro
   ---
   import { ArrowRight } from '@moscowcss/icons';
   ---
   <ArrowRight size="24" class="text-success" />
   ```

`src/generated/` is produced output — treat it as build artifact (git-ignored;
regenerate rather than edit).

---

## 8. `packages/fonts`

- `index.css` holds the `@font-face` declarations; font files sit alongside it.
- Consumers `import '@moscowcss/fonts'` (or `@moscowcss/fonts/index.css`) once, at the app
  root. Font *family names* referenced by the design tokens must match the
  `@font-face` `font-family` values here.

---

## 9. `apps/website`

- Astro site. Depends on `@moscowcss/ui`, `@moscowcss/icons`, `@moscowcss/fonts`.
- `astro.config.mjs` registers the vanilla-extract Vite plugin.
- Content pages (speakers / events / reports) are scaffolded via `new:*`
  scripts and are currently **stubs** — placeholder frontmatter + minimal
  markup, ready to be filled in later.

---

## 10. `apps/storybook`

- Uses **`@storybook-astro/framework`** (community framework). Requirements:
  Node **20.16+**, **Storybook 10**, **Astro 5.5.3+** (the repo currently runs
  **Astro 7**), **Vite 6+**.
- `.storybook/main.ts` sets `framework: { name: '@storybook-astro/framework' }`
  and, in `viteFinal`, adds the **vanilla-extract Vite plugin** so component
  styles resolve identically to the website.
- Stories live next to components in `@moscowcss/ui` (`*.stories.ts`); Storybook's
  `stories` glob points into that package.
- `npm create storybook` does **not** recognise Astro — set it up manually per
  the framework docs. Install with `pnpm add`, latest versions.

---

## 11. Shared configs — extend, don't fork

`@moscowcss/typescript-config` exports:
- `base.json` — strict TS base.
- `astro.json` — extends base + Astro's `strictest` tsconfig.

`@moscowcss/eslint-config` exports a **flat config** (`eslint.config.js` style):
- base = `typescript-eslint` + `eslint-plugin-astro` + Prettier compat.
Each package's own `eslint.config.js` imports and spreads this, adding local
rules **only** when unavoidable. Same for tsconfig via `extends`.

---

## 12. Definition of done

Before declaring any task complete:

```bash
pnpm install        # if deps changed — lockfile updated, exact versions
pnpm lint           # zero errors (warnings acceptable if agreed)
pnpm build          # website builds
pnpm build:storybook  # if you touched components/stories
```

Then sanity-check the token rule: search your diff for raw hex colours
(`#`), literal `px` in `.css.ts`, and any use of the primitive palette inside a
component. All three are red flags.

---

## 13. Do NOT

- ❌ `npm`/`yarn`, editing lockfiles, or committing `node_modules`.
- ❌ version ranges (`^`, `~`) or hand-typed/remembered versions.
- ❌ raw hex/px/breakpoints inside components — go through tokens.
- ❌ referencing the primitive palette from a component (semantic layer only).
- ❌ duplicating ESLint/TS rules in a package instead of extending the shared config.
- ❌ hand-creating component or content-page files — use the `new:*` generators.
- ❌ editing `packages/icons/src/generated/**` — regenerate it.
- ❌ downgrading a recommendation for being "just a demo".
- ❌ useless/obvious comments (see §14).

---

## 14. Code comments

- **No useless comments.** Do not restate what the code already says. Most code
  should carry no comments at all.
- **Comment only genuinely non-obvious spots** — a real gotcha, invariant, or
  reason that isn't clear from the code itself. If nothing is unclear, write
  nothing.
- **Such comments are written in Russian and kept short** (one line where
  possible). They explain the *why*, not the *what*.
- **Exception — keep English:** this `CLAUDE.md` and configuration files
  (`*.config.*`, `.storybook/*`, `eslint.config.js`, tsconfig, `pnpm-workspace.yaml`,
  `turbo.json`, etc.) stay entirely in English, comments included.
- **Exception — required doc-comments:** members of a UI component's `Props`
  type are the source of Storybook's prop descriptions and **must** each carry a
  short Russian JSDoc comment (§6). This overrides "most code carries no
  comments" for that specific case.
