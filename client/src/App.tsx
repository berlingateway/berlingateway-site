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
import ArabicHome from "./pages/ArabicHome";
import SubmitCase from "./pages/SubmitCase";
import SendMedicalReports from "./pages/SendMedicalReports";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import TopBanner from "./components/TopBanner";
import ReferringDoctors from "./pages/ReferringDoctors";

// Medical Condition Pages
import BrainTumor from "./pages/conditions/BrainTumor";
import BrainTumorTreatmentArabic from "./pages/conditions/BrainTumorTreatmentArabic";
import TrigeminalNeuralgia from "./pages/conditions/TrigeminalNeuralgia";
import TrigeminalNeuralgiaArabic from "./pages/conditions/TrigeminalNeuralgiaArabic";
import NeurologyHubArabic from "./pages/conditions/NeurologyHubArabic";
import CardiologyTreatmentArabic from "./pages/conditions/CardiologyTreatmentArabic";
import SpineSurgery from "./pages/conditions/SpineSurgery";
import HerniatedDisc from "./pages/conditions/HerniatedDisc";
import HerniatedDiscEN from "./pages/conditions/HerniatedDiscEN";
import VideoLibrary from "./pages/VideoLibrary";
import BrainSurgery from "./pages/conditions/BrainSurgery";
import NeurologyTreatment from "./pages/conditions/NeurologyTreatment";
import ParkinsonTreatment from "./pages/conditions/ParkinsonTreatment";
import MultipleSclerosis from "./pages/conditions/MultipleSclerosis";
import EpilepsyTreatment from "./pages/conditions/EpilepsyTreatment";
import PediatricNeurology from "./pages/conditions/PediatricNeurology";
import LungCancer from "./pages/conditions/LungCancer";
import LungCancerArabic from "./pages/conditions/LungCancerArabic";
import BreastCancer from "./pages/conditions/BreastCancer";
import ProstateCancer from "./pages/conditions/ProstateCancer";
import ColonCancer from "./pages/conditions/ColonCancer";
import LiverCancer from "./pages/conditions/LiverCancer";
import OrthopedicSurgery from "./pages/conditions/OrthopedicSurgery";
import KneeReplacement from "./pages/conditions/KneeReplacement";
import HipReplacement from "./pages/conditions/HipReplacement";
import ScoliosisTreatment from "./pages/conditions/ScoliosisTreatment";
import SpinalStenosis from "./pages/conditions/SpinalStenosis";
import CardiologyTreatment from "./pages/conditions/CardiologyTreatment";
import HeartSurgery from "./pages/conditions/HeartSurgery";
import ArrhythmiaTreatment from "./pages/conditions/ArrhythmiaTreatment";
import CongenitalHeart from "./pages/conditions/CongenitalHeart";
import AdvancedDiagnostics from "./pages/conditions/AdvancedDiagnostics";
import SecondOpinion from "./pages/conditions/SecondOpinion";
import ComplexMedicalCases from "./pages/conditions/ComplexMedicalCases";
import TreatmentInternationalPatients from "./pages/conditions/TreatmentInternationalPatients";
import SpecialistReferral from "./pages/conditions/SpecialistReferral";
import UniversityHospitalTreatment from "./pages/conditions/UniversityHospitalTreatment";
import CancerTreatment from "./pages/conditions/CancerTreatment";
import OrthopedicTreatment from "./pages/conditions/OrthopedicTreatment";
import InternationalPatients from "./pages/InternationalPatients";

