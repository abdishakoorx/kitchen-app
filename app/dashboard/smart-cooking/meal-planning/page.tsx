"use client";
import { useHeader } from "@/contexts/header-context";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Plus } from "lucide-react";
import { useEffect } from "react";

const MealPlanning = () => {
  const { setHeader } = useHeader();

  useEffect(() => {
    setHeader?.("Meal Planning", "Plan your meals for days or weeks ahead");
    // Clean up on unmount
    return () => setHeader?.();
  }, [setHeader]);
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-6 mt-8">
        <Card className="border-none">
          <CardHeader>
            <CardTitle>Weekly Meal Planning</CardTitle>
            <CardDescription>
              Create balanced meal plans with AI suggestions based on your
              preferences and dietary requirements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Start by selecting a date range and your dietary preferences.
            </p>
            <div className="p-12 border border-gray-600 border-dashed rounded-lg flex flex-col items-center justify-center text-center">
              <Calendar size={48} className="text-gray-400 mb-4" />
              <h3 className="text-xl font-medium mb-2">
                Create Your First Meal Plan
              </h3>
              <p className="text-gray-500 mb-4">
                Plan balanced meals for the upcoming week
              </p>
              <Button className="bg-secondary hover:bg-secondary/90 cursor-pointer">
                <Plus className="mr-1 h-4 w-4" /> Start Planning
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MealPlanning;
