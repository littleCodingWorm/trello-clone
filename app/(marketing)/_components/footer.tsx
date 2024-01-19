import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center p-2">
      <nav className="flex w-full max-w-screen-lg items-center justify-between">
        <Logo hideNameOnMobile={false} />
        <div className="flex items-center justify-center gap-3 text-sm font-[600]">
          <Link href="/term-of-service">Term of service</Link>
          <Link href="/policy">Policy</Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
