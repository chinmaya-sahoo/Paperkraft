import React from "react";
import Marquee from "react-fast-marquee";

const InfiniteScroll = () => {
  const items = [
    { id: "1", path: "Marquee_images/one.png" },
    { id: "2", path: "Marquee_images/two.png" },
    { id: "3", path: "Marquee_images/three.png" },
    { id: "4", path: "Marquee_images/four.png" },
    { id: "5", path: "Marquee_images/five.png" },
    { id: "6", path: "Marquee_images/six.png" },
    { id: "7", path: "Marquee_images/seven.png" },
    { id: "8", path: "Marquee_images/eight.png" },
    { id: "9", path: "Marquee_images/nine.png" },
    { id: "10", path: "Marquee_images/ten.png" },
  ];

  return (
    <div className="mt-[-24px] mb-6 w-[calc(100%+48%)] bg-gray-900 text-white rounded-sm p-4">
      <div className="overflow-hidden">
        <Marquee
          direction="right"
          speed={30}
          pauseOnHover={true}

        >
          {items.map((img) => (
            <div key={img.id} className="mx-3 flex-shrink-0">
              <img
                className="w-16 h-13 sm:w-20 sm:h-16 md:w-28 md:h-23 lg:w-36 lg:h-29 object-contain"
                src={img.path}
                alt={`Partner ${img.id}`}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default InfiniteScroll;
