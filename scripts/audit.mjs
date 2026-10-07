// npm run audit — checks every product: image files exist, no image shared with a different product, data sane.
import fs from "fs";
const src = fs.readFileSync(new URL("../src/data/products.js", import.meta.url), "utf8")
  .replace(/export const Product = [\s\S]*$/, "").replace(/export const /g, "const ") + "\nreturn { PRODUCTS, CATEGORY_ORDER };";
const { PRODUCTS, CATEGORY_ORDER } = new Function(src)();
let fail = 0; const bad = (m) => { fail++; console.log("  FAIL:", m); };
const owner = {};
const rows = PRODUCTS.map((p) => {
  const issues = [];
  if (!CATEGORY_ORDER.includes(p.category)) issues.push("unknown category");
  if (!(p.price > 0)) issues.push("missing price");
  p.images.forEach((u) => {
    if (!fs.existsSync(new URL("../public" + u, import.meta.url))) issues.push("missing file " + u);
    if (owner[u] && owner[u] !== p.id) issues.push(`image ${u} also used by ${owner[u]}`);
    owner[u] = p.id;
  });
  issues.forEach(bad);
  return { id: p.id, name: p.name, category: p.category, price: (p.priceFrom ? "from " : "") + p.price, photos: p.images.length, status: issues.length ? "FAIL" : p.images.length ? "PHOTO" : (p.kind ? "SERVICE/SOFTWARE" : "IMAGE REQUIRED") };
});
console.table(rows);
const c = (k) => rows.filter((r) => r.status === k).length;
console.log(`\n${PRODUCTS.length} products · ${c("PHOTO")} with verified photo · ${c("IMAGE REQUIRED")} IMAGE REQUIRED · ${c("SERVICE/SOFTWARE")} services/software (no photo) · ${fail} failures`);
process.exit(fail ? 1 : 0);
