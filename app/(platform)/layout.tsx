import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

const PlatFormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <div className="h-full">{children}</div>
    </ClerkProvider>
  );
};

export default PlatFormLayout;
