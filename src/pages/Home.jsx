import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import NewArrivals from "@/components/sections/NewArrivals";
import ShopByCategory from "@/components/sections/ShopByCategory";
import { MessageCircle, ArrowRight, MapPin, Clock, Phone, Navigation } from "lucide-react";
import { SITE, IMAGES, whatsappLink } from "@/lib/site";

export default function Home() {
  return <div className="min-h-screen bg-white text-slate-900">
    <Header />
    <main>
      <Hero />
      <ShopByCategory />
      <NewArrivals />
      <section className="bg-slate-50 border-y border-slate-200" id="visit-us"><div className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-20"><div className="grid md:grid-cols-[1.05fr_.95fr] gap-8 md:gap-12 items-center"><div className="grid grid-cols-2 gap-3"><img src={IMAGES.entrance} alt="Entrance to Cenacle Computers at Shop B29, Eastgate Market" className="w-full h-full min-h-[280px] md:min-h-[420px] object-cover rounded-2xl shadow-sm"/><img src={IMAGES.shop} alt="Inside Cenacle Computers with laptops and accessories on display" className="w-full h-full min-h-[280px] md:min-h-[420px] object-cover rounded-2xl shadow-sm"/></div><div><div className="text-[10px] tracking-[0.18em] uppercase text-tech-blue font-bold mb-3">Come and see us</div><h2 className="text-3xl md:text-5xl font-bold tracking-[-0.04em] text-slate-950">Your local computer shop at Eastgate Market.</h2><p className="mt-4 text-slate-600 leading-7">Browse laptops and accessories in person, or visit us for computer repair and upgrade enquiries. Look for stall B29.</p><div className="mt-6 space-y-4 text-sm"><div className="flex gap-3"><span className="w-10 h-10 shrink-0 rounded-xl bg-blue-50 text-tech-blue grid place-items-center"><MapPin className="w-5 h-5"/></span><div><strong className="block text-slate-900">Shop B29, Eastgate Market</strong><span className="text-slate-500">Harare, Zimbabwe</span></div></div><div className="flex gap-3"><span className="w-10 h-10 shrink-0 rounded-xl bg-blue-50 text-tech-blue grid place-items-center"><Clock className="w-5 h-5"/></span><div><strong className="block text-slate-900">Business hours</strong><span className="text-slate-500">9:00 AM – 6:00 PM; confirm operating days</span></div></div><div className="flex gap-3"><span className="w-10 h-10 shrink-0 rounded-xl bg-blue-50 text-tech-blue grid place-items-center"><Phone className="w-5 h-5"/></span><div><strong className="block text-slate-900">+263 77 480 4019</strong><span className="text-slate-500">Call or WhatsApp</span></div></div></div><div className="mt-7 flex flex-col sm:flex-row gap-3"><a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-tech-navy text-white px-5 py-3 text-sm font-semibold"><Navigation className="w-4 h-4"/> Get Directions</a><a href={whatsappLink('Hello Cenacle Computers, I would like to ask about visiting your shop at Eastgate Market.')} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#16a34a] text-white px-5 py-3 text-sm font-semibold"><MessageCircle className="w-4 h-4"/> WhatsApp Us</a></div></div></div></div></section>
      <section className="bg-tech-navy text-white"><div className="max-w-[1200px] mx-auto px-5 md:px-8 py-16 text-center"><div className="text-[10px] tracking-[0.18em] uppercase text-blue-200 mb-3">Need help choosing?</div><h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em]">Talk to Cenacle Computers</h2><p className="mt-4 text-slate-300 max-w-xl mx-auto">Send us the product you're looking for and we'll help you check availability, pricing and options.</p><a href={whatsappLink()} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 bg-tech-blue px-6 py-3.5 rounded-lg text-[11px] font-bold tracking-[0.12em] uppercase">Chat on WhatsApp <ArrowRight className="w-4 h-4" /></a></div></section>
    </main>
    <Footer />
    <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed right-4 bottom-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl grid place-items-center hover:scale-105 transition-transform"><MessageCircle className="w-7 h-7" /></a>
  </div>;
}
