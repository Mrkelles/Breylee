import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function OrderSection() {
  return (
    <section id="order-section" className="bg-gradient-to-b from-secondary/50 to-background">
      <div className="container max-w-5xl mx-auto px-4">
          <Card className="shadow-2xl text-center">
            <CardHeader className="bg-accent text-accent-foreground p-8 rounded-t-lg">
                <CardTitle className="text-3xl md:text-4xl font-bold">
                    Ready for Your Transformation?
                </CardTitle>
                 <CardDescription className="text-accent-foreground/80 text-lg">
                    Don't wait any longer. Click the button below to place your order.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-8 md:p-12">
                 <p className="text-lg text-muted-foreground mb-8">
                    Start your journey to a brighter, more confident smile today.
                    You are one step away from getting the smile you deserve.
                </p>
                <Button asChild size="lg" className="text-lg font-bold py-6 shadow-lg">
                    <Link href="/order">Order Now & Get 50% Off</Link>
                </Button>
            </CardContent>
          </Card>
      </div>
    </section>
  );
}
