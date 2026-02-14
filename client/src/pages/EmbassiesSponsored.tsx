import { Button } from "@/components/ui/button";
import { FileText, Shield, Building2, Lock, Network } from "lucide-react";
import { Link } from "wouter";

export default function EmbassiesSponsored() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Navigation */}
      <nav className="w-full py-6 px-8 flex justify-between items-center border-b border-slate-100">
        <Link href="/" className="text-xl font-serif font-bold tracking-tight text-slate-900">
          Medical Care Germany
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
          <Link href="/">Home</Link>
          <Link href="/referring-physicians">Referring Physicians</Link>
          <Link href="/embassies-sponsored" className="text-slate-900">Embassies & Sponsored Patients</Link>
        </div>
        <a href="/#contact">
          <Button variant="outline" className="rounded-none border-slate-300 text-slate-700 hover:bg-slate-50 text-sm">
            Confidential Inquiry
          </Button>
        </a>
      </nav>

      {/* Hero */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center border-b border-slate-100">
        <div className="mb-6">
          <Building2 className="mx-auto text-slate-300" size={48} strokeWidth={1} />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 mb-6 leading-tight">
          For Embassies &<br/>Sponsored Patients
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Structured medical coordination for governmental sponsors, diplomatic channels, and embassy-referred cases requiring access to Germany's advanced hospital system.
        </p>
      </section>

      {/* Institutional Positioning */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-slate-700 leading-relaxed">
            Medical Care Germany operates as an independent strategic medical advisory within the German healthcare ecosystem, providing structured coordination for medically sponsored treatment pathways.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif text-slate-900 mb-16 text-center">Coordination Framework</h2>
        
        <div className="space-y-12">
          <div className="flex gap-6 items-start">
            <div className="mt-1">
              <Network className="text-slate-400" size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Dedicated Coordination for Embassy-Referred Patients</h3>
              <p className="text-slate-600 leading-relaxed">
                Structured intake and case evaluation for patients referred through diplomatic channels, ensuring appropriate alignment with German medical institutions based on clinical requirements and treatment complexity.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="mt-1">
              <FileText className="text-slate-400" size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Structured Handling of Medical Documentation</h3>
              <p className="text-slate-600 leading-relaxed">
                Comprehensive review and organization of medical records, diagnostic imaging, and treatment history to facilitate clinical evaluation by German specialists. Documentation is managed in accordance with German healthcare data protection standards.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="mt-1">
              <Building2 className="text-slate-400" size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Alignment with Appropriate German Hospitals</h3>
              <p className="text-slate-600 leading-relaxed">
                Identification and engagement of German medical institutions with relevant clinical expertise and capacity. Coordination includes university hospitals, specialized centers, and tertiary care facilities based on case-specific requirements.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="mt-1">
              <Shield className="text-slate-400" size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Support for Medically Sponsored Treatment Pathways</h3>
              <p className="text-slate-600 leading-relaxed">
                Coordination of treatment planning, appointment scheduling, and clinical logistics for cases supported by governmental sponsors or institutional funding mechanisms. Structured oversight ensures adherence to established clinical pathways.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="mt-1">
              <Lock className="text-slate-400" size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Confidential Case Management</h3>
              <p className="text-slate-600 leading-relaxed">
                All case coordination activities are conducted under strict confidentiality protocols. Communication with embassies, sponsors, and medical institutions is managed through secure channels in accordance with diplomatic and medical privacy standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-serif text-slate-900 mb-12 text-center">Coordination Process</h2>
          
          <div className="space-y-8">
            <div className="border-l-2 border-slate-300 pl-6">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Initial Case Evaluation</h3>
              <p className="text-slate-600 leading-relaxed">
                Review of medical documentation and clinical history to establish treatment priorities and institutional requirements.
              </p>
            </div>
            
            <div className="border-l-2 border-slate-300 pl-6">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Hospital & Specialist Identification</h3>
              <p className="text-slate-600 leading-relaxed">
                Engagement with appropriate German medical institutions and specialists based on case complexity and clinical needs.
              </p>
            </div>
            
            <div className="border-l-2 border-slate-300 pl-6">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Treatment Pathway Coordination</h3>
              <p className="text-slate-600 leading-relaxed">
                Structured coordination of appointments, diagnostic procedures, and treatment planning across institutions.
              </p>
            </div>
            
            <div className="border-l-2 border-slate-300 pl-6">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Ongoing Strategic Oversight</h3>
              <p className="text-slate-600 leading-relaxed">
                Continuous monitoring of treatment progression to ensure adherence to established clinical pathways and sponsor requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-serif text-slate-900 mb-6">Institutional Inquiries</h2>
        <p className="text-slate-600 leading-relaxed mb-8">
          For embassy-level or government-sponsored case coordination, please submit a confidential inquiry through our secure intake process.
        </p>
        <a href="/#contact">
          <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-none px-8 py-6 text-base">
            Submit Confidential Inquiry
          </Button>
        </a>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50 text-center border-t border-slate-200">
        <p className="text-slate-500 text-sm font-serif mb-1">Medical Care Germany</p>
        <p className="text-slate-400 text-xs">Independent Strategic Medical Advisory • Headquartered in Berlin</p>
        <p className="text-slate-300 text-xs mt-4">© 2026 Medical Care Germany. Part of Merlin Medical Care Group (BMC).</p>
      </footer>

    </div>
  );
}
