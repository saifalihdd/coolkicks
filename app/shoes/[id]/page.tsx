interface Shoe {
  id: number;
  name: string;
  description: string;
  brand: string;
  image: string;
  price: string;
  stock: string;
}

async function getShoe(id: string): Promise<Shoe> {
  const res = await fetch(`http://localhost:3000/api/shoes/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch shoe");
  return res.json();
}
  
export default async function ShoeDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const shoe = await getShoe(params.id);

  return (
    <div className="min-h-screen flex items-start justify-center bg-zinc-900 px-4 pt-24 pb-12">
      <div className="bg-zinc-800 text-white p-8 rounded-xl flex flex-col md:flex-row gap-8 w-full max-w-4xl shadow-lg">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <div className="bg-white rounded-lg overflow-hidden shadow-md p-4">
            <img
              src={shoe.image}
              alt={shoe.name}
              className="w-full h-64 object-contain mx-auto"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
          <h1 className="text-3xl font-bold">{shoe.name}</h1>
          <p className="text-gray-300">{shoe.description}</p>
          <div className="text-sm text-gray-400 space-y-1">
            <p className="text-xl font-semibold text-white">Price:</p>
            <p className="text-3xl font-semibold text-green-500">
              {shoe.price}
            </p>
            <p>
              <span className="font-semibold text-white">Stock:</span>{" "}
              {shoe.stock}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
