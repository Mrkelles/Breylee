import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aisha B.",
    avatarId: "review-avatar-1",
    review: "I was skeptical, but wow! My teeth are noticeably whiter after just a week. I can't stop smiling. Highly recommend this to everyone.",
    rating: 5,
  },
  {
    name: "Tunde O.",
    avatarId: "review-avatar-2",
    review: "As a coffee lover, I've struggled with stains for years. This powder is a game changer. It's gentle and it actually works. Plus, my breath has never been fresher!",
    rating: 5,
  },
  {
    name: "Chiamaka E.",
    avatarId: "review-avatar-3",
    review: "Finally, a whitening product that doesn't make my teeth sensitive. The results are amazing and my dentist even noticed. I'm so happy with my purchase.",
    rating: 5,
  },
];

export function Reviews() {
  const lifestyleImage = PlaceHolderImages.find((img) => img.id === "lifestyle-1");

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            {lifestyleImage && (
              <Image
                src={lifestyleImage.imageUrl}
                alt={lifestyleImage.description}
                width={800}
                height={600}
                data-ai-hint={lifestyleImage.imageHint}
                className="rounded-xl shadow-xl"
              />
            )}
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-headline font-bold">
              Loved by Customers Across the Nation
            </h2>
            <div className="mt-8 space-y-6">
              {testimonials.map((testimonial) => {
                const avatarImage = PlaceHolderImages.find((img) => img.id === testimonial.avatarId);
                return (
                  <Card key={testimonial.name} className="bg-secondary">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12">
                          {avatarImage && <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint} />}
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                          <p className="font-bold">{testimonial.name}</p>
                          <div className="flex items-center">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-muted-foreground">"{testimonial.review}"</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
