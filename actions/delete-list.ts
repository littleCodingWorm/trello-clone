"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const DeleteList = async ({
  boardId,
  listId,
}: {
  boardId: string;
  listId: string;
}) => {
  let deletedList;
  if (!boardId || !listId) {
    throw new Error("Validation error");
  }

  try {
    deletedList = await db.list.delete({
      where: {
        id: listId,
      },
    });
  } catch (error) {
    throw new Error("Fail to delete list");
  }

  revalidatePath(`/board/${deletedList.boardId}`);
  return deletedList;
};
