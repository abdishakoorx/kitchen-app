"use client";

import { useEffect } from "react";
import { useHeader } from "../../context/header-context";
import React from "react";
import { Card, CardContent } from '@/components/ui/card';
import { 
  ChefHat, 
  ShoppingBag, 
  Users,
  DollarSign,
} from 'lucide-react';


export default function DashboardPage() {
  const { setHeader } = useHeader();
  
  useEffect(() => {
    setHeader?.("Dashboard Overview", "Monitor your kitchen activities at a glance");
    // Clean up on unmount
    return () => setHeader?.();
  }, [setHeader]);

  // Mock data for dashboard
  const quickStats = [
    { title: "Recipes", value: "34", icon: ChefHat, change: "+3", color: "bg-blue-100" },
    { title: "Pantry Items", value: "87", icon: ShoppingBag, change: "-5", color: "bg-green-100" },
    { title: "Budget Used", value: "68%", icon: DollarSign, change: "+2%", color: "bg-yellow-100" },
    { title: "Community Points", value: "215", icon: Users, change: "+18", color: "bg-purple-100" },
  ];

  return (
    <div className="space-y-6">
      {/* Quick Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4 flex items-center gap-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <span className={`text-xs ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};