"use client";
import { ChevronRight, type LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useState, useEffect } from "react";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathname = usePathname();
  const [openItems, setOpenItems] = useState<string[]>([]);

  // Set initial open state based on current path
  useEffect(() => {
    const initialOpenItems = items
      .filter(
        (item) =>
          pathname === item.url ||
          pathname.startsWith(item.url) ||
          item.items?.some((sub) => pathname === sub.url)
      )
      .map((item) => item.title);

    setOpenItems(initialOpenItems);
  }, [pathname, items]);

  const toggleItem = (title: string) => {
    setOpenItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <SidebarGroup>
      <SidebarMenu className="space-y-1 mt-4">
        {items.map((item) => {
          const isParentActive =
            pathname === item.url ||
            item.items?.some((sub) => pathname === sub.url);
          const isOpen = openItems.includes(item.title);

          return (
            <Collapsible
              key={item.title}
              asChild
              open={isOpen}
              onOpenChange={() => item.items?.length && toggleItem(item.title)}
            >
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`transition-all duration-200 hover:bg-primary/10 rounded-md px-3 py-2 ${
                    isParentActive
                      ? "bg-primary/15 text-primary font-medium"
                      : "text-gray-700 hover:text-primary"
                  }`}
                  tooltip={item.title}
                >
                  <Link href={item.url} className="flex items-center">
                    <item.icon
                      className={`h-5 w-5 mr-3 ${
                        isParentActive ? "text-primary" : "text-gray-500"
                      }`}
                    />
                    <span className="text-base font-medium">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuAction className="data-[state=open]:rotate-90 cursor-pointer text-gray-500 hover:text-primary mr-1">
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                      </SidebarMenuAction>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub className="ml-8 mt-1 space-y-1">
                        {item.items.map((subItem) => {
                          const isSubActive = pathname === subItem.url;
                          return (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                className={`px-3 py-1.5 rounded-md transition-all duration-200 hover:bg-secondary/10 ${
                                  isSubActive
                                    ? "bg-secondary/15 text-secondary font-medium"
                                    : "text-gray-600 hover:text-secondary"
                                }`}
                              >
                                <Link href={subItem.url}>
                                  <span className="text-sm">
                                    {subItem.title}
                                  </span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          );
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </>
                ) : null}
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
