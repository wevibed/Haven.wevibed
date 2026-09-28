import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import NewArrivals from "@/components/sections/NewArrivals";
import ShopByCategory from "@/components/sections/ShopByCategory";
import { MessageCircle, ArrowRight } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

export default function Home() {
  return <div className="min-h-screen bg-white text-slate-900">
    <Header />
    <main>
      <Hero />
      <ShopByCategory />
      <NewArrivals />
      <section className="bg-tech-navy text-white"><div className="max-w-[1200px] mx-auto px-5 md:px-8 py-16 text-center"><div className="text-[10px] tracking-[0.18em] uppercase text-blue-200 mb-3">Need help choosing?</div><h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em]">Talk to Digital Haven</h2><p className="mt-4 text-slate-300 max-w-xl mx-auto">Send us the product you're looking for and we'll help you check availability, pricing and options.</p><a href={whatsappLink()} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 bg-tech-blue px-6 py-3.5 rounded-lg text-[11px] font-bold tracking-[0.12em] uppercase">Chat on WhatsApp <ArrowRight className="w-4 h-4" /></a></div></section>
    </main>
    <Footer />
    <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed right-4 bottom-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl grid place-items-center hover:scale-105 transition-transform"><MessageCircle className="w-7 h-7" /></a>
  </div>;
}
