"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { DeleteBoard } from "@/actions/delete-board";

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
