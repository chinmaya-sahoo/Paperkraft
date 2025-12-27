import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  const [activeImage, setActiveImage] = useState(
    product?.images[0]
  );

  if (!product) {
    return (
      <p className="text-center py-20 text-gray-500">
        Product not found
      </p>
    );
  }

  const whatsappLink = `https://wa.me/917735584055?text=Hi,%20I%20want%20to%20order%20${encodeURIComponent(
    product.name
  )}`;

  return (
    <section className="relative px-4 md:px-16 lg:px-24 xl:px-40 py-20 bg-linear-to-b from-indigo-50 via-white to-white">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 inline-flex items-center gap-2 rounded-full border bg-white/80 backdrop-blur px-5 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-white hover:shadow-md transition"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* Image Gallery */}
        <div className="flex flex-col md:flex-row gap-4">
          
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 order-2 md:order-1">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(img)}
                className={`rounded-xl border overflow-hidden w-20 h-20 transition
                  ${
                    activeImage === img
                      ? "border-indigo-600 ring-2 ring-indigo-300"
                      : "border-gray-200 hover:border-indigo-400"
                  }
                `}
              >
                <img
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="order-1 md:order-2 flex-1 flex justify-center">
            <img
              src={activeImage}
              alt={product.name}
              className="rounded-3xl object-cover w-full max-w-md shadow-lg"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="md:sticky md:top-24">
          <h1 className="text-3xl md:text-4xl font-bold">
            {product.name}
          </h1>

          <p className="mt-3 text-2xl font-semibold text-indigo-600">
            ₹{product.price}
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-indigo-50 text-indigo-700 px-4 py-1 text-sm">
              {product.category}
            </span>
            <span className="rounded-full bg-slate-100 text-slate-700 px-4 py-1 text-sm">
              {product.ageGroup}
            </span>
          </div>

          {/* CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white px-10 py-4 text-sm font-semibold shadow-lg transition"
          >
            💬 Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
