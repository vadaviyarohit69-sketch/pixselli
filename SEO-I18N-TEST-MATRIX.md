# I18N Route Test Matrix

## Quick Automation

1. Start app: `npm run dev`
2. Run checks: `npm run test:i18n-routes`
3. Optional custom host: `BASE_URL=http://localhost:3000 npm run test:i18n-routes`
4. Script auto-discovers all static routes from `app/**/page.tsx`
5. Script fails if any English route is missing its expected Spanish counterpart

## CI Automation

- GitHub Actions workflow: `.github/workflows/i18n-smoke.yml`
- Runs on push, pull request, and manual dispatch
- Pipeline sequence:
	1. `npm ci`
	2. `npm run typecheck`
	3. `npm run build`
	4. Serve `out` at port 3000 via Python HTTP server
	5. `BASE_URL=http://127.0.0.1:3000 npm run test:i18n-routes`

## What The Script Verifies

- Every discovered route responds with status < 400
- Every EN route has an ES counterpart (`/foo` -> `/es/foo`, and `/` -> `/es`)
- Query/hash smoke check for image-resizer locale switching paths

## Critical Route Matrix

- `/` -> 200
- `/es` -> 200
- `/image-resizer` -> 200
- `/es/image-resizer` -> 200
- `/about` -> 200
- `/es/about` -> 200
- `/blog` -> 200
- `/es/blog` -> 200
- `/blog/how-to-compress-images-without-losing-quality` -> 200
- `/es/blog/how-to-compress-images-without-losing-quality` -> 200
- `/png-to-jpg` -> 200
- `/es/png-to-jpg` -> 200
- `/webp-compressor` -> 200
- `/es/webp-compressor` -> 200
- `/contact` -> 200
- `/es/contact` -> 200

## Manual Locale-Switch Scenarios

- From `/image-resizer`, switch EN -> ES, expect `/es/image-resizer`
- From `/es/image-resizer`, switch ES -> EN, expect `/image-resizer`
- From `/image-resizer?tab=custom#sizes`, switch EN -> ES, expect `/es/image-resizer?tab=custom#sizes`
- On ES pages, Header links to About/Blog should stay in `/es/...`
- On ES pages, Footer internal links should stay in `/es/...`

## Failure Signals

- Any status >= 400 in script output
- Missing ES counterpart reported in output summary
- Locale switch sends user to `/es` instead of preserving route
- Header/Footer internal links drop locale prefix while on ES pages
