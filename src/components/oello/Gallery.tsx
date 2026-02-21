import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Gallery() {
  const galleryImages = [
    PlaceHolderImages.find((img) => img.id === "gallery-1"),
    PlaceHolderImages.find((img) => img.id === "gallery-2"),
    PlaceHolderImages.find((img) => img.id === "gallery-3"),
  ].filter(Boolean);

  return (
    <section>
      <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">See the Results</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
              A gallery of confident smiles and our premium product.
            </p>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((image) => (
              image && (
                <div key={image.id} className="break-inside-avoid">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    width={500}
                    height={500}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              )
            ))}
          </div>
      </div>
    </section>
  );
}
