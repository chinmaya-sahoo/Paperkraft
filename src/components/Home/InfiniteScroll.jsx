import React, { useEffect, useRef } from "react";

const InfiniteScroll = () => {
  const scrollContainer = useRef(null);

  useEffect(() => {
    const container = scrollContainer.current;

    // Clone children to create infinite scroll effect
    const cloneChildren = () => {
      const children = Array.from(container.children);
      children.forEach((child) => {
        const clone = child.cloneNode(true);
        container.appendChild(clone);
      });
    };

    cloneChildren();
  }, []);

  return (
    <div className="relative overflow-hidden h-32 bg-gradient-to-b from-white to-gray-200">
      <div
        ref={scrollContainer}
        className="flex gap-4 animate-scroll"
      >
        {/* Initial set of boxes */}
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="w-32 h-20 bg-red-500 rounded shadow-md"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
