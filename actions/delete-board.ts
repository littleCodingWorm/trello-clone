"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const DeleteBoard = async ({ boardId }: { boardId: string }) => {
  let deletedBoard;

  if (!boardId) throw new Error("Validation error");
  try {
    deletedBoard = await db.board.delete({
      where: {
        id: boardId,
      },
    });
  } catch (error) {
    throw new Error("error delete board");
  }

  revalidatePath(`/workspace/${deletedBoard.orgId}`);
  return deletedBoard;
};
