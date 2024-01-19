import React from "react";
import Navbar from "../(dashboard)/organization/[organizationId]/_components/navbar";
import { ClerkProvider } from "@clerk/nextjs";

const PlatFormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default PlatFormLayout;
