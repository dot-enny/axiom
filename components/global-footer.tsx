'use client';

export function GlobalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-border">
      <div className="grid grid-cols-2 gap-0 px-12 py-8">
        {/* Left Column */}
        <div>
          <p className="font-bold text-foreground">
            AXIOM
          </p>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            © {currentYear}
          </p>
        </div>

        {/* Right Column */}
        <div className="flex justify-end">
          <nav className="flex gap-8">
            <a href="#" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </a>
            <a href="#" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="#" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              Drips Wave
            </a>
            <a href="#" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              Launch App
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
