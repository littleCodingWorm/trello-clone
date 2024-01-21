"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { DeleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";

const DeleteBoardBtn = ({ boardId }: { boardId: string }) => {
  const router = useRouter();
  async function handleOnClick() {
    const deletedBoard = await DeleteBoard({ boardId });
    router.push(`/organization/${deletedBoard.orgId}`);
  }
  return (
    <Button onClick={handleOnClick} variant="destructive">
      Delete board
    </Button>
  );
};

export default DeleteBoardBtn;
