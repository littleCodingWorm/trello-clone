import React from "react";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-center">
      <nav className="flex w-full max-w-screen-lg items-center  justify-between border-b p-2 ">
        <div className="flex items-center justify-center gap-4">
          <Logo hideNameOnMobile={false} />
          <Button size="sm" variant="sky">
            {/* <Plus className="block h-4 w-4 md:hidden" /> */}
            create
          </Button>
        </div>
        <div className="flex items-baseline gap-2">
          <OrganizationSwitcher />
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
