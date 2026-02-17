import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import GovernmentalBodies from "./pages/GovernmentalBodies";
import PhysicianReferral from "./pages/PhysicianReferral";
import PrivateMedicalAdvisory from "./pages/PrivateMedicalAdvisory";
import PhysicianReferralClinical from "./pages/PhysicianReferralClinical";
import CaseArchitectures from "./pages/CaseArchitectures";
import AdvisoryAccess from "./pages/AdvisoryAccess";
import PhysicianReferralInterface from "./pages/PhysicianReferralInterface";
import InstitutionalFramework from "./pages/InstitutionalFramework";
import ProfessionalInterfaces from "./pages/ProfessionalInterfaces";
import Contact from "./pages/Contact";
import ArabicSEO from "./pages/ArabicSEO";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/governmental-bodies"} component={GovernmentalBodies} />
      <Route path={"/physician-referral"} component={PhysicianReferral} />
      <Route path={"/private-medical-advisory"} component={PrivateMedicalAdvisory} />
      <Route path={"/physician-referral-clinical"} component={PhysicianReferralClinical} />
      <Route path={"/case-architectures"} component={CaseArchitectures} />
      <Route path={"/advisory-access"} component={AdvisoryAccess} />
      <Route path={"/physician-referral-interface"} component={PhysicianReferralInterface} />
      <Route path={"/institutional-framework"} component={InstitutionalFramework} />
      <Route path={"/professional-interfaces"} component={ProfessionalInterfaces} />
      <Route path={"/contact"} component={Contact} />
      {/* Hidden Arabic SEO Landing Page - Not in navigation, indexed by Google only */}
      <Route path={"/ar"} component={ArabicSEO} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
