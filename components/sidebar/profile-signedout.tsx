'use client'
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from "@/components/ui/sidebar"
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useRouter } from 'next/navigation'

const ProfileSidebarSignedOut = () => {
  const router = useRouter()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Account</SidebarGroupLabel>
      <SidebarGroupContent>  
        <div className="flex flex-col items-center space-y-2">
          <Avatar className="">
            <AvatarImage src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fas1.ftcdn.net%2Fv2%2Fjpg%2F03%2F53%2F11%2F00%2F1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg&f=1&nofb=1&ipt=027230de5518ac275bdefe3fd043319ce40682d02cac9b6391d9ccdeee992b75&ipo=images"} />
            <AvatarFallback>Guest</AvatarFallback>
          </Avatar>

          <Button variant="outline" className="text-sm w-3/4" onClick={() => router.push('/auth/login')}>Log In</Button>
          <Button variant="outline" className="text-sm w-3/4" onClick={() => router.push('/auth/sign-up')}>Sign Up</Button>
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export default ProfileSidebarSignedOut;

