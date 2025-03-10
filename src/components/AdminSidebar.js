"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, Home, Newspaper, Users, Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function AdminSidebar() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Dashboard",
      icon: Home,
      active: pathname === "/",
    },
    {
      href: "/events",
      label: "Events",
      icon: Calendar,
      active: pathname === "/events" || pathname.startsWith("/events/"),
    },
    {
      href: "/news",
      label: "News",
      icon: Newspaper,
      active: pathname === "/news" || pathname.startsWith("/news/"),
    },
    {
      href: "/subscribers",
      label: "Subscribers",
      icon: Users,
      active: pathname === "/subscribers",
    },
  ]

  const SidebarContent = (
    <div className="space-y-4 py-4">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Admin Dashboard</h2>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                route.active ? "bg-accent text-accent-foreground" : "transparent",
              )}
            >
              <route.icon className="mr-2 h-4 w-4" />
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      <aside className="hidden laptop:flex laptop:w-64 laptop:flex-col laptop:fixed laptop:inset-y-0 z-[80] bg-background border-r">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto">{SidebarContent}</div>
      </aside>
      <div className="laptop:pl-64 flex flex-col">
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 laptop:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="laptop:hidden ml-4 mt-4">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open sidebar</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] tablet:w-[280px]">
              {SidebarContent}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  )
}