import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = () => {
  // Slider settings for the top random image slider
  const topSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Slider settings for the 3D image slider
  const bottomSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex flex-col justify-between items-center mb-4">
        <h1 className="text-xl mb-4 font-bold">Category</h1>
        <select className="border p-2 rounded-md shadow-sm focus:outline-none">
          <option value="option1">Option 1 </option>
          <option value="option2">Option 2 </option>
          <option value="option3">Option 3 </option>
        </select>
      </div>

      {/* Top Slider */}
      {/* Instead of slider will create a random image renderer(3 images per 2000ms) */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Random Images</h2>
        <Slider {...topSliderSettings}>
          <div>
            <img
              src="https://via.placeholder.com/300"
              alt="Random 1"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/300"
              alt="Random 2"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/300"
              alt="Random 3"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
        </Slider>
      </div>

      {/* Bottom Slider */}
      {/* create a better 3D slider */}
      <div>
        <h2 className="text-lg font-semibold mb-2">3D Image Slider</h2>
        <Slider {...bottomSliderSettings}>
          <div>
            <img
              src="https://via.placeholder.com/300"
              alt="Category 1"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/300"
              alt="Category 2"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/300"
              alt="Category 3"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Category;
