interface MetricCardProps {
  value: string;
  label: string;
}

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="border border-border p-6">
      <p className="text-2xl font-bold text-foreground">
        {value}
      </p>
      <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
