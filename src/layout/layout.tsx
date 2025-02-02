import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Outlet } from "react-router-dom"
import { Toaster } from "@/components/ui/toaster"
export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger size={"lg"}/>
        <Outlet/>
        <Toaster/>
      </main>
    </SidebarProvider>
  )
}
