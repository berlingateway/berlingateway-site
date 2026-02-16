import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";
import ContactBar from "@/components/ContactBar";
import PremiumFooter from "@/components/PremiumFooter";
import { Upload, FileText, CheckCircle2, Building2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const submitCase = trpc.case.submit.useMutation();
  const [formData, setFormData] = useState({
    fullName: "",
    country: "",
    email: "",
    medicalSituation: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitCase.mutateAsync({
        fullName: formData.fullName,
        country: formData.country,
        medicalSituation: `Email: ${formData.email}\n\nMedical Situation: ${formData.medicalSituation}`,
      });

      const form = e.target as HTMLFormElement;
      const card = form.closest('.contact-form-container');
      if (card) {
        card.innerHTML = `
          <div class="text-center py-16 space-y-8">
            <h3 class="text-2xl font-serif text-slate-900">Case Under Professional Review</h3>
            <div class="w-20 h-[1px] bg-slate-300 mx-auto"></div>
            <p class="text-slate-600 leading-relaxed max-w-md mx-auto text-lg">
              Your submission has entered structured administrative and clinical review.
            </p>
            <p class="text-slate-500 text-sm">
              Response intervals reflect the care taken to appropriately review medical context prior to engagement.
            </p>
          </div>
        `;
      }
    } catch (error) {
      toast.error("Submission failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      <ContactBar />
      
      {/* Navigation */}
      <nav className="w-full py-6 px-8 flex justify-between items-center border-b border-slate-100 bg-white">
        <Link href="/" className="text-xl font-serif font-bold tracking-tight text-slate-900">
          Medical Care Germany
        </Link>
        <div className="hidden md:flex gap-10 text-sm text-slate-500">
          <Link href="/physician-referral-clinical" className="hover:text-slate-900 transition-colors">Physician Referral</Link>
          <Link href="/governmental-bodies" className="hover:text-slate-900 transition-colors">Embassies & Government</Link>
          <Link href="/private-medical-advisory" className="hover:text-slate-900 transition-colors">Private Advisory</Link>
          <Link href="/institutional-framework" className="hover:text-slate-900 transition-colors">Framework</Link>
          <Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
        </div>
        <a href="#contact">
          <Button variant="outline" className="rounded-none border-slate-300 text-slate-700 hover:bg-slate-50 text-sm">
            Submit Reports
          </Button>
        </a>
      </nav>

      {/* SECTION 1: HERO */}
      <section id="hero" className="relative py-32 md:py-48 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight mb-8">
            Structured Access to Germany's Most Advanced Medical System
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light mb-6 max-w-4xl mx-auto leading-relaxed">
            Strategic medical coordination for complex, high-risk, and time-sensitive cases — operated from Berlin.
          </p>
          <p className="text-sm text-slate-400 mb-12">
            Trusted by international patients, medical referrers, and institutional partners.
          </p>
          <a href="#contact">
            <Button className="bg-white text-slate-900 hover:bg-slate-100 rounded-none px-10 py-6 text-lg font-medium">
              Submit Medical Reports for Specialist Review
            </Button>
          </a>
          <p className="text-xs text-slate-400 mt-6">
            Confidential Case Evaluation • Physician-Led Review • Selective Acceptance
          </p>
        </div>
      </section>

      {/* SECTION 2: INSTITUTIONAL BACKING */}
      <section id="backing" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-slate-900">Institutional Backing</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            Medical Care Germany is powered by Berlin Medical Care (BMC), a Berlin-based healthcare coordination group. Operating in alignment with German healthcare regulations and international patient standards.
          </p>
          <Card className="inline-block p-6 bg-white border-slate-200 rounded-none">
            <div className="flex items-start gap-3 text-slate-600">
              <Building2 className="w-5 h-5 mt-1 flex-shrink-0" />
              <div className="text-left">
                <p className="font-medium text-slate-900 mb-1">Address</p>
                <p className="text-sm">
                  Perleberger Str. 41<br/>
                  10559 Berlin, Germany
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* SECTION 3: WHO WE ACCEPT */}
      <section id="acceptance" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center text-slate-900">Selective Case Acceptance</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
            Engagement is selective and based on strategic case evaluation.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-8 bg-slate-50 border-slate-200 rounded-none">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-slate-900 mb-2">Complex Diagnoses</h3>
                  <p className="text-sm text-slate-600">Requiring multi-specialty input</p>
                </div>
              </div>
            </Card>
            <Card className="p-8 bg-slate-50 border-slate-200 rounded-none">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-slate-900 mb-2">High-Risk Cases</h3>
                  <p className="text-sm text-slate-600">Needing senior specialist review</p>
                </div>
              </div>
            </Card>
            <Card className="p-8 bg-slate-50 border-slate-200 rounded-none">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-slate-900 mb-2">Time-Sensitive Situations</h3>
                  <p className="text-sm text-slate-600">Requiring structured access</p>
                </div>
              </div>
            </Card>
            <Card className="p-8 bg-slate-50 border-slate-200 rounded-none">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-slate-900 mb-2">International Patients</h3>
                  <p className="text-sm text-slate-600">Seeking coordinated pathways within Germany</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="bg-slate-100 p-6 rounded-none border-l-4 border-slate-900">
            <p className="text-sm text-slate-700 leading-relaxed">
              We do not provide diagnosis via comments or instant chat. Emergency cases require local emergency services.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: COORDINATION MODEL */}
      <section id="model" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center text-slate-900">Coordination Model</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <Card className="p-8 bg-white border-slate-200 rounded-none">
              <div className="text-4xl font-serif text-slate-300 mb-4">1</div>
              <h3 className="text-xl font-serif text-slate-900 mb-4">Case Intake</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Reports, imaging, and a concise symptom timeline
              </p>
            </Card>
            <Card className="p-8 bg-white border-slate-200 rounded-none">
              <div className="text-4xl font-serif text-slate-300 mb-4">2</div>
              <h3 className="text-xl font-serif text-slate-900 mb-4">Specialist Review</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Structured review and targeted questions
              </p>
            </Card>
            <Card className="p-8 bg-white border-slate-200 rounded-none">
              <div className="text-4xl font-serif text-slate-300 mb-4">3</div>
              <h3 className="text-xl font-serif text-slate-900 mb-4">Proposed Treatment Pathway</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Recommended next diagnostics and treatment direction
              </p>
            </Card>
            <Card className="p-8 bg-white border-slate-200 rounded-none">
              <div className="text-4xl font-serif text-slate-300 mb-4">4</div>
              <h3 className="text-xl font-serif text-slate-900 mb-4">Logistics & Admission Support</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Appointments, translation, travel timing, and inpatient/outpatient planning
              </p>
            </Card>
          </div>
          <div className="bg-slate-100 p-6 rounded-none border-l-4 border-slate-400">
            <p className="text-sm text-slate-700 leading-relaxed">
              A "treatment pathway" is a medical direction based on provided documentation and may evolve after in-person assessment.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONTACT */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center text-slate-900">Contact</h2>
          
          {/* Contact Display */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <p className="text-sm text-slate-500 mb-2">Email</p>
              <a href="mailto:info@medicalcaregermany.com" className="text-slate-900 hover:underline">
                info@medicalcaregermany.com
              </a>
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-500 mb-2">Phone</p>
              <a href="tel:+493025730875" className="text-slate-900 hover:underline">
                +49 30 25730875
              </a>
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-500 mb-2">Address</p>
              <p className="text-slate-900">
                Perleberger Str. 41<br/>
                10559 Berlin, Germany
              </p>
            </div>
          </div>

          <p className="text-lg text-slate-600 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
            Send your medical reports to receive a professional evaluation by our German medical coordination team.
          </p>

          {/* Contact Form */}
          <Card className="p-10 bg-slate-50 border-slate-200 rounded-none contact-form-container">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full p-4 border border-slate-300 focus:border-slate-900 outline-none transition-colors bg-white text-slate-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Country of Origin</label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full p-4 border border-slate-300 focus:border-slate-900 outline-none transition-colors bg-white text-slate-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-4 border border-slate-300 focus:border-slate-900 outline-none transition-colors bg-white text-slate-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Medical Situation (Brief Description)</label>
                <textarea
                  required
                  rows={6}
                  value={formData.medicalSituation}
                  onChange={(e) => setFormData({ ...formData, medicalSituation: e.target.value })}
                  className="w-full p-4 border border-slate-300 focus:border-slate-900 outline-none transition-colors bg-white text-slate-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Upload Medical Reports (Optional)</label>
                <div className="border-2 border-dashed border-slate-300 p-8 text-center bg-white hover:border-slate-400 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                  <p className="text-sm text-slate-600 mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-500">PDF, DICOM, JPG, PNG (Max 25MB)</p>
                  <input type="file" className="hidden" accept=".pdf,.dcm,.jpg,.jpeg,.png" multiple />
                </div>
              </div>
              <Button type="submit" className="w-full bg-slate-900 text-white hover:bg-slate-800 rounded-none py-6 text-lg font-medium">
                Submit for Review
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <PremiumFooter />

    </div>
  );
}
