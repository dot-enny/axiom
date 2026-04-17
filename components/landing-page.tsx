'use client';

import { LandingNav } from './landing-nav';
import { HeroSection } from './landing-hero-section';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNav />
      <HeroSection />
    </div>
  );
}
