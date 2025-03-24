"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FetchData } from "../../services/apiService";

export function EventForm({ defaultValues }) {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState(
    defaultValues?.image || "/placeholder.svg"
  );

  // Define form schema with Zod
  const formSchema = z.object({
    name: z.string().min(1, "Event name is required"),
    time: z.string().min(1, "Time is required"),
    location: z.string().min(1, "Location is required"),
    image: z.any().optional(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: defaultValues?.name || "",
      time: defaultValues?.time || "",
      location: defaultValues?.location || "",
      image: defaultValues?.image || null,
    },
  });

  const { reset } = form
  const { isDirty, isValid, isSubmitting, isSubmitSuccessful } = form.formState


  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("image", file);

      // Create a preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }


  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("time", data.time);
      formData.append("location", data.location);

      if (data.image instanceof File) {
        formData.append("image", data.image);
      }

      if(defaultValues && defaultValues.id){
        await FetchData("PUT", `/events/${defaultValues.id}`, formData)
      }else {
        await FetchData("POST", "/event", formData);
      }

      router.push("/admin/dashboard/events")
      router.refresh()
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  useEffect(()=>{
    if(isSubmitSuccessful){
      reset()
    }
  },[isSubmitSuccessful, reset])

  return (
    <div className="space-y-6">
      <div className="flex flex-col tablet:flex-row gap-6">
        <div className="tablet:w-1/2">
          <div className="border rounded-md p-2 mb-4">
            <img
              src={imagePreview || "/placeholder.svg"}
              alt="Event preview"
              className="w-full aspect-video object-cover rounded-md"
            />
          </div>
          <div className="mb-4">
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4"
            />
            <p className="text-sm text-muted-foreground">
              Upload an image for your event.
            </p>
          </div>
        </div>

        <div className="tablet:w-1/2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter event name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input type="time" {...field} />
                          <Clock className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter event location" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter the full address of the event venue.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/admin/dashboard/events')}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-[#1F0954] hover:bg-[#1f0954dc]"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Posting..."
                    : defaultValues?.id
                    ? "Update Event"
                    : "Create Event"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
