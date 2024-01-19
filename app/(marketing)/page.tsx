import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import React from "react";

const MarketingPage = () => {
  return (
    <main className="flex h-full w-full items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="font-mont flex items-center justify-center gap-2 rounded-full bg-amber-100 px-3 py-2 text-sm font-[600] uppercase text-amber-700 md:px-4 md:py-3 md:text-base">
          <Medal />
          <span>No1 task management</span>
        </div>
        <h1 className="font-mont flex flex-col items-center justify-center gap-4 text-4xl font-[700] md:text-5xl">
          Trello helps team move
          <br />{" "}
          <span className="rounded-sm bg-gradient-to-r from-indigo-500 to-pink-500 px-2 py-1 text-white md:px-4 md:py-2">
            work forward.
          </span>
        </h1>
        <p className="text-base text-stone-500 md:text-lg">
          Keep everything in the same place—even if your team isn't.
        </p>
        <Link href="/sign-up">
          <Button variant="default" size="lg">
            Get Trello for free
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default MarketingPage;
