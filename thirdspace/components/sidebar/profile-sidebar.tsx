import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProfileSidebarProps {
  username: string;
  imageUrl?: string;
}

const ProfileSidebar = ({ username, imageUrl }: ProfileSidebarProps) => {
  return (
    <div className="flex items-center justify-center">
      <Avatar className="mb-2">
        <AvatarImage src={imageUrl || "https://github.com/shadcn.png"} />
        <AvatarFallback>{username}</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default ProfileSidebar;