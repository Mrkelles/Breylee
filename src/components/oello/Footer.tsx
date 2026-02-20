export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container py-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Oello Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
