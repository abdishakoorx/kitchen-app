"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useHeader } from "@/contexts/header-context";
import { ArrowRight, Lightbulb, MessageSquare } from "lucide-react";

export default function LearningCenter() {
  const { setHeader } = useHeader();

  useEffect(() => {
    setHeader?.(
      "Learning Center",
      "Stay updated on new features and improvements."
    );
    // Clean up on unmount
    return () => setHeader?.();
  }, [setHeader]);
  return (
    <main className="container">
      {/* How to Use */}
      <section className="space-y-6">
        <div className="space-y-4 pl-2">
          <div className="p-6 rounded-lg border border-slate-200">
            <h3 className="text-xl font-medium text-slate-700 mb-3">
              Getting Started
            </h3>
            <ol className="space-y-3 text-slate-600">
              <li className="flex gap-2">
                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 font-medium text-sm">
                  1
                </span>
                <span>
                  Create your profile and set your dietary preferences
                </span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 font-medium text-sm">
                  2
                </span>
                <span>
                  Add ingredients you have in your kitchen to your inventory
                </span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 font-medium text-sm">
                  3
                </span>
                <span>
                  Ask Bottleyx for recipe suggestions or meal planning
                </span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 font-medium text-sm">
                  4
                </span>
                <span>
                  Follow step-by-step cooking instructions with voice guidance
                </span>
              </li>
            </ol>
          </div>

          <div className="p-6 rounded-lg border border-slate-200">
            <h3 className="text-xl font-medium text-slate-700 mb-3">
              Pro Tips
            </h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex gap-2 items-start">
                <span className="flex-shrink-0 text-emerald-500 mt-1">•</span>
                <span>
                  Use voice commands while cooking to keep your hands free
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="flex-shrink-0 text-emerald-500 mt-1">•</span>
                <span>
                  Set up weekly meal planning reminders for consistent healthy
                  eating
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="flex-shrink-0 text-emerald-500 mt-1">•</span>
                <span>
                  Connect with smart kitchen appliances for temperature
                  monitoring
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="space-y-6 mt-8">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-6 w-6 text-amber-500" />
          <h2 className="text-2xl font-semibold text-slate-800">Coming Soon</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 pl-2">
          <div className="p-5 rounded-lg border border-slate-200 transition-shadow">
            <h3 className="text-lg font-medium text-slate-700 mb-2">
              Nutritional Analysis
            </h3>
            <p className="text-slate-600">
              Detailed breakdown of macros and micronutrients for all recipes
            </p>
          </div>

          <div className="p-5 rounded-lg border border-slate-200 transition-shadow">
            <h3 className="text-lg font-medium text-slate-700 mb-2">
              Community Recipe Sharing
            </h3>
            <p className="text-slate-600">
              Share and discover recipes from other Bottleyx users
            </p>
          </div>

          <div className="p-5 rounded-lg border border-slate-200 transition-shadow">
            <h3 className="text-lg font-medium text-slate-700 mb-2">
              Smart Shopping Lists
            </h3>
            <p className="text-slate-600">
              AI-generated shopping lists based on your meal plans
            </p>
          </div>

          <div className="p-5 rounded-lg border border-slate-200 transition-shadow">
            <h3 className="text-lg font-medium text-slate-700 mb-2">
              Seasonal Recommendations
            </h3>
            <p className="text-slate-600">
              Recipe suggestions based on seasonal ingredients
            </p>
          </div>
        </div>

        <div className="pl-2">
          <p className="text-sm text-slate-500 italic">
            Feature release dates will be announced in our monthly newsletter
          </p>
        </div>
      </section>

      {/* Feedback */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-6 w-6 text-blue-500" />
          <h2 className="text-2xl font-semibold text-slate-800">
            We Value Your Feedback
          </h2>
        </div>

        <div className="p-6 rounded-lg border border-slate-200 pl-2">
          <p className="text-slate-600 mb-4">
            Our development team reads every piece of feedback. Your insights
            help us improve Bottleyx and build features that matter to you.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
            <p className="text-blue-700 italic">
              &quot;Thanks to user feedback, we&rsquot;ve improved voice
              recognition for noisy kitchen environments and added support for
              more dietary restrictions.&quot;
            </p>
            <p className="text-blue-600 font-medium mt-2">
              — The Bottleyx Dev Team
            </p>
          </div>

          <div className="flex justify-center">
            <Button className="px-6 py-3">
              Share Your Thoughts
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
