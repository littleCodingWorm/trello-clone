"use client";

import React, { useState, useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { UpdateBoardTitle } from "@/actions/update-board-title";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "must enter title.",
  }),
});

const BoardTitleForm = ({
  boardId,
  boardTitle,
}: {
  boardId: string;
  boardTitle: string | undefined;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setBoardTitle] = useState(boardTitle);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const updatedBoard = await UpdateBoardTitle({
      title: values.title,
      boardId,
    });
    if (updatedBoard) {
      disableEditing();
      setBoardTitle(updatedBoard.title);
    }
    //  might router.refresh() here
  }

  function disableEditing() {
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => <Input {...field} />}
          />
        </form>
      </Form>
    );
  } else {
    return (
      <div className="hover:cursor-pointer" onClick={() => setIsEditing(true)}>
        {title}
      </div>
    );
  }
};

export default BoardTitleForm;
