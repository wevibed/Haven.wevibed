export const SITE = {
  brand: "DIGITAL HAVEN",
  shortBrand: "DIGITAL HAVEN",
  tagline: "Your Tech Destination in Zimbabwe",
  eyebrow: "Computers · Electronics · ICT Solutions",
  subtagline: "Laptops, desktops, phones, accessories and complete ICT solutions for home, office and business.",
  addressLine1: "Eastgate Market, Shop C10",
  addressLine2: "Harare, Zimbabwe",
  hours: "Message us for current hours",
  status: "Fast Delivery · Message Us On WhatsApp",
  phoneDisplay: "077 480 4019",
  phone: "263774804019",
  instagram: "",
  facebook: "",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Eastgate+Market+Harare",
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
};

export const CATEGORIES = [
  { name: "Laptops & Computers", image: IMAGES.laptop },
  { name: "Phones & Tablets", image: IMAGES.phone },
  { name: "Accessories", image: IMAGES.accessories },
  { name: "Printers", image: IMAGES.printer },
  { name: "Networking", image: IMAGES.networking },
  { name: "Components", image: IMAGES.components },
  { name: "Software", image: IMAGES.software },
  { name: "CCTV & Security", image: IMAGES.cctv },
];

export function whatsappLink(message = "Hi Digital Haven! I'd like to enquire about your products.") {
  return `https://wa.me/${SITE.phone}?text=${encodeURIComponent(message)}`;
}

export function productEnquiryLink(product) {
  return whatsappLink(`Hi Digital Haven! I'm interested in the ${product.name}. Is it currently available?`);
}
