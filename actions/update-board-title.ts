"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const UpdateBoardTitle = async ({
  title,
  boardId,
}: {
  title: string;
  boardId: string;
}) => {
  // TODO: error handling here

  const updatedBoard = await db.board.update({
    where: {
      id: boardId,
    },
    data: {
      title,
    },
  });

  revalidatePath(`/board/${boardId}`);
  return updatedBoard;
};
