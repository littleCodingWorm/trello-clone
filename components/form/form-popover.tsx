"use client";

import * as z from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateBoard } from "@/actions/create-board";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Form,
  FormMessage,
} from "../ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import FormPicker from "./form-picker";
import Hint from "../hint";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Required. A board must be named",
  }),
  imageUrl: z.string(),
});

const FormPopover = ({ orgId }: { orgId: string }) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      imageUrl: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const createBoardData = {
      orgId: String(orgId),
      title: String(values.title),
      imageUrl: String(values.imageUrl),
    };
    const createdBoard = await CreateBoard(createBoardData); // only pass data, not call function like this
    router.push(`/board/${createdBoard.id}`); // how
  }

  function handleUpgrade() {
    alert("give me money");
  }

  return (
    <Popover>
      <PopoverTrigger className="relative aspect-video h-full w-full rounded bg-secondary p-3 transition hover:bg-black/10">
        <span>Create new board</span> <br />
        <span className="text-sm">5 remaining</span>
        <div className="group absolute bottom-3 right-3">
          <Hint>
            <div className="flex flex-col text-start">
              <p>
                Free Workspaces can have up to 10 open boards. For unlimited
                boards, upgrade this Workspace.
              </p>
              <div
                onClick={handleUpgrade}
                className="justify-start px-0 font-semibold text-sky-700"
              >
                Upgrade
              </div>
            </div>
          </Hint>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormPicker form={form} />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Boards name</FormLabel>
                    <FormControl>
                      <Input placeholder="my board" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FormPopover;
