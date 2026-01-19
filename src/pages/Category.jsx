import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Category = () => {
  const { slug } = useParams();

  const filteredProducts = products.filter(
    (p) => p.category === slug || p.ageGroup === slug
  );

  return (
    <section className="px-4 md:px-16 lg:px-24 xl:px-40 py-5 md:py-10">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold capitalize text-center mb-10">
        {slug} Mahabali Costume
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-slate-500">
          No products found.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Category;
