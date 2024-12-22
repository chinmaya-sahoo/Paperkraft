import React from "react";
import "./Slider3D.css";
const Slider3D = () => {
  return (
    <div className="w-full h-screen text-center relative overflow-hidden">
      {/* 3D Slider */}
      <div className="absolute w-[200px] h-[250px] top-[10%] left-1/2 transform -translate-x-1/2 preserve-3d perspective-1000 anime z-10">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className={`absolute inset-0`}
            style={{
              transform: `
                rotateY(${(i * (360 / 10))}deg)
                translateZ(550px)
              `,
            }}
          >
            <img
              src={`Slider3D_images/dragon_${i + 1}.jpg`}
              alt={`Dragon ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1400px] flex flex-wrap justify-between items-center pb-24">
        {/* Title */}
        <h1
          data-content="CSS ONLY"
          className="text-[16em] leading-none font-black text-[#25283B] relative after:content-[attr(data-content)] after:absolute after:inset-0 after:z-10 after:text-transparent after:[-webkit-text-stroke:2px_#d2d2d2]"
        >
          CSS ONLY
        </h1>

        {/* Author Info */}
        <div className="text-right font-poppins max-w-[200px]">
          <h2 className="text-3xl">Chinmaya Sahoo</h2>
          <p className="font-bold">Web Design</p>
          <p>Have a look on our product</p>
        </div>
      </div>

      {/* Model Background */}
      <div
        className="absolute bottom-0 left-0 w-full h-[75vh] bg-[url('images/bg.png')] bg-auto bg-no-repeat bg-top-center z-0"
        style={{ backgroundSize: "auto 130%" }}
      ></div>
    </div>
  );
};

export default Slider3D;
