import supabase from "@/utils/supabase"; // Adjust the path to your Supabase client
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {

    const { name, address, notes, pricing, website, type_id, tags, user_id } =
      await req.json();
      
    const { data: locationData, error: locationError } = await supabase
      .from("location")
      .insert([
        {
          name,
          address,
          notes,
          pricing,
          website,
          user_id,
        },
      ])
      .select();

    if (locationError) throw new Error(locationError.message);

    const locationId = locationData[0].id; 

    // Step 2: Link the location to its type in `location_type`
    const { error: typeError } = await supabase.from("location_type").insert([
      {
        id: locationId, 
        type: type_id, 
      },
    ]);

    if (typeError) throw new Error(typeError.message);

    const tagEntries = tags.map((tagId: any) => ({
      location_tag: locationId,
      id: tagId, 
    }));

    const { error: tagError } = await supabase.from("location_tags").insert(tagEntries);

    if (tagError) throw new Error(tagError.message);

    return NextResponse.json(
      { success: true, message: "Location added successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: (error as Error).message  || "Failed to add location." },
      { status: 500 }
    );
  }
}
