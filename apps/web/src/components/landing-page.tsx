import { Link } from "@tanstack/react-router";

type NavItem = {
  label: string;
  active?: boolean;
};

type MarqueeItem = {
  icon: string;
  label: string;
};

type FooterLink = {
  label: string;
};

const navItems: NavItem[] = [
  { label: "Research" },
  { label: "Strategies" },
  { label: "Alerts" },
  { label: "Docs" },
];

const marqueeItems: MarqueeItem[] = [
  { icon: "assured_workload", label: "SEC EDGAR" },
  { icon: "receipt_long", label: "EARNINGS TRANSCRIPTS" },
  { icon: "forum", label: "REDDIT ALPHA" },
  { icon: "public", label: "MACRO INDICATORS" },
  { icon: "flight_takeoff", label: "SUPPLY CHAIN" },
];

const footerLinks: FooterLink[] = [
  { label: "App" },
  { label: "Strategies" },
  { label: "Docs" },
  { label: "Legal" },
];

function MaterialSymbol({
  children,
  className = "",
  filled = false,
}: {
  children: string;
  className?: string;
  filled?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined ${className}`.trim()}
      style={
        filled
          ? {
              fontVariationSettings:
                "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
            }
          : undefined
      }
    >
      {children}
    </span>
  );
}

export function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-on-surface">
      <div
        aria-hidden="true"
        className="radial-wash fixed inset-0 z-0 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="bg-grid-pattern fixed inset-0 z-0 pointer-events-none opacity-30"
      />

      <nav className="fixed left-0 right-0 top-0 z-50 mt-6 flex items-center justify-center px-4">
        <div className="flex max-w-fit items-center gap-8 rounded-full border border-outline-variant/30 bg-surface-container/60 px-6 py-3 shadow-2xl backdrop-blur-xl">
          <div className="shrink-0 font-display text-[1.125rem] font-bold tracking-[-0.03em] text-on-surface">
            Market Research
          </div>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="font-body text-[0.8125rem] font-medium uppercase tracking-[0.24em] text-on-surface-variant transition duration-300 hover:scale-105 hover:text-primary active:scale-95"
              >
                {item.label}
              </a>
            ))}
          </div>
          <Link
            
            to="/onboarding"
            className="shrink-0 rounded-full bg-primary px-5 py-2.5 font-meta-mono text-[0.8125rem] font-semibold uppercase tracking-[0.05em] transition-colors hover:bg-primary-fixed text-background"
          >
            Begin Research
          </Link>
        </div>
      </nav>

      <main className="relative z-10 flex-grow">
        <section className="mx-auto flex min-h-[921px] max-w-6xl flex-col items-center justify-center px-6 pb-32 pt-32 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-outline-variant/50 bg-surface/50 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="font-meta-mono text-[0.8125rem] uppercase tracking-[0.24em] text-on-surface-variant">
              Self-hosted
            </span>
          </div>

          <h1 className="mb-8 max-w-5xl text-balance font-display text-[clamp(3rem,5.9vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-on-surface">
            See the signals
            <span className="mx-4 inline-block h-12 w-24 translate-y-[-4px] overflow-hidden rounded-full border border-outline-variant/30 align-middle md:h-16 md:w-32">
              <img
                src="/assets/hero-inline-desktop.webp"
                alt="Abstract representation of data flows"
                className="h-full w-full object-cover opacity-80"
              />
            </span>
            others miss.
          </h1>

          <p className="mb-12 max-w-2xl text-[1.125rem] leading-[1.7] text-on-surface-variant">
            A simple self-hosted app for market research, alerts, and algo
            strategy execution. Track stocks, follow news, and connect trading
            flows through Groww APIs.
          </p>
        </section>

        <section className="mb-32 overflow-hidden border-y border-outline-variant/20 bg-surface/40 py-4 backdrop-blur-sm">
          <div className="animate-market-marquee flex w-[200%] whitespace-nowrap">
            {[0, 1].map((setIndex) => (
              <div
                key={setIndex}
                className="flex w-1/2 items-center justify-around font-meta-mono text-[0.8125rem] uppercase tracking-[0.05em] text-on-surface-variant"
              >
                {marqueeItems.map((item, itemIndex) => (
                  <div
                    key={`${setIndex}-${item.label}`}
                    className="flex items-center gap-6"
                  >
                    <span className="flex items-center gap-2">
                      <MaterialSymbol className="text-[16px]">
                        {item.icon}
                      </MaterialSymbol>
                      {item.label}
                    </span>
                    {itemIndex < marqueeItems.length - 1 ? (
                      <span>•</span>
                    ) : null}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-32 max-w-[1440px] px-6">
          <div className="grid auto-rows-[280px] grid-cols-1 gap-6 md:grid-cols-12">
            <div className="group flex flex-col justify-between rounded-[28px] border border-outline-variant/30 bg-surface-container/40 p-8 backdrop-blur-xl transition-colors hover:border-outline-variant md:col-span-4">
              <div className="flex items-start justify-between">
                <MaterialSymbol className="text-primary">radar</MaterialSymbol>
                <span className="font-meta-mono text-[0.8125rem] uppercase tracking-[0.05em] text-on-surface-variant">
                  LIVE
                </span>
              </div>
              <div>
                <h3 className="mb-2 font-display text-[clamp(2rem,3vw,3rem)] leading-[1.02] tracking-[-0.02em] text-on-surface">
                  Stock Tracking
                </h3>
                <p className="text-[1rem] leading-[1.65] text-on-surface-variant">
                  Follow the companies you care about without jumping between
                  ten tabs.
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[28px] border border-outline-variant/30 bg-surface-container-high p-8 text-center backdrop-blur-xl md:col-span-3">
              <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative font-display text-[clamp(4rem,6vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-primary">
                99<span className="text-[4.75rem]">%</span>
              </span>
              <span className="relative mt-2 font-meta-mono text-[0.8125rem] uppercase tracking-[0.24em] text-on-surface-variant">
                Less Noise
              </span>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-outline-variant/30 bg-surface-container/40 p-8 backdrop-blur-xl md:col-span-5">
              <div
                className="absolute right-0 top-0 h-full w-1/2 bg-cover bg-center opacity-30 mix-blend-screen"
                style={{
                  backgroundImage:
                    "url('/assets/temporal-analysis-desktop.webp')",
                }}
              />
              <div className="relative z-10 flex h-full w-2/3 flex-col justify-between">
                <MaterialSymbol className="text-on-surface-variant">
                  timeline
                </MaterialSymbol>
                <div>
                  <h3 className="mb-2 font-display text-[clamp(2rem,3vw,3rem)] leading-[1.02] tracking-[-0.02em] text-on-surface">
                    News Timeline
                  </h3>
                  <p className="text-[1rem] leading-[1.65] text-on-surface-variant">
                    See what changed, when it changed, and why it matters for
                    your watchlist.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8 rounded-[28px] border border-outline-variant/30 bg-surface-container/40 p-8 backdrop-blur-xl md:col-span-8 md:flex-row">
              <div className="flex-1">
                <h3 className="mb-4 font-display text-[clamp(2.75rem,4vw,4.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-on-surface">
                  Research Workspace
                </h3>
                <p className="mb-6 text-[1.125rem] leading-[1.7] text-on-surface-variant">
                  Read reports, collect notes, monitor alerts, and keep trading
                  ideas in one place instead of stitching tools together by
                  hand.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border-b border-primary/30 pb-1 font-meta-mono text-[0.8125rem] uppercase tracking-[0.05em] text-primary transition-colors hover:text-tertiary"
                >
                  See the workflow
                  <MaterialSymbol className="text-[18px]">
                    arrow_forward
                  </MaterialSymbol>
                </a>
              </div>
              <div className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-lowest md:w-1/3">
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/10 to-transparent" />
                <svg
                  className="h-full w-full text-primary opacity-40"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 50"
                >
                  <path
                    d="M0,40 Q20,30 40,45 T80,20 T100,10 L100,50 L0,50 Z"
                    fill="currentColor"
                    opacity="0.2"
                  />
                  <path
                    d="M0,40 Q20,30 40,45 T80,20 T100,10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>

            <div className="group flex cursor-pointer flex-col justify-between rounded-[28px] bg-primary p-8 text-on-primary transition-colors hover:bg-primary-fixed md:col-span-4">
              <div className="flex items-start justify-between">
                <span className="font-meta-mono text-[0.8125rem] uppercase tracking-[0.24em]">
                  Groww API
                </span>
                <MaterialSymbol>api</MaterialSymbol>
              </div>
              <div>
                <h3 className="mb-2 font-display text-[clamp(2rem,3vw,3rem)] leading-[1.02] tracking-[-0.02em]">
                  Ready to trade.
                </h3>
                <p className="text-[1rem] leading-[1.65] opacity-80">
                  Connect trading APIs and run your own execution logic.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-secondary/20 bg-secondary px-6 py-24 text-center text-on-secondary">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <MaterialSymbol className="mb-6 text-[48px] opacity-80">
              workspace_premium
            </MaterialSymbol>
            <h2 className="mb-6 font-display text-[clamp(2.75rem,4vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              Build your own setup.
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-[1.125rem] leading-[1.7] opacity-90">
              Run market research and strategy execution on your own stack, with
              direct control over data sources, alerts, and trading integrations.
            </p>
            <Link
              to="/onboarding"
              className="translate-y-0 rounded-full bg-surface px-8 py-4 font-meta-mono text-[0.8125rem] uppercase tracking-[0.24em] text-on-surface shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-surface-bright"
            >
              Start Setup
            </Link>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-outline-variant/10 bg-surface-container-lowest text-on-surface-variant transition-opacity hover:opacity-80">
        <div className="mx-auto flex max-w-[1024px] flex-col items-start justify-between px-6 py-24 md:flex-row">
          <div className="mb-8 md:mb-0">
            <div className="mb-4 font-display text-[clamp(2rem,3vw,3rem)] font-medium leading-[1.02] tracking-[-0.02em] text-on-surface">
              Market Research
            </div>
            <p className="max-w-xs font-meta-mono text-[0.8125rem] leading-[1.4] text-on-surface-variant">
              © 2024 Market Research. Self-hosted research and strategy tooling
              built for everyday use.
            </p>
          </div>

          <div className="flex flex-col gap-4 font-meta-mono text-[0.8125rem]">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className="underline underline-offset-4 transition-colors hover:text-secondary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
