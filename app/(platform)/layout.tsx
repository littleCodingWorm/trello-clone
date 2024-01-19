import React from "react";
import Navbar from "./(dashboard)/organization/[organizationId]/_components/navbar";
import { ClerkProvider } from "@clerk/nextjs";

const PlatFormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <div className="h-full">{children}</div>
    </ClerkProvider>
  );
};

export default PlatFormLayout;
