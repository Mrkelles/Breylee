import Footer from "@/components/oello/Footer";
import Header from "@/components/oello/Header";
import OrderForm from "@/components/oello/OrderForm";

export default function OrderPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container max-w-5xl mx-auto">
          <OrderForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
