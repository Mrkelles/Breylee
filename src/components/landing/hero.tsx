import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'product-hero');

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Shine with confidence
            </p>
            <h1 className="mt-4 text-4xl lg:text-5xl font-headline font-bold text-foreground">
              Discover Your Brightest Smile with Breylee
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Unlock a visibly whiter smile with our advanced Teeth Whitening Powder. Formulated with natural pearl essence, it gently polishes away stains for a radiant, confident you.
            </p>
            <ul className="mt-8 space-y-3 text-left max-w-md mx-auto lg:mx-0">
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                <span>Effectively removes tea, coffee, and smoke stains.</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                <span>Natural ingredients, gentle on enamel and gums.</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                <span>See results in as little as one week.</span>
              </li>
            </ul>
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="#order">Get Yours Now - 50% Off</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={600}
                height={600}
                data-ai-hint={heroImage.imageHint}
                className="rounded-xl shadow-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
