'use client';
import { cn } from '@/lib/utils';
import { Bookmark, Home } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Menu } from './ui/navbar-menu';

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        'fixed top-2 inset-x-0 max-w-2xl mx-auto z-50 font-semibold text-lg',
        className,
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
