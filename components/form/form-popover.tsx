"use client";

import { sup } from "@/actions/actions";
import * as z from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStatus } from "react-dom";
import { useEffect, useState } from "react";
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
import { unsplash } from "@/lib/unsplash";
import Image from "next/image";
import { Check, Divide } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Required. A board must be named",
  }),
  image: z.string(),
});

const FormPopover = () => {
  const { pending } = useFormStatus();
  const [isLoading, setIsLoading] = useState(true);

  const [images, setImages] = useState<Array<Record<string, any>>>([]);
  const [pickedImageId, setPickedImageId] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      image: "",
    },
  });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await unsplash.photos.getRandom({
          collectionIds: ["317099"],
          count: 9,
        });

        if (result && result.response) {
          const newImages = result.response as Array<Record<string, any>>;
          setImages(newImages);
        } else {
          console.error("Failed to get images from Unsplash");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  useEffect(() => {
    console.log(pickedImageId);
  }, [pickedImageId]);

  if (isLoading) {
    return <div className="flex items-center justify-center p-6">loading</div>;
  }

  return (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <div className="grid grid-cols-3 gap-2">
                    {images.map((image) => {
                      return (
                        <div
                          key={image.id}
                          onClick={() => {
                            if (pending) return;
                            setPickedImageId(image.id);
                          }}
                          className="relative aspect-video"
                        >
                          <Input
                            {...field}
                            type="radio"
                            id={image.id}
                            name={image.id}
                            disabled={pending}
                            checked={image.id === pickedImageId}
                            aria-checked={image.id === pickedImageId}
                            value={image.urls.full}
                            className="absolute z-10"
                            // TODO: hidden the checked but still make it work
                          />
                          <Image
                            src={image.urls.thumb}
                            alt="Unsplash image"
                            fill
                            className="rounded object-cover"
                          />
                          {pickedImageId === image.id && (
                            <div className="absolute inset-y-0 flex h-full w-full items-center justify-center bg-black/30">
                              <Check className="h-4 w-4 text-white" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Board's name</FormLabel>
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
