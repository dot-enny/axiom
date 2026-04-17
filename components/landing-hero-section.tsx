'use client';

import { HeroHeadline } from './landing-hero-headline';
import { HeroSubheadline } from './landing-hero-subheadline';
import { ActionButtonGroup } from './landing-buttons';

export function HeroSection() {
  return (
    <section className="grid grid-cols-12 gap-0 border-t border-border">
      {/* Main Content Grid Cell */}
      <div className="col-span-8 border-r border-border p-12">
        <div className="flex h-full flex-col justify-between">
          <div className="space-y-8">
            <HeroHeadline />
            <HeroSubheadline />
          </div>
          
          <ActionButtonGroup />
        </div>
      </div>

      {/* Secondary Grid Cell */}
      <div className="col-span-4 flex items-center justify-center p-12">
        <div className="border border-border p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Protocol Status
          </p>
          <p className="mt-4 text-sm text-foreground">
            Live on Stellar
          </p>
        </div>
      </div>
    </section>
  );
}
