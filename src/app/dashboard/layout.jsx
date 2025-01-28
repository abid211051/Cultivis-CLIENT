import "@/app/globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export const metadata = {
  title: "Dasboard",
  description: "A helper for better farming and community",
};
export default async function Layout({ children }) {
  return (
    <div className={`antialiased`}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="lg:h-screen bg-[#d9dede] flex flex-col">
          <header className="lg:h-[5%] h-[40px] flex items-center">
            <SidebarTrigger className="ml-2" />
          </header>
          <div className="lg:h-[95%] py-3 xl:py-5 xl:px-5 lg:px-3 px-2">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
