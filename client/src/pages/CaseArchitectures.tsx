import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CaseArchitectures() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Navigation */}
      <nav className="w-full py-8 px-8 flex justify-between items-center border-b border-slate-200">
        <Link href="/" className="text-xl font-serif tracking-tight text-slate-900">
          Medical Care Germany
        </Link>
        <div className="hidden md:flex gap-10 text-sm text-slate-500">
          <Link href="/physician-referral-clinical">Physician Referral</Link>
          <Link href="/governmental-bodies">Embassies & Government</Link>
          <Link href="/private-medical-advisory">Private Advisory</Link>
        </div>
        <a href="/#contact">
          <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 text-sm">
            Contact
          </Button>
        </a>
      </nav>

      {/* Hero */}
      <section className="py-40 px-6 max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-slate-400 mb-12">Institutional Illustration</p>
        <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-16 leading-tight font-normal">
          Representative Case Architectures
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
          Representative case architectures illustrate how structured medical advisory can support complex clinical pathways within Germany.
        </p>
        <p className="text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto mb-6">
          Each example reflects coordination logic rather than individual patient narratives.
        </p>
        <p className="text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto">
          All cases are fully anonymized and presented for institutional illustration only.
        </p>
      </section>

      {/* Case Architectures */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        
        {/* Case 1 */}
        <div className="mb-32">
          <h2 className="text-2xl font-serif text-slate-900 mb-12 font-normal">Complex Oncology</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>International patient presenting with advanced oncological findings</p>
            <p className="pl-8">→ multidisciplinary record review</p>
            <p className="pl-8">→ alignment with German university oncology center</p>
            <p className="pl-8">→ tumor board pathway established</p>
            <p className="pl-8">→ cross-institution treatment coordination</p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-slate-300 mb-32"></div>

        {/* Case 2 */}
        <div className="mb-32">
          <h2 className="text-2xl font-serif text-slate-900 mb-12 font-normal">Diagnostic Uncertainty</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>Patient with unresolved diagnosis following multiple prior evaluations</p>
            <p className="pl-8">→ comprehensive medical documentation analysis</p>
            <p className="pl-8">→ referral to specialized diagnostic institution</p>
            <p className="pl-8">→ definitive diagnostic framework established</p>
            <p className="pl-8">→ targeted treatment pathway initiated</p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-slate-300 mb-32"></div>

        {/* Case 3 */}
        <div className="mb-32">
          <h2 className="text-2xl font-serif text-slate-900 mb-12 font-normal">High-Risk Neurosurgical Pathway</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>Patient requiring advanced neurosurgical evaluation</p>
            <p className="pl-8">→ strategic assessment of surgical options</p>
            <p className="pl-8">→ engagement with specialized neurosurgical center</p>
            <p className="pl-8">→ pre-operative coordination structured</p>
            <p className="pl-8">→ post-operative clinical pathway aligned</p>
          </div>
        </div>

      </section>

      {/* Closing Block */}
      <section className="py-32 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-slate-700 leading-relaxed mb-8">
            Structured case architecture supports clarity in complex medical environments.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Medical Care Germany operates within institutional frameworks to facilitate alignment between international patients, referring physicians, and advanced German medical centers.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white text-center border-t border-slate-200">
        <p className="text-slate-500 text-sm font-serif mb-1">Medical Care Germany</p>
        <p className="text-slate-400 text-xs">Independent Strategic Medical Advisory • Headquartered in Berlin</p>
        <p className="text-slate-300 text-xs mt-4">© 2026 Medical Care Germany. Part of Merlin Medical Care Group (BMC).</p>
      </footer>

    </div>
  );
}
