export function Footer() {
  return (
    <footer className="py-6 border-t bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Oello Shop. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
