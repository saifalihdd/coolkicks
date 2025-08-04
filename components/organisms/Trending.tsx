import ProductCard from "../molecules/ProductCard";

export default function Trending({ products }: { products: any[] }) {
  return (
    <section className="text-white px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-lg font-semibold">Trending Sneakers</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}