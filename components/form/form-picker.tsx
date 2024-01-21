"use client";
import * as z from "zod";
import React from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import { unsplash } from "@/lib/unsplash";
import { FormField } from "../ui/form";
import { useFormStatus } from "react-dom";
import { Check, Divide } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormPicker = ({ form }: { form: any }) => {
  const [images, setImages] = useState<Array<Record<string, any>>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { pending } = useFormStatus();
  const [pickedImageId, setPickedImageId] = useState("");

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

  if (isLoading) {
    return <div className="flex items-center justify-center p-6">loading</div>;
  }

  return (
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
  );
};

export default FormPicker;
