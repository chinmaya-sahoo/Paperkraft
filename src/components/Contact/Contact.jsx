import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Contact = () => {
  const sliderImages = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows : false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        {/* Description Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-gray-700 text-center">
            Get in touch with us for any inquiries, support, or feedback.
          </p>
        </div>

        {/* Icons Section */}
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="#"
            className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition"
            title="Email"
          >
            📧
          </a>
          <a
            href="#"
            className="bg-green-500 text-white p-3 rounded-full shadow-md hover:bg-green-600 transition"
            title="WhatsApp"
          >
            📱
          </a>
          <a
            href="#"
            className="bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
            title="Instagram"
          >
            📷
          </a>
          <a
            href="#"
            className="bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-900 transition"
            title="Facebook"
          >
            📘
          </a>
        </div>

        {/* Image Slider Section */}
        <div className="mt-6">
          <Slider {...sliderSettings}>
            {sliderImages.map((src, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Contact;