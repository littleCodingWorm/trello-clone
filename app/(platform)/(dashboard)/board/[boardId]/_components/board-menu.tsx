import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import DeleteBoardBtn from "./delete-board-btn";

const BoardMenu = ({ boardId }: { boardId: string }) => {
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent side="right" className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Board Menu</SheetTitle>
        </SheetHeader>
        <div className="flex h-full items-end py-8">
          <DeleteBoardBtn boardId={boardId} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BoardMenu;
