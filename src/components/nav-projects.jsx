"use client";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavProjects({ projects }) {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel className="text-[#ffb055]">Tools</SidebarGroupLabel>
        <SidebarMenu className="flex flex-col gap-2">
          {projects.map((item) => (
            <SidebarMenuItem key={item.name} className="group/collapsible">
              <SidebarMenuButton tooltip={item.name}>
                {item.icon && <item.icon />}
                <span>{item.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
}
