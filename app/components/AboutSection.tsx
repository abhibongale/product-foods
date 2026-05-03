export default function AboutSection() {
  return (
    <section id="about" className="bg-gradient-to-br from-orange-50 to-white py-16 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Huge Cmaa Snacks Text */}
        <h2 className="text-[clamp(3rem,12vw,12rem)] font-black font-display text-gray-900 leading-none mb-8 md:mb-16 tracking-tight whitespace-nowrap text-center">
          Cmaa Snacks
        </h2>

        {/* About Us Section - Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left - Text Content */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-600 mb-4 md:mb-6">
              About Us
            </h3>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Born in the heart of Hadapsar, Pune, Cmaa Snacks is a family-run kitchen where tradition meets taste. For generations, we have been crafting authentic Maharashtrian faral using time-honored recipes passed down through our family.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Every chakli spiral, every chivda mix, every golden piece of shankarpali is handmade with love, fried fresh daily, and packed with the flavors that remind you of home. We believe in zero shortcuts, pure ingredients, and the kind of authentic taste that brings families together.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              From our kitchen to your table—this is more than snacks. This is heritage, crafted with care.
            </p>

            {/* Contact Us Link */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-orange-600 font-bold text-base md:text-lg hover:text-orange-700 active:text-orange-800 transition-colors border-b-2 border-orange-600 hover:border-orange-700"
              >
                Contact Us
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right - Image Placeholder */}
          <div className="relative hidden md:block">
            <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl overflow-hidden shadow-xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm font-medium">About Us Image</p>
                  <p className="text-xs">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
