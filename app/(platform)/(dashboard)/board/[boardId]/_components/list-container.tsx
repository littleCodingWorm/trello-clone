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
          order: 0,
        },
        {
          name: "card2",
          id: "c2",
          order: 1,
        },
        {
          name: "card3",
          id: "c3",
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
          order: 1,
        },
        {
          name: "card2",
          id: "c5",
          order: 2,
        },
        {
          name: "card3",
          id: "c6",
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
          order: 0,
        },
        {
          name: "card2",
          id: "c8",
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
    const items = reorder(orderedData, source.index, destination.index).map(
      (item, index) => ({ ...item, order: index }),
    );
    setOrderedData(items);
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
              <ListItem key={list.id} data={list} index={index} />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ListContainer;
