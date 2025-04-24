"use client"

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useHeader } from "@/contexts/header-context";
import { ShoppingCart, Plus, Check } from "lucide-react";

const ShoppingList = () => {
    const { setHeader } = useHeader();

  useEffect(() => {
    setHeader?.(
      "Shopping List",
      "Generate and manage your grocery lists"
    );
    // Clean up on unmount
    return () => setHeader?.();
  }, [setHeader]);
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-6 mt-8">
        <Card className="border-none">
          <CardHeader>
            <CardTitle>Smart Shopping Lists</CardTitle>
            <CardDescription>
              Create shopping lists based on your meal plans and recipes.
              Organize by store sections and optimize your shopping route.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Generate a list from your meal plans or create a custom list from
              scratch.
            </p>
            <div className="p-12 border border-gray-600 border-dashed rounded-lg flex flex-col items-center justify-center text-center">
              <ShoppingCart size={48} className="text-gray-400 mb-4" />
              <h3 className="text-xl font-medium mb-2">
                Create Your Shopping List
              </h3>
              <p className="text-gray-500 mb-4">
                Generate a list from your meal plan or add items manually
              </p>
              <div className="flex gap-3">
                <Button className="bg-secondary hover:bg-secondary/90 cursor-pointer">
                  <Plus className="mr-1 h-4 w-4" /> New List
                </Button>
                <Button variant="outline" className="cursor-pointer">
                  <Check className="mr-1 h-4 w-4" /> From Meal Plan
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShoppingList;
