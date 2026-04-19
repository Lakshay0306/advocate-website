import { Scale } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border bg-secondary">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Scale className="h-5 w-5 text-primary" />
        <span className="font-heading text-lg font-bold text-primary">Adv. B.B. Singla</span>
      </div>
      <p className="text-muted-foreground text-sm text-center">
        © {new Date().getFullYear()} Adv. Bharat Bhushan Singla. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
