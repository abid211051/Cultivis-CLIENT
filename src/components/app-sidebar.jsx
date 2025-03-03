"use client";

import * as React from "react";
import {
  Bot,
  Home,
  Calendar,
  Newspaper,
  Handshake,
  MessageCircleQuestion,
  Settings,
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
  teams: [
    {
      name: "CultiVis",
      logo: "/CultiVis.png",
      plan: "Startup",
    },
  ],
  navMain: [
    {
      name: "Ask Quo",
      url: "/dashboard/quo",
      icon: Bot,
      isActive: true,
    },
    {
      name: "Home",
      url: "/dashboard",
      icon: Home,
    },
    {
      name: "Tasks",
      url: "/dashboard/task",
      icon: Calendar,
    },
    {
      name: "News",
      url: "/dashboard/news",
      icon: Newspaper,
    },
    {
      name: "Community",
      url: "/dashboard/community",
      icon: Handshake,
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
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar
      collapsible="icon"
      {...props}
      variant="floating"
      className="bg-[#b2bccd]"
    >
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={props?.userdata} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
