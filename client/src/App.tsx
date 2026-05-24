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
import ArabicHeaderLocked from "./components/ArabicHeaderLocked";
import ReferringDoctors from "./pages/ReferringDoctors";

// Medical Condition Pages
import BrainTumor from "./pages/conditions/BrainTumor";
import BrainTumorTreatmentArabic from "./pages/conditions/BrainTumorTreatmentArabic";
import ComplexTraumaEvaluation from "./pages/conditions/ComplexTraumaEvaluation";
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

// Arabic Symptom Entry Pages
import DizzinessLongTerm from "./pages/symptoms/DizzinessLongTerm";
import UnexplainedDizziness from "./pages/symptoms/UnexplainedDizziness";
import VertigoUnknownCause from "./pages/symptoms/VertigoUnknownCause";
import UnexplainedBalanceLoss from "./pages/symptoms/UnexplainedBalanceLoss";
import NumbnessOneSideBody from "./pages/symptoms/NumbnessOneSideBody";
import TinglingBurningSensation from "./pages/symptoms/TinglingBurningSensation";
import NervePainFace from "./pages/symptoms/NervePainFace";
import BackPainWithNumbness from "./pages/symptoms/BackPainWithNumbness";
import ChronicNeckPain from "./pages/symptoms/ChronicNeckPain";
import HeadPressureUnknown from "./pages/symptoms/HeadPressureUnknown";
import ChronicHeadacheUnknown from "./pages/symptoms/ChronicHeadacheUnknown";
import WeaknessInLimbs from "./pages/symptoms/WeaknessInLimbs";
import SuddenBodyWeakness from "./pages/symptoms/SuddenBodyWeakness";
import ParkinsonsTreatmentGermany from "./pages/symptoms/ParkinsonsTreatmentGermany";
import PediatricNeurologyGermany from "./pages/symptoms/PediatricNeurologyGermany";
import ShrapnelBrainInjuryGermany from "./pages/symptoms/ShrapnelBrainInjuryGermany";
import NerveInjuryAfterTraumaGermany from "./pages/symptoms/NerveInjuryAfterTraumaGermany";
import MedicalVisaResidencyGermany from "./pages/symptoms/MedicalVisaResidencyGermany";
import ProstheticsAfterAmputationGermany from "./pages/symptoms/ProstheticsAfterAmputationGermany";
import JointReplacementAfterTrauma from "./pages/symptoms/JointReplacementAfterTrauma";
import ComplexTraumaGermany from "./pages/symptoms/ComplexTraumaGermany";
import SurgerySecondOpinion from "./pages/symptoms/SurgerySecondOpinion";
import SecondOpinionGermany from "./pages/symptoms/SecondOpinionGermany";
import ComplexCases from "./pages/symptoms/ComplexCases";

// Geo-Intent Fertility Pages
import FertilityLibya from "./pages/conditions/FertilityLibya";
import FertilitySaudi from "./pages/conditions/FertilitySaudi";
import FertilityIraq from "./pages/conditions/FertilityIraq";
import FertilityEgypt from "./pages/conditions/FertilityEgypt";

// Fertility Cluster Pages
import FertilityHub from "./pages/conditions/FertilityHub";
import IvfGermany from "./pages/conditions/IvfGermany";
import IcsiGermany from "./pages/conditions/IcsiGermany";
import PgdGermany from "./pages/conditions/PgdGermany";
import IvfCostGermany from "./pages/conditions/IvfCostGermany";
import FailedIvfCauses from "./pages/conditions/FailedIvfCauses";
import RepeatedMiscarriage from "./pages/conditions/RepeatedMiscarriage";
import MaleInfertility from "./pages/conditions/MaleInfertility";

