# جاوب · Jawib

Arabic landing page + AI assistant — marketing site.

- **Stack:** Next.js (App Router), no UI framework, self-hosted fonts via `next/font`
- **Deploy:** Netlify (runtime auto-detected; no plugin declaration needed)
- **Forms:** Netlify Forms. `public/__forms.html` exists **only** for build-time
  form detection — App Router pages aren't emitted as static HTML, so without it
  the form is never registered. Field names there must match `components/LeadModal.js`.

## Local

```bash
npm install
npm run dev
```

## Notes

- `app/globals.css` holds the full design system as CSS custom properties.
- Page is server-rendered; only `Calculator` and `LeadModal` are client islands.
- JSON-LD (Organization / Service / FAQPage) is emitted from `app/page.js`.
