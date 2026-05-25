import { Link } from "@tanstack/react-router";
import { useState } from "react";

const seeds = [
  { id: "ai-infra", label: "AI Infra", icon: "memory" },
  { id: "fintech", label: "Fintech", icon: "payments" },
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

export function OnboardingPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedSeed, setSelectedSeed] = useState("ai-infra");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-background text-on-background md:flex-row">
      <div className="relative z-10 flex min-h-[614px] w-full flex-col justify-between overflow-hidden bg-inverse-surface p-8 text-inverse-on-surface md:min-h-screen md:w-1/2 md:p-16 lg:p-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-inverse-surface to-[#c8d4e5]" />

        <div className="flex items-center gap-3 font-display text-[24px] font-semibold tracking-tight">
          <MaterialSymbol filled className="text-inverse-on-surface">
            radar
          </MaterialSymbol>
          Market Research
        </div>

        <div className="z-10 mt-16 max-w-lg md:mt-0">
          <h1 className="mb-6 font-accent-quote text-[clamp(2.75rem,5.2vw,4.75rem)] leading-[0.95] text-inverse-on-surface">
            Research first. <br />
            <span className="italic text-on-primary-fixed">Trade when ready.</span>
          </h1>
          <p className="mb-12 max-w-md text-[1.125rem] leading-[1.7] opacity-80">
            Set up a simple workspace for market research, trading strategies,
            and alerts you can run on your own infrastructure.
          </p>

          <div className="group relative -rotate-2 rounded-[24px] border border-outline-variant/10 bg-surface p-8 text-on-surface shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-700 ease-out hover:rotate-0 md:p-10">
            <div className="mb-6 flex items-center justify-between border-b border-outline-variant/20 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-secondary-fixed" />
                <span className="font-meta-mono text-[0.8125rem] text-secondary-fixed-dim">
                  REPORT PREVIEW
                </span>
              </div>
              <span className="font-meta-mono text-[0.8125rem] text-on-surface-variant">SAMPLE</span>
            </div>

            <h3 className="mb-4 font-accent-quote text-[36px] leading-[1.1] text-on-surface transition-colors duration-500 group-hover:text-primary">
              Nvidia research note with strategy ideas
            </h3>
            <p className="line-clamp-3 text-[1rem] leading-[1.65] text-on-surface-variant">
              Recent earnings, valuation pressure, and datacenter demand are
              summarized in one place, along with a simple strategy checklist
              and follow-up alerts.
            </p>

            <div className="mt-8 flex w-max items-center gap-2 rounded-full border border-secondary-fixed-dim/30 bg-secondary-fixed/5 px-4 py-2 text-secondary-fixed-dim">
              <MaterialSymbol className="text-sm">lock</MaterialSymbol>
              <span className="font-meta-mono text-[0.8125rem]">AVAILABLE AFTER SETUP</span>
            </div>

            <div className="absolute -bottom-10 -right-10 -z-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl transition-all duration-700 group-hover:bg-primary/20" />
          </div>
        </div>

        <div className="mt-12 hidden items-center gap-4 font-meta-mono text-[0.8125rem] text-inverse-on-surface/60 md:flex">
          <span>SELF HOSTED</span>
          <span className="h-1 w-1 rounded-full bg-inverse-on-surface/40" />
          <span>PRIVATE SETUP</span>
        </div>
      </div>

      <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background p-6 md:w-1/2 md:p-12 lg:p-24">
        <div className="grid-texture pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/3 translate-x-1/3 rounded-full bg-primary/5 blur-[100px]" />

        <div className="relative z-10 flex h-full w-full max-w-md flex-col justify-center md:h-auto">
          <div className="relative mb-12 flex w-full items-center justify-between px-2">
            <div className="absolute left-6 right-6 top-1/2 -z-10 h-px -translate-y-1/2 bg-outline-variant/40" />

            <div className="flex flex-col items-center gap-3 bg-background px-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  step === 1
                    ? "bg-secondary-fixed text-on-secondary-fixed shadow-[0_0_20px_rgba(253,222,173,0.2)]"
                    : "border border-primary bg-primary/10 text-primary"
                }`}
              >
                {step === 1 ? (
                  <span className="font-meta-mono text-[0.8125rem]">1</span>
                ) : (
                  <MaterialSymbol className="text-[16px]">check</MaterialSymbol>
                )}
              </div>
              <span className={`font-meta-mono text-[11px] ${step === 1 ? "text-secondary-fixed" : "text-primary"}`}>
                ACCOUNT
              </span>
            </div>

            <div className="flex flex-col items-center gap-3 bg-background px-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full font-meta-mono text-[0.8125rem] ${
                  step === 2
                    ? "bg-secondary-fixed text-on-secondary-fixed shadow-[0_0_20px_rgba(253,222,173,0.2)]"
                    : "border border-outline-variant text-on-surface-variant"
                }`}
              >
                2
              </div>
              <span className={`font-meta-mono text-[11px] ${step === 2 ? "text-secondary-fixed" : "text-on-surface-variant"}`}>
                WATCHLIST
              </span>
            </div>

            <div className="flex flex-col items-center gap-3 bg-background px-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-outline-variant font-meta-mono text-[0.8125rem] text-on-surface-variant">
                3
              </div>
              <span className="font-meta-mono text-[11px] text-on-surface-variant">ALERTS</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-outline-variant/40 bg-surface-container/60 p-8 shadow-2xl backdrop-blur-xl md:p-10">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-secondary-fixed/30 to-transparent" />

            <div className="mb-10">
              <h2 className="mb-3 font-accent-quote text-[40px] leading-none text-on-surface">
                {step === 1 ? "Create your account" : "Choose your watchlist"}
              </h2>
              <p className="text-[1rem] leading-[1.65] text-on-surface-variant">
                {step === 1
                  ? "Use your email and password to create a local account for research, alerts, and strategy settings."
                  : "Pick the markets or themes you want to track first. You can change these later."}
              </p>
            </div>

            {step === 1 ? (
              <div className="mb-10 space-y-5">
                <label className="block">
                  <span className="mb-2 block font-meta-mono text-[0.8125rem] uppercase tracking-[0.18em] text-on-surface-variant">
                    Email
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-outline-variant/50 bg-surface-container-low px-5 py-4 text-[1rem] text-on-surface outline-none transition focus:border-secondary-fixed focus:ring-2 focus:ring-secondary-fixed/20"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block font-meta-mono text-[0.8125rem] uppercase tracking-[0.18em] text-on-surface-variant">
                    Password
                  </span>
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Create a password"
                    className="w-full rounded-2xl border border-outline-variant/50 bg-surface-container-low px-5 py-4 text-[1rem] text-on-surface outline-none transition focus:border-secondary-fixed focus:ring-2 focus:ring-secondary-fixed/20"
                  />
                </label>

                <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-low px-5 py-4">
                  <p className="font-meta-mono text-[0.75rem] uppercase tracking-[0.18em] text-secondary-fixed-dim">
                    Your data, your setup
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-[1.65] text-on-surface-variant">
                    This app is meant to be practical and self-hosted. Your
                    account keeps reports, alerts, and strategy settings tied
                    to one workspace.
                  </p>
                </div>
              </div>
            ) : (
              <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {seeds.map((seed) => {
                  const selected = seed.id === selectedSeed;

                  return (
                    <button
                      key={seed.id}
                      type="button"
                      onClick={() => setSelectedSeed(seed.id)}
                      className={`group flex items-center gap-3 rounded-2xl border p-4 text-left transition-all ${
                        selected
                          ? "border-secondary-fixed bg-secondary-fixed/10 text-secondary-fixed"
                          : "border-outline-variant/50 bg-surface-container-low text-on-surface-variant hover:border-outline hover:text-on-surface"
                      }`}
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                          selected
                            ? "bg-secondary-fixed/20 group-hover:bg-secondary-fixed/30"
                            : "bg-surface-variant group-hover:bg-surface-bright"
                        }`}
                      >
                        <MaterialSymbol filled={selected} className="text-[20px]">
                          {seed.icon}
                        </MaterialSymbol>
                      </div>
                      <span className="font-meta-mono text-[0.8125rem]">{seed.label}</span>
                    </button>
                  );
                })}
              </div>
            )}

            <div className="flex items-center justify-between border-t border-outline-variant/20 pt-6">
              {step === 1 ? (
                <Link
                  to="/"
                  className="group flex items-center gap-2 font-meta-mono text-[0.8125rem] text-on-surface-variant transition-colors hover:text-on-surface"
                >
                  <MaterialSymbol className="text-[18px] transition-transform group-hover:-translate-x-1">
                    arrow_back
                  </MaterialSymbol>
                  Back
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="group flex items-center gap-2 font-meta-mono text-[0.8125rem] text-on-surface-variant transition-colors hover:text-on-surface"
                >
                  <MaterialSymbol className="text-[18px] transition-transform group-hover:-translate-x-1">
                    arrow_back
                  </MaterialSymbol>
                  Back
                </button>
              )}

              {step === 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="group flex items-center gap-2 rounded-full bg-secondary-fixed px-6 py-3.5 font-meta-mono text-[0.8125rem] text-on-secondary-fixed shadow-[0_4px_20px_rgba(253,222,173,0.15)] transition-all hover:bg-secondary-fixed-dim hover:shadow-[0_4px_25px_rgba(253,222,173,0.25)]"
                >
                  Next
                  <MaterialSymbol className="text-[18px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </MaterialSymbol>
                </button>
              ) : (
                <button className="group flex items-center gap-2 rounded-full bg-secondary-fixed px-6 py-3.5 font-meta-mono text-[0.8125rem] text-on-secondary-fixed shadow-[0_4px_20px_rgba(253,222,173,0.15)] transition-all hover:bg-secondary-fixed-dim hover:shadow-[0_4px_25px_rgba(253,222,173,0.25)]">
                  Finish setup
                  <MaterialSymbol className="text-[18px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </MaterialSymbol>
                </button>
              )}
            </div>
          </div>

          <div className="mt-8 text-center md:hidden">
            <span className="font-meta-mono text-[0.8125rem] text-on-surface-variant/60">
              Private self-hosted setup
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
