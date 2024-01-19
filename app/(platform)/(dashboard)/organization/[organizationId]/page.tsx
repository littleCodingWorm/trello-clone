import { UserRound } from "lucide-react";
import React from "react";
import Hint from "./_components/hint";

const OrganizationIdPage = () => {
  return (
    <main>
      <div className="">
        <header className="border-b pb-4">organization stuff</header>
        <section className="p-4">
          <h1 className="mb-3 flex gap-2 font-bold">
            <UserRound /> Your board
          </h1>
          <div role="button" className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <div className="aspect-video rounded bg-sky-600 p-3 font-bold text-white">
              board
            </div>
            <div className="aspect-video rounded bg-sky-600 p-3 font-bold text-white">
              board
            </div>
            <div className="aspect-video rounded bg-sky-600 p-3 font-bold text-white">
              board
            </div>
            <div className="relative flex aspect-video flex-col items-center justify-center rounded bg-gray-300 p-3 text-center text-stone-700">
              create new board
              <span className="text-sm">3 remaining</span>
              <div className="absolute bottom-2 right-2 aspect-video ">
                <Hint />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default OrganizationIdPage;
