export const SITE = {
  brand: "CENACLE COMPUTERS",
  shortBrand: "CENACLE COMPUTERS",
  tagline: "All brands on board",
  eyebrow: "Computers · Accessories · Repairs",
  subtagline: "Laptops, computer accessories, software and reliable repair services for work, study and everyday life.",
  addressLine1: "Shop B29, Eastgate Market",
  addressLine2: "Harare, Zimbabwe",
  hours: "9:00 AM – 6:00 PM (confirm operating days)",
  status: "Visit our shop at Eastgate Market",
  phoneDisplay: "+263 77 480 4019",
  phone: "263774804019",
  email: "cenaclecomputers@gmail.com",
  instagram: "",
  facebook: "https://www.facebook.com/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cenacle+Computers+Shop+B29+Eastgate+Market+Harare+Zimbabwe",
};

// Real photos of the shop (supplied by the client). Used for banners only — never as product images.
export const IMAGES = {
  hero: "/shop/cenacle-shop-entrance.webp",
  shop: "/shop/cenacle-shop-interior.webp",
  entrance: "/shop/cenacle-shop-entrance.webp",
};

// Category tiles use a real product from that category (id), or a real shop photo where the category has no product photo.
export const CATEGORIES = [
  { name: "Laptops", image: "/products/hp-probook-450-g9-1.webp" },
  { name: "Laptop Accessories", image: "/products/aluminium-laptop-stand-1.webp" },
  { name: "Cables & Connectivity", image: "/products/hdmi-to-vga-converter-1.webp" },
  { name: "Storage & Components", image: "/products/second-hdd-caddy-1.webp" },
  { name: "Peripherals & Gaming", image: "/products/wireless-keyboard-mouse-combo-1.webp" },
  { name: "Smartwatches", image: "/products/modio-mw28-1.webp" },
  { name: "Software & Games", image: "/shop/cenacle-shop-interior.webp" },
  { name: "Repairs & Services", image: "/shop/cenacle-shop-entrance.webp" },
];

export function whatsappLink(message = "Hello Cenacle Computers, I'd like to enquire about your products and services.") {
  return `https://wa.me/${SITE.phone}?text=${encodeURIComponent(message)}`;
}

export function productEnquiryLink(product) {
  const price = product.price ? ` listed at ${product.priceFrom ? "from " : ""}US$${Number(product.price).toLocaleString("en-US")}` : "";
  return whatsappLink(`Hello Cenacle Computers, I'm interested in ${product.name}${price}. Is it available?`);
}
