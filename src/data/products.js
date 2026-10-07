// CENACLE COMPUTERS — CATALOGUE (names, categories and prices as supplied in the original catalogue data)
//
// images:  verified local photos only, listed best-first.  [] = no verified photo -> honest "Photo coming soon" tile.
// Rule: an image is only listed if it shows the SAME kind of product as the name (checked by eye against every
//       supplied file). Wrong/swapped files from the supplied pack were removed — see PRODUCT-IMAGE-AUDIT.md.
// priceFrom: true  -> price shown as "From US$x" (the catalogue says price varies by model/title).
// internalNote: owner-only reminders. NEVER displayed on the site.

const P = (f) => `/products/${f}.webp`;

const rows = [
  // ---------- LAPTOPS ----------
  { id: "hp-250-g9", name: "HP 250 G9", price: 300, category: "Laptops", images: ["hp-250-g9-1", "hp-250-g9-2", "hp-250-g9-3"], description: "New HP 250 G9 laptop." },
  { id: "hp-probook-450-g9", name: "HP ProBook 450 G9 (12th Gen)", price: 1200, category: "Laptops", images: ["hp-probook-450-g9-1", "hp-probook-450-g9-2", "hp-probook-450-g9-3"], description: "New HP ProBook 450 G9, 12th Gen Intel." },
  { id: "lenovo-ideapad-s145", name: "Lenovo IdeaPad S145", price: 280, category: "Laptops", images: ["lenovo-ideapad-s145-1", "lenovo-ideapad-s145-2"], description: "Lenovo IdeaPad S145, dual-core configuration.", internalNote: "Confirm exact spec before sale." },
  { id: "dell-3189", name: "Dell 3189 2-in-1", price: 150, category: "Laptops", images: ["dell-3189-1", "dell-3189-2", "dell-3189-3"], description: "Pre-owned Dell 3189 touch-screen 2-in-1.", internalNote: "Pre-owned; confirm condition." },
  { id: "hp-elitebook-1040-g4", name: "HP EliteBook 1040 G4 Core i5", price: 380, category: "Laptops", images: [], description: "Pre-owned HP EliteBook 1040 G4, Core i5.", internalNote: "IMAGE REQUIRED: the two supplied files were ProBook 450 photos, not a 1040 G4. Confirm RAM/storage." },
  { id: "hp-elitebook-840-g1", name: "HP EliteBook 840 G1", price: 250, category: "Laptops", images: ["hp-elitebook-840-g1-1", "hp-elitebook-840-g1-2", "hp-elitebook-840-g1-3"], description: "Pre-owned HP EliteBook 840 G1 — Core i5, 8GB RAM, 500GB HDD as listed." },

  // ---------- LAPTOP ACCESSORIES ----------
  { id: "aluminium-laptop-stand", name: "Aluminium Laptop Stand", price: 15, category: "Laptop Accessories", images: ["aluminium-laptop-stand-1", "aluminium-laptop-stand-2", "aluminium-laptop-stand-3"], description: "Adjustable aluminium laptop stand." },
  { id: "power-packs", name: "Power Packs", price: 10, category: "Laptop Accessories", images: ["power-packs-1", "power-packs-2"], description: "Laptop power adapters.", internalNote: "Confirm connector/model per customer." },
  { id: "laptop-power-cable", name: "Laptop Power Cable", price: 5, category: "Laptop Accessories", images: ["laptop-power-cable-1"], description: "Laptop power cable (3-pin UK plug to clover-leaf connector)." },
  { id: "universal-laptop-charger", name: "Universal Laptop Charger", price: 12, category: "Laptop Accessories", images: ["universal-laptop-charger-1", "universal-laptop-charger-2"], description: "Universal laptop charger with interchangeable tips.", internalNote: "Confirm connector and wattage." },
  { id: "laptop-type-c-charger", name: "Laptop Type-C Charger 45W/65W", price: 25, category: "Laptop Accessories", images: ["laptop-type-c-charger-1"], imageNote: "Low-resolution client catalogue thumbnail", description: "Type-C laptop charger, 45W or 65W." },
  { id: "macbook-charger", name: "MacBook Charger", price: 45, category: "Laptop Accessories", images: [], description: "MacBook charger.", internalNote: "IMAGE REQUIRED: only an unreadable catalogue crop was supplied. Confirm MacBook model." },
  { id: "laptop-cooler-pad", name: "Laptop Cooling Pad", price: 20, category: "Laptop Accessories", images: ["laptop-cooling-pad-1", "laptop-cooling-pad-2", "laptop-cooling-pad-3"], description: "USB-powered laptop cooling pad." },
  { id: "laptop-batteries", name: "Laptop Batteries", price: 25, priceFrom: true, category: "Laptop Accessories", images: ["laptop-batteries-1", "laptop-batteries-2"], description: "Replacement laptop batteries for many models. Price varies by model.", internalNote: "Images are examples of battery types, not specific stock." },
  { id: "usb-sound-card", name: "USB Sound Card", price: 5, category: "Laptop Accessories", images: ["usb-sound-card-1", "usb-sound-card-2"], description: "External USB audio adapter." },

  // ---------- CABLES & CONNECTIVITY ----------
  { id: "usb-wifi-adapter", name: "USB Wi-Fi Adapter", price: 10, category: "Cables & Connectivity", images: ["usb-wifi-adapter-1"], description: "USB wireless network adapter." },
  { id: "printer-cable-1m", name: "Printer Cable 1m", price: 3, category: "Cables & Connectivity", images: ["printer-cable-1m-1"], description: "USB printer cable, 1 metre." },
  { id: "hdmi-vga-converter", name: "HDMI to VGA Converter", price: 8, category: "Cables & Connectivity", images: ["hdmi-to-vga-converter-1"], description: "HDMI to VGA video adapter." },
  { id: "bluetooth-usb-dongle", name: "Bluetooth USB Dongle", price: 5, category: "Cables & Connectivity", images: ["bluetooth-usb-dongle-1"], description: "USB Bluetooth adapter." },
  { id: "vga-cable-2m", name: "VGA Cable 2m", price: 5, category: "Cables & Connectivity", images: ["vga-cable-2m-1"], imageNote: "Low-resolution client catalogue thumbnail", description: "VGA cable, 2 metres.", internalNote: "Catalogue price/length to confirm." },
  { id: "hdmi-cable-15m", name: "HDMI Cable 1.5m", price: 5, category: "Cables & Connectivity", images: ["hdmi-cable-1-5m-1"], imageNote: "Low-resolution client catalogue thumbnail", description: "HDMI cable, 1.5 metres." },
  { id: "desktop-power-cable", name: "Desktop Power Cable", price: 5, category: "Cables & Connectivity", images: [], description: "Power cable for desktop computers.", internalNote: "IMAGE REQUIRED: supplied photos showed a laptop (clover-leaf) cable, not a desktop kettle-lead." },
  { id: "mifi-router", name: "MiFi Router", price: 35, category: "Cables & Connectivity", images: ["mifi-router-1"], imageNote: "Low-resolution client catalogue thumbnail", description: "Portable MiFi router. Supports multiple service providers as listed." },
  { id: "usb-c-multiport-hub", name: "4-in-1 Multiport USB-C Hub", price: 40, category: "Cables & Connectivity", images: ["usb-c-multiport-hub-1"], imageNote: "Representative hub; the pictured unit has extra ports", description: "USB-C hub with HDMI, VGA, USB and Ethernet as listed.", internalNote: "Photo shows a hub with extra ports (SD, audio); swap for a photo of your actual 4-in-1." },

  // ---------- STORAGE & COMPONENTS ----------
  { id: "1tb-hard-drive", name: "1TB Internal Hard Drive", price: 35, category: "Storage & Components", images: ["1tb-internal-hard-drive-1"], description: "1TB internal 2.5-inch hard drive." },
  { id: "500gb-hard-drive", name: "500GB Internal Hard Drive", price: 20, category: "Storage & Components", images: ["500gb-internal-hard-drive-1"], description: "500GB internal hard drive.", internalNote: "Photo shows a 2.5-inch drive; capacity is not readable on it." },
  { id: "8gb-ddr4-ram", name: "Laptop RAM 8GB DDR4", price: 35, category: "Storage & Components", images: ["laptop-ram-8gb-ddr4-1"], description: "8GB DDR4 laptop memory (SO-DIMM).", internalNote: "Confirm speed and compatibility." },
  { id: "hdd-ext-case-2", name: "External HDD Enclosure USB 3.0", price: 5, category: "Storage & Components", images: ["external-hdd-enclosure-1"], description: "External enclosure for a 2.5-inch hard drive.", internalNote: "Price/description conflict in the source catalogue; confirm $5 before sale." },
  { id: "sata-usb-cable", name: "SATA USB Cable", price: 10, category: "Storage & Components", images: ["sata-usb-cable-1"], description: "SATA to USB cable for 2.5-inch drives." },
  { id: "m2-ssd-enclosure", name: "M.2 SSD External Case", price: 25, category: "Storage & Components", images: ["m2-ssd-external-case-1"], description: "USB 3.0 external case for M.2 SSDs.", internalNote: "Confirm drive compatibility (SATA vs NVMe)." },
  { id: "second-hdd-caddy", name: "Second HDD Caddy", price: 15, category: "Storage & Components", images: ["second-hdd-caddy-1", "second-hdd-caddy-2"], description: "Adds a second drive to a laptop through the DVD bay.", internalNote: "Confirm fit." },

  // ---------- PERIPHERALS & GAMING ----------
  { id: "flexible-keyboard", name: "Flexible Keyboard", price: 10, category: "Peripherals & Gaming", images: ["flexible-keyboard-1"], description: "Portable flexible keyboard." },
  { id: "wired-game-pad", name: "Wired PC Game Pad", price: 10, category: "Peripherals & Gaming", images: ["wired-pc-game-pad-1"], description: "Wired game controller for PC." },
  { id: "wired-mouse", name: "Wired Mouse", price: 5, category: "Peripherals & Gaming", images: ["wired-mouse-1"], imageNote: "Low-resolution client catalogue thumbnail", description: "Wired USB mouse.", internalNote: "Multiple quality options; confirm availability." },
  { id: "mouse-pad", name: "Mouse Pad", price: 8, category: "Peripherals & Gaming", images: ["mouse-pad-1"], description: "Mouse pad." },
  { id: "wired-external-keyboard", name: "Wired External Keyboard", price: 8, category: "Peripherals & Gaming", images: ["wired-external-keyboard-1"], description: "USB wired keyboard." },
  { id: "wireless-keyboard-mouse", name: "Wireless Keyboard and Mouse Combo", price: 18, category: "Peripherals & Gaming", images: ["wireless-keyboard-mouse-combo-1"], description: "Wireless keyboard and mouse combo." },

  // ---------- SMARTWATCHES ----------
  { id: "a58-plus-ladies-combo", name: "A58 Plus Ladies Combo", price: 25, category: "Smartwatches", images: ["a58-plus-ladies-combo-1"], description: "A58 Plus watch and accessories bundle, as pictured." },
  { id: "modio-mw28", name: "Modio MW28", price: 30, category: "Smartwatches", images: ["modio-mw28-1"], description: "Modio MW28 smartwatch.", internalNote: "Confirm included straps (picture says 3 pairs)." },
  { id: "modio-mr71", name: "Modio MR71", price: 25, category: "Smartwatches", images: ["modio-mr71-1"], description: "Modio MR71 smartwatch, black and silver, 2 straps as listed." },
  { id: "modio-mc67", name: "Modio MC67", price: 20, category: "Smartwatches", images: ["modio-mc67-1"], description: "Modio MC67 smartwatch, black.", internalNote: "UNVERIFIED: supplied photo has no model label. Confirm it is the MC67." },

  // ---------- REPAIRS & SERVICES (no product photo — these are services) ----------
  { id: "motherboard-repair", name: "Motherboard Power-Fault Repair", price: 50, category: "Repairs & Services", images: [], kind: "service", description: "Motherboard and power-fault diagnosis and repair.", internalNote: "Confirm whether parts are extra." },
  { id: "office-installation", name: "Microsoft Office Installation", price: 10, category: "Repairs & Services", images: [], kind: "service", description: "Installation service.", internalNote: "Confirm software and licensing requirements." },
  { id: "windows-office-activation", name: "Windows / Office Activation", price: 5, category: "Repairs & Services", images: [], kind: "service", description: "Activation assistance.", internalNote: "Confirm supported versions and valid licence." },

  // ---------- SOFTWARE & GAMES (no product photo) ----------
  { id: "pc-games", name: "PC Games", price: 5, priceFrom: true, category: "Software & Games", images: [], kind: "software", description: "PC games. Price varies by title and size." },
  { id: "adobe-master-collection", name: "Adobe Master Collection", price: 15, category: "Software & Games", images: [], kind: "software", description: "Adobe Master Collection.", internalNote: "Confirm exact package and licensing." },
  { id: "coreldraw", name: "CorelDRAW", price: 10, category: "Software & Games", images: [], kind: "software", description: "CorelDRAW graphics software.", internalNote: "Confirm version and licensing." },
];

export const PRODUCTS = rows.map((r) => {
  const images = r.images.map(P);
  return {
    ...r, currency: "USD", images,
    image_url: images[0] || null,
    availability: r.category === "Repairs & Services" ? "Enquire" : "Confirm availability",
  };
});

export const CATEGORY_ORDER = ["Laptops", "Laptop Accessories", "Cables & Connectivity", "Storage & Components", "Peripherals & Gaming", "Smartwatches", "Software & Games", "Repairs & Services"];

export const formatPrice = (p) => p.price ? `${p.priceFrom ? "From " : ""}US$${Number(p.price).toLocaleString("en-US")}` : "Ask for price";

export const Product = {
  async filter(query = {}, _sort, limit) { const items = PRODUCTS.filter(p => Object.entries(query).every(([k,v]) => p[k] === v)); return limit ? items.slice(0, limit) : items; },
  async list(_sort, limit) { return limit ? PRODUCTS.slice(0, limit) : PRODUCTS; },
  async get(id) { return PRODUCTS.find(p => p.id === id) || null; },
};
