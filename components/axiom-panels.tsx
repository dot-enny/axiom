'use client';

import { ReactNode } from 'react';

interface PanelProps {
  children?: ReactNode;
  title?: string;
  className?: string;
}

export function LeftPanel({ title = 'Panel One', children, className = '' }: PanelProps) {
  return (
    <div className={`flex flex-col bg-background p-8 ${className}`}>
      {title && (
        <div className="mb-8 border-b border-border pb-6">
          <h2 className="text-2xl font-bold tracking-tighter">
            {title}
          </h2>
        </div>
      )}
      <div className="flex-1">
        {children || (
          <div className="text-muted-foreground">
            <p className="font-mono text-sm">Left panel content</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function RightPanel({ title = 'Panel Two', children, className = '' }: PanelProps) {
  return (
    <div className={`flex flex-col bg-background p-8 ${className}`}>
      {title && (
        <div className="mb-8 border-b border-border pb-6">
          <h2 className="text-2xl font-bold tracking-tighter">
            {title}
          </h2>
        </div>
      )}
      <div className="flex-1">
        {children || (
          <div className="text-muted-foreground">
            <p className="font-mono text-sm">Right panel content</p>
          </div>
        )}
      </div>
    </div>
  );
}
