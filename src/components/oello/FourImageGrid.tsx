import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function FourImageGrid() {
  const gridImages = [
    PlaceHolderImages.find((img) => img.id === "grid-1"),
    PlaceHolderImages.find((img) => img.id === "grid-2"),
    PlaceHolderImages.find((img) => img.id === "grid-3"),
    PlaceHolderImages.find((img) => img.id === "grid-4"),
  ].filter(Boolean);

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4">
          {gridImages.map((image) =>
            image ? (
              <div key={image.id} className="w-full h-80 relative">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
