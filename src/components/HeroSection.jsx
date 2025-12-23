import React from "react";

export const HeroSection = () => {
  const categories = [
    "Krishna Dress",
    "Sanju Costume",
    "Fancy Mukut",
    "Belts & Accessories",
    "Kids Fancy Dress",
    "Adult Fancy Dress",
  ];

  return (
    <div className="min-h-screen pb-20 font-[Poppins]">
      <div className="relative flex flex-col items-center text-center px-4 md:px-16 lg:px-24 xl:px-40">

        {/* Glow */}
        <div className="absolute top-28 -z-10 left-1/4 size-72 sm:size-96 bg-indigo-300 blur-[100px] opacity-30"></div>

        {/* Social Proof */}
        <div className="flex items-center gap-3 mt-24">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`https://randomuser.me/api/portraits/men/${70 + i}.jpg`}
                className="size-8 rounded-full border-2 border-white"
                alt="customer"
              />
            ))}
          </div>

          <div>
            <div className="flex justify-center">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-indigo-600">★</span>
                ))}
            </div>
            <p className="text-sm text-gray-600">
              Trusted by 10,000+ Parents & Schools
            </p>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-semibold max-w-4xl mt-6">
          Fancy Dress Costume Accessories for{" "}
          <span className="bg-linear-to-r from-indigo-700 to-indigo-500 bg-clip-text text-transparent">
            Kids & Adults
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-xl text-gray-600 mt-6">
          Krishna Dress, Sanju Costume, Mukut, Belts & Complete Fancy Dress Sets
          for School Functions, Festivals & Events.
        </p>

        {/* CTA */}
        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          <a
            href="https://wa.me/917735584055?text=Hi,%20I%20want%20to%20enquire%20about%20Fancy%20Dress%20Costumes"
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 h-12 flex items-center transition"
          >
            Order on WhatsApp →
          </a>

          <a
            href="/products"
            className="border border-slate-400 hover:bg-indigo-50 rounded-full px-7 h-12 flex items-center text-slate-700 transition"
          >
            View Collection
          </a>
        </div>

        {/* Categories */}
        <p className="mt-16 text-slate-600">
          Popular Categories
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-4 max-w-3xl">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-1.5 text-sm rounded-full border border-slate-300 bg-white hover:bg-indigo-50 transition"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
