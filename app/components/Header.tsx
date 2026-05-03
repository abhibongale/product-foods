"use client";

import { useState } from "react";
import { siteConfig } from "../data/siteConfig";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm relative z-50">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
        {/* Left side - Logo and Menu */}
        <div className="flex items-center gap-8">
          {/* Logo/Brand */}
          <div className="text-2xl font-bold text-gray-900">
            {siteConfig.siteName}
          </div>

          {/* Divider */}
          <div className="h-8 w-[1px] bg-gray-300 hidden md:block" />

          {/* Desktop Menu Items */}
          <div className="hidden md:flex gap-8 font-semibold text-gray-800">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-orange-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right side - Order Button & Hamburger */}
        <div className="flex items-center gap-4">
          {/* Order Button - Hidden on very small screens */}
          <a
            href="#order"
            className="bg-[#FF3008] text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-sm md:text-base shadow-lg hover:bg-[#e02b07] transition-colors"
          >
            Order Now
          </a>

          {/* Hamburger Menu Button - Only visible on mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
        style={{ top: '73px' }}
      ></div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed right-0 top-[73px] bottom-0 w-72 bg-white shadow-2xl transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-8 gap-6">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMobileMenu}
              className="text-xl font-semibold text-gray-800 hover:text-orange-500 transition-colors py-3 border-b border-gray-200"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#order"
            onClick={closeMobileMenu}
            className="mt-4 bg-[#FF3008] text-white px-8 py-4 rounded-full font-bold text-center shadow-lg hover:bg-[#e02b07] transition-colors"
          >
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
}
