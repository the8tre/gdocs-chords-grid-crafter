# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Google Docs add-on for creating/editing chord grid notation charts. Published on [Google Workspace Marketplace](https://workspace.google.com/marketplace/app/chords_grid_crafter/288629459826).

## Commands

```bash
npm run build    # TypeScript → build/
npm run lint     # ESLint via gts
npm run fix      # Auto-fix lint issues
npm run dev      # Watch + deploy to Apps Script (requires clasp auth)
npm run clean    # Remove build artifacts
```

No test suite configured.

## Docs site (Jekyll)

```bash
npm run docs:serve   # Serve locally at http://localhost:4000 with live reload
# Or directly:
cd docs && bundle exec jekyll serve --livereload
```

Requires Ruby + Bundler. First time: `cd docs && bundle install`.

Deployed via GitHub Actions (`.github/workflows/jekyll.yml`) on push to `main` when `docs/**` changes. GitHub Pages source must be set to **GitHub Actions** in repo settings (not branch).

### jekyll-polyglot i18n (EN + FR)

Translation strings: `docs/_data/en/l10n.yml` and `docs/_data/fr/l10n.yml`. Access via `site.data[site.active_lang].l10n.<key>` — NOT `site.data.l10n.<key>` (polyglot 1.5.1 does not auto-merge).

Content pages: each language variant lives in its own file (`docs/index.md` for EN, `docs/fr/index.md` for FR). Rules:
- Every markdown file **must have front matter** (even if minimal) — without it polyglot treats the file as a static asset and skips layout/lang processing.
- FR files need an explicit `permalink` matching the EN file's path so polyglot maps them as the same page: e.g. `permalink: /index.html` on both.
- `page.url` is already lang-stripped by polyglot at render time (e.g. `/index.html` on both EN and FR pages).

Language switcher gotcha: polyglot **post-processes all `href="/..."`** in rendered HTML and prefixes them with `/<active_lang>/`. To emit a link that bypasses this (e.g. the "back to English" link), use the `ferh=` attribute instead of `href=` — polyglot converts `ferh=` → `href=` without adding the lang prefix. This is the mechanism behind the `{% static_href %}` tag but works with Liquid variables unlike that tag.

## Architecture

Two-file core:

- **`src/main.ts`** — Google Apps Script backend. Exposes functions callable from the sidebar via `google.script.run`: `insertImage()` (base64 PNG → document), `loadFromSelection()` (extracts stored data from selected image), `getLocalizedStrings()` (i18n).
- **`src/sidebar.html`** — Self-contained HTML/CSS/JS frontend. Canvas-based real-time preview. All chord grid rendering logic lives here.

**Data persistence:** Chord grid state serializes as JSON into the image's `altDescription` field, prefixed `CGC_DATA`. This is how re-editing an existing grid works — select the image, open the panel, backend reads the alt text.

**Data model shape:**
```js
{ settings: { font: {...}, scale, shape, clockwise }, g: { 0: { c: [...], o: {...} }, ... } }
```

**Deployment flow:** TypeScript compiles to `build/`. CLASP pushes `build/` + `appsscript.json` to Google Apps Script (see `.clasp.json` for scriptId). `.claspignore` excludes everything else.

**i18n:** English + French. Locale detected server-side via `Session.getActiveUserLocale()`. Strings served from backend to frontend on panel open.

## Style

ESLint via `gts` (Google TypeScript Style). Double quotes enforced (`.eslintrc.json`). Run `npm run fix` before committing.
