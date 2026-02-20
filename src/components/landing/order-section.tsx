import { OrderForm } from "./order-form";

export function OrderSection() {
  return (
    <section id="order" className="py-12 sm:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold">
            Ready for Your Transformation?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Complete the form below to order your Breylee Teeth Whitening Powder. Pay on delivery available nationwide.
          </p>
        </div>
        <div className="mt-12 max-w-2xl mx-auto">
            <OrderForm />
        </div>
      </div>
    </section>
  );
}
