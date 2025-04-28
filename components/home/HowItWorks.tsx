import { ArrowRight, ScrollText, Search, Utensils, ShoppingCart } from "lucide-react";
import Link from "next/link";

const HowItWorks = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Bottleyx Works</h2>
          <p className="text-lg text-muted-foreground">
            Experience the simplicity of smart meal planning in just four easy steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <Step 
            number="1" 
            icon={<Search className="h-8 w-8 text-primary" />}
            title="Search Recipes" 
            description="Browse our vast collection of recipes or input your dietary preferences and let our AI do the work." 
          />
          
          <Step 
            number="2" 
            icon={<ScrollText className="h-8 w-8 text-primary" />}
            title="Plan Your Meals" 
            description="Create weekly meal plans with a simple drag-and-drop interface and adjust portions automatically." 
          />
          
          <Step 
            number="3" 
            icon={<ShoppingCart className="h-8 w-8 text-primary" />}
            title="Generate Shopping Lists" 
            description="Convert your meal plan into organized shopping lists sorted by store department." 
          />
          
          <Step 
            number="4" 
            icon={<Utensils className="h-8 w-8 text-primary" />}
            title="Cook With Guidance" 
            description="Follow step-by-step instructions with timing alerts and technique videos." 
          />
        </div>

        <div className="mt-16 text-center">
          <Link href="/" className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors">
            <span className="font-medium text-xl">Explore all features</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Step = ({ number, icon, title, description }: { number: string; icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="relative">
      <div className="p-6 rounded-lg h-full flex flex-col items-center text-center">
        <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
          {icon}
        </div>
        <div className="absolute -top-3 -right-3 bg-accent text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">
          {number}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorks;