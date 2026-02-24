import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const pricingOptions = [
  {
    title: "1 Pack (Trial)",
    price: "₦14,000",
    originalPrice: "₦20,000",
    features: ["1 Jar of Whitening Powder", "Perfect for trying out", "Noticeable results", "Free Delivery"],
    highlight: false,
  },
  {
    title: "2 Packs (Recommended)",
    price: "₦26,000",
    originalPrice: "₦35,000",
    features: ["2 Jars of Whitening Powder", "Best value for money", "Long-lasting supply", "Free Delivery"],
    highlight: true,
  },
  {
    title: "3 Packs (Best Value)",
    price: "₦37,000",
    originalPrice: "₦45,000",
    features: ["3 Jars of Whitening Powder", "Maximize your results", "Share with a friend", "Free Delivery"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Choose Your Whitening Plan</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Select the perfect package for your journey to a brighter smile. All orders come with free, pay-on-delivery service.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingOptions.map((option, index) => (
            <Card key={index} className={`flex flex-col ${option.highlight ? 'border-primary border-2 shadow-primary/20 shadow-2xl' : 'shadow-lg bg-white/5 backdrop-blur-xl border border-white/20'}`}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-headline">{option.title}</CardTitle>
                <div className="flex items-baseline justify-center gap-2 pt-4">
                  <span className="text-4xl font-bold text-primary">{option.price}</span>
                  <span className="line-through text-muted-foreground">{option.originalPrice}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full border border-white" variant={option.highlight ? 'default' : 'secondary'}>
                  <Link href="/order">Order Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
