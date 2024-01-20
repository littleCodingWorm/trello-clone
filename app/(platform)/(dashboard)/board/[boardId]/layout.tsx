"use client";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import React from "react";

const BoardIdLayout = ({ children }: { children: React.ReactNode }) => {
  function onClickHandler() {
    alert("board setting stuff pop up");
  }

  return (
    <main>
      <div className="flex items-center justify-between bg-blue-200 p-2">
        <span>board's name</span>
        <Button onClick={() => onClickHandler()} variant="ghost">
          <MoreHorizontal />
        </Button>
      </div>
      <div className="p-4">{children}</div>
    </main>
  );
};

export default BoardIdLayout;
