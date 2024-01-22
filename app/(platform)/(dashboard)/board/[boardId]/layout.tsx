import React from "react";
import { db } from "@/lib/db";

import BoardNavbar from "./_components/board-navbar";

const BoardIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { boardId: string };
}) => {
  const { boardId } = params;

  const board = await db.board.findUnique({
    where: {
      id: boardId,
    },
  });

  return (
    <main
      className="h-full w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${board?.imageUrl}')` }}
    >
      <BoardNavbar boardId={boardId} />
      <div className="p-4">{children}</div>
    </main>
  );
};

export default BoardIdLayout;
