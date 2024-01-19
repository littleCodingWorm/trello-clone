import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Logo from "../../../components/logo";

const Navbar = () => {
  return (
    <header className="fixed left-auto top-0  z-10 flex h-14 w-full justify-center md:h-16">
      <nav className="relative flex h-full w-full max-w-screen-lg items-center justify-center border-b  md:justify-end">
        <Link
          href="/"
          className="absolute  left-1/2 top-auto -translate-x-1/2 md:left-4 md:translate-x-0"
        >
          <Logo hideNameOnMobile={true} />
        </Link>
        <div className="flex h-full items-center justify-center gap-3 md:absolute md:right-4">
          <Link className="absolute left-2 top-auto md:static" href="/sign-in">
            <Button variant="outline">Login</Button>
          </Link>
          <Link className="absolute right-2 top-auto md:static" href="/sign-up">
            <Button variant="default">Sign up</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
