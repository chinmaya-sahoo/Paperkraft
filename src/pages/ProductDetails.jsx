import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p className="text-center py-20">Product not found</p>;
  }

  const whatsappLink = `https://wa.me/917735584055?text=Hi,%20I%20want%20to%20order%20${encodeURIComponent(
    product.name
  )}`;

  return (
    <section className="px-4 md:px-16 lg:px-24 xl:px-40 py-20">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Images */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="rounded-2xl object-cover w-full"
        />

        {/* Details */}
        <div>
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-xl text-indigo-600 font-medium mt-3">
            {product.price}
          </p>

          <p className="text-slate-600 mt-5">
            {product.description}
          </p>

          <a
            href={whatsappLink}
            className="inline-block mt-6 rounded-full bg-green-500 hover:bg-green-600 text-white px-8 py-3 transition"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
