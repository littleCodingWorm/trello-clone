import React from "react";
import BoardNavbar from "./_components/board-navbar";

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
      <BoardNavbar boardId={boardId} />
      <div className="p-4">{children}</div>
    </main>
  );
};

export default BoardIdLayout;
