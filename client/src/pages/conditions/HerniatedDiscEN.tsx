import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

export default function HerniatedDiscEN() {
  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "inherit" }}>
      <Helmet>
        <title>Herniated Disc Treatment in Germany | Medical Care Germany</title>
        <meta
          name="description"
          content="Specialist evaluation and treatment for herniated disc in Germany — microdiscectomy, endoscopic surgery, and conservative management at German university hospitals."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://medicalcaregermany.com/herniated-disc-treatment-germany" />
      </Helmet>

      <SmartNavLayer currentPath="/herniated-disc-treatment-germany" />
      <HreflangTags currentPath="/herniated-disc-treatment-germany" />

      <main className="max-w-2xl mx-auto px-5 py-12 space-y-10">

        {/* Headline */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-slate-900 leading-snug">
            Herniated Disc Treatment in Germany
          </h1>
          <p className="text-base text-slate-500 font-medium">
            Clear diagnosis. Structured decision. Focused treatment.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-100" />

        {/* Intro */}
        <section className="space-y-3">
          <p className="text-base text-slate-700 leading-relaxed">
            Lower back pain radiating to the leg? Numbness or weakness in the foot? These symptoms may indicate nerve compression caused by a herniated disc.
          </p>
          <p className="text-base text-slate-700 leading-relaxed">
            In Germany, each case is evaluated individually based on MRI imaging and clinical assessment by specialist spine surgeons.
          </p>
        </section>

        {/* Divider */}
        <div className="h-px bg-slate-100" />

        {/* Treatment */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">Treatment</h2>
          <p className="text-base text-slate-700 leading-relaxed">
            Most cases are treated conservatively — physiotherapy, targeted pain management, and structured follow-up.
          </p>
          <p className="text-base text-slate-700 leading-relaxed">
            If symptoms persist or neurological deficits appear, minimally invasive procedures such as microdiscectomy or endoscopic surgery may be recommended.
          </p>
        </section>

        {/* Divider */}
        <div className="h-px bg-slate-100" />

        {/* Decision */}
        <section>
          <div className="border-r-4 border-[#0B1F3A] pr-4">
            <p className="text-base text-slate-800 font-medium leading-relaxed">
              The key is not surgery — but correct indication. Each case is reviewed individually to determine the most appropriate approach.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-slate-100" />

        {/* CTA */}
        <section className="space-y-4">
          <p className="text-base text-slate-700">
            Submit your medical reports for clinical evaluation.
          </p>
          <Link href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer">
            <button className="w-full bg-[#0B1F3A] text-white text-base font-medium py-3 px-6 rounded-lg hover:bg-[#0d2548] transition-colors">
              Submit Medical File
            </button>
          </Link>
        </section>

      </main>
    </div>
  );
}
