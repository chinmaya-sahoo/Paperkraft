import React, { useEffect, useRef } from "react";
// import "./HomeUtility.css";
import Marquee from "react-fast-marquee";

const InfiniteScroll = () => {
  const item = ["1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <div className="mt-12 text-center">
      <div className="mb-12">
        <h1>Our Technology Partner</h1>
      </div>

      <div>
        <Marquee direction="right" speed={100} delay={5}>
          {/* 
            style	CSSProperties	{}	Inline style for the container div

            className	string	""	Name of the css class to style the container div

            autoFill	boolean	false	Whether to automatically fill blank space in the marquee with copies of the children or not

            play	boolean	true	Whether to play or pause the marquee

            pauseOnHover	boolean	false	Whether to pause the marquee when hovered

            pauseOnClick	boolean	false	Whether to pause the marquee when clicked

            direction	"left" | "right"| "up"| "down"	"left"	The direction the marquee slides
            Warning: Vertical marquees are currently experimental and may be buggy. Please swap the values of the marquee's height and width when setting them

            speed	number	50	Speed calculated as pixels/second

            delay	number	0	Duration to delay the animation after render, in seconds
            
            loop	number	0	The number of times the marquee should loop, 0 is equivalent to infinite
            gradient	boolean	false	Whether to show the gradient or not

          */}
          <div className="mx-7 my-0">
            <img className="w-4/5" src={img1} alt="" />
          </div>
          <div className="mx-7 my-0">
            <img src={img2} alt="" />
          </div>
          <div className="mx-7 my-0">
            <img src={img3} alt="" />
          </div>
          <div className="mx-7 my-0">
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
          <div className="mx-7 my-0">
            <img src={img6} alt="" />
          </div>
          <div className="mx-7 my-0">
            <img src={img7} alt="" />
          </div>
          <div className="mx-7 my-0">
            <img src={img8} alt="" />
          </div>
          <div className="mx-7 my-0">
            <img src={img9} alt="" />
          </div>
          <div className="mx-7 my-0">
            <img src={img10} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default InfiniteScroll;