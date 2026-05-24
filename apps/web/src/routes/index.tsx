import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">Market Research</p>
        <h1>Research workspace, ready for the first real workflow.</h1>
        <p className="lede">
          This bare TanStack Start app is set up inside a monorepo, with routing, styling, and build
          scripts wired from the portfolio reference.
        </p>
      </section>
    </main>
  );
}
