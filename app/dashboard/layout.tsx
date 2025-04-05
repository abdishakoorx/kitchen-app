// app/dashboard/layout.tsx
import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { HeaderSection } from "@/components/custom/header-section";
import { HeaderProvider } from "../../context/header-context";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HeaderProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="border-b">
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4 w-full">
              <SidebarTrigger className="-ml-1 text-gray-800" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <HeaderSection />
            </div>
          </header>
          <main className="flex-1 overflow-auto p-4">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </HeaderProvider>
  );
}