// General Surgery Pages
import HerniaTreatmentGermany from "./pages/conditions/HerniaTreatmentGermany";
import LaparoscopicSurgeryGermany from "./pages/conditions/LaparoscopicSurgeryGermany";
import GastrointestinalSurgeryGermany from "./pages/conditions/GastrointestinalSurgeryGermany";
import SpineSurgeryGermany from "./pages/conditions/SpineSurgeryGermany";
import MaxillofacialSurgeryGermany from "./pages/conditions/MaxillofacialSurgeryGermany";
import CorrectivePlasticSurgeryGermany from "./pages/conditions/CorrectivePlasticSurgeryGermany";
import ReconstructiveSurgeryGermany from "./pages/conditions/ReconstructiveSurgeryGermany";
import AdvancedRehabilitationGermany from "./pages/conditions/AdvancedRehabilitationGermany";
import WarInjuryRehabilitationGermany from "./pages/conditions/WarInjuryRehabilitationGermany";
import ProstheticsGermany from "./pages/conditions/ProstheticsGermany";
import SpinalRehabilitationGermany from "./pages/conditions/SpinalRehabilitationGermany";
import NeurologicalRehabilitationGermany from "./pages/conditions/NeurologicalRehabilitationGermany";
import SecondMedicalEvaluationGermany from "./pages/conditions/SecondMedicalEvaluationGermany";
import LongTermRehabilitationGermany from "./pages/conditions/LongTermRehabilitationGermany";
import OrthopedicsGermany from "./pages/conditions/OrthopedicsGermany";
import EntGermany from "./pages/conditions/EntGermany";
import EntSurgeryGermany from "./pages/conditions/EntSurgeryGermany";
import HearingImplantGermany from "./pages/conditions/HearingImplantGermany";
import TinnitusTreatmentGermany from "./pages/conditions/TinnitusTreatmentGermany";
import VoiceProsthesisGermany from "./pages/conditions/VoiceProsthesisGermany";
import HeadNeckTumorGermany from "./pages/conditions/HeadNeckTumorGermany";
import SleepApneaSnoringGermany from "./pages/conditions/SleepApneaSnoringGermany";
import PediatricEntGermany from "./pages/conditions/PediatricEntGermany";
import PediatricMedicineGermany from "./pages/conditions/PediatricMedicineGermany";
import PediatricSurgeryGermany from "./pages/conditions/PediatricSurgeryGermany";
import PediatricOrthopedicsGermany from "./pages/conditions/PediatricOrthopedicsGermany";
import PediatricRehabilitationGermany from "./pages/conditions/PediatricRehabilitationGermany";

// EN Rehabilitation Pages
import AdvancedRehabilitationEN from "./pages/rehabilitation/AdvancedRehabilitationEN";
import WarInjuryRehabilitationEN from "./pages/rehabilitation/WarInjuryRehabilitationEN";
import ProstheticsEN from "./pages/rehabilitation/ProstheticsEN";
import SpinalRehabilitationEN from "./pages/rehabilitation/SpinalRehabilitationEN";
import NeurologicalRehabilitationEN from "./pages/rehabilitation/NeurologicalRehabilitationEN";
import SecondMedicalEvaluationEN from "./pages/rehabilitation/SecondMedicalEvaluationEN";
import LongTermRehabilitationEN from "./pages/rehabilitation/LongTermRehabilitationEN";

// DE Rehabilitation Pages
import RehabilitationDE from "./pages/rehabilitation/RehabilitationDE";
import WarInjuryRehabilitationDE from "./pages/rehabilitation/WarInjuryRehabilitationDE";
import ProstheticsDE from "./pages/rehabilitation/ProstheticsDE";
import SpinalRehabilitationDE from "./pages/rehabilitation/SpinalRehabilitationDE";
import NeurologicalRehabilitationDE from "./pages/rehabilitation/NeurologicalRehabilitationDE";
import SecondMedicalEvaluationDE from "./pages/rehabilitation/SecondMedicalEvaluationDE";
import LongTermRehabilitationDE from "./pages/rehabilitation/LongTermRehabilitationDE";
import OrthopedicsEN from "./pages/rehabilitation/OrthopedicsEN";
import OrthopaedeDE from "./pages/rehabilitation/OrthopaedeDE";

// SEO Gateway Pages
import TreatmentGermanyArabPatients from "./pages/seo/TreatmentGermanyArabPatients";
import TreatmentCostGermany from "./pages/seo/TreatmentCostGermany";
import MedicalVisaGermany from "./pages/seo/MedicalVisaGermany";
import HospitalsGermanyInternational from "./pages/seo/HospitalsGermanyInternational";
import TravelForTreatmentGermany from "./pages/seo/TravelForTreatmentGermany";
import SendMedicalReportsArabic from "./pages/seo/SendMedicalReportsArabic";

