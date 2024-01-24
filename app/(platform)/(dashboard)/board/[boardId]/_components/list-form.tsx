"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateList } from "@/actions/create-list";
import { useRouter } from "next/navigation";
import FormSubmit from "@/components/form/form-submit";

const formSchema = z.object({
  title: z.string().min(2).max(50),
});

const ListForm = ({ boardId }: { boardId: string }) => {
  const [pending, setPending] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  // 1. Define your form.
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const title = values.title;
    const createdList = await CreateList({ title, boardId });
    if (createdList) {
      console.log("success ", createdList);
      router.refresh();
      setPopoverOpen(false);
    }
    setPending(true);
    // TODO: make it close after submit
    // TODO: make it blur like loading and can't click
  }
  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger className="flex w-[272px] shrink-0 rounded bg-gray-300 p-4 transition hover:bg-gray-400">
        <Plus />
        Add a List
      </PopoverTrigger>
      <PopoverContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lists title</FormLabel>
                  <FormControl>
                    <Input
                      // disabled={pending}
                      placeholder="Enter list title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormSubmit>Submit</FormSubmit>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
};

export default ListForm;
