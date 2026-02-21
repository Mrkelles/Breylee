'use client';

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const reviews = [
  {
    name: "Aisha B.",
    avatarId: "customer-1",
    rating: 5,
    comment: "I was skeptical at first, but wow! My teeth are noticeably whiter after just one week. I get compliments all the time now. Highly recommend!",
  },
  {
    name: "Tunde O.",
    avatarId: "customer-2",
    rating: 5,
    comment: "As a coffee lover, I struggled with stains for years. This powder is a game changer. It's gentle and it actually works. My smile has never been better.",
  },
  {
    name: "Chiamaka E.",
    avatarId: "customer-3",
    rating: 4,
    comment: "Really happy with the results. It took a couple of weeks to see a big difference, but it's definitely effective and doesn't make my teeth sensitive.",
  },
];

const Rating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-primary fill-primary" : "text-muted-foreground/50"
        }`}
      />
    ))}
  </div>
);

export default function Reviews() {
  return (
    <section>
      <div className="container mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Loved by Our Customers</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Don&apos;t just take our word for it. Here&apos;s what people are saying.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {reviews.map((review, index) => {
              const avatar = PlaceHolderImages.find(img => img.id === review.avatarId);
              return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-lg bg-white/10 backdrop-blur-lg border border-white/20">
                    <CardContent className="p-6 space-y-4">
                        <Rating rating={review.rating} />
                        <p className="italic text-foreground/80">&quot;{review.comment}&quot;</p>
                        <div className="flex items-center gap-4 pt-4">
                            {avatar && <Image
                                src={avatar.imageUrl}
                                alt={avatar.description}
                                data-ai-hint={avatar.imageHint}
                                width={48}
                                height={48}
                                className="rounded-full"
                            />}
                            <p className="font-bold text-accent">{review.name}</p>
                        </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )})}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
