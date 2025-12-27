import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [ageGroup, setAgeGroup] = useState("all");

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      category === "all" || product.category === category;
    const ageMatch =
      ageGroup === "all" || product.ageGroup === ageGroup;
    return categoryMatch && ageMatch;
  });

  return (
    <section className="relative px-4 md:px-16 lg:px-24 xl:px-40 py-20 bg-linear-to-b from-indigo-50 via-white to-white">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 inline-flex items-center gap-2 rounded-full border bg-white/80 backdrop-blur px-5 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-white hover:shadow-md transition"
      >
        ← Back
      </button>

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Fancy Dress Collection
        </h1>
        <p className="mt-3 text-gray-600">
          Explore kids & adult fancy dress costumes for every celebration
        </p>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-20 z-10 mb-12">
        <div className="mx-auto max-w-3xl flex flex-wrap items-center justify-center gap-4 rounded-2xl border bg-white/70 backdrop-blur-md p-4 shadow-sm">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg border px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="all">All Categories</option>
            <option value="krishna">Krishna Dress</option>
            <option value="sanju">Sanju Costume</option>
            <option value="mahabali">Mahabali Costume</option>
            <option value="accessories">Accessories</option>
          </select>

          <select
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            className="rounded-lg border px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="all">All Age Groups</option>
            <option value="kids">Kids</option>
            <option value="adult">Adult</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="mt-16 rounded-2xl border bg-white p-10 text-center shadow-sm">
            <h3 className="text-lg font-semibold">
              No products found
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Try changing filters or browse all categories
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
