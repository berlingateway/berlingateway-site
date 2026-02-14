import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { ShieldCheck, Activity, Users, FileText, Lock, Building2, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const submitCase = trpc.case.submit.useMutation();



  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-200">
      
      {/* Navigation */}
      <nav className="w-full py-6 px-8 flex justify-between items-center border-b border-slate-100">
        <Link href="/" className="text-xl font-serif font-bold tracking-tight text-slate-900">
          Medical Care Germany
        </Link>
        <div className="hidden md:flex gap-10 text-sm text-slate-500">
          <Link href="/physician-referral-clinical" className="hover:text-slate-900 transition-colors">Physician Referral</Link>
          <Link href="/governmental-bodies" className="hover:text-slate-900 transition-colors">Embassies & Government</Link>
          <Link href="/private-medical-advisory" className="hover:text-slate-900 transition-colors">Private Advisory</Link>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>
        <a href="#contact">
          <Button variant="outline" className="rounded-none border-slate-300 text-slate-700 hover:bg-slate-50 text-sm">
            Confidential Inquiry
          </Button>
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <div>
          <div className="mb-4">
            <p className="text-sm uppercase tracking-wider text-slate-400 font-medium">Berlin-Based Strategic Medical Advisory</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 leading-tight mb-6">
            Structured Access to Germany's<br/>Advanced Hospital System
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Medical Care Germany is an independent strategic medical advisory headquartered in Berlin, supporting international patients with structured access to Germany's advanced hospital system.
          </p>
          
          <div className="flex justify-center mb-12">
            <div className="h-12 w-[1px] bg-slate-200"></div>
          </div>
        </div>
      </section>

      {/* Authority Strip */}
      <section className="py-6 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Trusted for structured medical access by international patients, governmental sponsors, and diplomatic referrals. Operating within the German healthcare ecosystem.
          </p>
        </div>
      </section>

      {/* Elite Entry Filter */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-4">
            For High-Risk, Complex, and Time-Sensitive Medical Cases Only
          </h2>
          <p className="text-slate-600 text-lg">
            Engagement is selective and based on strategic case evaluation.
          </p>
        </div>
      </section>

      {/* Institutional Backing */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="bg-slate-50 border border-slate-200 p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <Building2 className="text-slate-400 mt-1" size={28} strokeWidth={1.5} />
            <div>
              <h3 className="text-xl font-serif text-slate-900 mb-3">Institutional Backing</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Medical Care Germany is part of Merlin Medical Care Group (BMC), a Berlin-based healthcare coordination organization.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Operating in alignment with German healthcare regulations and international patient standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision-Level Support */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-serif text-slate-900 mb-6 text-center">Decision-Level Support</h2>
          <p className="text-lg text-slate-700 leading-relaxed text-center">
            We support embassies, governmental sponsors, and referring physicians in navigating complex treatment pathways within Germany.
          </p>
        </div>
      </section>

      {/* Institutional Foundations */}
      <section className="py-32 px-6 max-w-5xl mx-auto bg-slate-50 border-y border-slate-200">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif text-slate-900 mb-16">Institutional Foundations</h2>
        </div>

        {/* Clinical Alignment */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif text-slate-900 mb-6">Clinical Alignment</h3>
          <p className="text-lg text-slate-700 leading-relaxed">
            Medical Care Germany operates in structured coordination with accredited German hospitals, university medical centers, and specialized treatment institutions in accordance with national healthcare frameworks.
          </p>
        </div>

        {/* Operational Discipline */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif text-slate-900 mb-6">Operational Discipline</h3>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Each case follows a defined advisory pathway:
          </p>
          <div className="space-y-4 mb-8">
            <div className="border-l-2 border-slate-300 pl-6">
              <p className="text-slate-700">Medical file intake</p>
            </div>
            <div className="border-l-2 border-slate-300 pl-6">
              <p className="text-slate-700">Structured documentation review</p>
            </div>
            <div className="border-l-2 border-slate-300 pl-6">
              <p className="text-slate-700">Specialist identification</p>
            </div>
            <div className="border-l-2 border-slate-300 pl-6">
              <p className="text-slate-700">Treatment pathway formation</p>
            </div>
            <div className="border-l-2 border-slate-300 pl-6">
              <p className="text-slate-700">Coordination oversight</p>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The organization prioritizes clarity, risk awareness, and continuity of care.
          </p>
        </div>

        {/* Confidential Case Handling */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif text-slate-900 mb-6">Confidential Case Handling</h3>
          <p className="text-lg text-slate-700 leading-relaxed">
            All medical documentation is processed under strict confidentiality protocols. Information flow is controlled and shared only with authorized medical entities involved in the treatment pathway.
          </p>
        </div>

        {/* International Case Experience */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif text-slate-900 mb-6">International Case Experience</h3>
          <p className="text-lg text-slate-700 leading-relaxed">
            Medical Care Germany supports patients originating from the Gulf region, North Africa, diplomatic channels, and private sponsorship structures through structured medical coordination within Germany's healthcare system.
          </p>
        </div>

        {/* Strategic Positioning Line */}
        <div className="text-center pt-12 border-t border-slate-300">
          <p className="text-3xl font-serif text-slate-800 leading-relaxed italic">
            "A structured medical pathway is not created by chance — it is designed, governed, and supervised."
          </p>
        </div>
      </section>

      {/* Institutional Trust & Governance */}
      <section className="py-32 px-6 max-w-5xl mx-auto bg-white">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif text-slate-900 mb-8 font-normal">Institutional Alignment & Governance</h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-6">
            Medical Care Germany operates within structured professional frameworks aligned with German healthcare standards and international patient coordination practices.
          </p>
          <p className="text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto">
            Engagement is guided by clinical appropriateness, institutional compatibility, and operational discretion.
          </p>
        </div>

        {/* Trust Blocks */}
        <div className="space-y-20">
          {/* 1. System Alignment Statement */}
          <div>
            <h3 className="text-2xl font-serif text-slate-900 mb-6 font-normal">System Alignment</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Case coordination follows established clinical pathways and institutional protocols within the German healthcare system.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Medical Care Germany operates as a structured interface supporting access to advanced medical institutions.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              The organization does not replace medical providers and does not deliver clinical treatment.
            </p>
          </div>

          {/* 2. Professional Network Positioning */}
          <div>
            <h3 className="text-2xl font-serif text-slate-900 mb-6 font-normal">Professional Network</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Collaboration occurs with accredited hospitals, university medical centers, and specialized physicians based on medical requirements.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Institutional selection is determined by clinical appropriateness and treatment pathway compatibility.
            </p>
          </div>

          {/* 3. Clinical Governance */}
          <div>
            <h3 className="text-2xl font-serif text-slate-900 mb-6 font-normal">Clinical Governance</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Documentation integrity is maintained through structured review processes and adherence to medical decision frameworks.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Case coordination follows defined protocols to preserve accuracy, continuity, and secure information flow between institutions.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              All processes operate within established clinical governance standards.
            </p>
          </div>

          {/* 4. Confidentiality Infrastructure */}
          <div>
            <h3 className="text-2xl font-serif text-slate-900 mb-6 font-normal">Confidentiality Infrastructure</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Strict data protection standards aligned with German healthcare regulations govern all case handling.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Medical documentation is processed under confidentiality protocols designed for institutional and governmental coordination.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Information flow is controlled and shared only with authorized medical entities involved in the treatment pathway.
            </p>
          </div>

          {/* 5. Referral Ecosystem Signal */}
          <div>
            <h3 className="text-2xl font-serif text-slate-900 mb-6 font-normal">Referral Ecosystem</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              The platform supports embassies, governmental sponsors, and referring physicians in navigating complex treatment pathways within Germany.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Coordination services facilitate structured access to advanced medical institutions for medically complex international cases.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Engagement operates within professional referral frameworks aligned with institutional healthcare practices.
            </p>
          </div>

          {/* Institutional Backing */}
          <div className="pt-12 border-t border-slate-300">
            <h3 className="text-2xl font-serif text-slate-900 mb-8 font-normal">Institutional Backing</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Medical Care Germany is powered by Merlin Medical Care (BMC), a Berlin-based healthcare coordination group.
            </p>
            <div className="bg-slate-50 border border-slate-200 p-8">
              <p className="text-base text-slate-600 mb-2">Address:</p>
              <p className="text-lg text-slate-900">Perleberger Str. 41</p>
              <p className="text-lg text-slate-900">10559 Berlin</p>
              <p className="text-lg text-slate-900 mb-6">Germany</p>
              <p className="text-base text-slate-600 leading-relaxed">
                This institutional foundation supports operational continuity and structured case governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Typically Support */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-slate-900 mb-4">Who We Typically Support</h2>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Supporting international referrals, diplomatic channels, and medically sponsored cases requiring structured clinical coordination.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="space-y-3">
            <CheckCircle2 className="text-slate-400" size={24} strokeWidth={1.5} />
            <h3 className="text-lg font-medium text-slate-900">Oncology</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Complex cancer cases requiring multidisciplinary evaluation and treatment planning.
            </p>
          </div>
          <div className="space-y-3">
            <CheckCircle2 className="text-slate-400" size={24} strokeWidth={1.5} />
            <h3 className="text-lg font-medium text-slate-900">Neurosurgery</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              High-risk neurological conditions requiring specialized surgical intervention.
            </p>
          </div>
          <div className="space-y-3">
            <CheckCircle2 className="text-slate-400" size={24} strokeWidth={1.5} />
            <h3 className="text-lg font-medium text-slate-900">Advanced Orthopedics</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Complex musculoskeletal conditions requiring advanced surgical techniques.
            </p>
          </div>
          <div className="space-y-3">
            <CheckCircle2 className="text-slate-400" size={24} strokeWidth={1.5} />
            <h3 className="text-lg font-medium text-slate-900">Multi-Specialty Conditions</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Cases requiring coordinated care across multiple medical disciplines.
            </p>
          </div>
          <div className="space-y-3">
            <CheckCircle2 className="text-slate-400" size={24} strokeWidth={1.5} />
            <h3 className="text-lg font-medium text-slate-900">Diagnostic Uncertainty</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Situations where diagnosis remains unclear despite prior medical evaluation.
            </p>
          </div>
          <div className="space-y-3">
            <CheckCircle2 className="text-slate-400" size={24} strokeWidth={1.5} />
            <h3 className="text-lg font-medium text-slate-900">Prior Treatment Failure</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Cases where previous treatment approaches have not achieved expected outcomes.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-slate-700 text-lg leading-relaxed max-w-3xl mx-auto">
            We prioritize medically complex situations where structured oversight can significantly improve treatment direction.
          </p>
        </div>
      </section>

      {/* Role Clarity - 4 Pillars */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-16 text-center">Our Role</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-4">
              <Activity className="text-slate-400 mb-4" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-medium">Strategic Case Evaluation</h3>
              <p className="text-slate-400 font-light leading-relaxed text-sm">
                Comprehensive review of medical documentation, diagnostic findings, and treatment history to establish clinical priorities.
              </p>
            </div>
            <div className="space-y-4">
              <Users className="text-slate-400 mb-4" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-medium">Hospital & Specialist Alignment</h3>
              <p className="text-slate-400 font-light leading-relaxed text-sm">
                Identification and engagement of appropriate German medical institutions and specialists based on case requirements.
              </p>
            </div>
            <div className="space-y-4">
              <FileText className="text-slate-400 mb-4" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-medium">Medical Coordination</h3>
              <p className="text-slate-400 font-light leading-relaxed text-sm">
                Structured coordination of clinical appointments, diagnostic procedures, and treatment planning across institutions.
              </p>
            </div>
            <div className="space-y-4">
              <ShieldCheck className="text-slate-400 mb-4" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-medium">Strategic Oversight</h3>
              <p className="text-slate-400 font-light leading-relaxed text-sm">
                Ongoing monitoring of treatment progression to ensure adherence to established clinical pathways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Institutions Trust */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-slate-900 mb-16 text-center">Why Institutions Trust Structured Medical Advisors</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">Clinical Pathway Governance</h3>
              <p className="text-slate-600 leading-relaxed">
                Structured oversight ensures that treatment pathways adhere to established clinical protocols and institutional standards. Coordination activities are guided by medical evidence and institutional capacity rather than commercial considerations.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">Documentation Integrity</h3>
              <p className="text-slate-600 leading-relaxed">
                Comprehensive management of medical records, diagnostic imaging, and treatment history ensures continuity of information across institutions. Documentation handling complies with German healthcare data protection standards.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">Coordination Across Providers</h3>
              <p className="text-slate-600 leading-relaxed">
                Structured communication channels facilitate coordination between referring physicians, German specialists, and institutional administrators. This reduces operational burden while maintaining clinical oversight.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">Operational Discretion</h3>
              <p className="text-slate-600 leading-relaxed">
                All coordination activities are conducted under strict confidentiality protocols appropriate for diplomatic, governmental, and high-level medical referrals. Case management adheres to international privacy standards.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">Alignment with Advanced Healthcare Systems</h3>
              <p className="text-slate-600 leading-relaxed">
                Operating within the German healthcare ecosystem enables structured access to university hospitals, specialized centers, and tertiary care facilities. Institutional relationships are based on clinical requirements rather than commercial arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Representative Case Architectures */}
      <section className="py-32 px-6 max-w-4xl mx-auto bg-slate-50 border-y border-slate-200">
        <div className="mb-20">
          <h2 className="text-4xl font-serif text-slate-900 mb-6">Representative Case Architectures</h2>
          <p className="text-slate-600 leading-relaxed">Anonymized structural examples demonstrating advisory depth.</p>
        </div>

        <div className="space-y-16">
          {/* Case 1 */}
          <div className="space-y-3">
            <p className="text-lg text-slate-700 leading-relaxed">
              International patient with complex oncological presentation<br/>
              <span className="text-slate-500">→ strategic documentation review</span><br/>
              <span className="text-slate-500">→ alignment with German university oncology center</span><br/>
              <span className="text-slate-500">→ multidisciplinary tumor board pathway</span><br/>
              <span className="text-slate-500">→ coordinated treatment structure</span>
            </p>
          </div>

          {/* Case 2 */}
          <div className="space-y-3">
            <p className="text-lg text-slate-700 leading-relaxed">
              Patient presenting with unresolved diagnostic trajectory<br/>
              <span className="text-slate-500">→ comprehensive medical record analysis</span><br/>
              <span className="text-slate-500">→ referral to specialized diagnostic institution</span><br/>
              <span className="text-slate-500">→ definitive diagnosis established</span><br/>
              <span className="text-slate-500">→ treatment coordination implemented</span>
            </p>
          </div>

          {/* Case 3 */}
          <div className="space-y-3">
            <p className="text-lg text-slate-700 leading-relaxed">
              High-risk neurosurgical candidate<br/>
              <span className="text-slate-500">→ surgical pathway evaluation</span><br/>
              <span className="text-slate-500">→ engagement with specialized neurosurgical environment</span><br/>
              <span className="text-slate-500">→ pre-operative structuring</span><br/>
              <span className="text-slate-500">→ post-operative coordination</span>
            </p>
          </div>
        </div>
      </section>

      {/* Discretion */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto bg-slate-50">
        <Lock className="mx-auto text-slate-300 mb-6" size={48} strokeWidth={1} />
        <h2 className="text-2xl md:text-3xl font-serif text-slate-800 mb-6">
          Confidentiality as Foundational Principle
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
          All case evaluations and medical coordination activities are conducted under strict confidentiality protocols in accordance with German data protection standards.
        </p>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-4">Request Strategic Medical Review</h2>
          <p className="text-center text-slate-600 mb-12">Initial case evaluations are conducted on a selective basis.</p>
          
          <Card className="p-8 shadow-sm border-slate-200 bg-white rounded-none">
            <form className="space-y-6" onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const data = {
                  fullName: formData.get('fullName') as string,
                  country: formData.get('country') as string,
                  medicalSituation: formData.get('medicalSituation') as string,
                  email: formData.get('email') as string,
                };
                
                await submitCase.mutateAsync(data);

                const card = form.closest('.p-8');
                if (card) {
                  card.innerHTML = `
                    <div class="text-center py-12 space-y-6">
                      <h3 class="text-2xl font-serif text-slate-900">Your submission has entered professional review.</h3>
                      <div class="w-16 h-[1px] bg-slate-200 mx-auto"></div>
                      <p class="text-slate-600 leading-relaxed max-w-md mx-auto">
                        Medical Care Germany will revert through appropriate coordination channels should advisory alignment be established.
                      </p>
                    </div>
                  `;
                }
              }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Full Name</label>
                  <input name="fullName" type="text" required className="w-full p-3 border border-slate-200 focus:border-slate-400 outline-none transition-colors bg-slate-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Country of Origin</label>
                  <input name="country" type="text" required className="w-full p-3 border border-slate-200 focus:border-slate-400 outline-none transition-colors bg-slate-50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Email Address</label>
                <input name="email" type="email" required className="w-full p-3 border border-slate-200 focus:border-slate-400 outline-none transition-colors bg-slate-50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Medical Situation (Brief Description)</label>
                <textarea name="medicalSituation" required className="w-full p-3 border border-slate-200 focus:border-slate-400 outline-none transition-colors bg-slate-50 h-32"></textarea>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full bg-slate-900 text-white hover:bg-slate-800 rounded-none py-6 text-base font-light tracking-wide">
                  Submit for Review
                </Button>
              </div>
              
              <p className="text-center text-xs text-slate-400 mt-4">
                All inquiries are handled with strict confidentiality.
              </p>
            </form>
          </Card>
        </div>
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
