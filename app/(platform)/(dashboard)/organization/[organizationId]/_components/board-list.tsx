import React from "react";
import Link from "next/link";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import FormPopover from "@/components/form/form-popover";

const BoardList = async () => {
  const { orgId } = auth();
  if (!orgId) return redirect("/select-org");

  const boards = await db.board.findMany({
    where: {
      orgId,
    },
  });

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {/* map this board card */}
      {boards.map((board) => (
        <div
          key={board.id}
          className="aspect-video rounded bg-sky-600 font-bold text-white"
        >
          <Link
            className="inline-block h-full w-full p-3"
            href={`/board/${board.id}`}
          >
            {board.title}
          </Link>
        </div>
      ))}
      <FormPopover orgId={orgId} />
    </div>
  );
};

export default BoardList;
