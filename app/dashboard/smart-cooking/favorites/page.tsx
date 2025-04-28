"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, BookOpen, Calendar } from "lucide-react";
import { useHeader } from "@/contexts/header-context";
import Link from "next/link";

const Favorites = () => {
  const { setHeader } = useHeader();
  
  useEffect(() => {
    setHeader?.("Favorites", "Your saved recipes and meal plans");
    // Clean up on unmount
    return () => setHeader?.();
  }, [setHeader]);
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-6 mt-8">
        <Card className="border-none">
          <CardHeader>
            <CardTitle>Your Favorites Collection</CardTitle>
            <CardDescription>
              Access your saved recipes and meal plans for quick reference
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Save recipes and meal plans by clicking the heart icon to add them
              to your favorites.
            </p>
            <div className="p-12 border border-gray-600 border-dashed rounded-lg flex flex-col items-center justify-center text-center">
              <Heart size={48} className="text-gray-400 mb-4" />
              <h3 className="text-xl font-medium mb-2">No Favorites Yet</h3>
              <p className="text-gray-500 mb-4">
                Save recipes and meal plans to access them quickly here
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button className="bg-secondary hover:bg-secondary/90">
                  <Link href="/dashboard/smart-cooking/recipe-builder" className="flex items-center">
                    <BookOpen className="mr-1 h-4 w-4" /> Browse Recipes
                  </Link>
                </Button>
                <Button variant="outline">
                  <Link href="/dashboard/smart-cooking/meal-planning" className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" /> View Meal Plans
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Favorites;