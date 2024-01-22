"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
export const DeleteCard = async ({
  cardId,
  boardId,
  // listId,
}: {
  cardId: string;
  boardId: string;
  // listId: string;
}) => {
  if (!cardId || !boardId) throw new Error("Validation error");
  let deletedCard;
  try {
    deletedCard = await db.card.delete({
      where: {
        id: cardId,
      },
    });
  } catch (error) {
    throw new Error("Fail to delete card");
  }

  revalidatePath(`/board/${boardId}`);
  return deletedCard;
};
