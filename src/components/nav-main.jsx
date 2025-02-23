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
// for (let item = 0; item < items?.length; item++) {
//   if (items[item]?.url === pathName) {
//     classes[item] = "bg-[#b2bccd] text-black rounded-none";
//     if (item === 0) classes[item + 1] = "bg-white rounded-none rounded-tr-xl";
//     else if (item === items?.length - 1)
//       classes[item - 1] = "bg-white rounded-none rounded-br-xl";
//     else {
//       classes[item - 1] = "bg-white rounded-none rounded-br-xl";
//       classes[item + 1] = "bg-white rounded-none rounded-tr-xl";
//     }
//     item++;
//   } else {
//     classes[item] = "bg-white rounded-none";
//   }
// }
export function NavMain({ items }) {
  const pathName = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[#ffb055] bg-white rounded-none">
        Tabs
      </SidebarGroupLabel>
      <SidebarMenu className="flex flex-col">
        {items?.map((item, i) => (
          <SidebarMenuItem
            key={item?.name}
            className="group/collapsible transition-all"
          >
            <Link href={`${item?.url}`} replace={true}>
              <div
                className={`h-3 w-full bg-white ${
                  item?.url === pathName ? "rounded-br-2xl" : ""
                }`}
              ></div>
              <SidebarMenuButton
                tooltip={item?.name}
                className={`hover:bg-inherit active:bg-inherit ${
                  item?.url === pathName ? "" : "bg-white rounded-none"
                }`}
              >
                {item?.icon && <item.icon />}
                <span>{item?.name}</span>
              </SidebarMenuButton>
              <div
                className={`h-3 w-full bg-white ${
                  item?.url === pathName ? "rounded-tr-2xl" : ""
                } `}
              ></div>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
