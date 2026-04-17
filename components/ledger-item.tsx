'use client';

import { VerificationRecord } from './verification-ledger';

interface LedgerItemProps {
  record: VerificationRecord;
}

function VerifiedBadge() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="h-2 w-2 bg-foreground" />
      <span className="font-mono text-xs uppercase tracking-widest text-foreground">
        Verified
      </span>
    </div>
  );
}

function TruncatedHash({ hash }: { hash: string }) {
  const truncated = `${hash.slice(0, 12)}...${hash.slice(-12)}`;
  
  return (
    <span className="font-mono text-xs text-foreground">
      {truncated}
    </span>
  );
}

function Timestamp({ timestamp }: { timestamp: string }) {
  return (
    <span className="font-mono text-xs text-muted-foreground">
      {timestamp}
    </span>
  );
}

export function LedgerItem({ record }: LedgerItemProps) {
  return (
    <div className="flex items-center justify-between border border-border px-4 py-3">
      <div className="flex flex-col gap-1.5">
        <TruncatedHash hash={record.hash} />
        <Timestamp timestamp={record.timestamp} />
      </div>
      <VerifiedBadge />
    </div>
  );
}
