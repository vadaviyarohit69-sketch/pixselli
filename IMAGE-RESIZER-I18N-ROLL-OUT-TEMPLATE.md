# Image-Resizer Style I18N Rollout Template

Use this file as a repeatable checklist when enabling `pt/fr/de/it` for any tool page.

## 1) Route Enablement (must)

1. Add tool route to `HOME_ONLY_LOCALIZED_ROUTES` in `lib/i18n.ts`.
2. Create wrapper pages:
   - `app/pt/<slug>/page.tsx`
   - `app/fr/<slug>/page.tsx`
   - `app/de/<slug>/page.tsx`
   - `app/it/<slug>/page.tsx`
   Each wrapper should import and return `@/app/<slug>/page`.

## 2) SEO + Hreflang (must)

1. Update base layout `app/<slug>/layout.tsx` alternates:
   - add `pt`, `fr`, `de`, `it` URLs.
2. Update Spanish layout `app/es/<slug>/layout.tsx` alternates:
   - add `pt`, `fr`, `de`, `it` URLs.
3. Create localized layouts with metadata:
   - `app/pt/<slug>/layout.tsx`
   - `app/fr/<slug>/layout.tsx`
   - `app/de/<slug>/layout.tsx`
   - `app/it/<slug>/layout.tsx`

## 3) Sitemap (must)

1. Add:
   - `const extraLocale<SlugName>Pages = ['pt', 'fr', 'de', 'it'].map(...)`
2. Include it in return array in `app/sitemap.ts`.

## 4) UI Translation (must)

1. Create dictionary file:
   - `lib/<toolName>Translations.ts`
2. In tool page:
   - use `useLanguage()` locale
   - load dictionary by locale
   - update helper `tx()` to support dictionary fallback for non-es locales
   - wrap JSX with `translateReactNode(page, dict)` if needed
3. If tool uses `BulkImageVariantsCard`, ensure upload title and validator messages also pass via translated `tx()`.

## 5) ES Design Consistency Guard

1. Ensure `app/es/<slug>/page.tsx` is wrapper to base page, not a different component/template.

## 6) Validation Commands

Run in this order:

1. `npm run typecheck`
2. Fast route check (single tool):
   - `BASE_URL=http://localhost:3005 npm run test:i18n-routes -- /<slug>`
3. Optional interactive UI check for upload cards:
   - use a Playwright smoke test to upload a sample file and verify post-upload translated labels.

## 7) Final Quick Checklist

- [ ] `/<slug>` and `/es/<slug>` still work
- [ ] `/pt|fr|de|it/<slug>` return 200
- [ ] Upload box heading translated for all locales
- [ ] Inner tool labels translated (not only page headings)
- [ ] Hreflang includes en/es/pt/fr/de/it + x-default
- [ ] Sitemap includes new extra locale URLs
