import Link from "next/link";
import SearchBar from "../molecules/SearchBar";

export default function Header() {
  return (
    <header className="border-b border-green-500 bg-white/5 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <h1 className="text-xl font-bold">
              COOL<span className="text-xl font-bold text-green-500">KICKS</span>
            </h1>
          </Link>

              <SearchBar />

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6 text-gray-200">
              <Link href="/">
                <span className="hover:text-green-500 transition-colors duration-200">Home</span>
              </Link>

              <Link href="/brands">
                <span className="hover:text-green-500 transition-colors duration-200">Brands</span>
              </Link>

              <Link href="/about">
                <span className="hover:text-green-500 transition-colors duration-200">About</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}