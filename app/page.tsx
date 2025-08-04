import Recommended from "@/components/organisms/Recommended";
import Trending from "@/components/organisms/Trending";
import New from "@/components/organisms/New";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/shoes", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  const recommended = products.slice(0, 6); 
  const trending = products.slice(6, 12); 
  const newest = products.slice(-6);      

  return (
    <div className="dark:bg-zinc-900 min-h-screen w-full">
      <Recommended products={recommended} />
      <Trending products={trending} />
      <New products={newest} />
    </div>
  );
}