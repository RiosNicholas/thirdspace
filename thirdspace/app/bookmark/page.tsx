'use client'
import { SignedIn, SignedOut } from "@clerk/nextjs";
export default function BookmarkPage() {
  return (
    <div className="">
      <main className="">
        <SignedOut>
          <div>Please Sign In</div>
        </SignedOut>
        <SignedIn>
          <div>Here are your bookmarks</div>
        </SignedIn>
      </main>
    </div>
  );
}