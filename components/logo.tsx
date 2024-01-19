import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ hideNameOnMobile }: { hideNameOnMobile: boolean }) => {
  return (
    <Link href="/" className="-m-2 flex items-center justify-center gap-2 p-2">
      <Image src="/trello-logo.png" alt="Trello logo" width="32" height="32" />
      <span
        className={`font-mont ${hideNameOnMobile ? "hidden  md:block" : ""} text-xl font-[700]`}
      >
        Trello
      </span>
    </Link>
  );
};

export default Logo;
