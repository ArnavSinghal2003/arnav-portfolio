import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear}. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Made with <Heart className="w-4 h-4 text-accent fill-accent" /> in India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
