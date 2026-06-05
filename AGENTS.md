# AGENTS.md — resume/portfolio

Angular 22 standalone app (no NgModules). Two routes: `/` (home) and `/resume`.

## Commands

```bash
npm start       # ng serve — dev server at http://localhost:4200
npm run build   # ng build — outputs to dist/portfolio
npm test        # ng test — Karma + Jasmine (single run: --no-watch)
```

No lint, no typecheck script, no Prettier. The only verification is `ng build` and `ng test`.

## Prerequisites

- Node.js >= 22.22.3 (managed via nvm — `nvm use`)

## Architecture

- **Entry**: `src/main.ts` → `bootstrapApplication(AppComponent, appConfig)`
- **Config**: `app.config.ts` provides router + zone change detection
- **Routing**: `app.routes.ts` — `""` → HomeComponent, `"resume"` → ResumeComponent
- **Layout**: AppComponent → NavbarComponent (fixed top) + `<router-outlet>`
- **Pages**: `src/app/pages/home/`, `src/app/pages/resume/`
- **Shared**: `src/app/shared/components/navbar/` (NavbarComponent uses `inject(ThemeService)`)
- **Service**: `src/app/core/services/theme.service.ts` — Angular signals + localStorage + `dark` class on `<html>`
- **Styles**: Tailwind CSS v4 with `@custom-variant dark`, Inter font from Google Fonts
- **No state mgmt, no HTTP, no forms, no guards, no lazy routes**

## Conventions

- Standalone components with `imports` array (no NgModules)
- `inject()` for DI (not constructor injection)
- No `styleUrls` — all styling via Tailwind utility classes in templates
- Block control flow (`@for`/`@if`) instead of `*ngFor`/`*ngIf`
- Dark mode via `ThemeService.isDarkMode()` signal, applied as `dark:` prefix in templates
- EditorConfig: 2-space indent, single quotes for TS

## Testing

Test framework is Karma + Jasmine. Test builder: `@angular/build:karma`.
To add a test: place `*.spec.ts` next to the component/service under `src/`.
Run full suite: `npm test` (runs in watch mode, use `--no-watch` for single run).

## Build / Deploy

`ng build` outputs to `dist/portfolio/browser/`. Production build enables hashing, 500kB/1MB budget warnings.

## Quirks

- **PostCSS config**: Angular only reads `postcss.config.json` or `.postcssrc.json` (JS format not supported).
- **Tailwind v4**: Requires `postcss.config.json` with `@tailwindcss/postcss` plugin and `@import "tailwindcss"` in CSS (no `tailwind.config.*` file).
