import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="bg-white/5 text-white p-4 rounded-xl min-w-[160px] max-w-[200px] flex-shrink-0 hover:scale-[1.02] transition-transform scrollbar-hide">
      <Link href={`/shoes/${product.id}`}>
        <div>
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-contain rounded-md bg-white"
            />
            <div className="absolute top-2 right-2 text-white text-xl">♡</div>
          </div>
          <div className="mt-2 text-sm font-medium">{product.name}</div>
          <div className="text-xs text-gray-400">Price:</div>
          <div className="text-lg font-bold">{product.price}</div>
          {product.stock && (
            <div className="text-xs bg-white/10 mt-1 px-2 py-1 rounded inline-block">
              Stock: {product.stock}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}