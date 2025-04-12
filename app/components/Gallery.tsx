"use client";

import { useEffect, useRef } from "react";

const images = [
  "/public/Events/2.jpeg",
  "/public/Events/3.jpeg",
  "/public/Events/4.jpeg",
  "/public/Events/5.jpeg",
  "/public/Events/6.jpeg",
  "/public/Events/7.jpeg",
  "/public/Events/8.jpg",
  "/public/Events/9.jpg",
  "/public/Events/10.jpg",
  "/public/Events/11.jpg",
  "/public/Events/14.jpeg",
  "/public/Events/21.jpg",
  "/public/Events/22.jpg",
  "/public/public/public/Events/23.jpg",
  "/public/Events/24.jpeg",
  "/public/Events/25.jpg",
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