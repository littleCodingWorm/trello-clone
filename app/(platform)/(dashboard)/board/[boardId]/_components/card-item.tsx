import { Button } from "@/components/ui/button";
import { Draggable } from "@hello-pangea/dnd";
import { Pen } from "lucide-react";
import React from "react";

const CardItem = ({ index, data }: { index: number; data: any }) => {
  function handleOnClick() {
    alert("pop up card setting stuff");
  }

  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided, snapshot) => (
        <li>
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            role="button"
            onClick={handleOnClick}
            className="group rounded-md border border-transparent  bg-yellow-200 hover:border-black"
          >
            <div className="flex items-center justify-between p-2">
              <span>{data.name}</span>
              <Button variant="ghost">
                <Pen className="hidden h-4 w-4 text-muted-foreground group-hover:block" />
              </Button>
            </div>
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default CardItem;
