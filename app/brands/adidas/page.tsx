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

export default async function adidas() {
  const products = await getProductsByBrand("adidas");

  return (
    <section className="bg-white/5 text-white px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-2 mb-4 flex-col">
          <h2 className="text-3xl font-semibold">adidas</h2>
          <div className="font-medium text-gray-400">
            adidas is a German sportswear brand that has been synonymous with athletic performance and style for nearly a century. The company was founded in 1949 by Adolf Dassler, the son of a cobbler who had been making shoes since the 1920s. From its humble beginnings as a small shoemaker's workshop in Herzogenaurach, Germany, the brand has grown to become one of the world's most recognizable sportswear brands.
            Today, adidas produces a wide range of products for athletes and fitness enthusiasts, including running shoes, training gear, and apparel. The brand is known for its iconic three-stripe logo, which can be found on everything from sneakers to tracksuits to backpacks. Among the most popular categories of adidas shoes are the Ultra Boost and NMD.
            The company's commitment to innovation is evident in their use of advanced materials and technologies to improve athletic performance. For example, adidas has developed its Boost technology, which uses a unique foam material to provide cushioning and support, while also returning energy to the wearer with every step. In addition, the brand's PrimeKnit technology uses interwoven yarns to create a seamless, lightweight upper for sneakers and other products. These technologies are both seen on shoes like the adidas Ultra Boost 1.0 DNA Triple White.
            When it comes to pairing adidas apparel, the sky is the limit. With a diverse range of products available, you can create a variety of different outfits to suit your personal style, the occasion, and your mood. One way to start is by choosing a statement piece, whether it's a pair of adidas sneakers, a jacket, or a bold-colored hoodie. From there, you can select pieces that complement the statement piece while still creating a cohesive look.
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