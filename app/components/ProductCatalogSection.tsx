import ProductCarousel from "./ProductCarousel";
import { products } from "../data/products";

export default function ProductCatalogSection() {
  return (
    <section id="products" className="bg-white py-12 md:py-20 lg:py-32 overflow-visible">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          {/* Devanagari Title - Handwritten Style */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-orange-600 mb-2 md:mb-3" style={{ fontFamily: 'Kalam, cursive' }}>
            आमचा पारंपरिक फराळ
          </h2>
          {/* English Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-3 md:mb-4">
            Our Traditional Faral
          </p>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Handmade. Hand-fried. Handed down through generations.
          </p>
        </div>

        <ProductCarousel products={products} />
      </div>
    </section>
  );
}
