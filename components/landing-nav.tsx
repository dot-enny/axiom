'use client';

import Link from 'next/link';

export function LandingNav() {
  return (
    <nav className="border-b border-border">
      <div className="flex items-center justify-between px-8 py-6">
        <Link href="/" className="text-2xl font-bold tracking-widest">
          AXIOM
        </Link>
        
        <Link href="/dashboard">
          <button className="border border-foreground px-6 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background">
            Launch App
          </button>
        </Link>
      </div>
    </nav>
  );
}
