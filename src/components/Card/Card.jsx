import React from 'react';

const Card = () => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">400 x 500</span>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-purple-700">Polarized mirrored sunglasses</h2>
        <p className="text-gray-600 mt-2">
          Protect your eyes in style with these gold, round frames and blue-tinted reflective lenses.
        </p>
        <div className="mt-4">
          <span className="text-purple-700 text-lg font-bold">$120.00</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
