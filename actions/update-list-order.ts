"use server";

import { db } from "@/lib/db";
import { CardWithList, ListWithCards } from "@/types";
import { revalidatePath } from "next/cache";

export const updateListOrder = async ({
  items,
  boardId,
}: {
  items: ListWithCards[];
  boardId: string;
}) => {
  // TODO: validate and handle error
  const updatedLists = items.map(async (list) => {
    const newList = await db.list.update({
      where: {
        id: list.id,
      },
      data: {
        order: list.order,
      },
    });

    return newList;
  });

  // revalidatePath(`/board/${boardId}`);
  return updatedLists;
};
