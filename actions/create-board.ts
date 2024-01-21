"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export interface Board {
  title: string;
  imageUrl: string;
  orgId: string;
}
export const CreateBoard = async (createBoardData: Board) => {
  if (!createBoardData) {
    throw new Error("invalid create board data");
  }
  let createdBoard;
  try {
    createdBoard = await db.board.create({
      data: createBoardData,
    });
  } catch (error) {
    throw new Error("invalid create board data");
  }
  revalidatePath(`/board/${createdBoard.id}`);
  return createdBoard;
};
