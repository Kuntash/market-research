import { Link } from "@tanstack/react-router";
import { useState } from "react";

const seeds = [
  { id: "ai-infra", label: "AI Infra", icon: "memory" },
  { id: "fintech", label: "Fintech", icon: "account_balance" },
  { id: "biotech", label: "BioTech", icon: "biotech" },
  { id: "geopolitics", label: "Geopolitics", icon: "public" },
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
      style={filled ? { fontVariationSettings: "'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24" } : undefined}
    >
      {children}
    </span>
  );
}

export function OnboardingPageMobile() {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedSeed, setSelectedSeed] = useState("ai-infra");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background antialiased">
      <main className="flex flex-grow flex-col pb-32">
        <div className="relative overflow-hidden bg-surface-container-low px-6 pb-12 pt-16">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_top_right,rgba(172,255,230,0.08),transparent,transparent)]" />

          <div className="relative z-10 mb-12 flex items-center gap-2">
            <div className={`h-1 w-8 rounded-full ${step === 1 ? "bg-primary" : "bg-primary/20"}`} />
            <div className={`h-1 w-8 rounded-full ${step === 2 ? "bg-primary" : "bg-primary/20"}`} />
            <div className="h-1 w-8 rounded-full bg-surface-bright" />
          </div>

          <div className="relative z-10 max-w-sm">
            <h1 className="mb-6 font-display text-[clamp(2.75rem,11vw,3.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-on-surface">
              Research first.
              <br />
              Trade when ready.
            </h1>
            <p className="text-balance text-[1.125rem] leading-[1.7] text-on-surface-variant">
              Set up a simple workspace for market research, alerts, and
              strategy execution on your own stack.
            </p>
          </div>
        </div>

        <div className="flex flex-grow flex-col px-6 py-8">
          <div className="mx-auto flex w-full max-w-md flex-grow flex-col justify-center">
            <div className="mb-8">
              <h2 className="mb-2 font-display text-3xl font-medium tracking-tight text-on-surface">
                {step === 1 ? "Create your account" : "Choose your watchlist"}
              </h2>
              <p className="text-[1rem] leading-[1.65] text-on-surface-variant">
                {step === 1
                  ? "Use your email and password to save research, alerts, and strategy settings."
                  : "Choose the themes or markets you want to monitor first."}
              </p>
            </div>

            {step === 1 ? (
              <div className="space-y-4">
                <label className="block">
                  <span className="mb-2 block font-meta-mono text-[0.75rem] uppercase tracking-[0.18em] text-on-surface-variant">
                    Email
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-outline-variant bg-surface-container/50 px-4 py-4 text-[1rem] text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block font-meta-mono text-[0.75rem] uppercase tracking-[0.18em] text-on-surface-variant">
                    Password
                  </span>
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Create a password"
                    className="w-full rounded-xl border border-outline-variant bg-surface-container/50 px-4 py-4 text-[1rem] text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </label>

                <div className="rounded-xl border border-outline-variant bg-surface-container/40 p-4">
                  <p className="font-meta-mono text-[0.75rem] uppercase tracking-[0.18em] text-primary">
                    Simple self-hosted setup
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-[1.65] text-on-surface-variant">
                    Your account keeps reports, alerts, and strategy
                    preferences in one place without making the product feel
                    complicated.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {seeds.map((seed) => {
                  const selected = seed.id === selectedSeed;

                  return (
                    <button
                      key={seed.id}
                      type="button"
                      onClick={() => setSelectedSeed(seed.id)}
                      className={`group relative flex min-h-[44px] flex-col items-start rounded-xl border p-4 text-left transition-all active:scale-[0.98] ${
                        selected
                          ? "border-primary/40 bg-primary/5"
                          : "border-outline-variant bg-surface-container/50 hover:border-outline hover:bg-surface-container"
                      }`}
                    >
                      {selected ? (
                        <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100" />
                      ) : null}
                      <MaterialSymbol
                        filled={selected}
                        className={`mb-4 ${
                          selected
                            ? "text-primary"
                            : "text-on-surface-variant transition-colors group-hover:text-on-surface"
                        }`}
                      >
                        {seed.icon}
                      </MaterialSymbol>
                      <span
                        className={`mt-auto font-meta-mono text-[0.8125rem] ${
                          selected
                            ? "text-primary"
                            : "text-on-surface-variant transition-colors group-hover:text-on-surface"
                        }`}
                      >
                        {seed.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 z-50 flex w-full items-center justify-between rounded-t-xl border-t border-outline-variant bg-surface-container-lowest/90 px-6 py-4 shadow-2xl backdrop-blur-2xl">
        {step === 1 ? (
          <Link
            to="/"
            className="flex min-h-[44px] min-w-[44px] scale-95 flex-col items-center justify-center rounded-full px-6 py-2 text-on-surface-variant transition-transform hover:bg-primary/10 active:scale-90"
          >
            <MaterialSymbol className="mb-1">arrow_back</MaterialSymbol>
            <span className="font-meta-mono text-[0.8125rem]">Back</span>
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => setStep(1)}
            className="flex min-h-[44px] min-w-[44px] scale-95 flex-col items-center justify-center rounded-full px-6 py-2 text-on-surface-variant transition-transform hover:bg-primary/10 active:scale-90"
          >
            <MaterialSymbol className="mb-1">arrow_back</MaterialSymbol>
            <span className="font-meta-mono text-[0.8125rem]">Back</span>
          </button>
        )}

        {step === 1 ? (
          <button
            type="button"
            onClick={() => setStep(2)}
            className="flex min-h-[44px] min-w-[44px] scale-95 flex-col items-center justify-center rounded-full bg-primary-container px-6 py-2 text-on-primary-container transition-transform hover:bg-primary/80 active:scale-90"
          >
            <MaterialSymbol className="mb-1">arrow_forward</MaterialSymbol>
            <span className="font-meta-mono text-[0.8125rem]">Next</span>
          </button>
        ) : (
          <button className="flex min-h-[44px] min-w-[44px] scale-95 flex-col items-center justify-center rounded-full bg-primary-container px-6 py-2 text-on-primary-container transition-transform hover:bg-primary/80 active:scale-90">
            <MaterialSymbol className="mb-1">arrow_forward</MaterialSymbol>
            <span className="font-meta-mono text-[0.8125rem]">Finish setup</span>
          </button>
        )}
      </nav>
    </div>
  );
}
