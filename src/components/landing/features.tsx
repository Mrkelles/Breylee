import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, Sparkles } from "lucide-react";
import { ToothIcon } from "@/components/icons/tooth-icon";

const features = [
  {
    icon: <ToothIcon className="w-8 h-8 text-primary" />,
    title: "Deep Whitening",
    description: "Our formula penetrates deep to break down years of stains without harsh chemicals, revealing your natural whiteness.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Enamel Safe",
    description: "Developed to be gentle on your enamel. Whiten your teeth with peace of mind, knowing your dental health is protected.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Lasting Freshness",
    description: "Not just for whitening! Our powder leaves your mouth feeling exceptionally clean and your breath refreshingly minty.",
  },
];

export function Features() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold">
            An Unparalleled Whitening Experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experience the difference with a formula designed for effectiveness, safety, and a touch of luxury.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-2 border-transparent hover:border-primary hover:shadow-lg transition-all duration-300">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  {feature.icon}
                </div>
                <CardTitle className="mt-4 font-headline">{feature.title}</CardTitle>
                <CardDescription className="mt-2">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
