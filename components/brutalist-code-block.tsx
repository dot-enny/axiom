interface BrutalistCodeBlockProps {
  code: string;
}

export function BrutalistCodeBlock({ code }: BrutalistCodeBlockProps) {
  return (
    <div className="bg-background">
      <div className="border border-border p-6">
        <pre className="font-mono text-xs text-foreground">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
