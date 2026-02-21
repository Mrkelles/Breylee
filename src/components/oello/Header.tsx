import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg font-headline text-accent">
          BREYLEE
          </span>
        </Link>
        <nav className="flex items-center">
          <Button asChild>
            <Link href="/order">Order Now</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
