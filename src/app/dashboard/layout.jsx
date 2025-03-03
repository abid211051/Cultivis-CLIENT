import "@/app/globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { isvalid } from "@/app/api/auth/sessionCheck";
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
  const session = await isvalid();
  return (
    <div className={`antialiased`}>
      <SidebarProvider>
        <AppSidebar userdata={session.user} />
        <SidebarInset className="lg:h-screen bg-[#b2bccd] flex flex-col">
          <header className="lg:h-[5%] h-[40px] flex items-center">
            <SidebarTrigger className="ml-2 2xl:hidden" />
          </header>
          <div className="lg:h-[95%] py-3 xl:py-5 xl:pr-5 xl:pl-3 lg:pr-3 lg:pl-1 p-2">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
