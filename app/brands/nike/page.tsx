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

export default async function Nike() {
  const products = await getProductsByBrand("Nike");

  return (
    <section className="bg-white/5 text-white px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-2 mb-4 flex-col">
          <h2 className="text-3xl font-semibold">Nike</h2>
          <div className="font-medium text-gray-400">
            Nike was founded in 1964 as Blue Ribbon Sports by Bill Bowerman and Phil Knight before officially adopting the name Nike Inc. in 1971. Its cultural relevance is undeniable, with sneakers transcending their athletic origins to become iconic symbols of fashion, sports, and urban culture. Innovations like the Waffle Sole, Air Max cushioning, and the introduction of signature athlete lines (e.g., Air Jordan with Michael Jordan) revolutionized athletic footwear. The collaborations with musicians, artists, and designers have further solidified its position at the intersection of sport and style.
            Nike sneakers encompass a diverse range of styles, materials, and technologies. The silhouette varies across models, from classics like the Air Force 1, Dunk, and Blazer to running shoes like the Air Max and Zoom series. It employs cutting-edge materials, including FlyKnit and PrimeKnit for lightweight and breathable uppers, while leather, suede, and canvas are common choices for a more traditional look. Technological advancements like Air cushioning, React foam, and Zoom Air offer responsive and comfortable rides. Construction is typically top-notch, ensuring durability. Popular colorways include classic white, black, and various vibrant options, like the Nike Ja 1 Hunger.
            What our experts love about Nike sneakers is undoubtedly the iconic Swoosh logo. This simple yet distinctive design element, created by graphic designer Carolyn Davidson in 1971, has become a symbol of excellence in sports and fashion. It embodies the brand's commitment to innovation, performance, and style. The Swoosh represents the brand's rich history and its continuous drive to push boundaries, making Nike sneakers not just athletic footwear, but also cultural icons synonymous with quality and athleticism.
            Nike sneakers pair seamlessly with Nike apparel, creating a harmonious and athletic ensemble. The brand's extensive range of activewear, including performance-oriented clothing and athleisure pieces, complements the sneakers perfectly.
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
