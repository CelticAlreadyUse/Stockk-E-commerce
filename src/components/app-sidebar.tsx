import * as React from "react"
import {
  Users,
  Frame,
  Map,
  PieChart,
  Settings2,
  ShoppingBag,
  ShoppingCart
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

const data = {
  user: {
    name: "user",
    email: "useremail@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "product",
      url: "/",
      icon: ShoppingBag,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
      ],
    },
    {
      title: "Seller",
      url: "/warehouses",
      icon: Users,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Cart",
      url: "/cart/1",
      icon: ShoppingCart,
    
      items: [
        {
          title: "Card List",
          url: "#",
        }
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar  variant="sidebar" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className="flex items-center justify-center rounded-lg  text-sidebar-primary-foreground">
                <img className="rounded-full" width={50} height={50} src="/images/WhatsApp Image 2025-02-05 at 09.20.09.jpeg" alt="logo" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate md:text-black text-white font-semibold">Gondal-Group</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="text-white bg-black/40 md:text-black md:bg-white">
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  )
}
