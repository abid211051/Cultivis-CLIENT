"use client";
import * as React from "react";
import {
  BrainCircuit,
  Home,
  ClipboardList,
  Wallet2,
  Users,
  Rss,
  MessageCircleQuestion,
  Map,
  Settings2,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  teams: [
    {
      name: "Cultivis",
      logo: "/CultiVis.png",
      plan: "System",
    },
  ],
  navMain: [
    {
      name: "Ask Quo",
      url: "/dashboard/quo",
      icon: BrainCircuit,
    },
    {
      name: "Home",
      url: "/dashboard",
      icon: Home,
    },
    {
      name: "My Field",
      url: "/dashboard/myfield",
      icon: Map,
    },
    {
      name: "Task",
      url: "/dashboard/task",
      icon: ClipboardList,
    },
    {
      name: "Expense",
      url: "/dashboard/expense",
      icon: Wallet2,
    },
    {
      name: "Community",
      url: "/dashboard/community",
      icon: Users,
    },
    {
      name: "News",
      url: "/dashboard/news",
      icon: Rss,
    },
    {
      name: "Feedback",
      url: "#",
      icon: MessageCircleQuestion,
    },
    {
      name: "Settings",
      url: "#",
      icon: Settings2,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="bg-white text-black">
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="bg-[#b2bccd] text-black border-b-2 transition-all">
        <NavMain items={data.navMain} />
        <div className="flex-1 bg-white">s</div>
      </SidebarContent>
      <SidebarFooter className="bg-white text-black">
        <NavUser user={props.userdata} />
      </SidebarFooter>
    </Sidebar>
  );
}
