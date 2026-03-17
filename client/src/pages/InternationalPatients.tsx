import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, FileText, Stethoscope, ArrowRight } from "lucide-react";

export default function InternationalPatients() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col">
      {/* Helmet-equivalent meta via document.title */}
      {typeof document !== "undefined" && (() => {
        document.title = "Treatment in Germany for International Patients — Medical Care Germany";
        const desc = document.querySelector('meta[name="description"]');
        if (desc) desc.setAttribute("content", "Patients from outside Germany may submit medical reports for specialist review. Medical coordination in Berlin helps identify the appropriate specialist and hospital.");
        const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (canonical) canonical.href = "https://www.medicalcaregermany.com/international-patients";
        return null;
      })()}

      {/* Minimal navigation */}
      <nav className="w-full py-5 px-8 flex justify-between items-center border-b border-slate-100">
        <Link href="/">
          <span className="text-lg font-serif font-bold tracking-tight text-slate-900 cursor-pointer">
            Medical Care Germany
          </span>
        </Link>
        <Link href="/send-medical-reports">
          <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-none text-sm px-5 py-2">
            Send Medical Reports
          </Button>
        </Link>
      </nav>

      {/* Hero */}
      <section className="py-24 px-6 border-b border-slate-100 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Globe className="mx-auto text-slate-300" size={44} strokeWidth={1} />
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 leading-tight">
            Treatment in Germany for International Patients
          </h1>
          <p className="text-lg text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
            Patients from outside Germany may submit medical reports for specialist review.
            Medical coordination in Berlin can help identify the appropriate specialist and hospital.
          </p>
          <div className="pt-4">
            <Link href="/send-medical-reports">
              <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-none px-8 py-5 text-base font-light tracking-wide inline-flex items-center gap-2">
                Send Medical Reports
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif text-slate-800 mb-12 text-center">
            How the Process Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <FileText className="text-slate-300" size={36} strokeWidth={1} />
              </div>
              <h3 className="text-lg font-medium text-slate-800">Submit Medical Documentation</h3>
              <p className="text-slate-500 font-light leading-relaxed text-sm">
                Patients submit available medical reports, imaging studies, and clinical summaries
                through the secure submission interface. Documentation is reviewed in its original form.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <Stethoscope className="text-slate-300" size={36} strokeWidth={1} />
              </div>
              <h3 className="text-lg font-medium text-slate-800">Clinical Coordination Review</h3>
              <p className="text-slate-500 font-light leading-relaxed text-sm">
                A medical coordinator in Berlin reviews the submitted documentation to assess
                the clinical situation and identify the appropriate specialist discipline and
                institutional setting within Germany.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <Globe className="text-slate-300" size={36} strokeWidth={1} />
              </div>
              <h3 className="text-lg font-medium text-slate-800">Structured Access to Specialists</h3>
              <p className="text-slate-500 font-light leading-relaxed text-sm">
                Cases requiring specialist evaluation are directed to the appropriate university
                hospital or specialist center within Germany's advanced healthcare system,
                with coordination support throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Germany */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-2xl font-serif text-center">
            Why Specialist Care in Germany
          </h2>
          <p className="text-slate-300 font-light leading-relaxed text-center max-w-2xl mx-auto">
            Germany's university medical centers operate multidisciplinary clinical teams
            supported by advanced diagnostic infrastructure. Complex cases — including rare
            conditions, advanced disease stages, or situations where prior treatment has not
            achieved the desired clinical response — are reviewed within structured tumor boards
            and specialist conferences before treatment decisions are finalized.
          </p>
          <div className="grid md:grid-cols-2 gap-8 pt-4">
            <div className="border border-slate-700 p-6 space-y-3">
              <h3 className="text-base font-medium text-slate-200">Multidisciplinary Review</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                Cases are evaluated by specialist teams across multiple disciplines, ensuring
                that treatment recommendations reflect the full clinical picture rather than
                a single-specialty perspective.
              </p>
            </div>
            <div className="border border-slate-700 p-6 space-y-3">
              <h3 className="text-base font-medium text-slate-200">Advanced Diagnostic Capabilities</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                German university hospitals maintain diagnostic infrastructure — including
                molecular pathology, high-field MRI, and PET-CT — that supports precise
                characterization of complex medical conditions.
              </p>
            </div>
            <div className="border border-slate-700 p-6 space-y-3">
              <h3 className="text-base font-medium text-slate-200">Coordinated Clinical Pathways</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                Structured coordination between the referring context and the German specialist
                environment supports continuity of clinical information and reduces procedural
                uncertainty for international patients.
              </p>
            </div>
            <div className="border border-slate-700 p-6 space-y-3">
              <h3 className="text-base font-medium text-slate-200">Berlin-Based Coordination</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                Medical coordination operates from Berlin, within Germany's central clinical
                and institutional environment, supporting structured access to specialists
                across the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who can submit */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-2xl font-serif text-slate-800 text-center">
            Who May Submit Medical Reports
          </h2>
          <p className="text-slate-500 font-light leading-relaxed text-center">
            The submission process is open to international patients from any country seeking
            specialist evaluation or treatment within Germany. Cases may be submitted directly
            by patients, by family members acting on behalf of a patient, or by referring
            physicians seeking specialist consultation for their patients.
          </p>
          <p className="text-slate-500 font-light leading-relaxed text-center">
            Submissions are reviewed based on clinical documentation integrity and the complexity
            of the medical situation. Cases involving rare conditions, advanced disease stages,
            or complex surgical requirements are particularly suited to this coordination pathway.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-serif text-slate-800">
            Submit Medical Reports for Review
          </h2>
          <p className="text-slate-500 font-light leading-relaxed">
            Medical reports may be submitted through the secure submission interface.
            Cases are reviewed within 24–48 hours by a medical coordinator in Berlin.
          </p>
          <Link href="/send-medical-reports">
            <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-none px-10 py-5 text-base font-light tracking-wide inline-flex items-center gap-2 mt-2">
              Send Medical Reports
              <ArrowRight size={16} />
            </Button>
          </Link>
          <p className="text-xs text-slate-400 pt-2">
            All submissions are handled with strict clinical confidentiality.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm font-serif">Medical Care Germany © 2026</p>
        <p className="text-slate-300 text-xs mt-1">
          Operating within established clinical coordination frameworks.
        </p>
      </footer>

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Treatment in Germany for International Patients",
            "description": "Patients from outside Germany may submit medical reports for specialist review. Medical coordination in Berlin helps identify the appropriate specialist and hospital.",
            "url": "https://www.medicalcaregermany.com/international-patients",
            "about": {
              "@type": "MedicalOrganization",
              "name": "Medical Care Germany",
              "url": "https://www.medicalcaregermany.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Medical Care Germany",
              "url": "https://www.medicalcaregermany.com"
            }
          })
        }}
      />
    </div>
  );
}
