"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ChefHat,
  Menu,
  X,
  CookingPot,
  UtensilsCrossed,
  Refrigerator,
  CalendarDays,
} from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Smart Cooking", href: "/", icon: CookingPot },
    { label: "Pantry Management", href: "/", icon: Refrigerator },
    { label: "Nutrition", href: "/", icon: UtensilsCrossed },
    { label: "Community", href: "/", icon: CalendarDays },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg bg-background/70 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChefHat className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Bottleyx</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button className="kitchen-btn">Get Started Free</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Now Absolutely Positioned) */}
      <div
        className={`absolute left-0 right-0 top-full bg-background shadow-lg transition-transform duration-300 ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-4 px-4 py-4">
          {navItems.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </a>
          ))}
          <Button className="w-full">Get Started Free</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
