"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const CreateCard = async ({
  title,
  listId,
  boardId,
}: {
  title: string;
  listId: string;
  boardId: string;
}) => {
  if (!title || !listId) {
    throw new Error("missing data to create new list");
  }

  const lastCard = await db.card.findFirst({
    where: {
      listId,
    },
    orderBy: {
      order: "desc",
    },
    select: {
      order: true,
    },
  });
  const newOrder = lastCard ? lastCard.order + 1 : 1;
  let createdCard;

  try {
    createdCard = await db.card.create({
      data: {
        title,
        listId,
        order: newOrder,
      },
    });
  } catch (error) {
    throw new Error("fail to create new list");
  }

  revalidatePath(`/board/${boardId}`);
  return createdCard;
};
