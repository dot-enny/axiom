'use client';

export function LandingNav() {
  return (
    <nav className="border-b border-border">
      <div className="flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-bold tracking-widest">
          AXIOM
        </div>
        
        <button className="border border-foreground px-6 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background">
          Launch App
        </button>
      </div>
    </nav>
  );
}
