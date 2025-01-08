// app/page.tsx
"use client"
import { SignedIn, SignedOut, SignInButton, useUser } from "@clerk/nextjs";

export default function HomePage() {
  const {user} = useUser()
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
