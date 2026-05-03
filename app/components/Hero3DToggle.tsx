"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { siteContent } from "../content/siteContent";

// Dynamically import 3D component (client-side only)
const Product3D = dynamic(() => import("./Product3D"), {
  ssr: false,
  loading: () => (
    <div className="w-[90vw] h-[90vw] max-w-[900px] max-h-[900px] md:w-[80vw] md:h-[80vw] lg:w-[70vw] lg:h-[70vw] flex items-center justify-center">
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-johnnys-pink"></div>
    </div>
  ),
});

export default function Hero() {
  const { hero } = siteContent;
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [use3D, setUse3D] = useState(true); // Toggle between 2D and 3D

  // Cycle through products every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);

      setTimeout(() => {
        setCurrentProductIndex((prev) =>
          (prev + 1) % hero.heroProducts.length
        );
        setIsAnimating(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [hero.heroProducts.length]);

  const currentProduct = hero.heroProducts[currentProductIndex];

  return (
    <section className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 min-h-[85vh] flex flex-col justify-center overflow-hidden">
      {/* 2D/3D Toggle Button */}
      <button
        onClick={() => setUse3D(!use3D)}
        className="absolute top-4 right-4 z-50 px-4 py-2 bg-white/90 backdrop-blur-sm border-2 border-johnnys-pink text-johnnys-pink font-bold rounded-full hover:bg-johnnys-pink hover:text-white transition-all shadow-lg text-sm"
      >
        {use3D ? "🎨 2D Mode" : "🎭 3D Mode"}
      </button>

      {/* Animated background text layers - taste descriptors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Countdown number at top with tagline - large background element */}
        <div
          key={`bg-countdown-${currentProductIndex}`}
          className={`absolute top-[5%] left-[5%] flex items-start gap-4 md:gap-8 transition-opacity duration-500 ${
            isAnimating ? "opacity-100 animate-taste-float-1" : "opacity-0"
          }`}
        >
          <span className="font-black font-display text-[clamp(8rem,25vw,18rem)] text-johnnys-pink/15 select-none leading-none">
            {currentProduct.number}
          </span>
          <div className="pt-4 md:pt-8">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] font-bold text-johnnys-pink/60 mb-1 md:mb-2">
              {currentProduct.tagline}
            </p>
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-[var(--color-black)]/40">
              {currentProduct.title}
            </p>
          </div>
        </div>

        {/* Taste descriptor positions and styles - larger sizes */}
        {currentProduct.tasteDescriptors.map((taste, index) => {
          const positions = [
            "top-[15%] right-[5%]",
            "top-[45%] left-[8%]",
            "bottom-[20%] right-[8%]"
          ];
          const animations = [
            "animate-taste-float-2",
            "animate-taste-float-3",
            "animate-taste-float-1"
          ];
          const sizes = [
            "text-[clamp(4rem,16vw,11rem)]",
            "text-[clamp(4.5rem,18vw,12rem)]",
            "text-[clamp(3.5rem,14vw,10rem)]"
          ];
          const colors = [
            "text-johnnys-lime/15",
            "text-[var(--color-pink)]/12",
            "text-johnnys-pink/10"
          ];

          return (
            <div
              key={`${taste}-${currentProductIndex}`}
              className={`absolute ${positions[index]} ${animations[index]} transition-opacity duration-500 ${
                isAnimating ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className={`font-black font-display ${sizes[index]} ${colors[index]} select-none tracking-tighter`}>
                {taste}
              </p>
            </div>
          );
        })}

        {/* Main hero headline - center, pulsing */}
        <div className="absolute inset-0 flex items-center justify-center pt-20">
          <h1
            className={`font-black font-display text-[var(--color-pink)] animate-crunch-pulse text-[clamp(6rem,22vw,16rem)] leading-none select-none tracking-tighter opacity-20 transition-opacity duration-500 ${
              isAnimating ? "opacity-20" : "opacity-0"
            }`}
            aria-hidden
          >
            {currentProduct.headline}
          </h1>
        </div>
      </div>

      {/* Product image/model - animated drop from top, then float */}
      <div className="relative z-10 flex justify-center mb-8 md:mb-12">
        <div
          key={currentProductIndex}
          className={`${
            isAnimating ? "animate-chakali-drop" : "animate-chakali-exit"
          }`}
        >
          {use3D ? (
            /* 3D Model */
            <Suspense
              fallback={
                <div className="w-[90vw] h-[90vw] max-w-[900px] max-h-[900px] md:w-[80vw] md:h-[80vw] lg:w-[70vw] lg:h-[70vw] flex items-center justify-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-johnnys-pink"></div>
                </div>
              }
            >
              <Product3D isAnimating={isAnimating} productIndex={currentProductIndex} />
            </Suspense>
          ) : (
            /* 2D Image (fallback) */
            <div className="relative w-[90vw] h-[90vw] max-w-[900px] max-h-[900px] md:w-[80vw] md:h-[80vw] lg:w-[70vw] lg:h-[70vw]">
              <Image
                src={currentProduct.image}
                alt={currentProduct.alt}
                fill
                className="object-contain drop-shadow-2xl"
                priority={currentProductIndex === 0}
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 448px"
              />
            </div>
          )}
        </div>
      </div>

      {/* Foreground content - text with drop animations */}
      <div className="relative z-10 space-y-10 md:space-y-14">
        <div
          key={`headline-${currentProductIndex}`}
          className={`space-y-3 ${
            isAnimating ? "animate-countdown-drop" : "animate-countdown-exit"
          }`}
          style={{ animationDelay: isAnimating ? "0.2s" : "0s" }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-[var(--color-black)] leading-none">
            {hero.headline}
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-johnnys-pink">
            {hero.subheadline}
          </p>
        </div>
        <p
          key={`desc-${currentProductIndex}`}
          className={`text-lg md:text-xl text-[var(--color-gray)] max-w-2xl leading-relaxed ${
            isAnimating ? "animate-countdown-drop" : "animate-countdown-exit"
          }`}
          style={{ animationDelay: isAnimating ? "0.4s" : "0s" }}
        >
          {hero.description}
        </p>
        <div
          key={`cta-${currentProductIndex}`}
          className={`flex flex-wrap gap-4 ${
            isAnimating ? "animate-countdown-drop" : "animate-countdown-exit"
          }`}
          style={{ animationDelay: isAnimating ? "0.6s" : "0s" }}
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-johnnys-pink text-white font-bold rounded-full hover:bg-johnnys-pink-dark transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            {hero.primaryCta}
          </a>
          <Link
            href="#products"
            className="px-8 py-4 bg-white border-2 border-johnnys-pink text-johnnys-pink font-bold rounded-full hover:bg-johnnys-pink hover:text-white transition-all"
          >
            {hero.secondaryCta}
          </Link>
        </div>
      </div>

      {/* Progress dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-lg">
        {hero.heroProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(false);
              setTimeout(() => {
                setCurrentProductIndex(index);
                setIsAnimating(true);
              }, 500);
            }}
            aria-label={`Show product ${index + 1}`}
            className={`rounded-full transition-all ${
              index === currentProductIndex
                ? "w-10 h-3 bg-johnnys-pink shadow-md"
                : "w-3 h-3 bg-gray-300 hover:bg-johnnys-pink/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
