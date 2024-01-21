import { UserRound } from "lucide-react";
import React from "react";
import Infor from "../../../../../components/infor";
import BoardList from "./_components/board-list";

const OrganizationIdPage = () => {
  return (
    <main>
      <div className="">
        <header className="flex border-b pb-4">
          <Infor isPro={false} />
        </header>
        <main className="p-4">
          <h1 className="mb-3 flex gap-2 font-bold">
            <UserRound /> Your board
          </h1>
          <BoardList />
        </main>
      </div>
    </main>
  );
};

export default OrganizationIdPage;
