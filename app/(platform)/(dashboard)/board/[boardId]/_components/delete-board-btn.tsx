"use client";

import React from "react";
import { DeleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";

const DeleteBoardBtn = ({
  orgId,
  boardId,
}: {
  orgId: any;
  boardId: string;
}) => {
  function handleOnClick() {
    DeleteBoard({ boardId, orgId });
  }
  return (
    <Button onClick={handleOnClick} variant="destructive">
      Delete board
    </Button>
  );
};

export default DeleteBoardBtn;
