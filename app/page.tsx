import { AxiomLayout } from '@/components/axiom-layout';
import { LeftPanel, RightPanel } from '@/components/axiom-panels';

export default function Home() {
  return (
    <AxiomLayout
      leftPanel={
        <LeftPanel title="Module A">
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                System Status
              </p>
              <p className="mt-2 text-sm text-foreground">
                Ready for deployment
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Configuration
              </p>
              <p className="mt-2 text-sm text-foreground">
                Production mode
              </p>
            </div>
          </div>
        </LeftPanel>
      }
      rightPanel={
        <RightPanel title="Module B">
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Operations
              </p>
              <p className="mt-2 text-sm text-foreground">
                All systems operational
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Last Updated
              </p>
              <p className="mt-2 font-mono text-xs text-foreground">
                2026-04-17 00:00:00 UTC
              </p>
            </div>
          </div>
        </RightPanel>
      }
    />
  );
}
