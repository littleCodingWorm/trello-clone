"use client";

import ListItem from "./list-item";
import React, { useEffect, useState } from "react";
import type { ListWithCards } from "@/types";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import ListForm from "./list-form";
import { updateListOrder } from "@/actions/update-list-order";
import { useRouter } from "next/navigation";

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

const ListContainer = ({
  lists,
  boardId,
}: {
  lists: ListWithCards[];
  boardId: string;
}) => {
  // fetch lists of this dude?
  const [orderedData, setOrderedData] = useState(lists);
  // const router = useRouter();

  // real time whenever the list is updated
  useEffect(() => {
    setOrderedData(lists);
  }, [lists]);

  async function handleOnDragEnd(result: any) {
    const { destination, type, source } = result;
    // if user doesn't drop it
    if (!destination) return;

    // handle list reorder
    if (type === "list") {
      const items = reorder(orderedData, source.index, destination.index).map(
        (item, index) => ({ ...item, order: index }),
      );

      setOrderedData(items);
      const updatedLists = await updateListOrder({ items, boardId });

      // call update list order and pass data into it
    }

    // User moves a card
    if (type === "card") {
      let newOrderedData = [...orderedData];

      // Source and destination list
      const sourceList = newOrderedData.find(
        (list) => list.id === source.droppableId,
      );
      const destList = newOrderedData.find(
        (list) => list.id === destination.droppableId,
      );

      if (!sourceList || !destList) {
        return;
      }

      // Check if cards exists on the sourceList
      if (!sourceList.cards) {
        sourceList.cards = [];
      }

      // Check if cards exists on the destList
      if (!destList.cards) {
        destList.cards = [];
      }

      // Moving the card in the same list
      if (source.droppableId === destination.droppableId) {
        const reorderedCards = reorder(
          sourceList.cards,
          source.index,
          destination.index,
        );

        reorderedCards.forEach((card, idx) => {
          card.order = idx;
        });

        sourceList.cards = reorderedCards;

        setOrderedData(newOrderedData);
        // User moves the card to another list
      } else {
        // Remove card from the source list
        const [movedCard] = sourceList.cards.splice(source.index, 1);

        // Assign the new listId to the moved card
        movedCard.listId = destination.droppableId;

        // Add card to the destination list
        destList.cards.splice(destination.index, 0, movedCard);

        sourceList.cards.forEach((card, idx) => {
          card.order = idx;
        });

        // Update the order for each card in the destination list
        destList.cards.forEach((card, idx) => {
          card.order = idx;
        });

        setOrderedData(newOrderedData);
        // update card order
      }
    }
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="lists" type="list" direction="horizontal">
        {(provided) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="scrollable-div flex h-full w-full items-start gap-4 overflow-x-scroll px-4"
          >
            {orderedData.map((list, index) => (
              <ListItem
                key={list.id}
                boardId={boardId}
                list={list}
                index={index}
              />
            ))}
            {provided.placeholder}
            <ListForm boardId={boardId} />
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ListContainer;
