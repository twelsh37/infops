"use client";

import { useState } from "react";
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
import { createArticle } from "@/app/actions/article";
import { toast } from "sonner";
import SubmitModal from "@/app/components/SubmitModal";

// Form validation schema
const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  content: z.string().min(50, {
    message: "Story content must be at least 50 characters.",
  }),
  citations: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true;
        try {
          JSON.parse(val);
          return true;
        } catch {
          return false;
        }
      },
      {
        message: "Citations must be valid JSON.",
      }
    ),
});

export default function StoryPage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      content: "",
      citations: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsModalOpen(false);

    try {
      // Parse citations if provided
      const citationsJson = values.citations
        ? JSON.parse(values.citations)
        : null;

      // Submit to database
      await createArticle({
        title: values.title,
        description: values.description,
        content: values.content,
        citations: citationsJson,
      });

      // Show success message
      toast.success("Article created", {
        description: "Your article has been successfully created.",
      });

      // Redirect to home page
      router.push("/");
    } catch (error) {
      console.error("Error creating article:", error);
      toast.error("Error", {
        description: "Failed to create article. Please try again.",
      });
    }
  };

  // Handle cancel
  const handleCancel = () => {
    form.reset();
    router.push("/");
  };

  // Open confirmation modal
  const handleOpenModal = async () => {
    const isValid = await form.trigger();
    if (isValid) {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="container mx-auto py-8 max-w-3xl pt-24">
      <h1 className="text-3xl font-bold mb-8">Create New Article</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleOpenModal)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter article title" {...field} />
                </FormControl>
                <FormDescription>
                  A concise, descriptive title for your article.
                </FormDescription>
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
                    placeholder="Enter a brief description"
                    className="resize-none h-20"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  A short summary of what the article is about.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Story</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your article content here"
                    className="resize-none h-60"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  The main content of your article.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="citations"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Citations</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Enter citations in JSON format, e.g., [{"source": "Example", "url": "https://example.com"}]'
                    className="resize-none h-40 font-mono"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Add citations in JSON format. Leave empty if not applicable.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>

      <SubmitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => form.handleSubmit(onSubmit)()}
        title={form.getValues().title}
      />
    </div>
  );
}
