import React from "react";

const products = [
  {
    name: "Krishna Fancy Dress (Kids)",
    price: "₹899",
    image:
      "/images/KrishnaCostume/krishnacosume1.webp",
    category: "Krishna",
  },
  {
    name: "Raj Mukut",
    price: "₹199",
    image:
      "/images/RajMukut/mukut4.jpeg",
    category: "Mukut",
  },
  {
    name: "Sanju Fancy Dress Costume",
    price: "₹1,099",
    image:
      "/images/MahabaliChest/mahabalichest4.jpg",
    category: "Sanju",
  },
  {
    name: "Fancy Dress Belt Set",
    price: "₹149",
    image:
      "/images/Kamarbandh/kamarbandh1.webp",
    category: "Accessories",
  },
  {
    name: "Adult Fancy Dress Costume",
    price: "₹1,299",
    image:
      "/images/MahabaliChest/mahabalichest9.webp",
    category: "Adult",
  },
  {
    name: "Kids Fancy Dress Combo Set",
    price: "₹999",
    image:
      "/images/MahabaliSet/set1.webp",
    category: "Kids",
  },
];

const FeaturedProducts = () => {
  const whatsappLink = (product) =>
    `https://wa.me/917735584055?text=Hi,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(
      product
    )}`;

  return (
    <section className="px-4 md:px-16 lg:px-24 xl:px-40 py-20 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Featured Products
        </h2>
        <p className="text-slate-600 mt-3">
          Most popular Fancy Dress Costumes & Accessories
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.name}
            className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="h-56 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <span className="text-xs text-indigo-600 font-medium">
                {product.category}
              </span>

              <h3 className="text-lg font-semibold mt-1">
                {product.name}
              </h3>

              <p className="text-slate-700 font-medium mt-2">
                {product.price}
              </p>

              {/* CTA */}
              <a
                href={whatsappLink(product.name)}
                className="mt-4 inline-flex items-center justify-center w-full rounded-full bg-indigo-600 hover:bg-indigo-700 text-white h-11 transition"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-14">
        <a
          href="/products"
          className="inline-block border border-slate-400 hover:bg-indigo-50 transition rounded-full px-8 h-12 leading-12"
        >
          View All Products →
        </a>
      </div>
    </section>
  );
};

export default FeaturedProducts;
