"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lightbulb, ShoppingCart, Salad, Wallet, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useHeader } from "@/contexts/header-context";

export default function ExpertTipsPage() {
  const { setHeader } = useHeader();

  useEffect(() => {
    setHeader?.(
      "Expert Tips",
      "Master the art of cooking with our expert tips and tricks."
    );
    // Clean up on unmount
    return () => setHeader?.();
  }, [setHeader]);
  const [activeTab, setActiveTab] = useState("smart-cooking");

  return (
    <div className="container">
      <Tabs defaultValue="smart-cooking">
        <TabsList className="grid grid-cols-4 mb-24 w-full gap-4">
          {[
            { value: "smart-cooking", icon: Lightbulb, label: "Smart Cooking" },
            {
              value: "pantry-management",
              icon: ShoppingCart,
              label: "Pantry Mgt.",
            },
            { value: "nutrition", icon: Salad, label: "Nutrition" },
            { value: "budget", icon: Wallet, label: "Budget" },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.value;

            return (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={cn(
                  "relative flex flex-col items-center justify-center py-6 border rounded-lg w-full transition-all",
                  "hover:border-secondary",
                  isActive ? "border-secondary border-2" : "border"
                )}
              >
                {isActive && (
                  <Check className="absolute top-2 right-2 text-secondary w-4 h-4" />
                )}
                <Icon className="mb-1 w-6 h-6" />
                <span className="text-xs md:text-sm font-medium">
                  {tab.label}
                </span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        <TabsContent value="smart-cooking">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Voice-Guided Cooking</CardTitle>
                <CardDescription>
                  Cook hands-free with voice assistance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Use voice commands to navigate through recipes step-by-step
                  without touching your screen. Say &quot;Next step&quot; or
                  &quot;Repeat&quot; to control recipe flow while your hands are
                  busy.
                </p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>Enable voice commands in Settings → Accessibility</li>
                  <li>
                    Use &quot;Timer for X minutes&quot; to set timers hands-free
                  </li>
                  <li>
                    Ask &quot;What temperature for chicken?&quot; for quick
                    answers
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recipe Customization</CardTitle>
                <CardDescription>
                  Personalize any recipe to your preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our AI can adjust any recipe to match your dietary needs,
                  available ingredients, or cooking equipment.
                </p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>
                    Use &quot;Substitute&quot; feature to swap ingredients you
                    don&rsquot;t have
                  </li>
                  <li>Scale recipes up or down with perfect proportions</li>
                  <li>
                    Convert between cooking methods (stovetop to slow cooker)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Smart Cooking Techniques</CardTitle>
                <CardDescription>
                  Learn professional methods as you cook
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Access technique tutorials right when you need them. Our AI
                  recognizes when you might need help with a specific technique.
                </p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>Tap on highlighted terms for video demonstrations</li>
                  <li>Get real-time feedback on cooking temperatures</li>
                  <li>Learn time-saving prep methods from professionals</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recipe Discovery</CardTitle>
                <CardDescription>
                  Find perfect recipes for your situation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our AI learns your taste preferences and cooking style to
                  suggest recipes you&rsquot;ll love.
                </p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>Use filters for time, difficulty, and equipment</li>
                  <li>Save recipes to collections for easy access</li>
                  <li>Get personalized weekly recipe suggestions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="pantry-management">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Tracking</CardTitle>
                <CardDescription>
                  Never wonder what&rsquot;s in your pantry again
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Maintain an accurate inventory of everything in your kitchen
                  with minimal effort.
                </p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>Scan receipts to automatically add purchased items</li>
                  <li>
                    Use voice command &quot;I used the last of...&quot; to
                    update
                  </li>
                  <li>Get alerts when staples are running low</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Expiration Management</CardTitle>
                <CardDescription>
                  Reduce food waste significantly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Track expiration dates and get timely reminders to use
                  ingredients before they spoil.
                </p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>Scan barcodes to automatically import dates</li>
                  <li>
                    Get &quot;Use soon&quot; recipe suggestions for expiring
                    items
                  </li>
                  <li>
                    Use the &quot;Freshness guide&quot; for optimal storage tips
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Smart Shopping Lists</CardTitle>
                <CardDescription>Shopping made effortless</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Generate intelligent shopping lists based on planned meals and
                  pantry inventory.
                </p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>Lists automatically organized by store layout</li>
                  <li>Price comparison across local stores</li>
                  <li>One-click add ingredients from any recipe</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ingredient Optimization</CardTitle>
                <CardDescription>
                  Make the most of what you have
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Find recipes that use ingredients you already have to minimize
                  shopping trips.
                </p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>Use &quot;Cook with what I have&quot; feature</li>
                  <li>Learn proper substitutions for missing ingredients</li>
                  <li>Get creative &quot;kitchen sink&quot; recipe ideas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="nutrition">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Nutritional Analysis</CardTitle>
                <CardDescription>
                  Know exactly what&rsquo;s in your food
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Get comprehensive nutritional information for every recipe and
                  meal you prepare.
                </p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>View macronutrient breakdowns with visual charts</li>
                  <li>Track micronutrients often missed in standard apps</li>
                  <li>Compare nutritional value of ingredient substitutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dietary Goal Setting</CardTitle>
                <CardDescription>
                  Align your cooking with your health goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Set custom nutrition targets and get recipes tailored to help
                  you meet them.
                </p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>Create profiles for different family members</li>
                  <li>Receive weekly progress reports</li>
                  <li>Get suggestions to balance nutrients over the day</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Special Diet Support</CardTitle>
                <CardDescription>
                  Effortless adherence to dietary requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Complete support for various dietary needs with verified
                  recipes and substitutions.
                </p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>Filter for keto, plant-based, gluten-free, and more</li>
                  <li>Auto-check pantry items for allergen conflicts</li>
                  <li>Convert any recipe to meet dietary restrictions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Portion Control</CardTitle>
                <CardDescription>Perfect portions every time</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Take the guesswork out of serving sizes with visual guides and
                  smart calculations.
                </p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>AR portion visualization tool</li>
                  <li>Automatic meal planning with balanced portions</li>
                  <li>Learn to estimate portions without measuring tools</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="budget">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Cost Per Meal Tracking</CardTitle>
                <CardDescription>Understand your food spending</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Track the exact cost of every meal you prepare based on your
                  local prices.
                </p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>Automatically calculate cost per serving</li>
                  <li>Compare homemade vs. takeout expenses</li>
                  <li>Set budget goals and receive progress updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Budget-Friendly Recipes</CardTitle>
                <CardDescription>
                  Delicious meals that don&rsquo;t break the bank
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Discover recipes specifically optimized for cost without
                  sacrificing flavor or nutrition.
                </p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>Browse the &quot;Under $10 Meals&quot; collection</li>
                  <li>Find recipes using seasonal (cheaper) ingredients</li>
                  <li>Get cost-cutting substitution suggestions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sale & Coupon Integration</CardTitle>
                <CardDescription>
                  Never miss a saving opportunity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Automatically find the best deals on the ingredients you need
                  for your meals.
                </p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>Connect to local store loyalty programs</li>
                  <li>Get notified when staples go on sale</li>
                  <li>Recipe suggestions based on weekly specials</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bulk Preparation Strategies</CardTitle>
                <CardDescription>
                  Save money through smart meal prep
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Learn techniques for efficient batch cooking that maximize
                  ingredients and minimize waste.
                </p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>Generate multi-meal prep plans</li>
                  <li>Calculate bulk buying savings</li>
                  <li>Access freezer-friendly recipe collections</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 rounded-lg p-6 ">
        <h2 className="text-2xl font-bold mb-4">Community Tips</h2>
        <p className="mb-4">
          Join the conversation! Our community members share their best advice
          and experiences.
        </p>

        <div className="grid gap-4">
          <div className="p-4 rounded border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center text-blue-600 font-bold">
                JD
              </div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-500">Smart Cooking Expert</p>
              </div>
            </div>
            <p>
              &quot;I use the voice command feature while making complex dishes
              - it`s like having a sous chef! Try saying &lsquo;What`s
              next?&rsquo; when your hands are messy.&quot;
            </p>
          </div>

          <div className="p-4 rounded border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-green-100 h-10 w-10 rounded-full flex items-center justify-center text-green-600 font-bold">
                AS
              </div>
              <div>
                <p className="font-medium">Amanda Smith</p>
                <p className="text-sm text-gray-500">Budget Meal Planner</p>
              </div>
            </div>
            <p>
              &qout;Buying frozen vegetables has saved me so much money while
              keeping meals nutritious. I scan all my receipts to track exactly
              where my food budget goes each month.&quot;
            </p>
          </div>
        </div>

        <Button className="mt-6 px-4 py-2">Share Your Tip</Button>
      </div>
    </div>
  );
}
