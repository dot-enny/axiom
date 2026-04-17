'use client';

import { BrutalistCodeBlock } from './brutalist-code-block';

const mockCode = `const axiom = new Axiom();
const hash = await axiom.hashFile(file);
const verified = await axiom.verify(hash);
console.log('Verified:', verified);`;

export function DeveloperPreviewSection() {
  return (
    <section className="border-t border-b-2 border-border">
      <div className="grid grid-cols-2 gap-0">
        {/* Left Column */}
        <div className="border-r border-border p-12">
          <h2 className="text-3xl font-bold text-foreground">
            Built for Builders.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Verify documents programmatically using our SDK or directly via Soroban RPC.
          </p>
        </div>

        {/* Right Column */}
        <div className="p-12">
          <BrutalistCodeBlock code={mockCode} />
        </div>
      </div>
    </section>
  );
}
