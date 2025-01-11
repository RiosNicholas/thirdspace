"use client"
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { useEffect} from "react";



export default function HomePage() {
  const {isLoaded, isSignedIn} = useUser()

  useEffect(() => {
    const syncUser = async() => {
      if (isSignedIn) {
        try {
          const response = fetch('api/sync-user', {method: "POST"});
          if (!response){
            console.error("Failed to sync user")
          }
        } catch (error) {
          console.log("Error syncing user")
        }
      }
    }
    if (isLoaded) {
      syncUser();
    }
  }, [isLoaded, isSignedIn])
  return (
    <div>
      <SignedIn>
        <p>Welcome Back! Start Exploring</p>
      </SignedIn>

      <SignedOut>
        <p>Welcome to Third Space! Please LogIn </p>
      </SignedOut>
    </div>
  );
}
