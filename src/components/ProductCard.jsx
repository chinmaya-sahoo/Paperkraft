import React from "react";

const ProductCard = ({ product }) => {
  const whatsappLink = `https://wa.me/917735584055?text=Hi,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(
    product.name
  )}`;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition">
      <div className="h-56 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover hover:scale-105 transition"
        />
      </div>

      <div className="p-5">
        <span className="text-xs text-indigo-600 font-medium uppercase">
          {product.category}
        </span>

        <h3 className="text-lg font-semibold mt-1">
          {product.name}
        </h3>

        <p className="mt-2 text-slate-700 font-medium">
          ₹{product.price}
        </p>

        <div className="flex gap-2 mt-4">
          <a
            href={`/product/${product.id}`}
            className="flex-1 text-center border rounded-full py-2 hover:bg-slate-100 transition"
          >
            View
          </a>

          <a
            href={whatsappLink}
            className="flex-1 text-center rounded-full bg-indigo-600 text-white py-2 hover:bg-indigo-700 transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
