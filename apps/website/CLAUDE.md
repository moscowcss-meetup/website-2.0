# website — agent guide

`CLAUDE.md` and `AGENTS.md` in this folder are **identical**, kept in sync so any
agent (Claude, Cursor, …) reads either and gets the same rules — **edit both
together.** Repo-wide rules live in the **root `CLAUDE.md`**, which wins on
conflict. Below is only what's specific to this app.

## What this is

The Astro **marketing/community site**. Consumes `@moscowcss/ui`,
`@moscowcss/icons`, `@moscowcss/fonts` (and `@moscowcss/design-system`
transitively through `ui`).

## Rules

- **No raw design values in pages.** Compose from `@moscowcss/ui` components;
  when you must write CSS, go **strictly** through `@moscowcss/design-system`
  tokens (`vars` / `media`) — never raw hex, `px`, or literal breakpoints.
- **Import `@moscowcss/fonts` once** at the page/layout root (side-effect CSS).
- `astro.config.mjs` registers the **vanilla-extract Vite plugin** — keep it, or
  component `.css.ts` styles won't compile.
- **Content pages** (speakers / events / reports) are scaffolded with
  `pnpm new:speaker | new:event | new:report` — don't hand-create them. They are
  stubs today.
- Theme is **colour-only** and driven by `data-theme` (`<html data-theme="…">`) /
  OS preference — see `@moscowcss/design-system`.

## Validate

```bash
pnpm dev     # local dev server
pnpm build   # production build (must pass)
```
