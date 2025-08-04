import ProductCard from "@/components/molecules/ProductCard";

async function getProductsByBrand(brand: string) {
  const res = await fetch("http://localhost:3000/api/shoes", {
    cache: "no-store",
  });

  const data = await res.json();
  console.log("DEBUG API RESPONSE:", data);

  const products = data.data ?? data;

  return products.filter((product: any) =>
    product.brand.toLowerCase() === brand.toLowerCase()
  );
}

export default async function Jordan() {
  const products = await getProductsByBrand("Jordan");

  return (
    <section className="bg-white/5 text-white px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-2 mb-4 flex-col">
          <h2 className="text-3xl font-semibold">Jordan</h2>
          <div className="font-medium text-gray-400">
            Jordan, the brand, is a Nike, Inc. subsidiary. The brand name and logo represent the huge success of the professional basketball player Michael Jordan. Michael Jordan played for the Chicago Bulls for well over a decade and was instrumental in helping them win several NBA championships. In addition to his professional career, he is also an Olympic Gold Medalist in men's basketball. One of the biggest products in the Jordan collection is the Air Jordan athletic shoe, which was introduced in the mid-1980s, when Michael Jordan was just a rookie. The brand also includes sports apparel, backpacks, socks, and hats.
            Jordan shoes by Nike come in both low and high-tops. They also come in various colors and color combinations. You'll find different Air Jordan models on CoolKicks, with the Air Jordan 1 being the oldest or retro design. If you want something other than a vintage look, shop for Air Jordans with the highest number.
            Over the years, Jordan by Nike has used technology to advance the comfort and performance of their athletic shoes. This includes shoes like the Air Jordan Luka. The Jordan athletic brand has also introduced shoes inspired by other NBA players such as Jayson Tatum and Zion Williamson, like the Jordan Zion 2 Pelicans.
            The Jordan brand is not limited to shoes. You can enhance your wardrobe with Jordan clothing items that are fashionable and comfy to wear. Again, Nike has collaborated with others to produce apparel that Jordan fans want to wear. Some of these collaborations include Jordan with Travis Scott and Jordan with the American artist Nina Chanel.
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}