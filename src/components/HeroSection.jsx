import React from "react";

export const HeroSection = () => {
  const categories = [
    "Krishna Dress",
    "Sanju Costume",
    "Raj Mukut",
    "Belts & Accessories",
    "Kids Costume Sets",
    "Adult Costume Sets",
  ];

  return (
    <div className="pb-6 font-[Poppins] overflow-x-hidden">
      <div className="relative flex flex-col items-center text-center px-3 sm:px-6 md:px-16 lg:px-24 xl:px-40">

        {/* Glow */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 -z-10 
                        size-56 sm:size-80 bg-indigo-300 blur-[90px] opacity-30"></div>

        {/* Social Proof */}
        <div className="flex items-center gap-2 mt-20 sm:mt-24">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`https://randomuser.me/api/portraits/men/${70 + i}.jpg`}
                className="size-6 sm:size-8 rounded-full border-2 border-white"
                alt="customer"
              />
            ))}
          </div>

          <div>
            <div className="flex justify-center leading-none">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-indigo-600 text-xs sm:text-sm">
                    ★
                  </span>
                ))}
            </div>
            <p className="text-[10px] sm:text-sm text-gray-600">
              Trusted by 10,000+ Parents & Schools
            </p>
          </div>
        </div>

        {/* Heading */}
        <h1
          className="
            mt-5 sm:mt-6
            text-[1.6rem] sm:text-4xl md:text-6xl
            font-semibold max-w-4xl
            wrap-break-word leading-tight
          "
        >
          Mahabali Costume Accessories for{" "}
          <span className="bg-linear-to-r from-indigo-700 to-indigo-500 bg-clip-text text-transparent">
            Kids & Adults
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-xl text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base">
          Krishna Dress, Sanju Costume, Mukut, Belts & Complete Fancy Dress Sets
          for School Functions, Festivals & Events.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto">
          <a
            href="https://wa.me/917735584055?text=Hi,%20I%20want%20to%20enquire%20about%20Fancy%20Dress%20Costumes"
            className="bg-indigo-600 hover:bg-indigo-700 text-white 
                       rounded-full px-6 sm:px-8 h-11 sm:h-12 
                       flex items-center justify-center transition text-sm sm:text-base"
          >
            Order on WhatsApp →
          </a>

          <a
            href="/products"
            className="border border-slate-400 hover:bg-indigo-50 
                       rounded-full px-6 sm:px-7 h-11 sm:h-12 
                       flex items-center justify-center text-slate-700 
                       transition text-sm sm:text-base"
          >
            View Collection
          </a>
        </div>

        {/* Categories */}
        <p className="mt-12 sm:mt-16 text-slate-600 text-sm sm:text-base">
          Popular Categories
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-3 sm:mt-4 max-w-3xl">
          {categories.map((cat) => (
            <span
              key={cat}
              className="
                px-3 sm:px-4 py-1 sm:py-1.5
                text-[11px] sm:text-sm
                rounded-full border border-slate-300 bg-white
                hover:bg-indigo-50 transition
                whitespace-nowrap
              "
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
