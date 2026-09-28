import { Image } from "@/components/ui/image";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/lib/site";

export default function ShopByCategory() {
  return <section id="collections" className="bg-slate-50">
    <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-24">
      <div className="flex items-end justify-between mb-8"><div><div className="text-[10px] tracking-[0.18em] uppercase text-tech-blue font-bold mb-2">Shop by Category</div><h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em]">Popular Categories</h2></div><a href="/shop" className="hidden md:flex items-center gap-2 text-sm font-semibold text-tech-blue">View All <ArrowRight className="w-4 h-4" /></a></div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">{CATEGORIES.map(c => <a href="/shop" key={c.name} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm"><div className="aspect-[1.35] overflow-hidden bg-slate-100"><Image src={c.image} alt={c.name} fittingType="fill" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div><div className="p-4 flex items-center justify-between"><span className="font-semibold text-sm md:text-base">{c.name}</span><ArrowRight className="w-4 h-4 text-tech-blue" /></div></a>)}</div>
    </div>
  </section>;
}
