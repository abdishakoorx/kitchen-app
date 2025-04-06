"use client";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useHeader } from "@/context/header-context";
import { BookOpen, Plus } from "lucide-react";

const RecipeBuilder = () => {
  const { setHeader } = useHeader();

  useEffect(() => {
    setHeader?.(
      "Recipe Builder",
      "Create custom recipes with AI assistance"
    );
    // Clean up on unmount
    return () => setHeader?.();
  }, [setHeader]);
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-6 mt-8">
        <Card className="border-none">
          <CardHeader>
            <CardTitle>AI-Powered Recipe Creation</CardTitle>
            <CardDescription>
              Let our AI help you create delicious recipes based on ingredients
              you have or cuisines you love
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Start by entering ingredients you have on hand, or describe a dish
              you&apos;d like to make.
            </p>
            <div className="p-12 border border-gray-600 border-dashed rounded-lg flex flex-col items-center justify-center text-center">
              <BookOpen size={48} className="text-gray-400 mb-4" />
              <h3 className="text-xl font-medium mb-2">
                Create Your First Recipe
              </h3>
              <p className="text-gray-500 mb-4">
                Start with a few ingredients or a cuisine type
              </p>
              <Button className="bg-secondary hover:bg-secondary/90 cursor-pointer">
                <Plus className="mr-1 h-4 w-4" /> Start Creating
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecipeBuilder;
