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
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Abed",
    email: "abed@gmail.com",
    avatar: "/CultiVis.png",
  },
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
  ],
  projects: [
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
      <SidebarHeader className="bg-[#30324b] text-white ">
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="bg-[#30324b] text-white border-b-2">
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter className="bg-[#30324b] text-white">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
