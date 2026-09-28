import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";

const NAV = [
  { label: "Shop", to: "/shop" },
  { label: "Categories", target: "collections" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const go = (target) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToId(target), 120);
    } else scrollToId(target);
  };

  return (
    <>
      <div className="w-full bg-tech-navy text-white text-center py-2 px-3 text-[9px] md:text-[10px] tracking-[0.14em] uppercase">
        Fast Delivery in Harare & Surrounding Areas <span className="mx-2 opacity-40">|</span> Message Us on WhatsApp
      </div>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-[74px] grid grid-cols-[1fr_auto_1fr] items-center">
          <div className="flex items-center gap-4">
            <button onClick={() => setOpen(true)} className="md:hidden" aria-label="Open menu"><Menu className="w-6 h-6" /></button>
            <nav className="hidden md:flex items-center gap-7 text-[11px] font-semibold tracking-[0.12em] uppercase">
              <Link to="/shop">Shop</Link>
              <button onClick={() => go("collections")}>Categories</button>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
          <Link to="/" className="text-center leading-none">
            <div className="font-bold tracking-[-0.05em] text-xl md:text-2xl text-slate-900">DIGITAL<span className="text-tech-blue">.</span></div>
            <div className="text-[9px] md:text-[10px] font-bold tracking-[0.28em] text-tech-blue mt-1">HAVEN</div>
          </Link>
          <div className="flex items-center justify-end gap-4">
            <button aria-label="Search" className="hidden md:block"><Search className="w-5 h-5" /></button>
            <Link to="/shop" aria-label="Shopping cart" className="relative"><ShoppingCart className="w-5 h-5" /><span className="absolute -top-2 -right-2 bg-tech-blue text-white text-[8px] w-4 h-4 rounded-full grid place-items-center">0</span></Link>
          </div>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex items-center justify-between px-5 h-[74px] border-b border-slate-200">
            <div className="font-bold tracking-[-0.04em]">DIGITAL<span className="text-tech-blue">.</span> <span className="text-tech-blue text-xs tracking-[0.2em]">HAVEN</span></div>
            <button onClick={() => setOpen(false)} aria-label="Close menu"><X className="w-6 h-6" /></button>
          </div>
          <nav className="flex flex-col px-6 pt-10 gap-7 text-3xl font-bold">
            <Link onClick={() => setOpen(false)} to="/shop">Shop</Link>
            <button className="text-left" onClick={() => go("collections")}>Categories</button>
            <Link onClick={() => setOpen(false)} to="/about">About</Link>
            <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
          </nav>
          <div className="mt-auto px-6 pb-10 text-sm text-slate-500">{SITE.addressLine1}<br />{SITE.addressLine2}<br />{SITE.phoneDisplay}</div>
        </div>
      )}
    </>
  );
}
