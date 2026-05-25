import { Link } from "@tanstack/react-router";

const footerLinks = ["App", "Strategies", "Docs", "Legal"] as const;

const bottomNavItems = [
  { icon: "home", label: "Home", active: true, filled: true },
  { icon: "dataset", label: "Alerts", active: false, filled: false },
  { icon: "article", label: "Strategies", active: false, filled: false },
  { icon: "account_circle", label: "Profile", active: false, filled: false },
] as const;

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
      style={filled ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" } : undefined}
    >
      {children}
    </span>
  );
}

export function LandingPageMobile() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07111A] bg-[radial-gradient(circle_at_50%_-20%,rgba(110,231,200,0.05),transparent_60%)] pb-24 text-on-surface antialiased">
      <header className="fixed top-0 z-40 flex w-full items-center justify-between border-b border-outline-variant/10 bg-surface/80 px-6 py-6 backdrop-blur-md">
        <span className="font-display text-[1.125rem] font-bold tracking-[-0.03em] text-on-surface">
          Market Research
        </span>
      </header>

      <main className="mx-auto max-w-[1440px] px-6 pb-32 pt-32">
        <section className="mb-24 flex flex-col items-center text-center">
          <h1 className="mx-auto mb-6 max-w-[12ch] text-balance font-display text-[clamp(2.75rem,11vw,3.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-on-surface">
            See the signals
            <span className="mx-2 inline-block h-10 w-12 overflow-hidden rounded-full border border-outline-variant/30 align-middle shadow-lg">
              <img
                src="/assets/hero-inline-mobile.webp"
                alt="An abstract macro photograph showing complex, swirling fluid dynamics in deep navy blues and vibrant emerald greens, resembling liquid data or a microscopic energetic phenomenon. The lighting is dramatic, focusing on a single point of intense clarity amidst blurred, mysterious surroundings."
                className="h-full w-full object-cover"
              />
            </span>
            others miss.
          </h1>
          <p className="mx-auto mb-10 max-w-md text-[1.125rem] leading-[1.7] text-on-surface-variant">
            A self-hosted app for market research, alerts, and algo strategy
            execution with Groww API connectivity.
          </p>
          <Link
            to="/onboarding"
            className="min-h-[44px] w-full rounded-full bg-primary px-8 py-4 text-center text-[1rem] font-medium text-[#0a141d] shadow-[0_0_20px_rgba(110,231,200,0.3)] transition-colors hover:bg-tertiary sm:w-auto"
          >
            Begin Research
          </Link>
        </section>

        <section className="relative mb-24 border-y border-outline-variant/10 py-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#07111A] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#07111A] to-transparent" />
          <div className="market-marquee flex overflow-hidden gap-8 select-none">
            {[0, 1].map((setIndex) => (
              <div
                key={setIndex}
                aria-hidden={setIndex === 1}
                className="market-marquee-content flex min-w-full justify-around gap-8 font-meta-mono text-[0.8125rem] text-on-surface-variant opacity-60"
              >
                <span>SEC EDGAR</span>
                <span>•</span>
                <span>Earnings Transcripts</span>
                <span>•</span>
                <span>Reddit Alpha</span>
                <span>•</span>
                <span>Macro Indicators</span>
                <span>•</span>
                <span>Supply Chain</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-32 flex flex-col gap-4">
          <div className="glass-panel group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-[28px] p-6">
            <div className="absolute right-[-2.5rem] top-[-2.5rem] h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
            <div className="relative z-10 mb-12 flex items-start justify-between">
              <span className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-meta-mono text-[0.8125rem] text-primary">
                LIVE
              </span>
              <MaterialSymbol className="text-outline">radar</MaterialSymbol>
            </div>
            <div className="relative z-10">
              <h3 className="mb-2 font-display text-[2rem] leading-[1.02] tracking-[-0.02em] text-on-surface">
                Stock Tracking
              </h3>
              <p className="text-[1rem] leading-[1.65] text-on-surface-variant">
                Keep important stocks in one place and follow updates without
                the clutter.
              </p>
            </div>
          </div>

          <div className="glass-panel flex min-h-[200px] flex-col justify-between rounded-[28px] p-6">
            <div className="mb-8 flex items-start justify-between">
              <MaterialSymbol className="text-outline">filter_alt</MaterialSymbol>
            </div>
            <div>
              <div className="mb-2 font-display text-[4rem] font-bold leading-none text-on-surface">99%</div>
              <p className="text-[1rem] leading-[1.65] text-on-surface-variant">
                Less noise. Faster research.
              </p>
            </div>
          </div>

          <div className="glass-panel relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-[28px] p-6">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(172,255,230,0.18),rgba(10,20,29,0.55),rgba(10,20,29,0.92))]" />
            <div className="relative z-10 mb-12 flex items-start justify-between">
              <MaterialSymbol className="text-outline">history</MaterialSymbol>
            </div>
            <div className="relative z-10">
              <h3 className="mb-2 font-display text-[2rem] leading-[1.02] tracking-[-0.02em] text-on-surface">
                News Timeline
              </h3>
              <p className="text-[1rem] leading-[1.65] text-on-surface-variant">
                Review what changed across news, filings, and internet mentions.
              </p>
            </div>
          </div>

          <div className="glass-panel relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-[28px] p-6">
            <div className="absolute inset-x-0 bottom-0 flex h-32 items-end px-4 opacity-40 mix-blend-screen">
              <div className="relative h-full w-full">
                <svg className="h-full w-full fill-none stroke-primary" preserveAspectRatio="none" strokeWidth="0.5" viewBox="0 0 100 40">
                  <path d="M0 40 Q 20 10, 40 30 T 80 10 T 100 20" />
                  <path d="M0 40 Q 30 20, 50 35 T 90 15 T 100 30" stroke="rgba(110,231,200,0.5)" strokeWidth="0.2" />
                </svg>
                <div className="absolute bottom-0 h-full w-full bg-gradient-to-t from-surface/80 to-transparent" />
              </div>
            </div>
            <div className="relative z-10 mb-12 flex items-start justify-between">
              <MaterialSymbol className="text-outline">show_chart</MaterialSymbol>
            </div>
            <div className="relative z-10">
              <h3 className="mb-2 font-display text-[2rem] leading-[1.02] tracking-[-0.02em] text-on-surface">
                Research Workspace
              </h3>
              <p className="text-[1rem] leading-[1.65] text-on-surface-variant">
                Organize reports, strategies, and alerts in one simple
                workflow.
              </p>
            </div>
          </div>

          <div className="flex min-h-[200px] flex-col justify-between rounded-[28px] bg-primary p-6 text-surface-container-lowest">
            <div className="mb-12 flex items-start justify-between">
              <span className="rounded-full border border-surface-container-lowest/30 px-3 py-1 font-meta-mono text-[0.8125rem]">
                v2.0
              </span>
              <MaterialSymbol>api</MaterialSymbol>
            </div>
            <div>
              <h3 className="mb-2 font-display text-[2rem] font-bold leading-[1.02] tracking-[-0.02em]">
                Groww Ready
              </h3>
              <p className="mb-4 text-[1rem] leading-[1.65] opacity-80">
                Connect trading APIs and run your own strategy logic.
              </p>
              <button className="flex items-center gap-2 font-meta-mono text-[0.8125rem] underline decoration-surface-container-lowest/50 underline-offset-4 transition-colors hover:decoration-surface-container-lowest">
                View Documentation
                <MaterialSymbol className="text-sm">arrow_forward</MaterialSymbol>
              </button>
            </div>
          </div>
        </section>

        <section className="glass-panel relative mb-32 overflow-hidden rounded-3xl p-8 text-center">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-20 rounded-full bg-secondary/10 blur-3xl" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container">
              <MaterialSymbol filled className="text-3xl text-secondary">
                emoji_events
              </MaterialSymbol>
            </div>
            <h2 className="mb-6 max-w-sm font-accent-quote text-[2rem] leading-[1.2] text-on-surface">
              Build your own setup.
            </h2>
            <p className="mb-8 max-w-md text-[1rem] leading-[1.65] text-on-surface-variant">
              Self-host the app, plug in your research flow, and connect
              execution when you are ready.
            </p>
            <Link
              to="/onboarding"
              className="min-h-[44px] w-full rounded-full border border-outline-variant/50 bg-surface-container-highest px-8 py-4 text-center text-[1rem] font-medium text-on-surface transition-colors hover:bg-surface-bright sm:w-auto"
            >
              Start Setup
            </Link>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-outline-variant/10 bg-surface">
        <div className="mx-auto flex max-w-[1024px] flex-col items-center gap-8 px-6 py-12 text-center">
          <span className="font-display text-[clamp(2rem,8vw,3rem)] font-medium leading-[1.02] tracking-[-0.02em] text-on-surface">
            Market Research
          </span>
          <div className="flex flex-col gap-4 font-meta-mono text-[0.8125rem] text-on-surface-variant">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="p-2 underline underline-offset-4 transition-opacity hover:text-secondary hover:opacity-80"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="mt-8 font-meta-mono text-[0.8125rem] text-on-surface-variant/50">
            © 2024 Market Research.
            <br />
            Self-hosted research and strategy tooling.
          </p>
        </div>
      </footer>

      <nav className="glass-panel fixed bottom-6 left-1/2 z-50 flex w-[90%] max-w-sm -translate-x-1/2 items-center justify-between rounded-full p-2 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        {bottomNavItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex w-1/4 flex-col items-center p-2 ${
              item.active ? "text-primary" : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <MaterialSymbol filled={item.filled} className="text-xl">
              {item.icon}
            </MaterialSymbol>
            <span className="mt-1 font-meta-mono text-[10px]">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
