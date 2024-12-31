// Menu items.
import { User, Settings, LogOut } from "lucide-react";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from "@/components/ui/sidebar"
import ProfileSidebar from "./profile-sidebar";
import Link from "next/link";

const username = "username";

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
];

const ProfileSidebarSignedIn = () => {
  return (
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
  )
}

export default ProfileSidebarSignedIn;