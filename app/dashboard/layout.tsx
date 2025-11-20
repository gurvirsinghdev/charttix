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
      <div className="flex dark h-screen w-full bg-background text-foreground">
        <Sidebar className="bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
          <SidebarContent>
            <div className="flex items-center justify-between px-3 py-4 border-b border-sidebar-border bg-sidebar">
              <span className="font-semibold text-sm">Charttix</span>
              <div aria-hidden />
            </div>

            <nav className="p-2">
              <SidebarMenu>
                {menu.map(({ id, label, href, Icon }) => {
                  const active = pathname === href;

                  return (
                    <SidebarMenuItem key={id}>
                      <SidebarMenuButton
                        asChild
                        className={cn(
                          "py-5",
                          active
                            ? "bg-sidebar-accent text-sidebar-accent-foreground"
                            : "hover:bg-sidebar-accent/20"
                        )}
                      >
                        <Link
                          href={href}
                          className="flex items-center gap-3 w-full"
                        >
                          <Icon className="h-4 w-4" />
                          <span>{label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </nav>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex flex-col pr-4 flex-1 bg-background text-foreground">
          <header className="flex items-center justify-between px-3 py-3 border-b border-border">
            <div className="flex items-center gap-4">
              <SidebarTrigger
                className="inline-flex items-center justify-center rounded-md p-2 hover:bg-sidebar-accent/20 focus:outline-none"
                aria-label="Toggle sidebar"
              >
                <MenuIcon className="h-5 w-5" />
              </SidebarTrigger>
            </div>

            <Breadcrumb>
              <BreadcrumbList>
                {segments.map((seg, index) => {
                  const href = "/" + segments.slice(0, index + 1).join("/");
                  const isLast = index === segments.length - 1;

                  return (
                    <React.Fragment key={href}>
                      <BreadcrumbItem>
                        <BreadcrumbLink
                          href={href}
                          className={
                            isLast
                              ? "text-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          }
                        >
                          {seg.charAt(0).toUpperCase() + seg.slice(1)}
                        </BreadcrumbLink>
                      </BreadcrumbItem>

                      {!isLast && (
                        <BreadcrumbSeparator>
                          <Slash className="h-3 w-3 text-muted-foreground" />
                        </BreadcrumbSeparator>
                      )}
                    </React.Fragment>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </header>

          <main className="p-4">
            <p className="text-sm text-muted-foreground">{children}</p>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
