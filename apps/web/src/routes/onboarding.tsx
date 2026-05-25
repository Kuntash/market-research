import { createFileRoute } from "@tanstack/react-router";
import { OnboardingPage } from "../components/onboarding-page";
import { OnboardingPageMobile } from "../components/onboarding-page-mobile";

export const Route = createFileRoute("/onboarding")({
  component: OnboardingRoute,
});

function OnboardingRoute() {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <div className="hidden md:block">
        <OnboardingPage />
      </div>
      <div className="md:hidden">
        <OnboardingPageMobile />
      </div>
    </main>
  );
}
