"use client";

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
import { CreateCard } from "@/actions/create-card";
import { useRouter } from "next/navigation";
import FormSubmit from "@/components/form/form-submit";

const formSchema = z.object({
  title: z.string().min(2).max(50),
});

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React, { useState } from "react";

const CardForm = ({ listId, boardId }: { listId: string; boardId: string }) => {
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
    const createdCard = await CreateCard({ title, listId, boardId });
    if (createdCard) {
      console.log("success ", createdCard);
      router.refresh();
      setPopoverOpen(false);
    }
    // TODO: make it close after submit
    // TODO: make it blur like loading and can't click
  }

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger className="flex w-full justify-start rounded border border-stone-800 p-2 px-2">
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
                  <FormLabel>Card's title</FormLabel>
                  <FormControl>
                    <Input
                      // disabled={pending}
                      placeholder="Enter card title"
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

export default CardForm;
