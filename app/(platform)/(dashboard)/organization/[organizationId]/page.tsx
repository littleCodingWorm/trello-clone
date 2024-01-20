import { UserRound } from "lucide-react";
import React from "react";
import Hint from "./_components/hint";
import Infor from "./_components/infor";
import Link from "next/link";

const OrganizationIdPage = () => {
  return (
    <main>
      <div className="">
        <header className="flex border-b pb-4">
          <Infor isPro={false} />
        </header>
        <section className="p-4">
          <h1 className="mb-3 flex gap-2 font-bold">
            <UserRound /> Your board
          </h1>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <div className="aspect-video rounded bg-sky-600 font-bold text-white">
              <Link
                className="inline-block h-full w-full p-3"
                href="/board/boardIdForlater"
              >
                board
              </Link>
            </div>
            <div
              role="button"
              className="relative flex aspect-video flex-col items-center justify-center rounded bg-gray-300 p-3 text-center text-stone-700"
            >
              create new board
              <span className="text-sm">3 remaining</span>
              <div
                role="button"
                className="absolute bottom-2 right-2 aspect-video "
              >
                <Hint content="free organizations have up to 5 boards. For unlimited boards, upgrade to premium" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default OrganizationIdPage;
