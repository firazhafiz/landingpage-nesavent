"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FLyer1, FLyer2, FLyer3, FLyer4 } from "../../../public";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const FlyerPromote = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flyers = [FLyer1, FLyer2, FLyer3, FLyer4];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % flyers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile, flyers.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % flyers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + flyers.length) % flyers.length);
  };

  return (
    <section className="flex flex-col justify-center items-center mt-10 px-4">
      <div className="relative w-full max-w-[1200px] group">
        {!isMobile && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-10 group-hover:-translate-x-0"
            >
              <MdOutlineKeyboardArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-10 group-hover:translate-x-0"
            >
              <MdOutlineKeyboardArrowRight className="w-4 h-4" />
            </button>
          </>
        )}

        <div className="relative">
          {!isMobile && (
            <div className="flex justify-center">
              <div className="rounded-lg overflow-hidden shadow-lg w-full max-w-[1115px] relative">
                {flyers.map((flyer, index) => (
                  <Image
                    key={index}
                    src={flyer}
                    alt={`flyer-${index}`}
                    width={1115}
                    height={557}
                    className={`w-full h-auto transition-opacity duration-500 ease-in-out ${
                      index === currentIndex
                        ? "opacity-100"
                        : "opacity-0 absolute top-0 left-0"
                    }`}
                    priority={index === currentIndex}
                  />
                ))}
              </div>
            </div>
          )}

          {isMobile && (
            <div className="rounded-lg overflow-hidden shadow-lg mx-auto w-full max-w-[95vw] relative">
              {flyers.map((flyer, index) => (
                <Image
                  key={index}
                  src={flyer}
                  alt={`flyer-${index}`}
                  width={800}
                  height={400}
                  className={`w-full h-auto transition-opacity duration-500 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100"
                      : "opacity-0 absolute top-0 left-0"
                  }`}
                  style={{ maxHeight: "70vh" }}
                  priority={index === currentIndex}
                />
              ))}
            </div>
          )}
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-x-1">
          {flyers.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[var(--custom-orange)] w-3.5"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlyerPromote;
