import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Outlet } from "react-router-dom"
import { Toaster } from "@/components/ui/toaster"
export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <div className="fixed md:block z-20 mt-2 ">
        <SidebarTrigger variant={"ghost"} className="bg-black rounded-full w-fit text-white" />
        </div>
        <Outlet/>
        <Toaster/>
      </main>
    </SidebarProvider>
  )
}
