"use client"

import Link from "next/link"

import { User, LogOut, Calendar, Home, BookmarkPlus, Telescope, Settings } from "lucide-react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from "@/components/ui/sidebar"
import ProfileSidebar from "./profile-sidebar";
import { Button } from "../ui/button";


const username = "username";

// Menu items.
const accountItems = [
  {
    title: "Profile",
    url: `/user/${username}`,
    icon: User,
  }, 
  {
    title: "Settings",
    url: `/user/username/settings`,
    icon: Settings,
  },
]
const appItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Add Location",
    url: "/bookmark",
    icon: BookmarkPlus,
  },
  {
    title: "Explore",
    url: "/explore",
    icon: Telescope,
  },
  {
    title: "Events",
    url: "/events",
    icon: Calendar,
  },

]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>  
            <ProfileSidebar username={username} />
            <SidebarMenu>
              {accountItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <LogOut />
                  <span>Log Out</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {appItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
