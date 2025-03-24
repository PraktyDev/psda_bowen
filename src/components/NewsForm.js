"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
import { Textarea } from "@/components/ui/textarea";
import { FetchData } from "../../services/apiService";

export function NewsForm({ defaultValues }) {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState(
    defaultValues?.image || "/placeholder.svg"
  );

  // Define form schema with Zod
  const formSchema = z.object({
    title: z.string().min(1, "News title is required"),
    description: z.string().min(1, "Description is required"),
    image: z.any().optional(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: defaultValues?.title || "",
      description: defaultValues?.description || "",
      image: defaultValues?.image || null,
    },
  });

  const { reset } = form;
  const { isDirty, isValid, isSubmitting, isSubmitSuccessful } = form.formState;

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
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);

      if (data.image instanceof File) {
        formData.append("image", data.image);
      }

      if(defaultValues && defaultValues.id){
        await FetchData("PUT", `/news/${defaultValues.id}`, formData)
      }else {
        await FetchData("POST", "/news", formData);
      }

      router.push("/admin/dashboard/news");
      router.refresh();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col tablet:flex-row gap-6">
        <div className="tablet:w-1/2">
          <div className="border rounded-md p-2 mb-4">
            <img
              src={imagePreview || "/placeholder.svg"}
              alt="News preview"
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
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter news title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter news description"
                        className="min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/admin/dashboard/news")}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-[#1F0954] hover:bg-[#1f0954dc]"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Publishing..."
                    : defaultValues?.id
                    ? "Update News"
                    : "Publish News"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
