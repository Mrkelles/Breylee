import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "product-main");

  return (
    <section className="bg-secondary/50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter">
            Unveil Your Brightest Smile, Naturally.
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto md:mx-0">
            Discover the power of pearl essence with Breylee Teeth Whitening
            Powder. A gentle, effective solution for a visibly whiter smile.
          </p>
          <ul className="grid gap-2 text-lg text-muted-foreground">
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Removes Stubborn Stains</span>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Protects Gums and Enamel</span>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Freshens Breath All Day</span>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="shadow-lg">
              <Link href="/order">Claim Your Discount Now</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              width={600}
              height={600}
              alt={heroImage.description}
              data-ai-hint={heroImage.imageHint}
              className="rounded-xl shadow-2xl"
            />
          )}
        </div>
      </div>
    </section>
  );
}
