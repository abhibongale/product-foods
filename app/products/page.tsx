import ProductCatalog from "../components/ProductCatalog";
import Link from 'next/link';
export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner - Black announcement bar */}
      <div className="bg-black text-white py-2 text-center">
        <p className="text-sm font-medium">
          Open Now - Order for Pickup or Delivery
        </p>
      </div>

      {/* Header / Navigation */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          {/* Left side - Logo and Menu */}
          <div className="flex items-center gap-8">
            {/* Logo/Brand */}
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Cmaa Snacks
            </Link>

            {/* Divider */}
            <div className="h-8 w-[1px] bg-gray-300 hidden md:block" />

            {/* Menu Items */}
            <div className="hidden md:flex gap-8 font-semibold text-gray-800">
              <Link  href="/#products" className="hover:text-orange-500 transition-colors border-b-2 border-orange-500">
                Products
              </Link>
              <Link href="/#about" className="hover:text-orange-500 transition-colors">
                About Us
              </Link>
            </div>
          </div>

          {/* Right side - Order Button */}
          <div>
            <Link
              href="#order"
              className="bg-[#FF3008] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#e02b07] transition-colors"
            >
              Order Now
            </Link>
          </div>
        </nav>
      </header>

      {/* Products Grid Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Handmade. Hand-fried. Handed down through generations.
            </p>
          </div>

          <ProductCatalog />

          {/* Order Now Button */}
          <div className="text-center mt-16">
            <Link
              href="#order"
              className="inline-block px-12 py-5 bg-[#FF3008] text-white font-bold text-xl rounded-full hover:bg-[#e02b07] transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
