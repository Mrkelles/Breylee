import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Smile, ShieldCheck, Leaf } from "lucide-react";

const benefits = [
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: "Powerful Whitening",
    description: "Our advanced formula with pearl essence effectively removes years of stains from coffee, tea, and wine.",
  },
  {
    icon: <Smile className="h-10 w-10 text-primary" />,
    title: "Gentle on Teeth",
    description: "Designed for sensitive teeth, our powder whitens without causing irritation or damaging enamel.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Gum Protection",
    description: "Infused with Angelica Dahurica extract to help protect gums and maintain oral health.",
  },
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: "Fresh Breath",
    description: "Enjoy long-lasting fresh breath with our unique blend of natural ingredients.",
  },
];

export default function Benefits() {
  return (
    <section>
      <div className="container mx-auto px-4 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Experience the Difference
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Our teeth whitening powder is more than just a whitener; it&apos;s a complete oral care solution.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center shadow-lg bg-white/5 backdrop-blur-xl border border-white/20">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    {benefit.icon}
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <CardTitle className="font-headline text-xl">{benefit.title}</CardTitle>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
