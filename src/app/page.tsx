import Header from "@/components/oello/Header";
import Hero from "@/components/oello/Hero";
import Benefits from "@/components/oello/Benefits";
import HowToUse from "@/components/oello/HowToUse";
import Reviews from "@/components/oello/Reviews";
import Faq from "@/components/oello/Faq";
import OrderSection from "@/components/oello/OrderSection";
import Footer from "@/components/oello/Footer";
import About from "@/components/oello/About";
import Gallery from "@/components/oello/Gallery";
import FourImageGrid from "@/components/oello/FourImageGrid";
import ProductFeatures from "@/components/oello/ProductFeatures";
import Pricing from "@/components/oello/Pricing";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Gallery />
        <Benefits />
        <FourImageGrid />
        <ProductFeatures />
        <Benefits />
        <HowToUse />
        <Pricing />
        <Reviews />
        <Faq />
        <OrderSection />
      </main>
      <Footer />
    </div>
  );
}
