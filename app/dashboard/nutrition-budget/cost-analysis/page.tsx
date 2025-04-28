"use client";

import React, { useEffect, useState } from "react";
import { BarChart } from "lucide-react";
import { useHeader } from "@/contexts/header-context";
import { Button } from "@/components/ui/button";

export default function CostAnalysisPage() {
  const [timeFrame, setTimeFrame] = useState("monthly");
  const [costBreakdown, setCostBreakdown] = useState("category");
  const { setHeader } = useHeader();

  useEffect(() => {
    setHeader?.(
      "Cost Analysis",
      "Analyze your food expenses and optimize your budget."
    );
    // Clean up on unmount
    return () => setHeader?.();
  }, [setHeader]);

  // Mock data for cost analysis
  const mockMealData = [
    {
      id: 1,
      name: "Breakfast Smoothie Bowl",
      cost: 2.15,
      category: "Breakfast",
      date: "2025-04-18",
    },
    {
      id: 2,
      name: "Chicken Salad Wrap",
      cost: 3.45,
      category: "Lunch",
      date: "2025-04-18",
    },
    {
      id: 3,
      name: "Vegetable Stir Fry",
      cost: 2.8,
      category: "Dinner",
      date: "2025-04-18",
    },
    {
      id: 4,
      name: "Greek Yogurt & Berries",
      cost: 1.5,
      category: "Snack",
      date: "2025-04-18",
    },
    {
      id: 5,
      name: "Avocado Toast",
      cost: 2.3,
      category: "Breakfast",
      date: "2025-04-19",
    },
    {
      id: 6,
      name: "Tuna Sandwich",
      cost: 2.95,
      category: "Lunch",
      date: "2025-04-19",
    },
    {
      id: 7,
      name: "Spaghetti Bolognese",
      cost: 3.2,
      category: "Dinner",
      date: "2025-04-19",
    },
    {
      id: 8,
      name: "Apple & Peanut Butter",
      cost: 1.1,
      category: "Snack",
      date: "2025-04-19",
    },
    {
      id: 9,
      name: "Overnight Oats",
      cost: 1.85,
      category: "Breakfast",
      date: "2025-04-20",
    },
    {
      id: 10,
      name: "Quinoa Bowl",
      cost: 3.75,
      category: "Lunch",
      date: "2025-04-20",
    },
    {
      id: 11,
      name: "Grilled Salmon",
      cost: 5.5,
      category: "Dinner",
      date: "2025-04-20",
    },
    {
      id: 12,
      name: "Hummus & Vegetables",
      cost: 1.65,
      category: "Snack",
      date: "2025-04-20",
    },
  ];

  const mockCategoryExpenses = [
    { category: "Proteins", amount: 125.4, percentage: 32 },
    { category: "Vegetables", amount: 87.65, percentage: 22 },
    { category: "Fruits", amount: 52.3, percentage: 13 },
    { category: "Grains", amount: 47.25, percentage: 12 },
    { category: "Dairy", amount: 43.5, percentage: 11 },
    { category: "Snacks", amount: 25.8, percentage: 7 },
    { category: "Beverages", amount: 11.7, percentage: 3 },
  ];

  const mockTimeSeriesData = [
    { week: "Week 1", amount: 95.4 },
    { week: "Week 2", amount: 87.65 },
    { week: "Week 3", amount: 102.3 },
    { week: "Week 4", amount: 81.25 },
  ];

  // Calculated metrics
  const calculateMetrics = () => {
    const totalMealCost = mockMealData.reduce(
      (sum, meal) => sum + meal.cost,
      0
    );
    const averageMealCost = totalMealCost / mockMealData.length;
    const totalMonthlyExpense = mockCategoryExpenses.reduce(
      (sum, category) => sum + category.amount,
      0
    );
    const monthlyBudget = 425;
    const budgetRemaining = monthlyBudget - totalMonthlyExpense;

    return {
      totalMealCost: totalMealCost.toFixed(2),
      averageMealCost: averageMealCost.toFixed(2),
      totalMonthlyExpense: totalMonthlyExpense.toFixed(2),
      monthlyBudget: monthlyBudget.toFixed(2),
      budgetRemaining: budgetRemaining.toFixed(2),
      budgetUsedPercentage: Math.round(
        (totalMonthlyExpense / monthlyBudget) * 100
      ),
    };
  };

  const metrics = calculateMetrics();

  // Calculate most and least expensive meals
  const mostExpensiveMeal = [...mockMealData].sort(
    (a, b) => b.cost - a.cost
  )[0];
  const leastExpensiveMeal = [...mockMealData].sort(
    (a, b) => a.cost - b.cost
  )[0];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded-lg border">
          <h3 className="text-gray-500 text-sm mb-1">Monthly Food Budget</h3>
          <p className="text-2xl font-bold">${metrics.monthlyBudget}</p>
        </div>
        <div className="p-4 rounded-lg border">
          <h3 className="text-gray-500 text-sm mb-1">Total Spent</h3>
          <p className="text-2xl font-bold">${metrics.totalMonthlyExpense}</p>
        </div>
        <div className="p-4 rounded-lg border">
          <h3 className="text-gray-500 text-sm mb-1">Remaining Budget</h3>
          <p className="text-2xl font-bold text-blue-600">
            ${metrics.budgetRemaining}
          </p>
        </div>
        <div className="p-4 rounded-lg border">
          <h3 className="text-gray-500 text-sm mb-1">Budget Used</h3>
          <p className="text-2xl font-bold">{metrics.budgetUsedPercentage}%</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className={`h-2 rounded-full ${
                metrics.budgetUsedPercentage > 90
                  ? "bg-red-500"
                  : "bg-green-500"
              }`}
              style={{ width: `${metrics.budgetUsedPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="p-6 rounded-lg border mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Expense Breakdown</h2>
              <div className="flex space-x-2">
                <select
                  value={timeFrame}
                  onChange={(e) => setTimeFrame(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
                <select
                  value={costBreakdown}
                  onChange={(e) => setCostBreakdown(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="category">By Category</option>
                  <option value="meal">By Meal Type</option>
                </select>
              </div>
            </div>

            <div className="h-64 flex">
              {/* This would be a real chart in a production app */}
              <div className="w-full flex items-end space-x-4 pt-8">
                {mockCategoryExpenses.map((item) => (
                  <div
                    key={item.category}
                    className="flex flex-col items-center flex-1"
                  >
                    <div
                      className="bg-blue-500 w-full rounded-t-md"
                      style={{ height: `${item.percentage * 2}px` }}
                    ></div>
                    <p className="text-xs mt-2 font-medium truncate w-full text-center">
                      {item.category}
                    </p>
                    <p className="text-xs text-gray-500">
                      ${item.amount.toFixed(0)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Expense Trends</h2>
            <div className="h-64 flex">
              {/* This would be a real chart in a production app */}
              <div className="w-full flex items-end space-x-8 pt-8">
                {mockTimeSeriesData.map((item) => (
                  <div
                    key={item.week}
                    className="flex flex-col items-center flex-1"
                  >
                    <div
                      className="bg-green-500 w-full rounded-t-md"
                      style={{ height: `${item.amount / 2}px` }}
                    ></div>
                    <p className="text-xs mt-2 font-medium">{item.week}</p>
                    <p className="text-xs text-gray-500">
                      ${item.amount.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="p-6 rounded-lg border mb-6">
            <h2 className="text-xl font-semibold mb-4">Meal Cost Insights</h2>

            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-500">
                Average Cost Per Meal
              </h3>
              <p className="text-2xl font-bold">${metrics.averageMealCost}</p>
            </div>

            <div className="space-y-4">
              <div className="bg-secondary/50 p-3 rounded-md">
                <h4 className="font-medium text-sm">
                  Most Cost-Efficient Meal
                </h4>
                <p className="text-gray-700">{leastExpensiveMeal.name}</p>
                <p className="font-bold">
                  ${leastExpensiveMeal.cost.toFixed(2)}
                </p>
              </div>

              <div className="bg-primary/50 p-3 rounded-md">
                <h4 className="font-medium text-sm">Most Expensive Meal</h4>
                <p className="text-gray-700">{mostExpensiveMeal.name}</p>
                <p className="font-bold">
                  ${mostExpensiveMeal.cost.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border flex flex-col">
            <h2 className="text-lg font-semibold mb-3">
              Budget Optimization Tips
            </h2>

            <div className="space-y-3 flex-grow">
              <div className="flex items-start">
                <BarChart className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <p className="text-sm">
                  Consider buying proteins in bulk to save 15-20%
                </p>
              </div>

              <div className="flex items-start">
                <BarChart className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <p className="text-sm">
                  Seasonal vegetables are typically 30% cheaper
                </p>
              </div>

              <div className="flex items-start">
                <BarChart className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <p className="text-sm">
                  Meal prepping can reduce your weekly food cost by up to 25%
                </p>
              </div>

              <div className="flex items-start">
                <BarChart className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <p className="text-sm">
                  Consider plant-based protein alternatives to save on costs
                </p>
              </div>
            </div>

            <div className="mt-11 pt-4">
              <Button className="px-4 py-2 w-full">
                Generate Savings Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
