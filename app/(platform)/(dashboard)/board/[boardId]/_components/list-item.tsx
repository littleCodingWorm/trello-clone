"use client";

import React from "react";
import CardForm from "./card-form";
import CardItem from "./card-item";
import { Button } from "@/components/ui/button";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { MoreHorizontalIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ListWithCards } from "@/types";
import { DeleteList } from "@/actions/delete-list";
import { useRouter } from "next/navigation";

const ListItem = ({
  list,
  index,
  boardId,
}: {
  list: ListWithCards;
  index: number;
  boardId: string;
}) => {
  const router = useRouter();
  async function handleDeleteList(listId: string) {
    const deletedList = await DeleteList({ boardId, listId });
    // deletedList ? router.refresh() : null;
  }
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="w-[272px] shrink-0 rounded-md bg-gray-300 p-4"
        >
          <div className="flex items-center justify-between">
            <span className="font-bold">{list.title}</span>
            <Popover>
              <PopoverTrigger>
                <MoreHorizontalIcon />
              </PopoverTrigger>
              <PopoverContent side="bottom" align="start" className="p-2">
                <div className="w-full text-center font-semibold">
                  List actions
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="ghost" className="justify-start">
                    Add a card
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Copy this list
                  </Button>
                  <hr />
                  <Button
                    onClick={() => handleDeleteList(list.id)}
                    variant="ghost"
                    className="justify-start"
                  >
                    Delete this list
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <Droppable droppableId={list.id} type="card">
            {(provided) => (
              <ul
                className="mt-3 flex flex-col gap-2"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {list.cards.map((card: any, index: number) => (
                  <CardItem
                    listId={list.id}
                    boardId={boardId}
                    index={index}
                    card={card}
                    key={card.id}
                  />
                ))}
                {provided.placeholder}
                <CardForm boardId={boardId} listId={list.id} />
              </ul>
            )}
          </Droppable>
        </li>
      )}
    </Draggable>
  );
};

export default ListItem;
