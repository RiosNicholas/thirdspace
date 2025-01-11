'use client'
import { useUser } from "@clerk/nextjs"
export default function SettingsPage() {
    const {user} = useUser()
    return (
      <div className="">
        <main className="">
          Settings Page goes here.
        </main>
      </div>
    )
  }