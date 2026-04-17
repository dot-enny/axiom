'use client';

export function AxiomHeader() {
  return (
    <header className="border-b border-border">
      <div className="flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          AXIOM
        </div>

        {/* Connect Wallet Button */}
        <button
          className="border border-foreground px-6 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          Connect Wallet
        </button>
      </div>
    </header>
  );
}
