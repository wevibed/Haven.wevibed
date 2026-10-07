import { Image } from "@/components/ui/image";
import { ImageOff, Wrench, Disc3 } from "lucide-react";

// Shows the verified photo, or an honest placeholder. Never substitutes a different product's picture.
export default function ProductImage({ product, src, className = "", contain = true, alt }) {
  const url = src === undefined ? product.image_url : src;
  if (url) {
    return <Image src={url} alt={alt || product.name} fittingType="fill" loading="lazy"
      sizes="(min-width:1024px) 16vw, (min-width:768px) 25vw, 50vw"
      className={`w-full h-full ${contain ? "object-contain p-3" : "object-cover"} ${className}`} />;
  }
  const Icon = product.kind === "service" ? Wrench : product.kind === "software" ? Disc3 : ImageOff;
  const label = product.kind === "service" ? "Service" : product.kind === "software" ? "Software" : "Photo coming soon";
  return <div role="img" aria-label={`${product.name} — ${label}`} data-placeholder="true"
    className={`w-full h-full flex flex-col items-center justify-center gap-2 text-slate-400 bg-gradient-to-br from-slate-50 to-slate-100 ${className}`}>
    <Icon className="w-8 h-8" strokeWidth={1.5} />
    <span className="text-[9px] font-bold uppercase tracking-[0.14em]">{label}</span>
  </div>;
}
