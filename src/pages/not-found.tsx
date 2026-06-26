import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center">
      <h1 className="text-6xl font-bold text-muted-foreground/30">404</h1>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Page not found</h2>
        <p className="text-muted-foreground">The page you are looking for doesn't exist.</p>
      </div>
      <Link href="/">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
}