// Language Fallback + 404 Prevention Pages
import GermanFallback from "./pages/GermanFallback";
import ArabicSubmitCase from "./pages/ArabicSubmitCase";

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
      <Route path={"/ar/complex-trauma-evaluation"} component={ComplexTraumaEvaluation} />
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
      {/* Arabic Symptom Entry Pages */}
      <Route path={"/ar/surgery-second-opinion"} component={SurgerySecondOpinion} />
      <Route path={"/ar/second-opinion-germany"} component={SecondOpinionGermany} />
      <Route path={"/ar/complex-cases"} component={ComplexCases} />
      <Route path={"/ar/dizziness-long-term"} component={DizzinessLongTerm} />
      <Route path={"/ar/unexplained-dizziness"} component={UnexplainedDizziness} />
      <Route path={"/ar/vertigo-unknown-cause"} component={VertigoUnknownCause} />
      <Route path={"/ar/unexplained-balance-loss"} component={UnexplainedBalanceLoss} />
      <Route path={"/ar/numbness-one-side-body"} component={NumbnessOneSideBody} />
      <Route path={"/ar/tingling-burning-sensation"} component={TinglingBurningSensation} />
      <Route path={"/ar/nerve-pain-face"} component={NervePainFace} />
      <Route path={"/ar/back-pain-with-numbness"} component={BackPainWithNumbness} />
      <Route path={"/ar/chronic-neck-pain"} component={ChronicNeckPain} />
      <Route path={"/ar/head-pressure-unknown"} component={HeadPressureUnknown} />
      <Route path={"/ar/chronic-headache-unknown"} component={ChronicHeadacheUnknown} />
      <Route path={"/ar/weakness-in-limbs"} component={WeaknessInLimbs} />
      <Route path={"/ar/sudden-body-weakness"} component={SuddenBodyWeakness} />
      <Route path={"/ar/parkinsons-treatment-germany"} component={ParkinsonsTreatmentGermany} />
      <Route path={"/ar/pediatric-neurology-germany"} component={PediatricNeurologyGermany} />
      <Route path={"/ar/shrapnel-brain-injury-germany"} component={ShrapnelBrainInjuryGermany} />
      <Route path={"/ar/nerve-injury-after-trauma-germany"} component={NerveInjuryAfterTraumaGermany} />
      <Route path={"/ar/medical-visa-residency-germany"} component={MedicalVisaResidencyGermany} />
      <Route path={"/ar/prosthetics-after-amputation-germany"} component={ProstheticsAfterAmputationGermany} />
      <Route path={"/ar/joint-replacement-after-trauma"} component={JointReplacementAfterTrauma} />
      <Route path={"/ar/complex-trauma-germany"} component={ComplexTraumaGermany} />
      {/* Fertility Cluster Routes */}
      <Route path={"/ar/fertility-treatment-germany"} component={FertilityHub} />
      <Route path={"/ar/ivf-germany"} component={IvfGermany} />
      <Route path={"/ar/icsi-germany"} component={IcsiGermany} />
      <Route path={"/ar/pgd-germany"} component={PgdGermany} />
      <Route path={"/ar/ivf-cost-germany"} component={IvfCostGermany} />
      <Route path={"/ar/failed-ivf-causes-germany"} component={FailedIvfCauses} />
      <Route path={"/ar/repeated-miscarriage-causes-germany"} component={RepeatedMiscarriage} />
      <Route path={"/ar/male-infertility-germany"} component={MaleInfertility} />
      {/* General Surgery Routes */}
      <Route path={"/ar/hernia-treatment-germany"} component={HerniaTreatmentGermany} />
      <Route path={"/ar/laparoscopic-surgery-germany"} component={LaparoscopicSurgeryGermany} />
      <Route path={"/ar/reconstructive-surgery-germany"} component={ReconstructiveSurgeryGermany} />
      <Route path={"/ar/advanced-rehabilitation-germany"} component={AdvancedRehabilitationGermany} />
      <Route path={"/ar/war-injury-rehabilitation-germany"} component={WarInjuryRehabilitationGermany} />
      <Route path={"/ar/prosthetics-germany"} component={ProstheticsGermany} />
      <Route path={"/ar/spinal-rehabilitation-germany"} component={SpinalRehabilitationGermany} />
      <Route path={"/ar/neurological-rehabilitation-germany"} component={NeurologicalRehabilitationGermany} />
      <Route path={"/ar/second-medical-evaluation-germany"} component={SecondMedicalEvaluationGermany} />
      <Route path={"/ar/long-term-rehabilitation-germany"} component={LongTermRehabilitationGermany} />
      <Route path={"/ar/orthopedics-germany"} component={OrthopedicsGermany} />
      <Route path={"/ar/ent-germany"} component={EntGermany} />
      {/* Arabic HNO/ENT Sub-Pages */}
      <Route path={"/ar/ent-surgery-germany"} component={EntSurgeryGermany} />
      <Route path={"/ar/hearing-implant-germany"} component={HearingImplantGermany} />
      <Route path={"/ar/tinnitus-treatment-germany"} component={TinnitusTreatmentGermany} />
      <Route path={"/ar/voice-prosthesis-germany"} component={VoiceProsthesisGermany} />
      <Route path={"/ar/head-neck-tumor-germany"} component={HeadNeckTumorGermany} />
      <Route path={"/ar/sleep-apnea-snoring-germany"} component={SleepApneaSnoringGermany} />
      <Route path={"/ar/pediatric-ent-germany"} component={PediatricEntGermany} />
      <Route path={"/ar/pediatric-medicine-germany"} component={PediatricMedicineGermany} />
      <Route path={"/ar/pediatric-surgery-germany"} component={PediatricSurgeryGermany} />
      <Route path={"/ar/pediatric-orthopedics-germany"} component={PediatricOrthopedicsGermany} />
      <Route path={"/ar/pediatric-rehabilitation-germany"} component={PediatricRehabilitationGermany} />
      {/* EN Rehabilitation Routes */}
      <Route path={"/en/advanced-rehabilitation-germany"} component={AdvancedRehabilitationEN} />
      <Route path={"/en/war-injury-rehabilitation-germany"} component={WarInjuryRehabilitationEN} />
      <Route path={"/en/prosthetics-germany"} component={ProstheticsEN} />
      <Route path={"/en/spinal-rehabilitation-germany"} component={SpinalRehabilitationEN} />
      <Route path={"/en/neurological-rehabilitation-germany"} component={NeurologicalRehabilitationEN} />
      <Route path={"/en/second-medical-evaluation-germany"} component={SecondMedicalEvaluationEN} />
      <Route path={"/en/long-term-rehabilitation-germany"} component={LongTermRehabilitationEN} />
      {/* DE Rehabilitation Routes */}
      <Route path={"/de/rehabilitation-deutschland"} component={RehabilitationDE} />
      <Route path={"/de/rehabilitation-kriegsverletzungen-deutschland"} component={WarInjuryRehabilitationDE} />
      <Route path={"/de/prothetik-deutschland"} component={ProstheticsDE} />
      <Route path={"/de/spinale-rehabilitation-deutschland"} component={SpinalRehabilitationDE} />
      <Route path={"/de/neurologische-rehabilitation-deutschland"} component={NeurologicalRehabilitationDE} />
      <Route path={"/de/medizinische-zweitbewertung-deutschland"} component={SecondMedicalEvaluationDE} />
      <Route path={"/de/langzeit-rehabilitation-deutschland"} component={LongTermRehabilitationDE} />
      {/* EN/DE Orthopedics Hub Routes */}
      <Route path={"/en/orthopedics-germany"} component={OrthopedicsEN} />
      <Route path={"/de/orthopaedie-deutschland"} component={OrthopaedeDE} />
      <Route path={"/ar/spine-surgery-germany"} component={SpineSurgeryGermany} />
      <Route path={"/ar/gastrointestinal-surgery-germany"} component={GastrointestinalSurgeryGermany} />
      <Route path={"/ar/maxillofacial-surgery-germany"} component={MaxillofacialSurgeryGermany} />
      <Route path={"/ar/corrective-plastic-surgery-germany"} component={CorrectivePlasticSurgeryGermany} />
      {/* Geo-Intent Fertility Routes */}
      <Route path={"/ar/fertility-treatment-libya-germany"} component={FertilityLibya} />
      <Route path={"/ar/fertility-treatment-saudi-germany"} component={FertilitySaudi} />
      <Route path={"/ar/fertility-treatment-iraq-germany"} component={FertilityIraq} />
      <Route path={"/ar/fertility-treatment-egypt-germany"} component={FertilityEgypt} />
      {/* SEO Gateway Routes */}
      <Route path={"/ar/العلاج-في-المانيا-للعرب"} component={TreatmentGermanyArabPatients} />
      <Route path={"/treatment-in-germany-arab-patients"} component={TreatmentGermanyArabPatients} />
      <Route path={"/ar/تكلفة-العلاج-في-المانيا"} component={TreatmentCostGermany} />
      <Route path={"/treatment-cost-germany"} component={TreatmentCostGermany} />
      <Route path={"/ar/فيزا-العلاج-في-المانيا"} component={MedicalVisaGermany} />
      <Route path={"/medical-visa-germany"} component={MedicalVisaGermany} />
      <Route path={"/ar/مستشفيات-المانيا-للعرب"} component={HospitalsGermanyInternational} />
      <Route path={"/hospitals-germany-international-patients"} component={HospitalsGermanyInternational} />
      <Route path={"/ar/السفر-للعلاج-في-المانيا"} component={TravelForTreatmentGermany} />
      <Route path={"/travel-for-treatment-germany"} component={TravelForTreatmentGermany} />
      <Route path={"/ar/ارسال-التقارير-الطبية"} component={SendMedicalReportsArabic} />
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

      {/* Language fallback + 404 prevention routes */}
      <Route path={"/de"} component={GermanFallback} />
      <Route path={"/ar/submit-case"} component={ArabicSubmitCase} />
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
          <ArabicHeaderLocked />
          <Router />
          <FloatingWhatsApp />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
