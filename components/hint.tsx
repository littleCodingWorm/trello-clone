"use client";
import React, { useState } from "react";
import { HelpCircle } from "lucide-react";

const Hint = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="group -m-4 p-4">
      <HelpCircle className="h-4 w-4" />
      <div className="absolute mt-2 hidden w-48 rounded border border-gray-600 bg-gray-300 p-4 text-sm group-hover:block">
        {children}
      </div>
    </div>
  );
};

export default Hint;
