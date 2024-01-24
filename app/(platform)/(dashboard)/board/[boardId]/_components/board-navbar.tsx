import React from "react";
import BoardMenu from "./board-menu";
import BoardTitleForm from "./board-title-form";
import { db } from "@/lib/db";

const BoardNavbar = async ({ boardId }: { boardId: string }) => {
  const board = await db.board.findFirst({
    where: {
      id: boardId,
    },
  });
  return (
    <div className="flex items-center justify-between bg-black/60 p-2">
      <BoardTitleForm boardId={boardId} boardTitle={board?.title} />
      <BoardMenu boardId={boardId} />
    </div>
  );
};

export default BoardNavbar;
