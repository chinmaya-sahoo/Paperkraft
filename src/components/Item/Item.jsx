import React from "react";

const ItemPage = () => {
  return (
    <div className="h-screen w-full bg-transparent flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="container h-full w-full px-4 py-8 bg-transparent flex flex-col md:flex-row rounded-lg">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="https://via.placeholder.com/400x500"
            alt="Polarized mirrored sunglasses"
            className="rounded-lg object-cover w-full h-auto md:max-w-sm"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start mt-6 md:mt-0 md:pl-8">
          <h1 className="text-3xl font-bold text-purple-800 mb-4">
            Polarized mirrored sunglasses
          </h1>
          <p className="text-gray-600 text-sm mb-6">
            Protect your eyes in style with these gold, round frames and blue
            tinted reflective lenses.
          </p>
          <p className="text-2xl font-semibold text-purple-700 mb-6">
            $120.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
