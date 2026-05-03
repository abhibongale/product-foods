// Centralized Site Configuration
// Update all links, images, and site-wide settings here

// Get basePath from environment (for GitHub Pages deployment)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Helper function to add basePath to image paths
const img = (path: string) => `${basePath}${path}`;

export const siteConfig = {
  // Site Info
  siteName: "Cmaa Snacks",
  tagline: "Open Now - Order for Pickup or Delivery",

  // Links
  links: {
    orderNow: "https://www.zeptonow.com", // Update with your Zepto store link
    instagram: "#", // Add your Instagram URL
    facebook: "#", // Add your Facebook URL
    whatsapp: "#", // Add your WhatsApp URL
  },

  // Seller Platforms
  sellerPlatforms: {
    zepto: "https://www.zeptonow.com", // Update with your Zepto store link
    blinkit: "https://blinkit.com", // Update with your Blinkit store link
    whatsapp: "https://wa.me/919876543210?text=Hi, I'd like to order some faral", // Update with your WhatsApp Business number
  },

  // Navigation
  navigation: [
    { name: "Products", href: "#products" },
    { name: "About Us", href: "#about" },
  ],

  // Images - Hero Section
  // Note: Using img() helper to add basePath for GitHub Pages deployment
  heroImages: {
    // Slide 1 - Chakli
    chakliMain: img("/chakli_clean.avif"),
    chakliLeft: img("/chakli_clean.avif"),
    chakliRight: img("/chakli_broken.avif"),
    chakliBottom: img("/chakli_clean.avif"),

    // Slide 2 - Chivda
    chivdaMain: img("/chivda_clean.avif"),
    chivdaLeft: img("/chivda_clean.avif"),
    chivdaRight: img("/chivda_clean.avif"),
    chivdaBottom: img("/chivda_clean.avif"),

    // Slide 3 - Add your third product images
    slide3Main: img("/chakli_clean.avif"),
    slide3Left: img("/chakli_clean.avif"),
    slide3Right: img("/chakli_clean.avif"),
    slide3Bottom: img("/chakli_clean.avif"),
  },

  // Other Images
  images: {
    traditionalFaralProduct: img("/placeholder.png"), // Traditional Faral section image
    aboutUsImage: img("/placeholder.png"), // About Us section image
    logo: img("/logo.png"), // Site logo if you have one
  },

  // Contact Info
  contact: {
    email: "contact@cmaasnacks.com",
    phone: "+91 XXXXXXXXXX",
    whatsapp: "+91 XXXXXXXXXX",
    address: "Kothrud, Pune, Maharashtra",
  },

  // Social Media
  social: {
    instagram: "@cmaasnacks",
    facebook: "CmaaSnacks",
  },
};
