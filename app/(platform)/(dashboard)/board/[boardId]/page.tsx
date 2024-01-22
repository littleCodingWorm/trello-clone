import React from "react";
import { db } from "@/lib/db";
import ListContainer from "./_components/list-container";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const BoardIdPage = async ({ params }: { params: { boardId: string } }) => {
  const { orgId } = auth();

  if (!orgId) {
    redirect("/select-org");
  }

  const lists = await db.list.findMany({
    where: {
      boardId: params.boardId,
      Board: {
        orgId,
      },
    },
    include: {
      cards: {
        orderBy: {
          order: "asc",
        },
      },
    },
    orderBy: {
      order: "asc",
    },
  });

  // const reOrderedList =
  return (
    <div className="flex gap-4 ">
      <ListContainer boardId={params.boardId} lists={lists} />
    </div>
  );
};

export default BoardIdPage;
