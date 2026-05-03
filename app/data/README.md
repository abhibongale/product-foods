# Centralized Configuration Files

All site-wide data, links, images, and product information is managed from this folder.

## Files

### `siteConfig.ts`
Contains all site-wide settings:
- **Site Info**: Site name, tagline
- **Links**: Order Now (Zepto), social media links
- **Navigation**: Menu items
- **Hero Images**: All carousel slide images
- **Other Images**: Product images, About Us image
- **Contact Info**: Email, phone, address
- **Social Media**: Instagram, Facebook handles

**How to update:**
1. Open `app/data/siteConfig.ts`
2. Update the relevant field
3. Save - changes will reflect across the entire site

**Example: Update Order Now link**
```typescript
links: {
  orderNow: "https://www.zeptonow.com/your-store-url", // Replace with your actual Zepto link
}
```

### `products.ts`
Contains all product information:
- **products**: Array of product objects with name, description, images, colors, pricing
- **heroSlides**: Hero carousel configuration

**How to add a new product:**
1. Open `app/data/products.ts`
2. Add a new product object to the `products` array:
```typescript
{
  id: 7,
  name: "New Product",
  description: "Product description here",
  image: "/products/new-product.png",
  bgColor: "bg-blue-50",
  borderColor: "border-blue-100",
  imageGradient: "from-blue-100 to-blue-50",
  price: "₹200",
  weight: "300g",
}
```

**How to update hero slides:**
1. Update the `heroSlides` array
2. Make sure corresponding images exist in `siteConfig.heroImages`

## Quick Updates Guide

### Update Order Now Link
File: `siteConfig.ts`  
Line: `orderNow: "..."`

### Update Site Name
File: `siteConfig.ts`  
Line: `siteName: "..."`

### Update Product Details
File: `products.ts`  
Find the product by name and update fields

### Update Contact Info
File: `siteConfig.ts`  
Section: `contact: { ... }`

### Update Hero Images
File: `siteConfig.ts`  
Section: `heroImages: { ... }`

## Notes

- All "Order Now" buttons across the site use `siteConfig.links.orderNow`
- Product carousel automatically uses data from `products.ts`
- Hero section automatically uses images from `siteConfig.heroImages`
- No need to touch component files for data updates!
