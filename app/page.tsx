import { AxiomLayout } from '@/components/axiom-layout';
import { LeftPanel, RightPanel } from '@/components/axiom-panels';
import { ProofDropzone } from '@/components/proof-dropzone';
import { VerificationLedger } from '@/components/verification-ledger';

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
          <VerificationLedger />
        </RightPanel>
      }
    />
  );
}
