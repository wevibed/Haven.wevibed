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

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1800&q=85",
  laptop: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=82",
  phone: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=82",
  accessories: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=82",
  printer: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=900&q=82",
  networking: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=900&q=82",
  components: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=900&q=82",
  software: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=82",
  cctv: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=900&q=82",
  shop: "/images/cenacle-shop-interior.png",
  entrance: "/images/cenacle-shop-entrance.png",
};

export const CATEGORIES = [
  { name: "Laptops", image: IMAGES.laptop },
  { name: "Laptop Accessories", image: IMAGES.accessories },
  { name: "Cables & Connectivity", image: IMAGES.networking },
  { name: "Storage & Components", image: IMAGES.components },
  { name: "Peripherals & Gaming", image: IMAGES.printer },
  { name: "Smartwatches", image: IMAGES.phone },
  { name: "Software & Games", image: IMAGES.software },
];

export function whatsappLink(message = "Hello Cenacle Computers, I'd like to enquire about your products and services.") {
  return `https://wa.me/${SITE.phone}?text=${encodeURIComponent(message)}`;
}

export function productEnquiryLink(product) {
  return whatsappLink(`Hello Cenacle Computers, I'm interested in ${product.name}${product.price ? ` listed at US$${Number(product.price).toLocaleString("en-US")}` : ""}. Is it available?`);
}
