"use client";

import React from "react";
import { PantryProvider } from "@/contexts/pantry-context";
import { HeaderProvider } from "@/contexts/header-context";
import { SidebarProvider } from "@/components/ui/sidebar";

export function DashboardProviders({ children }: { children: React.ReactNode }) {
  return (
    <HeaderProvider>
      <SidebarProvider>
        <PantryProvider>{children}</PantryProvider>
      </SidebarProvider>
    </HeaderProvider>
  );
}
