import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs"
import { User, Settings, LogOut } from "lucide-react";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from "@/components/ui/sidebar"

interface ProfileSidebarSignedInProps {
  username: string;
}

const ProfileSidebarSignedIn = ({ username }: ProfileSidebarSignedInProps) => {

  const accountItems = [
    {
      title: "Profile",
      url: `/user/${username}`,
      icon: User,
    },
    {
      title: "Settings",
      url: `/user/${username}/settings`,
      icon: Settings,
    },
  ];

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Account</SidebarGroupLabel>
      <SidebarGroupContent>  
        <div className="flex items-center justify-center">
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  // Controls the avatar container size
                  userButtonAvatarBox: "w-12 h-12",
        
                  // Controls the actual <img> (avatar) itself
                  userButtonAvatarImage: "w-full h-full rounded-lg",
        
                  // If you need to adjust the button trigger area
                  userButtonTrigger: "p-0 w-12 h-12",
                },
              }}
            />
          </SignedIn>
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
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export default ProfileSidebarSignedIn;