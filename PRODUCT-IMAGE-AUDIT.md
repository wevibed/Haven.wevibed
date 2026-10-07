# Cenacle Computers — product image audit

Every supplied photo was opened and checked against the product it was filed under. `npm run audit` re-checks that each product's files exist and that no photo is shared between two different products.

**Result: 47 catalogue items · 38 with a verified photo · 3 IMAGE REQUIRED · 6 services/software (no photo needed).**
The 3 missing photos show a "Photo coming soon" tile instead of a wrong picture.

## Wrong files found in the supplied pack (removed or re-assigned)
| Supplied file | What it actually shows | Action |
|---|---|---|
| hp-elitebook-1040-g4-1, -2 | HP ProBook 450 photos (duplicates of the ProBook files) | Removed → placeholder |
| laptop-type-c-charger-2 | A laptop battery | Removed |
| hdmi-cable-15m-2 | A multiport USB-C hub | Removed |
| m2-ssd-enclosure-1, -2 | A 2.5" HDD case and a 6-in-1 hub | Removed |
| sata-usb-cable-1 | The M.2 SSD enclosure | Moved to **M.2 SSD External Case** |
| sata-usb-cable-2 | A mouse pad | Removed |
| vga-cable-2m-2 | A SATA-to-USB cable | Moved to **SATA USB Cable** |
| mifi-router-2 | A 2.5" HDD case | Removed |
| wired-external-keyboard-2 | A wireless keyboard + mouse | Removed |
| desktop-power-cable-1, -2 | Laptop (clover-leaf) cable, not a desktop cable | Removed → placeholder |
| macbook-charger crop | Unreadable fragment | Removed → placeholder |
| 1tb-hard-drive-1 / 500gb duplicates | Same BarraCuda photo, capacity not visible | 1TB uses the photo labelled 1TB |
| Branded retail shots on unbranded items (StarTech Wi-Fi, Volkano pad, Cooler Master box) | Another maker's branding | Not used |
| Duplicate copies (batteries, caddy, pads, cables) | Same photo twice | De-duplicated |

Also fixed: category tiles, hero and "Software & Games" used generic stock (headphones, GPUs, a printer, a hand on a laptop). They now use real products or the real shop photos. Services and software show a "Service"/"Software" tile, never a shop photo posing as a product.

## Still needs YOUR photo
1. HP EliteBook 1040 G4 Core i5 — IMAGE REQUIRED
2. MacBook Charger — IMAGE REQUIRED
3. Desktop Power Cable — IMAGE REQUIRED

## Please confirm (shown, but not fully verifiable)
- Modio MC67 — supplied photo has no model label (MR71 and MW28 are labelled and verified).
- 500GB Internal Hard Drive — correct type (2.5" drive) but capacity not readable on the picture.
- 4-in-1 Multiport USB-C Hub — the picture is a hub with extra ports (SD, audio); swap for your own.
- Low-resolution client catalogue thumbnails (blurry but correct): Wired Mouse, HDMI Cable 1.5m, VGA Cable 2m, MiFi Router, Laptop Type-C Charger.
- Most other photos are online stock/manufacturer pictures of the right kind of item, not photos of your own stock. Replace with your own shelf photos when you have them.

## Prices
Prices are exactly those in the original catalogue data; no photo shows a price, so they could not be checked independently. "Laptop Batteries" and "PC Games" now display **From US$…** because the catalogue says price varies. Owner reminders (e.g. the External HDD Enclosure $5 price conflict) were moved out of the public product text into `internalNote` in `src/data/products.js`.
