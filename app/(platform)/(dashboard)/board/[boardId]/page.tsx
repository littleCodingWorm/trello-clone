import React from "react";
import { db } from "@/lib/db";
import ListContainer from "./_components/list-container";

const BoardIdPage = async ({ params }: { params: { boardId: string } }) => {
  const { boardId } = params;
  const lists = await db.list.findMany({
    where: {
      boardId,
    },
    include: {
      cards: true,
    },
  });

  return (
    <div className="flex gap-4">
      <ListContainer lists={lists} />
    </div>
  );
};

export default BoardIdPage;
