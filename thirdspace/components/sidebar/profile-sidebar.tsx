import ProfileSidebarSignedIn from "./profile-signedin";
import ProfileSidebarSignedOut from "./profile-signedout";

interface ProfileSidebarProps {
  signedIn: boolean;
  username?: string;
}

const ProfileSidebar = ({ signedIn, username }: ProfileSidebarProps) => {
  return (
    signedIn ? (
      <ProfileSidebarSignedIn username={username || "Guest"} />
    ) : (
      <ProfileSidebarSignedOut />
    )
  );
}

export default ProfileSidebar;