"use client";
import React from "react";

const InfiniteLogoSlider = () => {
  const logos = [
    "/images/brand/js.png",
    "/images/brand/web.png",
    "/images/brand/azure.png",
    "/images/brand/figma.png",
    "/images/brand/tailwind-css.svg",
    "/images/brand/firebase.svg",
    "/images/brand/meta.png",
    "/images/brand/mongo.svg",
    "/images/brand/next-js.svg",
    "/images/brand/physics.png",
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="relative overflow-hidden">
        {/* Infinite scroll container */}
        <div className="animate-marquee flex space-x-10">
          {/* Duplicate logos for seamless scrolling */}
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="technology logo"
              className="h-auto w-32 object-contain"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={index + logos.length}
              src={logo}
              alt="technology logo"
              className="h-auto w-32 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Tailwind CSS animation for infinite scroll */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};
export default InfiniteLogoSlider;
