// Centralized Product Data
// Update product names, descriptions, images, and colors here

export const products = [
  {
    id: 1,
    name: "Golden Chakli",
    description: "Traditional spiral snack made with rice flour, sesame, and aromatic spices. Perfectly crispy and golden.",
    image: "/products/golden-chakli.png", // Add your product image here
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
    imageGradient: "from-orange-100 to-orange-50",
    price: "₹150", // Optional: Add pricing
    weight: "250g", // Optional: Add weight/quantity
  },
  {
    id: 2,
    name: "Kothrud Chivda",
    description: "Savory poha mix with peanuts, curry leaves, and aromatic spices. A Pune favorite snack.",
    image: "/products/kothrud-chivda.png",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
    imageGradient: "from-amber-100 to-amber-50",
    price: "₹120",
    weight: "200g",
  },
  {
    id: 3,
    name: "Shankarpali Supreme",
    description: "Diamond-cut sweet treats with ghee and cardamom. Crispy, sweet perfection.",
    image: "/products/shankarpali.png",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-100",
    imageGradient: "from-yellow-100 to-yellow-50",
    price: "₹130",
    weight: "250g",
  },
  {
    id: 4,
    name: "Kadboli Crunch",
    description: "Twisted rice flour snack with chana dal and black pepper. Irresistibly crunchy.",
    image: "/products/kadboli.png",
    bgColor: "bg-lime-50",
    borderColor: "border-lime-100",
    imageGradient: "from-lime-100 to-lime-50",
    price: "₹140",
    weight: "200g",
  },
  {
    id: 5,
    name: "Masala Sev",
    description: "Thin, crispy chickpea flour noodles with spicy masala. Perfect tea-time companion.",
    image: "/products/masala-sev.png",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-100",
    imageGradient: "from-rose-100 to-rose-50",
    price: "₹100",
    weight: "200g",
  },
  {
    id: 6,
    name: "Bhakarwadi Roll",
    description: "Sweet-spicy rolled snack with coconut and sesame. A flavor explosion in every bite.",
    image: "/products/bhakarwadi.png",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
    imageGradient: "from-emerald-100 to-emerald-50",
    price: "₹160",
    weight: "250g",
  },
];

// Hero Carousel Slides Data
export const heroSlides = [
  {
    id: 0,
    bgColor: "#f97316", // Orange
    textColor: "#ffffff",
    number: "01",
    bgText: "YOUR CRISPY FLAVOR",
    product: "chakli", // Reference to which product images to use
  },
  {
    id: 1,
    bgColor: "#fbbf24", // Amber/Yellow
    textColor: "#ffffff",
    number: "02",
    bgText: "YOUR EXOTIC FLAVOR TRIP",
    product: "chivda",
  },
  {
    id: 2,
    bgColor: "#fb923c", // Light Orange
    textColor: "#ffffff",
    number: "03",
    bgText: "YOUR TRADITIONAL TASTE",
    product: "slide3",
  },
];
