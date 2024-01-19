import React from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

const MarketingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MarketingPageLayout;
