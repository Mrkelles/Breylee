import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const steps = [
  {
    title: "Step 1: Wet Your Brush",
    description: "Lightly dampen the bristles of your toothbrush.",
  },
  {
    title: "Step 2: Dip in Powder",
    description: "Dip the brush into the Breylee teeth whitening powder.",
  },
  {
    title: "Step 3: Brush Gently",
    description: "Brush your teeth gently for two minutes, then rinse thoroughly.",
  },
];

export default function HowToUse() {
  const inUseImage = PlaceHolderImages.find((img) => img.id === "product-in-use");
  const smileImage = PlaceHolderImages.find((img) => img.id === "smile-after");

  return (
    <section className="bg-secondary/50">
      <div className="container mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Simple Steps to a Brighter Smile</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Achieving a radiant smile is as easy as 1-2-3.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="grid grid-cols-1 gap-8">
                {inUseImage && (
                    <Image
                        src={inUseImage.imageUrl}
                        alt={inUseImage.description}
                        data-ai-hint={inUseImage.imageHint}
                        width={600}
                        height={400}
                        className="rounded-lg shadow-md"
                    />
                )}
                 {smileImage && (
                    <Image
                        src={smileImage.imageUrl}
                        alt={smileImage.description}
                        data-ai-hint={smileImage.imageHint}
                        width={600}
                        height={400}
                        className="rounded-lg shadow-md"
                    />
                )}
            </div>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="flex items-start gap-6 bg-transparent border-0 shadow-none">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-xl font-headline">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
