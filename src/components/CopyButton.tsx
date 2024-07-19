"use client";
import { Movie } from "@/types/movie";
import { Book, Bookmark, Copy, Delete, Trash2 } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const CopyButton = () => {
  return (
    <div
      className="bg-white ml-2 text-black rounded-full w-10 h-10 flex items-center justify-center"
      onClick={() => {
        navigator.clipboard?.writeText("test.com").then(() => {
          toast.success("Linked copied");
        });
      }}
    >
      <Copy />
    </div>
  );
};

export default CopyButton;
