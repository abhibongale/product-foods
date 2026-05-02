import Banner from "./components/Banner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TraditionalFaralSection from "./components/TraditionalFaralSection";
import AboutSection from "./components/AboutSection";
import ProductCatalogSection from "./components/ProductCatalogSection";
import OrderNowSection from "./components/OrderNowSection";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Banner />
      <Header />
      <Hero />
      <TraditionalFaralSection />
      <AboutSection />
      <ProductCatalogSection />
      <OrderNowSection />
      <FloatingWhatsApp />
    </div>
  );
}
