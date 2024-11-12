import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { NavigationMenu } from "@radix-ui/react-navigation-menu"
import NavBar from "@/components/Navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <NavBar/>
        {children}
      </main>
    </SidebarProvider>
  )
}
