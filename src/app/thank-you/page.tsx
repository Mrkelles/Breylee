import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-secondary/50 p-4">
      <Card className="w-full max-w-md text-center shadow-2xl">
        <CardHeader className="space-y-4">
            <div className="mx-auto">
                <CheckCircle2 className="h-16 w-16 text-green-500"/>
            </div>
          <CardTitle className="text-3xl">Order Confirmed!</CardTitle>
          <CardDescription className="text-lg">
            Thank you for your purchase.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Your order has been received and is now being processed. Our delivery agent will contact you shortly to confirm your delivery details.
          </p>
          <Button asChild size="lg" className="w-full">
            <Link href="/">Go to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
