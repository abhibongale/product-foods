/**
 * ═══════════════════════════════════════════════════════════════
 * CENTRALIZED CONTENT - Edit this file to update the website
 * ═══════════════════════════════════════════════════════════════
 * All site copy, titles, descriptions, products, and contact info
 * are defined here. Change values below to update the site.
 */

export const siteContent = {
  // Site identity
  siteName: "Cmaa Snacks & Faral",
  siteTagline: "Authentic Cmaarunch, Delivered",

  // Top bar
  topBar: {
    show: true,
    text: "Open Now",
  },

  // Navigation
  nav: {
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Product", href: "#products" },
      { label: "Contact", href: "#contact" },
    ],
    orderButtonText: "Order Now",
  },

  // Hero section
  hero: {
    // Rotating hero products - 3 items in loop, each with its countdown
    heroProducts: [
      {
        number: "3",
        tagline: "SNACK FIX",
        title: "Your go-to",
        image: "/assets/chakali-hero.png",
        alt: "Chakli - Traditional spiral snack",
        headline: "CRUNCH",
        tasteDescriptors: ["CRISPY", "CRUNCHY", "SPICY"],
      },
      {
        number: "2",
        tagline: "FLAVOR TRIP",
        title: "Your Exotic",
        image: "/assets/chivda_product.png",
        alt: "Chivda - Savory poha mix",
        headline: "MUNCH",
        tasteDescriptors: ["SAVORY", "SPICY", "NUTTY"],
      },
      {
        number: "1",
        tagline: "FLAVOR SHOP",
        title: "Your ONE STOP",
        image: "/assets/chakali_packet.png",
        alt: "Chakali packet - Fresh and crispy",
        headline: "TASTE",
        tasteDescriptors: ["GOLDEN", "BUTTERY", "CRISP"],
      },
    ],
    headline: "FLAVOR SHOP",
    subheadline: "Puneri Faral. Bold Crunch.",
    description:
      "Welcome to Pune's flavor headquarters. Handmade chakli, fresh chivda, and authentic faral that hits different. No shortcuts. No preservatives. Just pure, crispy tradition fried to perfection in Kothrud.",
    primaryCta: "Order Now",
    secondaryCta: "Explore Our Snacks",
  },

  // About section
  about: {
    explainerTitle: "Faral? Let's Get Into It.",
    explainerText:
      "Faral isn't fancy talk—it's the real deal. Traditional Maharashtrian snacks that have been perfecting their crunch for generations. Chakli, chivda, shankarpali—hand-fried in Kothrud with zero shortcuts. Just pure, crispy tradition that your Aaji would approve of.",
    aboutTitle: "Who We Are",
    aboutParagraph1:
      "Born and raised in Pune. Family owned, flavor obsessed. We're bringing back that sense of community—one crispy bite at a time. No mass production. No compromises. Just authentic Puneri faral, made fresh and delivered to your door.",
    aboutParagraph2:
      "We believe in local power. Whether you're an artist, small business, event organizer, or just someone with a cool idea—hit us up. Let's collaborate and create something special for the Pune community.",
  },

  // Product catalog
  productCatalog: {
    orderButtonText: "Order Now",

    // Faral - Traditional Savory Snacks (Johnny's Dirty Soda style)
    faral: {
      label: "Puneri Faral",
      title: "Traditional Snacks. Clean Crunch.",
      description:
        "Your snack lineup is a passport to Pune's authentic flavors. Handmade. Hand-fried. Handed down through generations.",
      tagline: "The Faral Menu",
      products: [
        {
          number: 1,
          name: "Golden Chakli",
          flag: "🇮🇳",
          ingredients: "Rice flour + Chickpea flour + Sesame + Ajwain + Butter",
          tagline: "THE SPIRAL CLASSIC"
        },
        {
          number: 2,
          name: "Kothrud Chivda",
          flag: "🇮🇳",
          ingredients: "Poha + Peanuts + Curry leaves + Turmeric + Chili",
          tagline: "CRISPY. SPICY. EVERYTHING NICE-Y."
        },
        {
          number: 3,
          name: "Shankarpali Supreme",
          flag: "🇮🇳",
          ingredients: "Wheat flour + Ghee + Cardamom + Sugar crystals",
          tagline: "DIAMOND BITES OF JOY"
        },
        {
          number: 4,
          name: "Kadboli Crunch",
          flag: "🇮🇳",
          ingredients: "Rice flour + Chana dal + Black pepper + Ghee",
          tagline: "TWISTED PERFECTION"
        },
        {
          number: 5,
          name: "Masala Sev",
          flag: "🇮🇳",
          ingredients: "Chickpea flour + Red chili + Turmeric + Clove",
          tagline: "THIN. CRISPY. ADDICTIVE."
        },
        {
          number: 6,
          name: "Bhakarwadi Roll",
          flag: "🇮🇳",
          ingredients: "Gram flour + Coconut + Sesame + Sweet-spicy masala",
          tagline: "THE FLAVOR BOMB"
        },
      ],
    },

    // Exotic - Sweet Treats
    exotic: {
      label: "Sweet Sensations",
      title: "Mithai Hits Different Here",
      description:
        "Why settle for boring? Every sweet is handcrafted heaven. We're talking fresh, we're talking authentic, we're talking Pune.",
      products: [
        { name: "Besan Ladoo", flag: "🇮🇳", desc: "Gram flour + Ghee + Cardamom + Love" },
        { name: "Til-Gul Ladoo", flag: "🇮🇳", desc: "Sesame + Jaggery + Festival vibes" },
        { name: "Kaju Katli", flag: "🇮🇳", desc: "Cashew + Silver leaf + Diamond-cut" },
        { name: "Badam Barfi", flag: "🇮🇳", desc: "Almond + Ghee + Rich creaminess" },
      ],
    },
  },

  // Contact CTA section
  contactCta: {
    title: "Craving That Crunch? We Got You",
    orderButtonText: "Order Now",
  },

  // Footer
  footer: {
    address: "Kothrud, Pune",
    phone: "",
    email: "info@example.com",
    copyright: "All Rights Reserved",
    links: [
      { label: "Home", href: "/" },
      { label: "Our Product", href: "#products" },
    ],
  },
} as const;
