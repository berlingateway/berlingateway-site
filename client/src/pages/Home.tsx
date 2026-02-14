import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ShieldCheck, Activity, Users, FileText, Lock, Building2, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const submitCase = trpc.case.submit.useMutation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } as any }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-200">
      
      {/* Navigation */}
      <nav className="w-full py-6 px-8 flex justify-between items-center border-b border-slate-100">
        <Link href="/" className="text-xl font-serif font-bold tracking-tight text-slate-900">
          Medical Care Germany
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
          <Link href="/referring-physicians" className="hover:text-slate-900 transition-colors">Referring Physicians</Link>
          <Link href="/embassies-sponsored" className="hover:text-slate-900 transition-colors">Embassies & Sponsored Patients</Link>
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
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
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
        </motion.div>
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

      {/* Representative Case Pathways */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-slate-900 mb-4">Representative Case Pathways</h2>
          <p className="text-slate-600">Anonymized examples of structured medical coordination.</p>
        </div>

        <div className="space-y-12">
          {/* Pathway 1: Complex Oncology Referral */}
          <div className="border-l-4 border-slate-300 pl-8">
            <h3 className="text-lg font-medium text-slate-900 mb-6">Pathway 1: Complex Oncology Referral</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-slate-400 mt-2"></div>
                <div>
                  <p className="text-slate-900 font-medium">Initial Presentation</p>
                  <p className="text-slate-600 text-sm">International patient with complex oncological diagnosis requiring multidisciplinary evaluation</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-slate-400 mt-2"></div>
                <div>
                  <p className="text-slate-900 font-medium">Strategic Case Evaluation</p>
                  <p className="text-slate-600 text-sm">Comprehensive review of pathology, imaging, and treatment history</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-slate-400 mt-2"></div>
                <div>
                  <p className="text-slate-900 font-medium">Institutional Alignment</p>
                  <p className="text-slate-600 text-sm">Referral to German university-level oncology center with relevant subspecialty expertise</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-slate-400 mt-2"></div>
                <div>
                  <p className="text-slate-900 font-medium">Treatment Pathway Coordination</p>
                  <p className="text-slate-600 text-sm">Structured multidisciplinary treatment pathway established across surgical oncology, medical oncology, and radiation oncology</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-slate-400 mt-2"></div>
                <div>
                  <p className="text-slate-900 font-medium">Ongoing Clinical Coordination</p>
                  <p className="text-slate-600 text-sm">Continuous monitoring and coordination throughout treatment progression</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pathway 2: Diagnostic Uncertainty */}
          <div className="border-l-4 border-slate-300 pl-8">
            <h3 className="text-lg font-medium text-slate-900 mb-6">Pathway 2: Diagnostic Uncertainty Requiring Tertiary Evaluation</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-slate-400 mt-2"></div>
                <div>
                  <p className="text-slate-900 font-medium">Initial Presentation</p>
                  <p className="text-slate-600 text-sm">Patient with diagnostic uncertainty following multiple prior evaluations</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-slate-400 mt-2"></div>
                <div>
                  <p className="text-slate-900 font-medium">Comprehensive Medical Record Review</p>
                  <p className="text-slate-600 text-sm">Structured analysis of previous diagnostic workup and clinical findings</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-slate-400 mt-2"></div>
                <div>
                  <p className="text-slate-900 font-medium">Institutional Alignment</p>
                  <p className="text-slate-600 text-sm">Engagement with specialized diagnostic institution in Germany with relevant tertiary-level capabilities</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-slate-400 mt-2"></div>
                <div>
                  <p className="text-slate-900 font-medium">Diagnostic Resolution</p>
                  <p className="text-slate-600 text-sm">Definitive diagnosis established through advanced diagnostic procedures</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-slate-400 mt-2"></div>
                <div>
                  <p className="text-slate-900 font-medium">Treatment Planning Coordination</p>
                  <p className="text-slate-600 text-sm">Treatment plan coordinated with appropriate specialists based on confirmed diagnosis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pathway 3: High-Risk Neurosurgical Coordination */}
          <div className="border-l-4 border-slate-300 pl-8">
            <h3 className="text-lg font-medium text-slate-900 mb-6">Pathway 3: High-Risk Neurosurgical Coordination</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-slate-400 mt-2"></div>
                <div>
                  <p className="text-slate-900 font-medium">Initial Presentation</p>
                  <p className="text-slate-600 text-sm">High-risk neurosurgical case requiring advanced intervention</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-slate-400 mt-2"></div>
                <div>
                  <p className="text-slate-900 font-medium">Strategic Evaluation of Surgical Options</p>
                  <p className="text-slate-600 text-sm">Comprehensive review of neuroimaging, clinical status, and surgical risk factors</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-slate-400 mt-2"></div>
                <div>
                  <p className="text-slate-900 font-medium">Institutional Alignment</p>
                  <p className="text-slate-600 text-sm">Engagement with specialized neurosurgical center with relevant subspecialty expertise and perioperative infrastructure</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-slate-400 mt-2"></div>
                <div>
                  <p className="text-slate-900 font-medium">Pre-Operative Planning Coordination</p>
                  <p className="text-slate-600 text-sm">Structured coordination of pre-operative assessment, anesthesia consultation, and surgical planning</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-slate-400 mt-2"></div>
                <div>
                  <p className="text-slate-900 font-medium">Post-Operative Care Pathway</p>
                  <p className="text-slate-600 text-sm">Coordination of intensive care, rehabilitation, and follow-up planning</p>
                </div>
              </div>
            </div>
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
                      <h3 class="text-2xl font-serif text-slate-900">Case Under Strategic Review</h3>
                      <div class="w-16 h-[1px] bg-slate-200 mx-auto"></div>
                      <p class="text-slate-600 leading-relaxed max-w-md mx-auto">
                        Your submission has been formally integrated into our clinical governance process and is currently undergoing preliminary strategic evaluation.
                      </p>
                      <p class="text-slate-500 text-sm">
                        No further action is required at this stage.
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
