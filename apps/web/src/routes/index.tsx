import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "../components/landing-page";
import { LandingPageMobile } from "../components/landing-page-mobile";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <div className="hidden md:block">
        <LandingPage />
      </div>
      <div className="md:hidden">
        <LandingPageMobile />
      </div>
    </main>
  );
}
