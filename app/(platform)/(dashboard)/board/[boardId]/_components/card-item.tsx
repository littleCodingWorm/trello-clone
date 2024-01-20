import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import React from "react";

const CardItem = () => {
  function handleOnClick() {
    alert("pop up card setting stuff");
  }

  return (
    <div
      role="button"
      onClick={() => handleOnClick()}
      className="group rounded-md border border-transparent  bg-yellow-200 hover:border-black"
    >
      <div className="flex items-center justify-between p-2">
        <span>card name</span>
        <Button variant="ghost">
          <Pen className="hidden h-4 w-4 text-muted-foreground group-hover:block" />
        </Button>
      </div>
    </div>
  );
};

export default CardItem;
