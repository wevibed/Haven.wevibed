import { Image } from "@/components/ui/image";
import { ArrowRight, Truck, ShieldCheck, Headphones, Tag } from "lucide-react";
import { SITE, IMAGES, whatsappLink } from "@/lib/site";

const benefits = [
  [Truck, "Local Store", "Eastgate Market"],
  [ShieldCheck, "Genuine Products", "Trusted Brands"],
  [Headphones, "Expert Support", "We're Here to Help"],
  [Tag, "Clear Pricing", "Best Deals Everyday"],
];

export default function Hero() {
  return (
    <section className="bg-tech-navy text-white">
      <div className="max-w-[1400px] mx-auto min-h-[650px] md:min-h-[700px] grid md:grid-cols-2 overflow-hidden">
        <div className="relative z-10 flex flex-col justify-center px-6 py-12 md:px-10 lg:px-16 order-2 md:order-1">
          <div className="text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-blue-200 mb-4">{SITE.eyebrow}</div>
          <h1 className="font-bold tracking-[-0.045em] text-[45px] leading-[0.98] md:text-6xl lg:text-7xl max-w-xl">Your next computer <span className="text-tech-blue">starts here.</span></h1>
          <p className="mt-5 text-[15px] md:text-base leading-7 text-slate-300 max-w-md">{SITE.subtagline}</p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href="#collections" className="inline-flex items-center justify-center gap-2 bg-tech-blue hover:bg-blue-500 transition-colors px-6 py-3.5 rounded-lg text-[11px] font-bold tracking-[0.12em] uppercase">Explore Products <ArrowRight className="w-4 h-4" /></a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3.5 border border-white/30 rounded-lg text-[11px] font-bold tracking-[0.12em] uppercase">WhatsApp Us</a>
          </div>
        </div>
        <div className="relative min-h-[390px] md:min-h-0 order-1 md:order-2 overflow-hidden bg-slate-900">
          <Image src={IMAGES.hero} alt="Technology products for home, office and business" fittingType="fill" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-tech-navy/50 via-transparent to-transparent" />
        </div>
      </div>
      <div className="bg-white text-slate-900 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 border-t border-slate-200">
        {benefits.map(([Icon, title, text]) => <div key={title} className="px-4 py-6 md:py-7 text-center"><div className="mx-auto w-12 h-12 rounded-full bg-blue-50 text-tech-blue grid place-items-center mb-3"><Icon className="w-6 h-6" /></div><div className="text-[11px] font-bold uppercase tracking-[0.08em]">{title}</div><div className="mt-1 text-xs text-slate-500">{text}</div></div>)}
      </div>
    </section>
  );
}
