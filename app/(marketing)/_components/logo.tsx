import React from "react";
import Image from "next/image";

const Logo = ({ hideNameOnMobile }: { hideNameOnMobile: boolean }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Image src="/trello-logo.png" alt="Trello logo" width="24" height="24" />
      <span
        className={`font-mont ${hideNameOnMobile ? "hidden  md:block" : ""} font-[700]`}
      >
        Trello
      </span>
    </div>
  );
};

export default Logo;
