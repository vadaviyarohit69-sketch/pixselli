# I18N + SEO Page Playbook (Pixselli)

This file explains how language features and SEO are implemented for the current homepage and how to repeat the same pattern for any other page.

## 1) Current Project Standard

- Default language: English at root path `/`
- Secondary language: Spanish at prefixed path `/es/...`
- Locale source of truth: URL path
- Translation source: `lib/i18n.ts` dictionary keys

## 2) Files You Should Follow

- `lib/i18n.ts`
  - Locale config, translation dictionary, helpers
  - Important helpers: `getPathLocale`, `replaceLocaleInPath`, `localizePath`, `translate`

- `components/LanguageProvider.tsx`
  - Global locale context (`useLanguage`)
  - Language switching that preserves pathname + query + hash
  - Sets `<html lang>` dynamically

- `app/page.tsx`
  - Client-side translated homepage content via `useLanguage()` and `t(...)`
  - Locale-aware structured data values

- `app/[locale]/page.tsx`
  - Spanish localized home route metadata (`/es`)

- `app/sitemap.ts`
  - Includes both EN and ES routes

- `scripts/verify-i18n-routes.mjs`
  - Full i18n route parity and HTTP smoke checks

## 3) Language Feature Pattern For Any New Page

### Step A: Add translation keys

Add EN + ES keys in `lib/i18n.ts`.

Example key naming style:
- `tool.imageResizer.title`
- `tool.imageResizer.description`
- `tool.imageResizer.cta`

### Step B: Use language hook in client page

```tsx
"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function MyPage() {
  const { t, locale } = useLanguage();

  return (
    <main>
      <h1>{t("tool.myTool.title")}</h1>
      <p>{t("tool.myTool.description")}</p>
      <p>Locale: {locale}</p>
    </main>
  );
}
```

### Step C: Keep internal links locale-aware

Use `localizePath` for internal links from shared components or page UI.

```tsx
import Link from "next/link";
import { localizePath } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

const { locale } = useLanguage();
<Link href={localizePath("/about", locale)}>About</Link>
```

### Step D: Create Spanish wrapper route

Create `app/es/<slug>/page.tsx`:

```tsx
import Page from "@/app/<slug>/page";

export default function SpanishPage() {
  return <Page />;
}
```

## 4) SEO Pattern For Any New Page

### Step A: EN metadata layout

Create/update `app/<slug>/layout.tsx` with:
- title
- description
- canonical
- alternates.languages (en, es, x-default)
- openGraph (url, locale)
- twitter
- robots

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "...",
  description: "...",
  alternates: {
    canonical: "https://pixselli.com/<slug>",
    languages: {
      en: "https://pixselli.com/<slug>",
      es: "https://pixselli.com/es/<slug>",
      "x-default": "https://pixselli.com/<slug>",
    },
  },
  openGraph: {
    title: "...",
    description: "...",
    url: "https://pixselli.com/<slug>",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

### Step B: ES metadata layout

Create/update `app/es/<slug>/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { metadata as baseMetadata } from "@/app/<slug>/layout";

export const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://pixselli.com/es/<slug>",
    languages: {
      en: "https://pixselli.com/<slug>",
      es: "https://pixselli.com/es/<slug>",
      "x-default": "https://pixselli.com/<slug>",
    },
  },
  openGraph: {
    ...baseMetadata.openGraph,
    url: "https://pixselli.com/es/<slug>",
    locale: "es_ES",
  },
};

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

### Step C: Structured data (JSON-LD) best pattern

If page has JSON-LD, keep values locale-aware:
- Use locale-specific page URL
- Keep text in current language
- Ensure schema content matches visible page content

Important policy-safe rule:
- Do not publish fake `AggregateRating` values unless they are real and verifiable.

## 5) Google-Friendly Checklist (Before Deploy)

- Page has self-canonical for EN and ES versions
- `hreflang` is reciprocal (EN points to ES, ES points to EN)
- Metadata language matches page language
- Structured data language and URL match page locale
- No misleading claims, fake ratings, or hidden content
- Internal links preserve locale context
- Sitemap contains EN + ES route pairs

## 6) Routing + Indexing Checklist

- Route exists at:
  - `/slug`
  - `/es/slug`
- Added in `app/sitemap.ts` for both locales
- Passes route smoke checks

## 7) Validation Commands

Run these before final merge/deploy:

```bash
npm run typecheck
npm run test:i18n-routes
npm run build
```

Faster (single tool / page only):

```bash
npm run test:i18n-routes -- /compress-for-forms
```

Even faster when working in git (auto-detect changed routes):

```bash
npm run test:i18n-routes:changed
```

For CI-like static validation:

```powershell
$ErrorActionPreference='Stop'
npm run build
$server = Start-Process python -ArgumentList @('-m','http.server','3000','--directory','out') -PassThru
try {
  $env:BASE_URL='http://127.0.0.1:3000'
  npm run test:i18n-routes
} finally {
  if ($server -and !$server.HasExited) { Stop-Process -Id $server.Id -Force }
}
```

## 8) Quick Copy Workflow For New Page

1. Create EN page at `app/<slug>/page.tsx`
2. Add translation keys in `lib/i18n.ts`
3. Use `useLanguage()` + `t(...)` in page content
4. Add EN metadata in `app/<slug>/layout.tsx`
5. Add ES wrapper page at `app/es/<slug>/page.tsx`
6. Add ES metadata at `app/es/<slug>/layout.tsx`
7. Add routes in sitemap (EN + ES)
8. Run validation commands

## 9) Ready Starter Folder

Use this ready-to-copy folder:

- `templates/i18n-seo-page/README.md`
- `templates/i18n-seo-page/page.client.template.txt`
- `templates/i18n-seo-page/layout.en.template.txt`
- `templates/i18n-seo-page/page.es-wrapper.template.txt`
- `templates/i18n-seo-page/layout.es.template.txt`
- `templates/i18n-seo-page/i18n.keys.template.txt`
- `templates/i18n-seo-page/sitemap.snippet.template.txt`

This is the fastest way to add the same language + SEO stack to any new page.

---

If you follow this playbook, your next pages will stay consistent with the current i18n + SEO architecture and reduce indexing/regression issues later.
