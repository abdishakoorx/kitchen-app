"use client";
import FeatureCard from "@/components/custom/feature-card";
import { useHeader } from "@/contexts/header-context";
import { BookOpen, Calendar, ShoppingCart, Heart, ChefHat } from "lucide-react";
import { useEffect } from "react";

const CookingGuide = () => {
  const { setHeader } = useHeader();
  
  useEffect(() => {
    setHeader?.(
      "Smart Cooking",
      "Your all-in-one smart cooking assistant"
    );
    // Clean up on unmount
    return () => setHeader?.();
  }, [setHeader]);
  
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-br from-background to-primary/20 rounded-full shadow-lg">
            <ChefHat size={48} className="text-primary animate-bounce" />
          </div>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Your smart cooking assistant. Plan meals, create recipes, manage
          shopping lists, and keep track of favorites all in one place.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FeatureCard
          title="Recipe Builder"
          description="Create custom recipes with AI assistance. Get ingredient suggestions, cooking techniques, and more."
          icon={<BookOpen size={28} className="text-secondary" />}
          href="/dashboard/smart-cooking/recipe-builder"
          className="hover:scale-105 transition-transform"
        />
        <FeatureCard
          title="Meal Planning"
          description="Plan your meals for days or weeks ahead. Organize breakfast, lunch, and dinner with smart suggestions."
          icon={<Calendar size={28} className="text-secondary" />}
          href="/dashboard/smart-cooking/meal-planning"
          className="hover:scale-105 transition-transform"
        />
        <FeatureCard
          title="Shopping List"
          description="Generate smart shopping lists based on your meal plans and recipes. Never forget an ingredient again."
          icon={<ShoppingCart size={28} className="text-secondary" />}
          href="/dashboard/smart-cooking/shopping-list"
          className="hover:scale-105 transition-transform"
        />
        <FeatureCard
          title="Favorites"
          description="Save your favorite recipes and meal plans for quick access. Build your personal cookbook."
          icon={<Heart size={28} className="text-secondary" />}
          href="/dashboard/smart-cooking/favorites"
          className="hover:scale-105 transition-transform"
        />
      </div>
      
      <div className="mt-20 bg-gradient-to-br from-background to-white rounded-2xl p-8 border border-background">
        <h2 className="text-2xl font-semibold mb-6 text-secondary flex items-center">
          <span className="bg-secondary/10 p-2 rounded-full mr-3">
            <ChefHat size={24} className="text-secondary" />
          </span>
          Getting Started
        </h2>
        <ol className="list-decimal pl-8 space-y-4 text-gray-700">
          <li className="p-2 hover:bg-background from-background/50 rounded-md transition-colors">Browse through the features above and select one to begin</li>
          <li className="p-2 hover:bg-background from-background/50 rounded-md transition-colors">Create your first recipe using the Recipe Builder</li>
          <li className="p-2 hover:bg-background from-background/50 rounded-md transition-colors">Plan your meals for the week with Meal Planning</li>
          <li className="p-2 hover:bg-background from-background/50 rounded-md transition-colors">Generate a shopping list based on your meal plan</li>
          <li className="p-2 hover:bg-background from-background/50 rounded-md transition-colors">Save your favorite recipes to access them quickly later</li>
        </ol>
      </div>
    </div>
  );
};

export default CookingGuide;