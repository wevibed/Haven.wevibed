# Cenacle Computers Website

Mobile-first React + Vite website for Cenacle Computers, Shop B29, Eastgate Market, Harare, Zimbabwe.

## Included
- Homepage, category browsing, product details, About and Contact pages
- Catalogue data for laptops, accessories, cables, components, peripherals, smartwatches, software and services
- WhatsApp enquiry links for products and services
- Shop visit section with local shop photos, directions, phone and business hours
- Responsive layout and Cloudflare Pages-compatible Vite build

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```
Deploy the generated `dist` directory to Cloudflare Pages. For GitHub Pages or Cloudflare Pages, configure SPA fallback/rewrites if deep links are used.

## Catalogue and images
- Product data: `src/data/products.js` (names, prices, categories, verified image list per product).
- Photos: `public/products/` (WebP). A product with no verified photo shows a placeholder, never another product's picture.
- Run `npm run audit` after changing products or images. See `PRODUCT-IMAGE-AUDIT.md` for what was corrected and what still needs a photo.
- To add a photo: drop a WebP in `public/products/` named after the product (e.g. `macbook-charger-1.webp`) and add it to that product's `images` list.
- Originals of the shop photos are in `reference-images/` (not deployed).
