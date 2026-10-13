# bcdcuganda.org

Website for Bufulu Community Development Center (BCDC), Nkumba Bufulu, Uganda.
Rebuilt in Next.js from the old PHP site on cPanel.

## Stack

Next.js 16 (App Router, TypeScript strict), Tailwind CSS v4, Rubik (self-hosted via Fontsource). Hosted on Vercel.

## Develop

```bash
npm install
npm run dev
```

## Where things live

- `src/lib/site.ts` — contact details, addresses, programs and other shared copy
- `src/lib/staff.ts` — staff names, roles and photos
- `src/images/` — photos (optimised by `next/image`)
- `public/media/` — homepage background video and its poster frame
- `next.config.ts` — redirects from the old `.php` URLs

## Contact form

The contact and support forms send email through [Resend](https://resend.com). Set these in Vercel:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Required. Without it the form tells visitors to email info@bcdcuganda.org instead. |
| `CONTACT_TO_EMAIL` | Optional. Defaults to info@bcdcuganda.org. |
| `CONTACT_FROM_EMAIL` | Optional. Must be on a domain verified in Resend. Defaults to `website@bcdcuganda.org`. |
