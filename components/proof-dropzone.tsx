'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ProofState {
  file: File | null;
  hash: string | null;
  isDragActive: boolean;
  status: 'idle' | 'processing' | 'complete';
}

const generateMockHash = () => {
  return 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3';
};

export function ProofDropzone() {
  const [state, setState] = useState<ProofState>({
    file: null,
    hash: null,
    isDragActive: false,
    status: 'idle',
  });

  const handleDragEnter = () => {
    setState((prev) => ({ ...prev, isDragActive: true }));
  };

  const handleDragLeave = () => {
    setState((prev) => ({ ...prev, isDragActive: false }));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, isDragActive: false }));

    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      triggerProcessing(droppedFile);
    }
  };

  const handleDropzoneClick = () => {
    if (state.status === 'idle') {
      const mockFile = new File([], 'System_Architecture.pdf', { type: 'application/pdf' });
      triggerProcessing(mockFile);
    }
  };

  const triggerProcessing = (file: File) => {
    setState((prev) => ({
      ...prev,
      file,
      status: 'processing',
    }));

    setTimeout(() => {
      const mockHash = generateMockHash();
      setState((prev) => ({
        ...prev,
        hash: mockHash,
        status: 'complete',
      }));
    }, 1500);
  };

  const handleAnchorClick = () => {
    alert('Soroban Wallet Invocation Triggered');
  };

  return (
    <div className="space-y-6">
      <DropArea
        isDragActive={state.isDragActive}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        fileName={state.file?.name}
        onClick={handleDropzoneClick}
        isProcessing={state.status === 'processing'}
      />

      {state.status === 'processing' && <ProcessingIndicator />}

      {state.status === 'complete' && state.hash && (
        <HashOutput fileName={state.file?.name || ''} hash={state.hash} />
      )}

      {state.status === 'complete' && state.hash && (
        <AnchorButton onClick={handleAnchorClick} />
      )}
    </div>
  );
}

interface DropAreaProps {
  isDragActive: boolean;
  onDragEnter: () => void;
  onDragLeave: () => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  fileName?: string;
  onClick: () => void;
  isProcessing: boolean;
}

function DropArea({
  isDragActive,
  onDragEnter,
  onDragLeave,
  onDrop,
  fileName,
  onClick,
  isProcessing,
}: DropAreaProps) {
  return (
    <div
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onClick={onClick}
      className={`border-2 border-dashed rounded-lg p-12 transition-all cursor-pointer ${
        isDragActive
          ? 'border-foreground bg-card'
          : 'border-border bg-transparent'
      } ${isProcessing ? 'opacity-50' : ''}`}
    >
      <div className="text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
          {fileName ? 'File Selected' : 'Drop file to generate SHA-256 hash'}
        </p>
        {fileName && (
          <p className="mt-3 break-words font-mono text-xs text-foreground">
            {fileName}
          </p>
        )}
      </div>
    </div>
  );
}

interface HashOutputProps {
  fileName: string;
  hash: string;
}

function HashOutput({ fileName, hash }: HashOutputProps) {
  return (
    <div className="border border-border rounded-lg p-6">
      <div className="space-y-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Input File
          </p>
          <p className="mt-2 break-words font-mono text-xs text-foreground">
            {fileName}
          </p>
        </div>

        <div className="border-t border-border pt-4">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            SHA-256 Hash
          </p>
          <div className="mt-3 rounded-md bg-card p-3">
            <p className="break-all font-mono text-xs text-foreground">
              {hash}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface AnchorButtonProps {
  onClick: () => void;
}

function AnchorButton({ onClick }: AnchorButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="w-full border border-foreground bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-widest text-background transition-all hover:bg-transparent hover:text-foreground"
    >
      Anchor to Soroban
    </button>
  );
}

function ProcessingIndicator() {
  return (
    <div className="border border-border rounded-lg p-6 text-center">
      <p className="font-mono text-sm uppercase tracking-widest text-foreground">
        GENERATING HASH...
      </p>
    </div>
  );
}
