'use client';

interface PrimaryButtonProps {
  text: string;
}

interface OutlineButtonProps {
  text: string;
}

function PrimaryButton({ text }: PrimaryButtonProps) {
  return (
    <button className="bg-foreground px-8 py-3 text-sm font-bold text-background transition-all hover:bg-muted">
      {text}
    </button>
  );
}

function OutlineButton({ text }: OutlineButtonProps) {
  return (
    <button className="border border-foreground px-8 py-3 text-sm font-bold text-foreground transition-colors hover:bg-foreground hover:text-background">
      {text}
    </button>
  );
}

export function ActionButtonGroup() {
  return (
    <div className="flex gap-6">
      <OutlineButton text="Read the Docs" />
      <PrimaryButton text="Open App" />
    </div>
  );
}
