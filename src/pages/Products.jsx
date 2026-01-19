import React, { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [category, setCategory] = useState("all");
  const [ageGroup, setAgeGroup] = useState("all");

  const filteredProducts = products.filter((product) => {
    const categoryMatch = category === "all" || product.category === category;
    const ageMatch = ageGroup === "all" || product.ageGroup === ageGroup;
    return categoryMatch && ageMatch;
  });

  return (
    <section className="relative px-4 md:px-16 lg:px-24 xl:px-40 md:py-10 py-5 bg-linear-to-b from-indigo-50 via-white to-white">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto md:mb-10 mb-5">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold tracking-tight">
          Mahabali Costume Collection
        </h1>
        
      </div>

      {/* Filter Bar */}
      <div className="sticky top-10 z-10 mb-8">
        <div className="mx-auto max-w-xl flex flex-wrap items-center justify-center gap-2 rounded-xl border bg-gray-200/70 backdrop-blur-md p-2 shadow-sm">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-md border px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="all">All Categories</option>
            <option value="krishna">Krishna Dress</option>
            <option value="mukut">Mukut</option>
            <option value="baju">Bajubandh</option>
            <option value="sanju">Sanju Costume</option>
            <option value="mahabaliset">Mahabali Set</option>
            <option value="kamarbandh">Kamarbandh</option>
          </select>

          <select
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            className="rounded-md border px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="all">All Age Groups</option>
            <option value="kids">Kids only</option>
            <option value="adults">Adult only</option>
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
        <div className="flex justify-center items-center h-[40vh] ">
          <div className="mt-16 rounded-2xl border bg-white p-10 text-center shadow-sm">
            <h3 className="text-lg font-semibold">No products found</h3>
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
