"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Home, Slash, Menu as MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menu = [
    { id: "dashboard", label: "Dashboard", href: "/dashboard", Icon: Home },
  ];

  const segments = pathname?.split("/").filter(Boolean) ?? ["dashboard"];

  return (
    <SidebarProvider>
      <div className="flex max-h-screen overflow-hidden w-full bg text-foreground">
        <div className="flex flex-col overflow-hidden max-h-screen flex-1 bg-background text-foreground">
          <main className="p-4 overflow-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
