import Link from "next/link";

export default function Brands() {
  const brands = [
    {
      name: "Nike",
      image: "/brands/nike.jpg",
    },
    {
      name: "Adidas",
      image: "/brands/adidas.jpg",
    },
    {
      name: "Jordan",
      image: "/brands/jordan.jpg",
    },
  ];

  return (
    <>
      <div className="min-h-screen px-6 py-10 bg-white dark:bg-zinc-900">
        <h1 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
          Explore <span className="text-3xl font-bold mb-8 text-center text-green-500">Brands</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={`/brands/${brand.name.toLowerCase()}`}
              className="block"
            >
              <div className="bg-gray-100 dark:bg-zinc-800 rounded-2xl shadow-md overflow-hidden 
                transform transition duration-300 hover:scale-105 hover:shadow">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-48 object-contain p-4 bg-white"
                />
                <div className="text-center p-4">
                  <h2 className="text-xl font-semibold text-white">
                    {brand.name}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
