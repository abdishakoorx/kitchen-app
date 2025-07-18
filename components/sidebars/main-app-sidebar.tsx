"use client";

import * as React from "react";
import {
  ChefHat,
  Database,
  DollarSign,
  FileText,
  LifeBuoy,
  Megaphone,
  Settings,
  Users,
} from "lucide-react";
import { MainCommandNavUser } from "../custom/main-nav-user";
import { NavMain } from "../custom/nav-main";
// import { NavProjects } from "@/components/custom/nav-projects";
import { NavSecondary } from "@/components/custom/nav-secondary";
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
      title: "Users",
      url: "/main-command/users",
      icon: Users,
      items: [
        {
          title: "All Users",
          url: "/main-command/users/all",
        },
        {
          title: "User Roles",
          url: "/main-command/users/roles",
        },
        {
          title: "User Activity",
          url: "/main-command/users/activity",
        },
        {
          title: "Banned Users",
          url: "/main-command/users/banned",
        },
      ],
    },
    {
      title: "Content",
      url: "/main-command/content",
      icon: ChefHat,
      items: [
        {
          title: "Recipes",
          url: "/main-command/content/recipes",
        },
        {
          title: "Ingredients",
          url: "/main-command/content/ingredients",
        },
        {
          title: "Categories",
          url: "/main-command/content/categories",
        },
        {
          title: "Featured Content",
          url: "/main-command/content/featured",
        },
      ],
    },
    {
      title: "Community",
      url: "/main-command/community",
      icon: Users,
      items: [
        {
          title: "Forum Moderation",
          url: "/main-command/community/forum-moderation",
        },
        {
          title: "Challenges Management",
          url: "/main-command/community/challenges",
        },
        {
          title: "Expert Content",
          url: "/main-command/community/expert-content",
        },
        {
          title: "Reported Content",
          url: "/main-command/community/reported",
        },
      ],
    },
    {
      title: "Settings",
      url: "/main-command/settings",
      icon: Settings,
      items: [
        {
          title: "App Configuration",
          url: "/main-command/settings/app-config",
        },
        {
          title: "Email Templates",
          url: "/main-command/settings/email-templates",
        },
        {
          title: "API Management",
          url: "/main-command/settings/api-management",
        },
        {
          title: "Backup & Restore",
          url: "/main-command/settings/backup",
        },
      ],
    },
    {
      title: "Nutrition DB",
      url: "/main-command/nutrition",
      icon: Database,
      items: [
        {
          title: "Food Database",
          url: "/main-command/nutrition/food-database",
        },
        {
          title: "Nutritional Values",
          url: "/main-command/nutrition/values",
        },
        {
          title: "Allergen Management",
          url: "/main-command/nutrition/allergens",
        },
        {
          title: "Diet Categories",
          url: "/main-command/nutrition/diet-categories",
        },
      ],
    },
    {
      title: "Financials",
      url: "/main-command/finance",
      icon: DollarSign,
      items: [
        {
          title: "Subscription Plans",
          url: "/main-command/finance/subscriptions",
        },
        {
          title: "Payment History",
          url: "/main-command/finance/payments",
        },
        {
          title: "Revenue Analytics",
          url: "/main-command/finance/revenue",
        },
        {
          title: "Refunds",
          url: "/main-command/finance/refunds",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "System Logs",
      url: "/main-command/logs",
      icon: FileText,
    },
    {
      title: "Support Tickets",
      url: "/main-command/support",
      icon: LifeBuoy,
    },
    {
      title: "Announcements",
      url: "/main-command/announcements",
      icon: Megaphone,
    },
  ],
};

export function MainCommandAppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
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
        <MainCommandNavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
