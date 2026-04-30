"use client";
import "animate.css";
import { ChevronLeft, ChevronRight } from "@gravity-ui/icons";
import { Badge, Button, Chip, MenuItem } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/slidesData";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const animationStyles =
    "animate__animated  animation-duration animate__slideInDown animate-delay";
  // change slide automatic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // change slide on button click
  const handleChangeSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[40vh] xl:min-h-[70vh] flex">
      {heroSlides.map(
        ({ title, highlight, subtitle, buttonText, bg, image }, id) => (
          <div
            key={id}
            className={`max-w-400 ${activeSlide === id ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
            <div className="">
              <Image
                src={image}
                className="object-cover absolute"
                fill={true}
                alt={title}
              />
            </div>
            <div className="absolute bg-backdrop w-full h-full flex  items-center outline">
              {/* banner content */}
              <div
                className={`text-white w-6/8 mx-auto sm:max-w-lg sm:w-full my-6 px-4 sm:ml-20 flex flex-col gap-4 ${activeSlide === id && animationStyles}`}>
                <h2 className="text-base uppercase text-yellow-400">{title}</h2>
                <h3 className="text-5xl sm:text-6xl font-bold">{highlight}</h3>
                <p className="text-base sm:text-lg">{subtitle}</p>
                <Button className="rounded-lg" size="lg">
                  {buttonText}
                </Button>
              </div>
              {/* arrows */}
              <button
                onClick={handleChangeSlide}
                className="rounded-full cursor-pointer p-3 text-white ml-3 absolute left-1 bg-white/20 z-3000 shadow-sm">
                <ChevronLeft />
              </button>
              <button
                onClick={handleChangeSlide}
                className="rounded-full z-20 cursor-pointer p-3 text-white mr-3 right-0 absolute bg-white/20">
                <ChevronRight />
              </button>
              {/* status indicator */}
              <div className="absolute bottom-4 w-full">
                <div
                  className={`flex items-center gap-2 w-fit mx-auto transition-all delay-20 ${activeSlide === 0 && "scale-x-[-1]"}`}>
                  <div className="rounded-full size-2 bg-gray-300/80"></div>
                  <Chip className="bg-accent h-2 min-w-7" />
                </div>
              </div>
            </div>
          </div>
        ),
      )}
    </section>
  );
};
export default Banner;
