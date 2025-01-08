import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CategoryAnimation.css";
import Slider3D from "./Slider3D/Slider3D";
const Category = () => {


  // Slider settings for the 3D image slider
  const bottomSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024, // Adjust for tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Adjust for mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6 w-full h-screen overflow-x-hidden overflow-y-auto ">
      {/* Header Section */}
      <div className="flex flex-col justify-between items-center mb-4">
        <h1 className="text-3xl mb-6 font-bold">Category</h1>
        <select className="border p-2 rounded-md shadow-sm focus:outline-none">
          <option value="option1">Option 1 </option>
          <option value="option2">Option 2 </option>
          <option value="option3">Option 3 </option>
        </select>
      </div>

      {/* Top Slider */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Random Images</h2>

        <div className="flex justify-center gap-10" >
          <div>
            <img
              src="https://via.placeholder.com/300"
              alt="Random 1"
              className=" h-70 object-cover rounded-md blink"/* animate-blink */
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/300"
              alt="Random 1"
              className=" h-70 object-cover rounded-md blink"/* animate-blink */
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/300"
              alt="Random 1"
              className=" h-70 object-cover rounded-md blink"/* animate-blink */
            />
          </div>
        </div>
      </div>

      {/* Bottom Slider */}
      <div className="carousel-container">
        <h2 className="text-lg font-semibold mb-4">3D Image Slider</h2>
        <Slider {...bottomSliderSettings} className="flex gap-4">
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

      {/* costume 3D slider */}
      {/* <div className="">
        <Slider3D />
      </div> */}
    </div>
  );
};

export default Category;
