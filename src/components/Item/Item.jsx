import React from "react";

const Item = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg shadow-lg w-96">
      {/* Image Section */}
      <div className="w-full overflow-hidden rounded-lg">
        <img
          src="https://via.placeholder.com/300x400"
          alt="Polarized mirrored sunglasses"
          className="rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="mt-4 w-full text-center">
        <h1 className="text-2xl font-bold text-purple-800">
          Polarized mirrored sunglasses
        </h1>
        <p className="text-gray-600 mt-2 text-sm">
          Protect your eyes in style with these gold, round frames and blue
          tinted reflective lenses.
        </p>
        <p className="text-xl font-semibold text-purple-700 mt-4">
          $120.00
        </p>
      </div>
    </div>
  );
};

export default Item;