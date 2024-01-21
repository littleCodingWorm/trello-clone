"use client";

import React from "react";
import CardForm from "./card-form";
import CardItem from "./card-item";
import { Button } from "@/components/ui/button";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { MoreHorizontal } from "lucide-react";

const ListItem = ({ list, index }: { list: any; index: number }) => {
  function handleOnClick() {
    alert("pop up list setting stuff");
  }
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="h-full w-[272px] rounded-md bg-blue-200 p-2"
        >
          <div className="flex items-center justify-between">
            <span>{list.title}</span>
            <Button onClick={handleOnClick} variant="ghost">
              <MoreHorizontal />
            </Button>
          </div>
          <Droppable droppableId={list.id} type="card">
            {(provided) => (
              <ul
                className="mt-4 flex flex-col gap-2"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {list.cards.map((card: any, index: number) => (
                  <CardItem index={index} card={card} key={card.id} />
                ))}

                <CardForm />
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </li>
      )}
    </Draggable>
  );
};

export default ListItem;
