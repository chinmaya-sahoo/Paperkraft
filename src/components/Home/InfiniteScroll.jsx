import React, { useEffect, useRef } from "react";

const InfiniteScroll = () => {
  const item = ["1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <div className="wrapper border-solid h-[100px] mt-20 border-[1px] border-black w-[90%] max-w-[1536px] ms-auto me-auto relative overflow-hidden">
      <div className="item item-1 w-[200px] h-[100px] bg-red-700 rounded-[6px] absolute left-[100%] animate-scroll animation-delay-[25.25s] ">

      </div>
      <div className="item item-2 w-[200px] h-[100px] bg-red-700 rounded-[6px] absolute left-[100%] animate-scroll animation-delay-[21.5s]">

      </div>
      <div className="item item-3 w-[200px] h-[100px] bg-red-700 rounded-[6px] absolute left-[100%] animate-scroll animation-delay-[17.75s]">

      </div>
      <div className="item item-4 w-[200px] h-[100px] bg-red-700 rounded-[6px] absolute left-[100%] animate-scroll animation-delay-[14s]">

      </div>
      <div className="item item-5 w-[200px] h-[100px] bg-red-700 rounded-[6px] absolute left-[100%] animate-scroll animation-delay-[10.25s]">

      </div>
      <div className="item item-6 w-[200px] h-[100px] bg-red-700 rounded-[6px] absolute left-[100%] animate-scroll animation-delay-[6.5s]">

      </div>
      <div className="item item-7 w-[200px] h-[100px] bg-red-700 rounded-[6px] absolute left-[100%] animate-scroll animation-delay-[2.75s]">

      </div>
      <div className="item item-8 w-[200px] h-[100px] bg-red-700 rounded-[6px] absolute left-[100%] animate-scroll animation-delay-[-1s]">

      </div>

    </div>
  );
};

export default InfiniteScroll;