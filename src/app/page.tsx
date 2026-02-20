import Header from "@/components/oello/Header";
import Hero from "@/components/oello/Hero";
import Benefits from "@/components/oello/Benefits";
import HowToUse from "@/components/oello/HowToUse";
import Reviews from "@/components/oello/Reviews";
import Faq from "@/components/oello/Faq";
import OrderSection from "@/components/oello/OrderSection";
import Footer from "@/components/oello/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <HowToUse />
        <Reviews />
        <Faq />
        <OrderSection />
      </main>
      <Footer />
    </div>
  );
}
