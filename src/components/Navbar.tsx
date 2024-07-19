"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Bookmark, Home } from "lucide-react";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-2 inset-x-0 max-w-2xl mx-auto z-50 font-semibold text-lg",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="/" className="text-white flex">
          <Home className="mr-1" />
          Home
        </Link>
        <Link href="/my-watchlist" className="text-white flex">
          <Bookmark className="mr-1" />
          My Watchlist
        </Link>
      </Menu>
    </div>
  );
}
