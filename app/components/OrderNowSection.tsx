import { siteConfig } from "../data/siteConfig";
import { ShoppingBag, MessageCircle, Zap } from "lucide-react";

export default function OrderNowSection() {
  const platforms = [
    {
      name: "Zepto",
      icon: <Zap className="w-8 h-8" />,
      bgColor: "bg-purple-600",
      hoverColor: "hover:bg-purple-700",
      link: siteConfig.sellerPlatforms.zepto,
      description: "10-minute delivery",
    },
    {
      name: "Blinkit",
      icon: <ShoppingBag className="w-8 h-8" />,
      bgColor: "bg-yellow-500",
      hoverColor: "hover:bg-yellow-600",
      link: siteConfig.sellerPlatforms.blinkit,
      description: "Quick commerce",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-8 h-8" />,
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
      link: siteConfig.sellerPlatforms.whatsapp,
      description: "Direct order",
    },
  ];

  return (
    <section id="order" className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Order Your Favorites
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your preferred platform and get fresh, crispy faral delivered to your doorstep
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${platform.bgColor} ${platform.hoverColor} text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform group`}
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {platform.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {platform.name}
              </h3>
              <p className="text-sm md:text-base opacity-90">
                {platform.description}
              </p>
              <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-semibold">Order Now</span>
                <svg
                  className="w-4 h-4"
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
              </div>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-xl border-2 border-orange-200">
          <p className="text-gray-700 text-sm md:text-base">
            <span className="font-bold text-orange-600">💫 Fresh Daily</span> • All products are made fresh and delivered with care
          </p>
        </div>
      </div>
    </section>
  );
}
