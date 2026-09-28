import { IMAGES } from "@/lib/site";

export const PRODUCTS = [
  { id: "laptop-01", name: "Laptop", price: null, currency: "USD", category: "Laptops & Computers", image_url: IMAGES.laptop, availability: "Ask for price" },
  { id: "phone-01", name: "Smartphone", price: null, currency: "USD", category: "Phones & Tablets", image_url: IMAGES.phone, availability: "Ask for price" },
  { id: "printer-01", name: "Office Printer", price: null, currency: "USD", category: "Printers", image_url: IMAGES.printer, availability: "Ask for price" },
  { id: "network-01", name: "Wi-Fi Router", price: null, currency: "USD", category: "Networking", image_url: IMAGES.networking, availability: "Ask for price" },
  { id: "accessory-01", name: "Tech Accessories", price: null, currency: "USD", category: "Accessories", image_url: IMAGES.accessories, availability: "Ask for price" },
  { id: "cctv-01", name: "CCTV & Security", price: null, currency: "USD", category: "CCTV & Security", image_url: IMAGES.cctv, availability: "Ask for price" },
];

export const Product = {
  async filter(query = {}, _sort, limit) { const items = PRODUCTS.filter(p => Object.entries(query).every(([k,v]) => p[k] === v)); return limit ? items.slice(0, limit) : items; },
  async list(_sort, limit) { return limit ? PRODUCTS.slice(0, limit) : PRODUCTS; },
  async get(id) { return PRODUCTS.find(p => p.id === id) || null; },
};
