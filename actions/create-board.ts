"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export interface Board {
  title: string;
  imageUrl: string;
  orgId: string;
}

export const CreateBoard = async (createBoardData: Board) => {
  let createdBoard;

  if (!createBoardData) {
    throw new Error("invalid create board data");
  }
  try {
    createdBoard = await db.board.create({
      data: createBoardData,
    });
  } catch (error) {
    throw new Error("fail to create board");
  }

  revalidatePath(`/board/${createdBoard.id}`);
  return createdBoard;
};
