"use client";
import React, { useState } from "react";
import { HelpCircle } from "lucide-react";

const Hint = ({ content }: { content: string }) => {
  return (
    <div className="group">
      <HelpCircle className="h-4 w-4" />
      <div className="absolute mt-2 hidden w-48 rounded border border-gray-600 bg-gray-300 p-4 text-sm group-hover:block">
        {content}
      </div>
    </div>
  );
};

export default Hint;
