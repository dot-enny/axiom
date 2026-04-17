'use client';

import { LandingNav } from './landing-nav';
import { HeroSection } from './landing-hero-section';
import { HowItWorksSection } from './how-it-works-section';
import { NetworkMetricsSection } from './network-metrics-section';
import { DeveloperPreviewSection } from './developer-preview-section';
import { GlobalFooter } from './global-footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNav />
      <HeroSection />
      <HowItWorksSection />
      <NetworkMetricsSection />
      <DeveloperPreviewSection />
      <GlobalFooter />
    </div>
  );
}
