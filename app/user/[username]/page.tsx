'use client'
import { useUser } from "@clerk/nextjs"
export default function UserPage() {
  const {user} = useUser()
  return (
    <div className="">
      <main className="">
        {user?.fullName} Profile 
      </main>
    </div>
  )
}