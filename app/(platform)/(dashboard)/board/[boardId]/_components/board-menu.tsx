import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import DeleteBoardBtn from "./delete-board-btn";
import { auth } from "@clerk/nextjs";

const BoardMenu = ({ boardId }: { boardId: string }) => {
  const { orgId } = auth();
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent side="right" className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Board Menu</SheetTitle>
        </SheetHeader>
        <div className="flex h-full items-end py-8">
          <DeleteBoardBtn orgId={orgId} boardId={boardId} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BoardMenu;
