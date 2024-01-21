import Logo from "@/components/logo";
import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileSidebar } from "./mobile-sidebar";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-center">
      <nav className="flex w-full items-center justify-between border-b p-2 ">
        <div className="flex items-center justify-center gap-4">
          <div className="md:hidden">
            <MobileSidebar />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0">
            <Logo hideNameOnMobile={true} />
          </div>
          <Button size="sm" variant="sky">
            <Plus className="block h-4 w-4 md:hidden" />
            <span className="hidden md:block">create</span>
          </Button>
        </div>
        <div className="flex items-baseline gap-2">
          <div className="hidden sm:block">
            <OrganizationSwitcher hidePersonal />
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
