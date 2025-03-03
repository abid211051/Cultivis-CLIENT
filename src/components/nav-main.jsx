"use client";
import { usePathname } from "next/navigation";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function NavMain({ items }) {
  const pathName = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[#ffb055]">Pages</SidebarGroupLabel>
      <SidebarMenu className="flex flex-col gap-2">
        {items.map((item) => (
          <SidebarMenuItem key={item?.name} className="group/collapsible">
            <Link href={item?.url} replace={true}>
              <SidebarMenuButton
                tooltip={item?.name}
                className={`${
                  pathName === item?.url ? "bg-white text-black" : ""
                } rounded-r-none text-base py-5`}
              >
                {item?.icon && <item.icon />}
                <span>{item?.name}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
