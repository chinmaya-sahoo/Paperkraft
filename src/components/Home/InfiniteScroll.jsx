import React from "react";
import Marquee from "react-fast-marquee";

const InfiniteScroll = () => {
  const item = [
    { 
      id: "1",
      path: "Marquee_images/one.png"
    },
    { 
      id: "2",
      path: "Marquee_images/two.png"
    },
    { 
      id: "3",
      path: "Marquee_images/three.png"
    },
    { 
      id: "4",
      path: "Marquee_images/four.png"
    },
    { 
      id: "5",
      path: "Marquee_images/five.png"
    },
    { 
      id: "6",
      path: "Marquee_images/six.png"
    },
    { 
      id: "7",
      path: "Marquee_images/seven.png"
    },
    { 
      id: "8",
      path: "Marquee_images/eight.png"
    },
    { 
      id: "9",
      path: "Marquee_images/nine.png"
    },
    { 
      id: "10",
      path: "Marquee_images/ten.png"
    }
  ];
  
  return (
    <div className="mt-12 text-center w-[80%] bg-gray-800 text-white rounded-sm ">
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
        {
          item.map((img, index) => (
            <div key={index} className="mx-7 my-0">
              <img className="w-4/5" src={img.path} alt="" />
            </div>
          ))
        }
          
        </Marquee>
      </div>
    </div>
  );
};

export default InfiniteScroll;