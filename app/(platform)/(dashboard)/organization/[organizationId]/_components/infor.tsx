"use client";
import { useOrganization } from "@clerk/nextjs";
import { CreditCard } from "lucide-react";
import { Island_Moments } from "next/font/google";
import Image from "next/image";
import React from "react";

// import

const Infor = ({ isPro }: { isPro: boolean }) => {
  const { isLoaded, organization } = useOrganization();
  if (!isLoaded) {
    return <p>loading...</p>;
  }

  return (
    <div className="flex items-center gap-2">
      <div className="relative h-[60px] w-[60px]">
        <Image
          alt="organization image"
          src={organization?.imageUrl!}
          priority
          width={60}
          height={60}
          className="rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold">{organization?.name}</div>
        <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
          <CreditCard className="h-4 w-4" />
          {isPro ? "Pro" : "Free"}
        </div>
      </div>
    </div>
  );
};

export default Infor;
