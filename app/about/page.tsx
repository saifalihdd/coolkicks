import Image from "next/image";

export default function About() {
  return (
    <>
        <div className="min-h-screen dark:bg-zinc-900 text-white px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl font-bold text-center text-white">
              About COOL<span className="text-4xl font-bold text-center text-green-500">KICKS </span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/about/1.jpeg"
                  alt="CoolKicks Store 1"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="aspect-[4/3] relative">
                <Image
                  src="/about/2.jpeg"
                  alt="CoolKicks Store 2"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="aspect-[4/3] relative">
                <Image
                  src="/about/3.jpeg"
                  alt="CoolKicks Store 3"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              CoolKicks is a well-known sneaker and streetwear store based in Los Angeles that has become a major name in the resale and hype culture scene. Established in 2016, it quickly gained popularity for offering rare and exclusive sneakers from brands like Nike, Jordan, Adidas, and Yeezy, often featuring limited-edition drops and collaborations. What sets CoolKicks apart is its energetic in-store atmosphere and its engaging online presence, especially through its YouTube channel, where the team showcases sneaker buying, trading, and surprise moments with celebrity guests. Over the years, it has become more than just a shop—it's a cultural hub for sneakerheads, influencers, and fans of street fashion, blending retail with entertainment in a way that resonates with the modern youth audience.
            </p>
          </div>
        </div>
    </>
  );
}