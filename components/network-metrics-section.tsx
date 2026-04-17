'use client';

import { MetricCard } from './metric-card';

export function NetworkMetricsSection() {
  return (
    <section className="border-t border-border">
      <div className="grid grid-cols-2 gap-0">
        {/* Left Column */}
        <div className="border-r border-border p-12">
          <h2 className="text-3xl font-bold text-foreground">
            Powered by Soroban.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Engineered for the Stellar network to ensure cryptographic finality at fractions of a cent.
          </p>
        </div>

        {/* Right Column */}
        <div className="p-12">
          <div className="grid grid-cols-3 gap-6">
            <MetricCard value="Sub-5s" label="Finality" />
            <MetricCard value="< 0.0001 XLM" label="Cost per Anchor" />
            <MetricCard value="100%" label="Privacy Retained" />
          </div>
        </div>
      </div>
    </section>
  );
}
