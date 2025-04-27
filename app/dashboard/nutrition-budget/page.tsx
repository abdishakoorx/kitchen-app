"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { PieChart, Utensils, DollarSign, BarChart3 } from "lucide-react";
import { useHeader } from "@/contexts/header-context";

export default function NutritionBudgetPage() {
  const { setHeader } = useHeader();

  useEffect(() => {
    setHeader?.("Nutrition & Budget", "Manage your nutrition goals and food budget in one place.");
    // Clean up on unmount
    return () => setHeader?.();
  }, [setHeader]);
  const sections = [
    {
      title: "Nutrition Report",
      description:
        "Track your nutritional intake and get personalized recommendations.",
      icon: <PieChart className="h-6 w-6" />,
      href: "/dashboard/nutrition-budget/nutrition-report",
    },
    {
      title: "Macro Calculator",
      description:
        "Calculate your daily macro needs based on your goals and activity level.",
      icon: <Utensils className="h-6 w-6" />,
      href: "/dashboard/nutrition-budget/macro-calculator",
    },
    {
      title: "Budget Planner",
      description: "Plan your grocery budget and track spending over time.",
      icon: <DollarSign className="h-6 w-6" />,
      href: "/dashboard/nutrition-budget/budget-planner",
    },
    {
      title: "Cost Analysis",
      description:
        "Analyze cost per meal and find ways to optimize your food spending.",
      icon: <BarChart3 className="h-6 w-6" />,
      href: "/dashboard/nutrition-budget/cost-analysis",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <Link
            href={section.href}
            key={section.title}
            className="block p-6 rounded-lg border hover:border-secondary"
          >
            <div className="flex items-center mb-3">
              <div className="p-2 bg-blue-100 rounded-full mr-3">
                {section.icon}
              </div>
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
            <p className="text-gray-600">{section.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Weekly Summary</h3>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 p-4 rounded-md shadow-sm">
            <p className="text-gray-500 text-sm">
              Estimated weekly grocery cost
            </p>
            <p className="text-2xl font-bold">$87.50</p>
          </div>
          <div className="flex-1 p-4 rounded-md shadow-sm">
            <p className="text-gray-500 text-sm">Average daily calories</p>
            <p className="text-2xl font-bold">2,150</p>
          </div>
          <div className="flex-1 p-4 rounded-md shadow-sm">
            <p className="text-gray-500 text-sm">Budget adherence</p>
            <p className="text-2xl font-bold text-green-600">94%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
