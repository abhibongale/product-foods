// Centralized Site Configuration
// Update all links, images, and site-wide settings here

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
  heroImages: {
    // Slide 1 - Chakli
    chakliMain: "/chakli_clean.avif",
    chakliLeft: "/chakli_clean.avif",
    chakliRight: "/chakli_broken.avif",
    chakliBottom: "/chakli_clean.avif",

    // Slide 2 - Chivda
    chivdaMain: "/chivda_clean.avif",
    chivdaLeft: "/chivda_clean.avif",
    chivdaRight: "/chivda_clean.avif",
    chivdaBottom: "/chivda_clean.avif",

    // Slide 3 - Add your third product images
    slide3Main: "/chakli_clean.avif",
    slide3Left: "/chakli_clean.avif",
    slide3Right: "/chakli_clean.avif",
    slide3Bottom: "/chakli_clean.avif",
  },

  // Other Images
  images: {
    traditionalFaralProduct: "/placeholder.png", // Traditional Faral section image
    aboutUsImage: "/placeholder.png", // About Us section image
    logo: "/logo.png", // Site logo if you have one
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
