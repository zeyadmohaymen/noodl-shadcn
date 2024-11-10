import { forwardRef } from "react";
import { Button } from "@/components/button/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/sheet/sheet";
import { Link, BrowserRouter } from "react-router-dom";

import { Menu } from "lucide-react"; // Icon imports

export interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logo: string; // URL of the logo image
  links: NavLink[];
  alignment?: "start" | "center" | "end"; // Alignment of the navigation links
  ctaLabel: string; // Label for the Call to Action button
  ctaHref: string; // URL for the Call to Action button
}

export const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
  ({ logo, links, alignment, ctaLabel, ctaHref }, ref) => {
    return (
      <BrowserRouter>
        <header
        ref={ref}
        className="sticky justify-between top-0 flex h-16 w-full items-center gap-4 border-b bg-background px-4 md:px-6"
      >
        {/* Left section for the logo */}
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <img src={logo} alt="Logo" className="h-16" />
          <span className="sr-only">Logo</span>
        </Link>

        {/* Centered navigation links */}
        <nav className={`hidden flex-grow gap-6 text-lg font-medium justify-${alignment ?? "center"} md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6`} >
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href} // Using Link from react-router-dom
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Call to Action button */}
        <Button variant="default" size="sm" className="hidden rounded-full shrink-0 md:block">
        <Link to={ctaHref}>{ctaLabel}</Link> {/* Link for the CTA button */}
        </Button>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
            <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
              <img src={logo} alt="Logo" className="h-6 w-6" />
              <span className="sr-only">Logo</span>
            </Link>
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.href} // Using <a> for navigation
                  className="text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      </BrowserRouter>
    );
  }
);
