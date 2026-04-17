interface FeatureCardProps {
  stepNumber: string;
  title: string;
  description: string;
}

export function FeatureCard({ stepNumber, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-6 p-12">
      <p className="font-mono text-sm font-bold tracking-widest text-foreground">
        {stepNumber}
      </p>
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-foreground">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
