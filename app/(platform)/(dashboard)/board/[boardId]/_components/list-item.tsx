"use client";

import React from "react";
import CardItem from "./card-item";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import CardForm from "./card-form";

const ListItem = () => {
  function handleOnClick() {
    alert("pop up list setting stuff");
  }
  return (
    <div className="h-full w-[272px] rounded-md bg-blue-200 p-2">
      <div className="flex items-center justify-between">
        <span>To Do</span>
        <Button onClick={() => handleOnClick()} variant="ghost">
          <MoreHorizontal />
        </Button>
      </div>
      <ul className="mt-4 flex flex-col gap-2">
        <li>
          <CardItem />
        </li>
        <li>
          <CardItem />
        </li>
        <li>
          <CardItem />
        </li>
        <CardForm />
      </ul>
    </div>
  );
};

export default ListItem;
