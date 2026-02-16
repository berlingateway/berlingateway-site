import { Button } from "@/components/ui/button";
import { Building2, FileText, Shield, Lock } from "lucide-react";
import { Link } from "wouter";

export default function GovernmentalBodies() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Navigation */}
      <nav className="w-full py-6 px-8 flex justify-between items-center border-b border-slate-100">
        <Link href="/" className="text-xl font-serif font-bold tracking-tight text-slate-900">
          Medical Care Germany
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
          <Link href="/">Home</Link>
          <Link href="/physician-referral">Physician Referral</Link>
          <Link href="/governmental-bodies" className="text-slate-900">Embassies & Government</Link>
        </div>
        <a href="/#contact">
          <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 text-sm">
            Confidential Inquiry
          </Button>
        </a>
      </nav>

      {/* Hero */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-slate-400 mb-8">For Official Referring Bodies</p>
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-12 leading-tight">
          For Embassies, Government Sponsors, and Official Referring Bodies
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Diplomatic missions and sponsoring authorities may coordinate structured access to Germany's advanced hospital system through established medical advisory channels.
        </p>
      </section>

      {/* Operating Model */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-slate-900 mb-12">Operating Model</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Medical Care Germany operates as a Berlin-based strategic medical coordination office conducting:
          </p>
          <div className="space-y-4 mb-12">
            <div className="border-l-2 border-slate-300 pl-6">
              <p className="text-slate-700">Structured case evaluation</p>
            </div>
            <div className="border-l-2 border-slate-300 pl-6">
              <p className="text-slate-700">Specialist alignment</p>
            </div>
            <div className="border-l-2 border-slate-300 pl-6">
              <p className="text-slate-700">Hospital pathway coordination</p>
            </div>
            <div className="border-l-2 border-slate-300 pl-6">
              <p className="text-slate-700">Treatment oversight</p>
            </div>
            <div className="border-l-2 border-slate-300 pl-6">
              <p className="text-slate-700">Confidential reporting</p>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            All engagements operate in alignment with German healthcare standards.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Medical Care Germany does not replace hospitals or physicians.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Coordination maintains clarity, structure, and continuity across complex international treatment pathways.
          </p>
        </div>
      </section>

      {/* Why Institutions Engage */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-slate-900 mb-12">Why Institutions Engage</h2>
        <p className="text-lg text-slate-700 leading-relaxed mb-12">
          Institutional coordination typically addresses:
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Predictable Treatment Pathways</h3>
              <p className="text-slate-600 leading-relaxed">
                Structured coordination reduces uncertainty and establishes clear treatment trajectories.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Transparent Medical Communication</h3>
              <p className="text-slate-600 leading-relaxed">
                Direct channels between referring entities and German medical institutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Administrative Clarity</h3>
              <p className="text-slate-600 leading-relaxed">
                Coordination of documentation, scheduling, and institutional requirements.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Cross-Border Coordination</h3>
              <p className="text-slate-600 leading-relaxed">
                Structured interface between international sponsoring entities and German healthcare providers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Risk Reduction</h3>
              <p className="text-slate-600 leading-relaxed">
                Oversight and structured pathways minimize operational and clinical uncertainties.
              </p>
            </div>
          </div>
        </div>
        <p className="text-lg text-slate-700 leading-relaxed mt-12">
          These requirements are addressed through structured advisory frameworks.
        </p>
      </section>

      {/* Address Block */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-slate-900 mb-12">Berlin Office</h2>
          <div className="space-y-4 text-lg text-slate-700">
            <p className="font-medium text-slate-900">Medical Care Germany</p>
            <p>Perleberger Str. 41</p>
            <p>10559 Berlin – Moabit</p>
            <p>Germany</p>
          </div>
          <p className="text-slate-600 leading-relaxed mt-8">
            Strategically located in Berlin with proximity to major university hospitals and specialized treatment centers.
          </p>
        </div>
      </section>

      {/* Confidentiality Block */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="flex items-start gap-6">
          <Lock className="text-slate-300 mt-1" size={32} strokeWidth={1} />
          <div>
            <h2 className="text-2xl font-serif text-slate-900 mb-6">Confidentiality Protocols</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Institutional cases are handled under strict confidentiality protocols with controlled information flow and structured reporting when required by sponsoring entities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center bg-slate-50 border-y border-slate-200">
        <h2 className="text-2xl font-serif text-slate-900 mb-8">Institutional Coordination</h2>
        <p className="text-slate-600 leading-relaxed mb-12">
          For embassy-level or government-sponsored case coordination, please establish formal contact through our institutional intake process.
        </p>
        <a href="/#contact">
          <Button className="bg-slate-900 text-white hover:bg-slate-800 px-10 py-6 text-base">
            Establish Institutional Contact
          </Button>
        </a>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white text-center border-t border-slate-200">
        <p className="text-slate-500 text-sm font-serif mb-1">Medical Care Germany</p>
        <p className="text-slate-400 text-xs">Independent Strategic Medical Advisory • Headquartered in Berlin</p>
        <p className="text-slate-300 text-xs mt-4">© 2026 Medical Care Germany. Part of Merlin Medical Care Group (BMC).</p>
        <p className="text-slate-400 text-xs mt-6">Operating within the regulatory and clinical standards of the German healthcare environment.</p>
      </footer>

    </div>
  );
}