// Category Hub Pages
import NeurologyHub from "./pages/hubs/NeurologyHub";
import SpineHub from "./pages/hubs/SpineHub";
import OncologyHub from "./pages/hubs/OncologyHub";
import OrthopedicsHub from "./pages/hubs/OrthopedicsHub";
import CardiologyHub from "./pages/hubs/CardiologyHub";
import ConsultationHub from "./pages/hubs/ConsultationHub";


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
      <Route path={"/ar"} component={ArabicHome} />
      <Route path={"/submit-case"} component={SubmitCase} />
      <Route path={"/send-medical-reports"} component={SendMedicalReports} />
      <Route path={"/referring-doctors"} component={ReferringDoctors} />

      {/* Medical Condition Pages */}
      <Route path={"/brain-tumor-treatment-germany"} component={BrainTumor} />
      <Route path={"/trigeminal-neuralgia-treatment-germany"} component={TrigeminalNeuralgia} />
      <Route path={"/spine-surgery-germany"} component={SpineSurgery} />
      <Route path={"/ar/brain-tumor-treatment-germany"} component={BrainTumorTreatmentArabic} />
      <Route path={"/ar/trigeminal-neuralgia-treatment-germany"} component={TrigeminalNeuralgiaArabic} />
      <Route path={"/ar/neurology-treatment-germany"} component={NeurologyHubArabic} />
      <Route path={"/ar/cardiology-treatment-germany"} component={CardiologyTreatmentArabic} />
      <Route path={"/ar/herniated-disc"} component={HerniatedDisc} />
      <Route path={"/ar/videos"} component={VideoLibrary} />
      <Route path={"/herniated-disc-treatment-germany"} component={HerniatedDiscEN} />
      <Route path={"/brain-surgery-germany"} component={BrainSurgery} />
      <Route path={"/neurology-treatment-germany"} component={NeurologyTreatment} />
      <Route path={"/parkinson-treatment-germany"} component={ParkinsonTreatment} />
      <Route path={"/multiple-sclerosis-treatment-germany"} component={MultipleSclerosis} />
      <Route path={"/epilepsy-treatment-germany"} component={EpilepsyTreatment} />
      <Route path={"/pediatric-neurology-germany"} component={PediatricNeurology} />
      <Route path={"/lung-cancer-treatment-germany"} component={LungCancer} />
      <Route path={"/ar/lung-cancer-treatment-germany"} component={LungCancerArabic} />
      <Route path={"/breast-cancer-treatment-germany"} component={BreastCancer} />
      <Route path={"/prostate-cancer-treatment-germany"} component={ProstateCancer} />
      <Route path={"/colon-cancer-treatment-germany"} component={ColonCancer} />
      <Route path={"/liver-cancer-treatment-germany"} component={LiverCancer} />
      <Route path={"/orthopedic-surgery-germany"} component={OrthopedicSurgery} />
      <Route path={"/knee-replacement-germany"} component={KneeReplacement} />
      <Route path={"/hip-replacement-germany"} component={HipReplacement} />
      <Route path={"/scoliosis-treatment-germany"} component={ScoliosisTreatment} />
      <Route path={"/spinal-stenosis-treatment-germany"} component={SpinalStenosis} />
      <Route path={"/cardiology-treatment-germany"} component={CardiologyTreatment} />
      <Route path={"/heart-surgery-germany"} component={HeartSurgery} />
      <Route path={"/arrhythmia-treatment-germany"} component={ArrhythmiaTreatment} />
      <Route path={"/congenital-heart-treatment-germany"} component={CongenitalHeart} />
      <Route path={"/advanced-diagnostics-germany"} component={AdvancedDiagnostics} />
      <Route path={"/second-opinion-germany"} component={SecondOpinion} />
      <Route path={"/complex-medical-cases-germany"} component={ComplexMedicalCases} />
      <Route path={"/treatment-in-germany-for-international-patients"} component={TreatmentInternationalPatients} />
      <Route path={"/specialist-referral-germany"} component={SpecialistReferral} />
      <Route path={"/university-hospital-treatment-germany"} component={UniversityHospitalTreatment} />
      <Route path={"/cancer-treatment-germany"} component={CancerTreatment} />
      <Route path={"/orthopedic-treatment-germany"} component={OrthopedicTreatment} />
      <Route path={"/international-patients"} component={InternationalPatients} />

      {/* Category Hub Pages */}
      <Route path={"/neurology-germany"} component={NeurologyHub} />
      <Route path={"/spine-treatment-germany"} component={SpineHub} />
      <Route path={"/oncology-germany"} component={OncologyHub} />
      <Route path={"/orthopedics-germany"} component={OrthopedicsHub} />
      <Route path={"/cardiology-germany"} component={CardiologyHub} />
      <Route path={"/consultation-services-germany"} component={ConsultationHub} />

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
          <TopBanner />
          <Router />
          <FloatingWhatsApp />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
