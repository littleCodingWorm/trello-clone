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
      {boards.map((board) => (
        <div key={board.id} className="  font-bold text-white">
          <Link
            className="relative inline-block aspect-video h-full w-full overflow-hidden rounded bg-sky-600 bg-cover bg-center bg-no-repeat p-3 "
            href={`/board/${board.id}`}
            style={{ backgroundImage: `url(${board.imageUrl})` }}
          >
            <div className="absolute left-0 top-0 h-full w-full bg-black/30 p-2 hover:bg-black/40">
              <span>{board.title}</span>
            </div>
          </Link>
        </div>
      ))}
      <FormPopover orgId={orgId} />
    </div>
  );
};

export default BoardList;
