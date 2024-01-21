"use client";

import * as z from "zod";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Required. A board must be named",
  }),
  image: z.string(),
});

const FormPopover1 = () => {
  const [images, setImages] = useState<Array<Record<string, any>>>([]);
  const [pickedImage, setPickedImage] = useState("");

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
      }
    };

    fetchImages();
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  useEffect(() => {
    console.log(pickedImage);
  }, [pickedImage]);

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
                  <FormItem>
                    <FormControl>
                      <FormLabel>Board's cover</FormLabel>

                      <div className="grid grid-cols-3 gap-2">
                        {images.map((image) => {
                          return (
                            <div
                              role="button"
                              key={image.id}
                              onClick={() => setPickedImage(image.urls.full)}
                              className="relative aspect-video"
                            >
                              <Image
                                src={image.urls.thumb}
                                alt="Unsplash image"
                                fill
                                className="rounded object-cover"
                              />

                              <Input
                                type="radio"
                                {...field}
                                name="image"
                                id={image.id}
                                value={pickedImage}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </FormControl>
                  </FormItem>
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

export default FormPopover1;
