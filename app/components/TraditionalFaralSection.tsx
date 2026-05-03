export default function TraditionalFaralSection() {
  return (
    <section className="bg-white py-12 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-center justify-between">
          {/* Left side - Text content pushed to left edge */}
          <div className="space-y-4 md:space-y-6 md:max-w-[500px] md:mr-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Traditional Faral? {`Let's`} Get Into It.
            </h2>
            <p className="text-base md:text-xl text-gray-700 leading-relaxed">
              {`'It's'`} not your everyday snack. Faral means authentic Maharashtrian savory treats—handmade chakli spirals, crispy chivda mix, and golden shankarpali—fried to perfection with traditional spices and zero shortcuts.
            </p>
            <p className="text-base md:text-xl text-gray-700 leading-relaxed">
              From {`'Hadapsar's'`} kitchens to your table. Every bite is crafted with generations of flavor wisdom, pure ingredients, and the kind of crunch that makes you reach for more.
            </p>
            <a
              href="#order"
              className="inline-block w-full md:w-auto text-center px-8 py-4 bg-[#FF3008] text-white font-bold text-base md:text-lg rounded-full hover:bg-[#e02b07] transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              Buy Now
            </a>
          </div>

          {/* Right side - Product image window with CTA - Simplified on mobile */}
          <div className="relative md:ml-auto md:max-w-[450px] w-full">
            <div className="bg-white border-2 border-gray-200 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg">
              {/* Product image - smaller */}
              <div className="aspect-square w-full max-w-[250px] md:max-w-[300px] mx-auto bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs font-medium">Product Image</p>
                </div>
              </div>

              {/* Explore Traditional Snack button */}
              <a
                href="#products"
                className="flex items-center justify-between w-full px-4 md:px-6 py-3 md:py-4 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold rounded-full transition-all shadow-md hover:shadow-lg group"
              >
                <span className="text-sm md:text-lg">Explore Traditional Snack</span>
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
