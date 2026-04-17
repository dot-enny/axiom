'use client';

import { LedgerItem } from './ledger-item';

export interface VerificationRecord {
  id: string;
  hash: string;
  timestamp: string;
  verified: boolean;
}

const MOCK_RECORDS: VerificationRecord[] = [
  {
    id: '1',
    hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    timestamp: '2026-04-17 14:32:00 UTC',
    verified: true,
  },
  {
    id: '2',
    hash: 'a4d55a8d778e5e27f7d4c306e4b365c83a2840d8e2f3c7d5b3c1c3d3d3d3d3d3',
    timestamp: '2026-04-17 13:15:22 UTC',
    verified: true,
  },
  {
    id: '3',
    hash: '2c26b46911185131006ba5991585e9e18eb276d66f9f763a7b991d537d5d59f4',
    timestamp: '2026-04-17 11:47:18 UTC',
    verified: true,
  },
];

export function VerificationLedger() {
  return (
    <div className="flex flex-col gap-4">
      <div className="space-y-1">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Recent Anchors
        </p>
        <p className="text-xs text-muted-foreground">
          {MOCK_RECORDS.length} verified on ledger
        </p>
      </div>

      <div className="space-y-2 border-t border-border pt-4">
        {MOCK_RECORDS.map((record) => (
          <LedgerItem key={record.id} record={record} />
        ))}
      </div>
    </div>
  );
}
