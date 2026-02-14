import { Button } from "@/components/ui/button";
import { Users, FileText, Network, Shield, MessageSquare } from "lucide-react";
import { Link } from "wouter";

export default function ReferringPhysicians() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Navigation */}
      <nav className="w-full py-6 px-8 flex justify-between items-center border-b border-slate-100">
        <Link href="/">
          <a className="text-xl font-serif font-bold tracking-tight text-slate-900">Medical Care Germany</a>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
          <Link href="/"><a>Home</a></Link>
          <Link href="/referring-physicians"><a className="text-slate-900">Referring Physicians</a></Link>
          <Link href="/embassies-sponsored"><a>Embassies & Sponsored Patients</a></Link>
        </div>
        <Link href="/#contact">
          <Button variant="outline" className="rounded-none border-slate-300 text-slate-700 hover:bg-slate-50 text-sm">
            Confidential Inquiry
          </Button>
        </Link>
      </nav>

      {/* Hero */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center border-b border-slate-100">
        <div className="mb-6">
          <Users className="mx-auto text-slate-300" size={48} strokeWidth={1} />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 mb-6 leading-tight">
          For Referring Physicians
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Strategic coordination partner for cross-border medical referrals requiring structured access to Germany's advanced hospital system.
        </p>
      </section>

      {/* Positioning Statement */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-slate-700 leading-relaxed">
            Medical Care Germany operates as a coordination partner—not a patient acquisition channel. Your clinical authority remains central to all treatment pathways.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif text-slate-900 mb-16 text-center">Coordination Principles</h2>
        
        <div className="space-y-12">
          <div className="flex gap-6 items-start">
            <div className="mt-1">
              <Shield className="text-slate-400" size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Respect for Referring Physician Oversight</h3>
              <p className="text-slate-600 leading-relaxed">
                All coordination activities are conducted in consultation with the referring physician. Treatment decisions remain under the clinical authority of the referring physician and German specialists. We facilitate structured communication—we do not replace medical judgment.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="mt-1">
              <Network className="text-slate-400" size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Coordinated Specialist Alignment</h3>
              <p className="text-slate-600 leading-relaxed">
                Identification and engagement of German specialists with relevant clinical expertise based on case requirements. Specialist selection is guided by clinical complexity, institutional capacity, and alignment with established treatment protocols.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="mt-1">
              <MessageSquare className="text-slate-400" size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Transparent Communication</h3>
              <p className="text-slate-600 leading-relaxed">
                Structured communication channels are established between referring physicians, German specialists, and our coordination team. Clinical updates, diagnostic findings, and treatment recommendations are shared in accordance with established protocols.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="mt-1">
              <FileText className="text-slate-400" size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Continuity of Medical Information</h3>
              <p className="text-slate-600 leading-relaxed">
                Comprehensive documentation management ensures that medical records, diagnostic imaging, and treatment history are accurately transferred between institutions. All documentation handling complies with German healthcare data protection standards and international medical privacy protocols.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="mt-1">
              <Network className="text-slate-400" size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Cross-Border Care Navigation</h3>
              <p className="text-slate-600 leading-relaxed">
                Structured coordination of logistical, administrative, and clinical requirements for cross-border treatment pathways. This includes appointment scheduling, diagnostic procedure coordination, and institutional communication—allowing referring physicians to maintain clinical oversight without operational burden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Scenarios */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-serif text-slate-900 mb-12 text-center">When Coordination May Be Appropriate</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 p-6">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Complex Oncological Cases</h3>
              <p className="text-slate-600 leading-relaxed">
                Patients requiring multidisciplinary evaluation or advanced treatment options not available locally.
              </p>
            </div>
            
            <div className="bg-white border border-slate-200 p-6">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Diagnostic Uncertainty</h3>
              <p className="text-slate-600 leading-relaxed">
                Cases where diagnosis remains unclear despite comprehensive local evaluation, requiring tertiary-level diagnostic assessment.
              </p>
            </div>
            
            <div className="bg-white border border-slate-200 p-6">
              <h3 className="text-lg font-medium text-slate-900 mb-2">High-Risk Surgical Interventions</h3>
              <p className="text-slate-600 leading-relaxed">
                Patients requiring specialized surgical expertise or advanced perioperative care infrastructure.
              </p>
            </div>
            
            <div className="bg-white border border-slate-200 p-6">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Prior Treatment Failure</h3>
              <p className="text-slate-600 leading-relaxed">
                Cases where previous treatment approaches have not achieved expected outcomes, requiring reevaluation by specialized centers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coordination Process */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-serif text-slate-900 mb-12 text-center">Coordination Process</h2>
        
        <div className="space-y-8">
          <div className="border-l-2 border-slate-300 pl-6">
            <h3 className="text-lg font-medium text-slate-900 mb-2">Initial Consultation with Referring Physician</h3>
            <p className="text-slate-600 leading-relaxed">
              Review of case details, clinical priorities, and coordination requirements in consultation with the referring physician.
            </p>
          </div>
          
          <div className="border-l-2 border-slate-300 pl-6">
            <h3 className="text-lg font-medium text-slate-900 mb-2">Specialist Identification & Engagement</h3>
            <p className="text-slate-600 leading-relaxed">
              Identification of appropriate German specialists and institutions based on clinical requirements and institutional capacity.
            </p>
          </div>
          
          <div className="border-l-2 border-slate-300 pl-6">
            <h3 className="text-lg font-medium text-slate-900 mb-2">Documentation Transfer & Case Presentation</h3>
            <p className="text-slate-600 leading-relaxed">
              Structured transfer of medical records and coordination of case presentation to German specialists.
            </p>
          </div>
          
          <div className="border-l-2 border-slate-300 pl-6">
            <h3 className="text-lg font-medium text-slate-900 mb-2">Treatment Pathway Coordination</h3>
            <p className="text-slate-600 leading-relaxed">
              Coordination of appointments, diagnostic procedures, and treatment planning in consultation with referring physician and German specialists.
            </p>
          </div>
          
          <div className="border-l-2 border-slate-300 pl-6">
            <h3 className="text-lg font-medium text-slate-900 mb-2">Ongoing Clinical Communication</h3>
            <p className="text-slate-600 leading-relaxed">
              Structured communication of clinical updates, diagnostic findings, and treatment recommendations to the referring physician.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-serif text-slate-900 mb-6">Physician-to-Physician Coordination</h2>
        <p className="text-slate-600 leading-relaxed mb-8">
          For case-specific coordination inquiries, please submit a confidential referral through our secure intake process.
        </p>
        <Link href="/#contact">
          <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-none px-8 py-6 text-base">
            Submit Confidential Referral
          </Button>
        </Link>
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
