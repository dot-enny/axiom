'use client';

import { ReactNode } from 'react';
import { AxiomHeader } from './axiom-header';

interface AxiomLayoutProps {
  leftPanel?: ReactNode;
  rightPanel?: ReactNode;
}

export function AxiomLayout({ leftPanel, rightPanel }: AxiomLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <AxiomHeader />

      {/* Main content grid */}
      <div className="flex flex-1">
        {/* Left column */}
        <div className="flex-1 border-r border-border">
          {leftPanel}
        </div>

        {/* Right column */}
        <div className="flex-1">
          {rightPanel}
        </div>
      </div>
    </div>
  );
}
