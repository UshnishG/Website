"use client";

import { useEffect, useRef } from "react";

const images = [
  "/Events/2.jpeg",
  "/Events/3.jpeg",
  "/Events/4.jpeg",
  "/Events/5.jpeg",
  "/Events/6.jpeg",
  "/Events/7.jpeg",
  "/Events/8.jpg",
  "/Events/9.jpg",
  "/Events/10.jpg",
  "/Events/11.jpg",
  "/Events/14.jpeg",
  "/Events/21.jpg",
  "/Events/22.jpg",
  "/Events/23.jpg",
  "/Events/24.jpeg",
  "/Events/25.jpg",
];

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-[50px] sm:text-[100px] md:text-[120px] xl:text-[140px] font-extrabold tracking-tight text-gray-800 dark:text-gray-200">
          CONTACT
        </h1>
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden gap-4 py-4"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="h-64 w-96 object-cover rounded-lg flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;