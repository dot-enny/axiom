'use client';

import { FeatureCard } from './feature-card';

const features = [
  {
    stepNumber: '01',
    title: 'Client-Side Hashing',
    description: 'Files are processed locally in your browser. Raw data never touches a server, ensuring absolute privacy.',
  },
  {
    stepNumber: '02',
    title: 'Soroban Escrow',
    description: 'The SHA-256 hash and timestamp are packaged into a lightweight transaction and anchored via Soroban smart contracts.',
  },
  {
    stepNumber: '03',
    title: 'Immutable Verification',
    description: 'The ledger updates instantly. Anyone can verify the document\'s existence without revealing the underlying file.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="border-t-2 border-border">
      <div className="grid grid-cols-3 gap-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${index !== features.length - 1 ? 'border-r border-border' : ''}`}
          >
            <FeatureCard
              stepNumber={feature.stepNumber}
              title={feature.title}
              description={feature.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
