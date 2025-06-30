"use client";

import { useState } from "react";
import {
  BadgeCheck,
  ChevronsUpDown,
  LogOut,
  Settings,
  Shield,
  User2,
  Users,
  Database,
  Activity,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { signOut, useSession } from "@/utils/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";

export function MainCommandNavUser() {
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const user = session?.user;
  const { isMobile } = useSidebar();
  const router = useRouter();

  async function onLogout() {
    setIsLoading(true);
    try {
      await signOut({
        fetchOptions: {
          onError(context) {
            toast.error(context.error.message);
          },
          onSuccess: () => {
            router.replace("/");
          },
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  src={user?.image || "/avatar.webp"}
                  alt={user?.name}
                />
                <AvatarFallback className="rounded-lg bg-red-600 text-white">
                  <Shield className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-mono font-bold">
                  {user?.name || "Admin"}
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  Administrator
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <div className="size-6 rounded-full bg-gradient-to-br from-red-500 to-orange-400" />
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-mono font-bold">
                    {user?.name || "Admin"}
                  </span>
                  <span className="truncate text-xs font-mono">
                    {user?.email || "Admin"}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/main-command">
                  <Activity />
                  System Overview
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/main-command/users">
                  <Users />
                  User Management
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/main-command/settings">
                  <Database />
                  System Settings
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/dashboard">
                  <User2 />
                  Switch to User View
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <BadgeCheck />
                Admin Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Settings />
                Admin Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button
                variant="outline"
                className="cursor-pointer w-full bg-red-600 text-white hover:text-white hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={onLogout}
                disabled={isLoading}
              >
                <LogOut className="text-white" />{" "}
                {isLoading ? "Logging out..." : "Logout"}
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
