"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const CreateList = async ({
  title,
  boardId,
}: {
  title: string;
  boardId: string;
}) => {
  if (!title || !boardId) {
    throw new Error("missing data to create new list");
  }

  const lastList = await db.list.findFirst({
    where: {
      boardId,
    },
    orderBy: {
      order: "desc",
    },
    select: {
      order: true,
    },
  });
  const newOrder = lastList ? lastList.order + 1 : 1;
  let createList;

  try {
    createList = await db.list.create({
      data: {
        title,
        boardId,
        order: newOrder,
      },
    });
  } catch (error) {
    throw new Error("fail to create new list");
  }

  revalidatePath(`/board/${createList.boardId}`);
  return createList;
};
