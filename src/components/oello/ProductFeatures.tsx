import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

export default function ProductFeatures() {
    const inUseImage = PlaceHolderImages.find((img) => img.id === "product-in-use");
    const smileImage = PlaceHolderImages.find((img) => img.id === "smile-after");

    return (
        <section>
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Why Choose Breylee?</h2>
                    <h3 className="text-xl md:text-2xl font-bold">Fragrance-free, Chemicals-free, No Side-effects, No Sensitivity</h3>
                    <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
                        Our formula is packed with benefits to ensure you get the best results safely. Breylee is a 100% natural product with no side effect, it gives you quick transformation and easily remove coffee stain and plaque on the teeth. And not just that it gives you fresh breathing and pleasant mint smell.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <ul className="grid gap-4 text-md md:text-lg text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-primary mt-1" />
                                <span><span className="font-bold text-foreground">Natural Pearl Essence:
                                    </span> A gentle abrasive that effectively polishes away surface stains.
                                    </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-primary mt-1" />
                                <span><span className="font-bold text-foreground">Angelica Dahurica Extract:</span> Helps to protect and soothe your gums during the whitening process.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-primary mt-1" />
                                <span><span className="font-bold text-foreground">Deep Cleaning Power:</span> Penetrates to remove deep-seated stains from coffee, wine, and smoking.</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-primary mt-1" />
                                <span><span className="font-bold text-foreground">Long-lasting Freshness:</span> Leaves your mouth feeling clean with a lasting minty-fresh breath.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-primary mt-1" />
                                <span><span className="font-bold text-foreground">Crafted With Purpose:
                                    </span> Multiple oral conscious agents-Menthol, Xylttol, Mint Flavor
                                    </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-primary mt-1" />
                                <span><span className="font-bold text-foreground">Oral Safe:
                                    </span> Pearl powder replaces activated charcoal, easy to clean and easy to use
                                    </span>
                            </li>
                        </ul>
                    </div>
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
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
