import { siteContent } from "../content/siteContent";
import ProductCarousel from "./ProductCarousel";
import ProductList from "./ProductList";

export default function ProductCatalog() {
  const { productCatalog } = siteContent;

  return (
    <>
      {/* Faral - Savory Snacks Section */}
      <section id="products" className="py-24 md:py-32 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm uppercase tracking-[0.3em] font-bold text-johnnys-pink mb-3">
            {productCatalog.faral.label}
          </p>
          <h2 className="text-4xl md:text-6xl font-black font-display text-gray-900 mb-6 leading-tight">
            {productCatalog.faral.title}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mb-8 leading-relaxed">
            {productCatalog.faral.description}
          </p>

          <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-500 mb-10">
            {productCatalog.faral.tagline}
          </p>

          <ProductList products={productCatalog.faral.products} />

          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-block px-12 py-5 bg-johnnys-pink text-white font-bold text-lg rounded-full hover:bg-johnnys-pink-dark transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              {productCatalog.orderButtonText}
            </a>
          </div>
        </div>
      </section>

      {/* Sweet Treats Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-lime-50/50 to-green-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm uppercase tracking-[0.3em] font-bold text-green-600 mb-3">
            {productCatalog.exotic.label}
          </p>
          <h2 className="text-4xl md:text-6xl font-black font-display text-gray-900 mb-6 leading-tight">
            {productCatalog.exotic.title}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mb-12 leading-relaxed">
            {productCatalog.exotic.description}
          </p>

          <div className="mb-16">
            <ProductCarousel products={productCatalog.exotic.products} />
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-block px-12 py-5 bg-green-500 text-white font-bold text-lg rounded-full hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              {productCatalog.orderButtonText}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
