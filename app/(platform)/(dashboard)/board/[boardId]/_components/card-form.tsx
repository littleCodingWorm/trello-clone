import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

const CardForm = () => {
  function handleOnClick() {
    alert("pop up");
  }
  return (
    <div>
      <Button
        onClick={handleOnClick}
        className="w-full justify-start px-2"
        variant="ghost"
      >
        <Plus />
        Add a card
      </Button>
    </div>
  );
};

export default CardForm;
