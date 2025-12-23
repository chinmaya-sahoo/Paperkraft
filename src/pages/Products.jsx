import React from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <section className="px-4 md:px-16 lg:px-24 xl:px-40 py-20">
      <h1 className="text-4xl font-semibold text-center mb-10">
        All Fancy Dress Products
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
