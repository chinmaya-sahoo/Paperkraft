import React from "react";

const categories = [
  {
    title: "Kids Fancy Dress",
    desc: "Cute & colorful costumes for school functions",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800",
    link: "/category/kids",
  },
  {
    title: "Adult Fancy Dress",
    desc: "Traditional & event-ready fancy dress for adults",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800",
    link: "/category/adults",
  },
  {
    title: "Krishna Dress & Mukut",
    desc: "Complete Krishna costume sets & crowns",
    image:
      "https://images.unsplash.com/photo-1600508774634-4c4b2b8c1c4d?q=80&w=800",
    link: "/category/krishna",
  },
  {
    title: "Sanju Costume",
    desc: "Sanju fancy dress outfits for kids & adults",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800",
    link: "/category/sanju",
  },
  {
    title: "Accessories",
    desc: "Belts, Mukut, Jewellery & more",
    image:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=800",
    link: "/category/accessories",
  },
];

const CategoryCardsGrid = () => {
  return (
    <section className="px-4 md:px-16 lg:px-24 xl:px-40 py-10 bg-gray-100 rounded-2xl">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Shop by Category
        </h2>
        <p className="text-slate-600 mt-3">
          Choose from a wide range of Fancy Dress Costumes & Accessories
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <a
            key={cat.title}
            href={cat.link}
            className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold">{cat.title}</h3>
              <p className="text-sm text-slate-600 mt-1">
                {cat.desc}
              </p>

              <span className="inline-block mt-4 text-indigo-600 font-medium">
                View Products →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryCardsGrid;
