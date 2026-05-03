"use client";

import { useRef, useState, useEffect } from "react";

interface Product {
  id?: number;
  name: string;
  description?: string;
  desc?: string;
  flag?: string;
  ingredients?: string;
  tagline?: string;
  number?: number;
  image?: string;
  bgColor?: string;
  borderColor?: string;
  imageGradient?: string;
  price?: string;
  weight?: string;
}

interface ProductCarouselProps {
  products: readonly Product[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const productsArray = Array.from(products);
  const scrollRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  // Duplicate products 3 times for infinite scroll effect
  const infiniteProducts = [...productsArray, ...productsArray, ...productsArray];
  const [centerIndex, setCenterIndex] = useState(productsArray.length); // Start at first set
  const [mobileIndex, setMobileIndex] = useState(0); // Mobile carousel index

  // Scroll to starting position on mount
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 288 + 64; // card width (w-72 = 288px) + gap (gap-16 = 64px)
      const scrollPosition = productsArray.length * cardWidth;
      setTimeout(() => {
        scrollRef.current?.scrollTo({
          left: scrollPosition,
          behavior: "auto",
        });
      }, 100);
    }
  }, [productsArray.length]);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (!scrollRef.current) return;

      // Clear any pending timeout
      clearTimeout(scrollTimeout);

      // Debounce to prevent triggering during page scroll
      scrollTimeout = setTimeout(() => {
        if (!scrollRef.current) return;

        const container = scrollRef.current;
        const scrollLeft = container.scrollLeft;
        const cardWidth = 288 + 64; // card width (w-72 = 288px) + gap (gap-16 = 64px)

        // Calculate which card is at the center of the viewport
        const viewportCenter = scrollLeft + (container.offsetWidth / 2);
        const newIndex = Math.round((viewportCenter - (window.innerWidth / 2)) / cardWidth);

        setCenterIndex(newIndex);

        // Infinite scroll logic - reset position when reaching edges
        if (newIndex >= productsArray.length * 2) {
          // Near the end, jump to first set
          const offset = newIndex - productsArray.length * 2;
          container.scrollTo({
            left: (productsArray.length + offset) * cardWidth,
            behavior: "auto",
          });
          setCenterIndex(productsArray.length + offset);
        } else if (newIndex < productsArray.length) {
          // Near the beginning, jump to second set
          container.scrollTo({
            left: (productsArray.length + newIndex) * cardWidth,
            behavior: "auto",
          });
          setCenterIndex(productsArray.length + newIndex);
        }
      }, 50);
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        clearTimeout(scrollTimeout);
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [productsArray.length]);

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;

    const cardWidth = 288 + 64; // card width (w-72 = 288px) + gap (gap-16 = 64px)
    const scrollPosition = index * cardWidth;

    scrollRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  const goToPrev = () => {
    scrollToCard(centerIndex - 1);
  };

  const goToNext = () => {
    scrollToCard(centerIndex + 1);
  };

  // Mobile navigation
  const goToMobilePrev = () => {
    const newIndex = mobileIndex === 0 ? productsArray.length - 1 : mobileIndex - 1;
    setMobileIndex(newIndex);
    if (mobileScrollRef.current) {
      const cardWidth = mobileScrollRef.current.offsetWidth;
      mobileScrollRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const goToMobileNext = () => {
    const newIndex = mobileIndex === productsArray.length - 1 ? 0 : mobileIndex + 1;
    setMobileIndex(newIndex);
    if (mobileScrollRef.current) {
      const cardWidth = mobileScrollRef.current.offsetWidth;
      mobileScrollRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Desktop Carousel - Hidden on mobile */}
      <div className="hidden md:flex items-center justify-center gap-8">
        {/* Left Arrow */}
        <button
          onClick={goToPrev}
          className="flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center transition-all shadow-lg z-20 hover:bg-orange-500 hover:text-white"
          aria-label="Previous product"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="overflow-x-auto overflow-y-visible py-20 pb-16 px-4 scroll-smooth snap-x snap-mandatory hide-scrollbar"
        >
          <div className="flex gap-16 pl-[calc(50vw-144px)] pr-[calc(50vw-144px)] min-w-max">
            {infiniteProducts.map((product, index) => {
              const isCentered = index === centerIndex;
              const isAdjacent = Math.abs(index - centerIndex) === 1;

              return (
                <div
                  key={`${product.id || product.name}-${index}`}
                  className={`w-72 flex-shrink-0 snap-center ${product.bgColor || 'bg-orange-50'} border-2 ${product.borderColor || 'border-orange-100'} rounded-2xl overflow-hidden transition-all duration-500 relative cursor-pointer ${
                    isCentered
                      ? "scale-110 shadow-2xl z-10 opacity-100"
                      : isAdjacent
                      ? "scale-95 opacity-70"
                      : "scale-90 opacity-50"
                  } hover:!scale-115 hover:!-translate-y-10 hover:!opacity-100 hover:!shadow-3xl hover:!z-50`}
                >
                  <div
                    className={`aspect-square bg-gradient-to-br ${product.imageGradient || 'from-orange-100 to-orange-50'} flex items-center justify-center`}
                  >
                    <div className="text-gray-400 text-center">
                      <svg
                        className="w-24 h-24 mx-auto"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {product.description || product.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center transition-all shadow-lg z-20 hover:bg-orange-500 hover:text-white"
          aria-label="Next product"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Carousel - One product at a time with navigation */}
      <div className="md:hidden relative flex items-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={goToMobilePrev}
          className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center transition-all shadow-lg z-20 active:bg-orange-500 active:text-white"
          aria-label="Previous product"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Mobile Product Cards Container */}
        <div
          ref={mobileScrollRef}
          className="overflow-x-auto overflow-y-visible scroll-smooth snap-x snap-mandatory hide-scrollbar flex-1"
        >
          <div className="flex">
            {productsArray.map((product) => (
              <div
                key={product.id || product.name}
                className="w-full flex-shrink-0 snap-center px-2"
              >
                <div
                  className={`${product.bgColor || 'bg-orange-50'} border-2 ${product.borderColor || 'border-orange-100'} rounded-2xl overflow-hidden shadow-lg`}
                >
                  <div
                    className={`aspect-square bg-gradient-to-br ${product.imageGradient || 'from-orange-100 to-orange-50'} flex items-center justify-center`}
                  >
                    <div className="text-gray-400 text-center">
                      <svg
                        className="w-20 h-20 mx-auto"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {product.description || product.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToMobileNext}
          className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center transition-all shadow-lg z-20 active:bg-orange-500 active:text-white"
          aria-label="Next product"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
