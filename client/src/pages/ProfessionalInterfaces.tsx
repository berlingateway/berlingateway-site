import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ProfessionalInterfaces() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Navigation */}
      <nav className="w-full py-6 px-8 flex justify-between items-center border-b border-slate-100">
        <Link href="/">
          <span className="text-xl font-serif font-normal tracking-tight text-slate-900 cursor-pointer">Medical Care Germany</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
          <Link href="/physician-referral-interface" className="hover:text-slate-900 transition-colors">Physician Referral</Link>
          <Link href="/governmental-bodies" className="hover:text-slate-900 transition-colors">Embassies & Government</Link>
          <Link href="/private-advisory" className="hover:text-slate-900 transition-colors">Private Advisory</Link>
          <Link href="/institutional-framework" className="hover:text-slate-900 transition-colors">Institutional Framework</Link>
        </div>
        <Link href="/gateway">
          <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
            Confidential Inquiry
          </Button>
        </Link>
      </nav>

      {/* Page Header */}
      <section className="py-32 px-6 max-w-3xl mx-auto text-center border-b border-slate-100">
        <h1 className="text-4xl md:text-5xl font-serif font-normal text-slate-900 leading-tight mb-8">
          Professional Interfaces
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          Structured coordination pathways for institutional and clinical engagement.
        </p>
      </section>

      {/* Interaction Types */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <div className="space-y-16">
          
          {/* Interface 1 */}
          <div className="border-l-2 border-slate-300 pl-8">
            <h2 className="text-2xl font-serif font-normal text-slate-900 mb-4">Referring Physicians</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Structured clinical coordination for cross-border treatment pathways requiring institutional alignment within Germany's hospital system.
            </p>
          </div>

          {/* Interface 2 */}
          <div className="border-l-2 border-slate-300 pl-8">
            <h2 className="text-2xl font-serif font-normal text-slate-900 mb-4">Embassies & Government Sponsors</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Formal coordination support for sponsored medical cases requiring diplomatic-level oversight and institutional accountability.
            </p>
          </div>

          {/* Interface 3 */}
          <div className="border-l-2 border-slate-300 pl-8">
            <h2 className="text-2xl font-serif font-normal text-slate-900 mb-4">International Patients with Complex Medical Needs</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Independent medical advisory for medically complex cases where structured coordination materially influences treatment direction.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white text-center border-t border-slate-100 mt-32">
        <p className="text-slate-400 text-sm font-serif">Medical Care Germany</p>
        <p className="text-slate-300 text-xs mt-2">Strategic Medical Coordination • Berlin, Germany</p>
        <p className="text-slate-400 text-xs mt-6">Operating within the regulatory and clinical standards of the German healthcare environment.</p>
      </footer>

    </div>
  );
}
