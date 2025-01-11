"use client"
import React from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

// Define schema
const formSchema = z.object({
  placeName: z.string().min(2, { message: "Place name must be at least 2 characters." }),
  address: z.string().min(5, { message: "Address must be valid." }),
  typeOfPlace: z.string().min(1, { message: "Type of place is required." }),
  tags: z.array(z.string()).optional(),
  notes: z.string().optional(),
  pricing: z.enum(["Free", "$", "$$", "$$$"]).optional(),
  website: z.string().url().optional(),
  photos: z.any().optional(),
  accessibilityFeatures: z.array(z.string()).optional(),
  bestTimes: z.string().optional(),
  wifiAvailability: z.enum(["Yes - Fast", "Yes - Slow", "No"]).optional(),
  locationTags: z.string().optional(),
})

export default function AddSpaceForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pricing: "Free",
      wifiAvailability: "No",
      accessibilityFeatures: [],
      tags: [],
    },
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center w-3/4 space-y-4">
        {/* Place Name */}
        <FormField
          control={form.control}
          name="placeName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Place Name</FormLabel>
              <FormControl>
                <Input placeholder="Jehron's Coffee House" {...field} />
              </FormControl>
              <FormDescription>Enter the name of the place.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Address */}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="123 Main St, City, State" {...field} />
              </FormControl>
              <FormDescription>Provide the full address of the place.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Type of Place */}
        <FormField
          control={form.control}
          name="typeOfPlace"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Place</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Coffee Shop">Coffee Shop</SelectItem>
                    <SelectItem value="Restaurant">Restaurant</SelectItem>
                    <SelectItem value="Bar">Bar</SelectItem>
                    <SelectItem value="Workspace">Workspace</SelectItem>
                    <SelectItem value="Park">Park</SelectItem>
                    <SelectItem value="Cultural Site">Cultural Site</SelectItem>
                    <SelectItem value="Gym">Gym</SelectItem>
                    <SelectItem value="Grocery Store">Grocery Store</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>Select the type of place.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Tags */}
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <div className="flex flex-wrap gap-2">
                {["Safe Space", "Affordable", "Good for Groups", "Late Night", "LGBTQ+ Friendly", "Study Spot", "WFH-Friendly", "Black-Owned", "Latinx-Owned"].map((tag) => (
                  <div key={tag} className="flex items-center">
                    <Checkbox
                      id={tag}
                      checked={field.value?.includes(tag)}
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...(field.value || []), tag]
                          : field.value?.filter((t) => t !== tag);
                        field.onChange(newValue);
                      }}
                    />
                    <label htmlFor={tag} className="ml-2 text-sm">
                      {tag}
                    </label>
                  </div>
                ))}
              </div>
              <FormDescription>Select relevant tags.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
 

        {/* Notes/Description */}
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea placeholder="Why do you recommend this place?" {...field} />
              </FormControl>
              <FormDescription>Add details about this place (optional).</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Pricing */}
        <FormField
          control={form.control}
          name="pricing"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pricing</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select pricing" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Free">Free</SelectItem>
                    <SelectItem value="$">$ (Budget-friendly)</SelectItem>
                    <SelectItem value="$$">$$ (Moderate)</SelectItem>
                    <SelectItem value="$$$">$$$ (Expensive)</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>Choose the pricing category.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Other Optional Fields */}
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website or Social Media</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com" {...field} />
              </FormControl>
              <FormDescription>Provide a link (optional).</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
