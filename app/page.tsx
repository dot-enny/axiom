import { AxiomLayout } from '@/components/axiom-layout';
import { LeftPanel, RightPanel } from '@/components/axiom-panels';
import { ProofDropzone } from '@/components/proof-dropzone';

export default function Home() {
  return (
    <AxiomLayout
      leftPanel={
        <LeftPanel title="Proof of Work">
          <ProofDropzone />
        </LeftPanel>
      }
      rightPanel={
        <RightPanel title="Verification Log">
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Status
              </p>
              <p className="mt-2 text-sm text-foreground">
                Ready for verification
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Last Anchor
              </p>
              <p className="mt-2 font-mono text-xs text-foreground">
                No anchors recorded
              </p>
            </div>
          </div>
        </RightPanel>
      }
    />
  );
}
