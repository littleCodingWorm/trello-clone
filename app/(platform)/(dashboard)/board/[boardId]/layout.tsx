import React from "react";
import BoardMenu from "./_components/board-menu";

const BoardIdLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { boardId: string };
}) => {
  const { boardId } = params;

  return (
    <main>
      <div className="flex items-center justify-between bg-blue-200 p-2">
        <span>Board's name</span>
        <BoardMenu boardId={boardId} />
      </div>
      <div className="p-4">{children}</div>
    </main>
  );
};

export default BoardIdLayout;
