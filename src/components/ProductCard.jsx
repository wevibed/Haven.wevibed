import { MessageCircle } from "lucide-react";
import { Image } from "@/components/ui/image";
import { productEnquiryLink } from "@/lib/site";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return <div onClick={() => navigate(`/product/${product.id}`)} className="group cursor-pointer min-w-0">
    <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-square border border-slate-200"><Image src={product.image_url} alt={product.name} fittingType="fill" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <a href={productEnquiryLink(product)} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="absolute bottom-2 left-2 right-2 bg-white/95 text-slate-900 rounded-lg py-2 flex items-center justify-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.08em] shadow"> <MessageCircle className="w-3.5 h-3.5 text-tech-blue" /> Enquire</a>
    </div>
    <div className="mt-3"><div className="text-[9px] font-bold tracking-[0.12em] uppercase text-tech-blue">{product.category}</div><h3 className="mt-1 text-sm font-semibold leading-tight">{product.name}</h3><div className="mt-1 text-sm font-bold">{product.price ? `US$${Number(product.price).toLocaleString("en-US")}` : "Ask for price"}</div></div>
  </div>;
}
