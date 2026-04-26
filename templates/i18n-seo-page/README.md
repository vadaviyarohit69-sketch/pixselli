# I18N + SEO Starter Template

Use this folder when adding a new page with the same language and SEO architecture used in this project.

## Replace Placeholders

- `__SLUG__` -> page slug, example: `image-resizer`
- `__TITLE_EN__`, `__DESC_EN__` -> English metadata
- `__TITLE_ES__`, `__DESC_ES__` -> Spanish metadata
- `__I18N_PREFIX__` -> key prefix, example: `tool.imageResizer`

## Copy Targets

1. Copy `page.client.template.txt` to `app/__SLUG__/page.tsx`
2. Copy `layout.en.template.txt` to `app/__SLUG__/layout.tsx`
3. Copy `page.es-wrapper.template.txt` to `app/es/__SLUG__/page.tsx`
4. Copy `layout.es.template.txt` to `app/es/__SLUG__/layout.tsx`
5. Merge keys from `i18n.keys.template.txt` into `lib/i18n.ts`
6. Merge entries from `sitemap.snippet.template.txt` into `app/sitemap.ts`

## Final Validation

1. `npm run typecheck`
2. `npm run test:i18n-routes`
3. `npm run build`
