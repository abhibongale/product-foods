"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { heroSlides } from "../data/products";
import { siteConfig } from "../data/siteConfig";

// Build slides with image references
const slides = heroSlides.map((slide) => {
  const product = slide.product;
  return {
    ...slide,
    mainImage: siteConfig.heroImages[`${product}Main` as keyof typeof siteConfig.heroImages],
    fruitLeft: siteConfig.heroImages[`${product}Left` as keyof typeof siteConfig.heroImages],
    fruitRight: siteConfig.heroImages[`${product}Right` as keyof typeof siteConfig.heroImages],
    fruitBottom: siteConfig.heroImages[`${product}Bottom` as keyof typeof siteConfig.heroImages],
  };
});

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const slide = slides[currentSlide];

  const nextSlide = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 600);
  };

  // Auto-advance slides every 3 seconds - only when at top of page
  useEffect(() => {
    const interval = setInterval(() => {
      // Only advance if user is at the very top (within 100px)
      if (window.scrollY < 100) {
        nextSlide();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <main
      ref={heroRef}
      className="relative h-[60vh] md:h-[85vh] flex items-center justify-center pt-5 md:pt-10 overflow-hidden transition-colors duration-800"
      style={{ backgroundColor: slide.bgColor }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative flex flex-col items-start">
          {/* Big background number - positioned above first letter */}
          <span
            id="bg-number"
            className={`font-bold text-[8vw] md:text-[8vw] transition-all duration-600 select-none mb-2 ${
              isAnimating ? "opacity-0 -translate-y-[1000px]" : "opacity-40 md:opacity-50 translate-y-0"
            }`}
            style={{ color: slide.textColor, fontFamily: "Oswald, sans-serif" }}
          >
            {slide.number}
          </span>

          {/* Background text */}
          <span
            id="bg-text"
            className={`font-bold text-[10vw] md:text-[10vw] uppercase leading-[0.9] transition-all duration-600 select-none ${
              isAnimating ? "opacity-0 -translate-y-[1000px]" : "opacity-40 md:opacity-50 translate-y-0"
            }`}
            style={{ color: slide.textColor, fontFamily: "Oswald, sans-serif" }}
          >
            {slide.bgText}
          </span>
        </div>
      </div>

      {/* Main product image */}
      <div className="relative z-10">
        <Image
          id="main-drink"
          src={slide.mainImage}
          alt="Product"
          width={500}
          height={650}
          className={`w-[250px] md:w-[500px] rotate-[20deg] drop-shadow-2xl cursor-pointer transition-all duration-600 ${
            isAnimating
              ? "opacity-0 -translate-y-[1000px] scale-75 rotate-[40deg]"
              : "opacity-100 translate-y-0 scale-100"
          }`}
          style={{
            transitionTimingFunction: isAnimating
              ? "ease-in"
              : "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
          }}
          priority
        />
      </div>

      {/* Decorative chakli images - same image, different angles & sizes - HIDDEN ON MOBILE */}
      {/* Left chakli - small, rotated left */}
      {slide.fruitLeft && (
        <Image
          id="fruit-left"
          src={slide.fruitLeft}
          alt=""
          width={200}
          height={200}
          className={`hidden md:block absolute left-40 top-32 w-48 rotate-[-15deg] opacity-70 animate-float-1 transition-all duration-500 ${
            isAnimating ? "opacity-0 scale-0 -translate-y-[1000px]" : "opacity-70 scale-100"
          }`}
        />
      )}

      {/* Right chakli - large, lightly blurred, rotated right */}
      {slide.fruitRight && (
        <Image
          id="fruit-right"
          src={slide.fruitRight}
          alt=""
          width={400}
          height={400}
          className={`hidden md:block absolute right-20 top-20 w-96 rotate-[25deg] blur-[2px] opacity-50 animate-float-2 transition-all duration-500 ${
            isAnimating ? "opacity-0 scale-0 -translate-y-[1000px]" : "opacity-50 scale-100"
          }`}
        />
      )}

      {/* Bottom chakli - medium, heavily rotated, lightly blurred */}
      {slide.fruitBottom && (
        <Image
          id="fruit-bottom"
          src={slide.fruitBottom}
          alt=""
          width={250}
          height={250}
          className={`hidden md:block absolute right-96 -bottom-32 w-64 rotate-[-60deg] blur-[2px] opacity-40 animate-float-3 transition-all duration-500 ${
            isAnimating ? "opacity-0 scale-0 -translate-y-[1000px]" : "opacity-40 scale-100"
          }`}
        />
      )}
    </main>
  );
}
