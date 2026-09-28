import { useEffect, useState } from "react";
import { Product } from "@/data/products";
import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";

const CATS = ["All", "Laptops", "Phones & Tablets", "Monitors", "Accessories", "Printers", "Networking"];

export default function Shop() {
  const [products, setProducts] = useState([]); const [cat, setCat] = useState("All");
  useEffect(() => { Product.list("-created_date", 100).then(setProducts); }, []);
  const filtered = cat === "All" ? products : products.filter(p => p.category === cat);
  return <PageShell><PageHeader label="Technology Store" title="Shop" subtitle="Browse computers, electronics, accessories and everyday technology. Message us to confirm current stock and pricing." /><section className="max-w-[1400px] mx-auto px-5 md:px-8 pb-20"><div className="flex flex-wrap gap-2 mb-8">{CATS.map(c => <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.08em] border ${cat===c ? "bg-tech-blue text-white border-tech-blue" : "border-slate-200"}`}>{c}</button>)}</div><div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">{filtered.map(p => <ProductCard key={p.id} product={p} />)}</div></section></PageShell>;
}
