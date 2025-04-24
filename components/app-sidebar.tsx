"use client";

import * as React from "react";
import {
  ChefHat,
  Flame,
  LifeBuoy,
  PieChart,
  Send,
  ShoppingBag,
  Users,
} from "lucide-react";
import { NavMain } from "@/components/custom/nav-main";
// import { NavProjects } from "@/components/custom/nav-projects";
import { NavSecondary } from "@/components/custom/nav-secondary";
import { NavUser } from "@/components/custom/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const data = {
  navMain: [
    {
      title: "Smart Cooking",
      url: "/dashboard/smart-cooking",
      icon: Flame,
      isActive: true,
      items: [
        {
          title: "Recipe Builder",
          url: "/dashboard/smart-cooking/recipe-builder",
        },
        {
          title: "Meal Planning",
          url: "/dashboard/smart-cooking/meal-planning",
        },
        {
          title: "Shopping List",
          url: "/dashboard/smart-cooking/shopping-list",
        },
        {
          title: "Favorites",
          url: "/dashboard/smart-cooking/favorites",
        },
      ],
    },
    {
      title: "Pantry Manager",
      url: "/dashboard/pantry",
      icon: ShoppingBag,
      items: [
        {
          title: "Dry Goods",
          url: "/dashboard/pantry/dry-goods",
        },
        {
          title: "Refrigerated",
          url: "/dashboard/pantry/refrigerated",
        },
        {
          title: "Freezer",
          url: "/dashboard/pantry/freezer",
        },
        {
          title: "Spices",
          url: "/dashboard/pantry/spices",
        },
      ],
    },
    {
      title: "Nutrition & Budget",
      url: "#",
      icon: PieChart,
      items: [
        {
          title: "Macro Calculator",
          url: "#",
        },
        {
          title: "Cost Analysis",
          url: "#",
        },
        {
          title: "Budget Planner",
          url: "#",
        },
        {
          title: "Nutrition Reports",
          url: "#",
        },
      ],
    },
    {
      title: "Community",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Cooking Challenges",
          url: "#",
        },
        {
          title: "Discussion Forum",
          url: "#",
        },
        {
          title: "Expert Tips",
          url: "#",
        },
        {
          title: "Learning Center",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Help Center",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Send Feedback",
      url: "#",
      icon: Send,
    },
  ],
  // projects: [
  //   // {
  //   //   name: "Weekly Plan",
  //   //   url: "#",
  //   //   icon: Calendar,
  //   // },
  //   // {
  //   //   name: "Shopping Mode",
  //   //   url: "#",
  //   //   icon: ShoppingCart,
  //   // },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard" className="hover:bg-transparent">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <ChefHat className="h-8 w-8" />
                </div>
                <div className="text-left text-sm leading-tight">
                  <span className="text-xl font-bold">Bottleyx</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
