"use client";
import { useState } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { label: "Smart Cooking", href: "/", icon: CookingPot },
    { label: "Pantry Management", href: "/", icon: Refrigerator },
    { label: "Nutrition", href: "/", icon: UtensilsCrossed },
    { label: "Community", href: "/", icon: CalendarDays },
  ];
  
  return (
    <header className="bg-background/70 backdrop-blur-lg py-4 z-10 px-8">
      <div className="">
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
      
      {/* Mobile Menu */}
      <div
        className={`lg:hidden shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 px-4 py-4 bg-background">
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