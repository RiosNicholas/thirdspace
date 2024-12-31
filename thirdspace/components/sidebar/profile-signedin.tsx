import Link from "next/link";

import { User, Settings, LogOut } from "lucide-react";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from "@/components/ui/sidebar"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProfileSidebarSignedInProps {
  username: string;
  imageUrl?: string;
}

const ProfileSidebarSignedIn = ({ username, imageUrl }: ProfileSidebarSignedInProps) => {
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

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Account</SidebarGroupLabel>
      <SidebarGroupContent>  
        <div className="flex items-center justify-center">
          <Avatar className="mb-2">
            <AvatarImage src={imageUrl || "https://github.com/shadcn.png"} />
            <AvatarFallback>{username}</AvatarFallback>
          </Avatar>
        </div>
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