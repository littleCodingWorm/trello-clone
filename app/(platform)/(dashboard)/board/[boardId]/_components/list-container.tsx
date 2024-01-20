"use client";

import React, { useState } from "react";
import ListItem from "./list-item";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}
const ListContainer = () => {
  const listData = [
    {
      name: "list1",
      id: "1",
      order: 0,
      cards: [
        {
          name: "card1",
          id: "c1",
          listId: "1",
          order: 0,
        },
        {
          name: "card2",
          id: "c2",
          listId: "1",
          order: 1,
        },
        {
          name: "card3",
          id: "c3",
          listId: "1",
          order: 2,
        },
      ],
    },
    {
      name: "list2",
      id: "2",
      order: 1,
      cards: [
        {
          name: "card1",
          id: "c4",
          listId: "2",
          order: 1,
        },
        {
          name: "card2",
          id: "c5",
          listId: "2",
          order: 2,
        },
        {
          name: "card3",
          id: "c6",
          listId: "2",
          order: 3,
        },
      ],
    },
    {
      name: "list3",
      id: "3",
      order: 2,
      cards: [
        {
          name: "card1",
          id: "c7",
          listId: "3",
          order: 0,
        },
        {
          name: "card2",
          id: "c8",
          listId: "3",
          order: 1,
        },
      ],
    },
  ];
  const [orderedData, setOrderedData] = useState(listData);

  function handleOnDragEnd(result: any) {
    const { destination, type, source } = result;
    console.log("dest", destination);
    console.log("source", source);
    console.log("type", type);
    // if user doesn't drop it
    if (!destination) return;

    // handle list reorder
    if (type === "list") {
      const items = reorder(orderedData, source.index, destination.index).map(
        (item, index) => ({ ...item, order: index }),
      );
      setOrderedData(items);
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
      }
    }
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="lists" type="list" direction="horizontal">
        {(provided, snapshot) => (
          <ul
            ref={provided.innerRef}
            style={{
              backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
            }}
            {...provided.droppableProps}
            className="flex gap-4"
          >
            {orderedData.map((list, index) => (
              <ListItem key={list.id} list={list} index={index} />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ListContainer;
