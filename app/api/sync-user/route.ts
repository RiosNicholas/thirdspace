import { NextResponse } from "next/server";
import supabase from "@/utils/supabase";
import { currentUser } from "@clerk/nextjs/server";

export async function POST() {
  try {
    // Get the current Clerk user
    const user = await currentUser();

    if (!user) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    // Extract user data
    const clerkUserId = user.id;
    const userName = user.username || null;
    const fullName = user.fullName || null;

    // Upsert the user into the Supabase database
    const { data, error } = await supabase
      .from("users")
      .upsert(
        {
          clerk_user_id: clerkUserId,
          username: userName,
          fullname: fullName,
          last_logged_in: new Date().toISOString(),
        },
        { onConflict: "clerk_user_id" } // Prevent duplicates based on clerk_user_id
      )
      .single();

    if (error) {
      console.error("Error upserting user to Supabase:", error);
      return NextResponse.json(
        { error: "Failed to sync user to Supabase" },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json({
      message: "User synced successfully",
      user: data,
    });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Unexpected error" },
      { status: 500 }
    );
  }
}
