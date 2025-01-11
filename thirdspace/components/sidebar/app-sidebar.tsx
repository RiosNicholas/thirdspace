"use client"

import Link from "next/link"
import { SignedIn,SignedOut, useUser } from "@clerk/nextjs"
import { Calendar, Home, BookmarkPlus, Telescope } from "lucide-react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from "@/components/ui/sidebar"
import ProfileSidebarSignedIn from "./profile-signedin";
import ProfileSidebar from "./profile-sidebar";

const username = "username";

const appItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Add Space",
    url: "/add-space",
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

  const {user} = useUser();
  return (
    <Sidebar>
      <SidebarContent>
        <SignedIn>
          <ProfileSidebar 
            signedIn={true}
            username={user?.username || user?.firstName || "Guest"}
          />
        </SignedIn>
        <SignedOut>
         <ProfileSidebar signedIn={false} />
        </SignedOut>
        
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
