import React from "react";
import "./Slider3D.css";
const Slider3D = () => {
  const items = [
    "Slider3D_images/dragon_1.jpg",
    "Slider3D_images/dragon_2.jpg",
    "Slider3D_images/dragon_3.jpg",
    "Slider3D_images/dragon_4.jpg",
    "Slider3D_images/dragon_5.jpg",
    "Slider3D_images/dragon_6.jpg",
    "Slider3D_images/dragon_7.jpg",
    "Slider3D_images/dragon_8.jpg",
    "Slider3D_images/dragon_9.jpg",
    "Slider3D_images/dragon_10.jpg",
  ];

  return (
    <div className="slider" style={{ '--quantity': items.length }}>
      {items.map((src, index) => (
        <div className="item" style={{ '--position': index + 1 }} key={index}>
          <img src={src} alt={`Dragon ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Slider3D;
