import React from "react";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

const OrganizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex w-full items-center justify-center">
        <div className="m-2 flex w-full max-w-screen-md gap-2 p-2">
          <div className="hidden w-64 md:block">
            <Sidebar />
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </>
  );
};

export default OrganizationIdLayout;
