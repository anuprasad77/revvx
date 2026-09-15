# REVVX storefront

Premium, mobile-first Next.js 15 storefront for REVVX motorcycle accessories. The current implementation provides the luxury landing experience, responsive catalogue filtering, bike compatibility selector, persistent in-session cart drawer, quantity controls, and WhatsApp-first ordering / fitment flow.

## Start locally

```bash
pnpm install
pnpm dev
```

Before launch, replace `916362777677` in `app/page.tsx` with the REVVX WhatsApp Business number and replace the temporary Unsplash photography with licensed originals in `public/images/`.

`supabase/schema.sql` defines the initial scalable schema for products, bike fitment compatibility, and WhatsApp inquiries. `vercel.json`, sitemap, robots, metadata, security headers, and responsive styling are included for deployment.
