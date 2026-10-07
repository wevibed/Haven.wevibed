import { Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";

export default function NewArrivals() {
  const [products, setProducts] = useState([]);
  useEffect(() => { Product.filter({ category: "Laptops" }).then(l => setProducts(l.filter(p => p.image_url).slice(0, 6))); }, []);
  return <section id="new-arrivals" className="max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-24"><div className="flex items-end justify-between mb-8"><div><div className="text-[10px] tracking-[0.18em] uppercase text-tech-blue font-bold mb-2">Featured Products</div><h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em]">Laptops in Store</h2></div><a href="/shop" className="hidden md:block text-sm font-semibold text-tech-blue">View All →</a></div><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">{products.map(p => <ProductCard key={p.id} product={p} />)}</div></section>;
}
