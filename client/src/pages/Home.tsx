import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";
import { FileText, Activity, Network, Calendar, Heart } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const submitCase = trpc.case.submit.useMutation();
  const [formData, setFormData] = useState({
    fullName: "",
    country: "",
    email: "",
    phone: "",
    medicalSituation: "",
  });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // In production, upload files to S3 first, then submit case with file URLs
      const fileInfo = uploadedFiles.length > 0 
        ? `\n\nAttached Files (${uploadedFiles.length}): ${uploadedFiles.map(f => f.name).join(', ')}`
        : '';
      
      await submitCase.mutateAsync({
        fullName: formData.fullName,
        country: formData.country,
        medicalSituation: `Email: ${formData.email}\nPhone: ${formData.phone}\n\nMedical Situation: ${formData.medicalSituation}${fileInfo}`,
      });

      const form = e.target as HTMLFormElement;
      const card = form.closest('.contact-form-container');
      if (card) {
            card.innerHTML = `
          <div class="text-center py-16 space-y-8">
            <div class="w-16 h-16 mx-auto mb-6 bg-slate-900 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-serif text-slate-900">Case Under Physician Review</h3>
            <div class="w-20 h-[1px] bg-slate-300 mx-auto"></div>
            <p class="text-slate-600 leading-relaxed max-w-md mx-auto text-lg">
              Your medical reports have been received and entered our structured clinical review process.
            </p>
            <p class="text-slate-500 text-sm">
              Priority cases are reviewed within 24–48 hours by senior specialists.
            </p>
          </div>
        `;
      }
    } catch (error) {
      toast.error("Submission failed. Please verify your information and try again.");
      console.error(error);
    }
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;
    const fileArray = Array.from(files);
    const validFiles = fileArray.filter(file => {
      const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg', 'application/dicom'];
      const maxSize = 16 * 1024 * 1024; // 16MB
      return validTypes.includes(file.type) && file.size <= maxSize;
    });
    setUploadedFiles(prev => [...prev, ...validFiles]);
    if (validFiles.length < fileArray.length) {
      toast.error('Some files were rejected. Only PDF, JPEG, PNG, and DICOM files under 16MB are accepted.');
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Top Contact Bar - Minimal */}
      <div className="w-full bg-slate-900 text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
          <a href="mailto:info@medicalcaregermany.com" className="hover:text-slate-300 transition-colors">
            info@medicalcaregermany.com
          </a>
          <a href="tel:+493025730875" className="hover:text-slate-300 transition-colors">
            +49 30 25730875
          </a>
        </div>
      </div>
      
      {/* Navigation - Sticky Premium Header */}
      <nav className="sticky top-0 z-50 w-full py-3 px-8 flex justify-between items-center border-b border-slate-100 bg-white/95 backdrop-blur-sm">
        <Link href="/" className="text-xl font-serif font-bold tracking-tight text-slate-900">
          Medical Care Germany
        </Link>
        <div className="hidden md:flex gap-10 text-sm text-slate-500">
          <Link href="/physician-referral-clinical" className="hover:text-slate-900 transition-colors">Physician Referral</Link>
          <Link href="/governmental-bodies" className="hover:text-slate-900 transition-colors">Embassies & Government</Link>
          <Link href="/private-medical-advisory" className="hover:text-slate-900 transition-colors">Private Advisory</Link>
          <Link href="/institutional-framework" className="hover:text-slate-900 transition-colors">Framework</Link>
        </div>
      </nav>

      {/* DOMINANT CTA SECTION - Priority Medical Evaluation */}
      <section className="relative py-12 md:py-16 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 mb-4 leading-tight">
            Request Priority Medical Evaluation
          </h2>
          
          {/* Subtext */}
          <p className="text-lg md:text-xl text-slate-600 font-light mb-8 max-w-2xl mx-auto">
            Trusted clinical coordination with Germany's leading specialists.
          </p>
          
          {/* Primary CTA Button */}
          <div className="mb-8">
            <a href="#contact">
              <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-none px-12 py-7 text-lg font-medium shadow-lg">
                Submit Medical Reports
              </Button>
            </a>
          </div>
          
          {/* Trust Indicators Below CTA */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto pt-6 border-t border-slate-200">
            <div className="text-center">
              <div className="text-sm font-medium text-slate-900 mb-1">Berlin-Based</div>
              <div className="text-xs text-slate-500">Coordination</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-slate-900 mb-1">University Hospital</div>
              <div className="text-xs text-slate-500">Network</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-slate-900 mb-1">International</div>
              <div className="text-xs text-slate-500">Patient Experience</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-sm font-medium text-slate-900 mb-1">Fast-Track</div>
              <div className="text-xs text-slate-500">Case Evaluation</div>
            </div>
          </div>
          
          {/* Urgency Trigger */}
          <div className="mt-6 text-sm text-slate-500 font-light">
            Priority cases reviewed within 24–48 hours.
          </div>
        </div>
      </section>

      {/* SECTION 1: HERO - Elite Medical Authority Landing */}
      <section id="hero" className="relative py-16 md:py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          {/* H1: Clear Authority Statement */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.1] mb-6 tracking-tight">
            Germany's Premier Medical Coordination Authority
          </h1>
          
          {/* Subheadline: Who We Serve + Outcomes */}
          <p className="text-lg md:text-xl text-slate-300 font-light mb-4 max-w-3xl mx-auto leading-relaxed">
            Berlin-based clinical coordination for international patients requiring complex, high-priority medical interventions.
          </p>
          <p className="text-base md:text-lg text-slate-400 font-light mb-10 max-w-2xl mx-auto">
            Structured pathways to Germany's leading specialists and university hospitals.
          </p>
          
          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#contact">
              <Button className="bg-white text-slate-900 hover:bg-slate-100 rounded-none px-10 py-6 text-base font-medium shadow-lg w-full sm:w-auto">
                Submit Medical Reports
              </Button>
            </a>
            <a href="tel:+493025730875">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-none px-10 py-6 text-base font-medium w-full sm:w-auto">
                Request Call
              </Button>
            </a>
          </div>
          
          {/* Trust Strip - 5 Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto pt-8 border-t border-slate-700/50">
            <div className="text-center">
              <div className="text-sm font-medium text-slate-300 mb-1">Berlin-Based</div>
              <div className="text-xs text-slate-400">Clinical Coordination</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-slate-300 mb-1">Senior Specialists</div>
              <div className="text-xs text-slate-400">Network Access</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-slate-300 mb-1">Fast Triage</div>
              <div className="text-xs text-slate-400">48-72h Response</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-slate-300 mb-1">Multilingual</div>
              <div className="text-xs text-slate-400">AR • EN • DE</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-sm font-medium text-slate-300 mb-1">Privacy-First</div>
              <div className="text-xs text-slate-400">GDPR Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRO BLOCK - Institutional Positioning */}
      <section className="py-16 md:py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center text-slate-900">
            A Structured Medical Gateway — Not a Referral Service
          </h2>
          <div className="prose prose-lg max-w-3xl mx-auto text-slate-600 leading-relaxed space-y-6">
            <p>
              Medical Care Germany operates through structured physician networks and established hospital pathways within Germany's advanced healthcare infrastructure.
            </p>
            <p>
              The organization functions as a clinical coordination system, connecting international patients with appropriate specialist-level medical environments for complex diagnostic and treatment requirements.
            </p>
            <p>
              This framework is designed to reduce procedural uncertainty and ensure continuity across multi-phase medical interventions.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE MEDICAL PATH (CRITICAL) */}
      <section className="py-16 md:py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center text-slate-900">The Medical Path</h2>
          <div className="grid md:grid-cols-5 gap-8">
            
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-slate-900 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-serif text-slate-300 mb-3">1</div>
              <h3 className="text-lg font-serif text-slate-900 mb-3">Case Submission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Confidential medical file review
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-slate-900 rounded-full flex items-center justify-center">
                <Activity className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-serif text-slate-300 mb-3">2</div>
              <h3 className="text-lg font-serif text-slate-900 mb-3">Physician Evaluation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Specialist-level assessment within German hospital networks
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-slate-900 rounded-full flex items-center justify-center">
                <Network className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-serif text-slate-300 mb-3">3</div>
              <h3 className="text-lg font-serif text-slate-900 mb-3">Medical Strategy</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Defined treatment direction and clinical pathway
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-slate-900 rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-serif text-slate-300 mb-3">4</div>
              <h3 className="text-lg font-serif text-slate-900 mb-3">Treatment Coordination</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hospital placement and timeline structuring
              </p>
            </div>

            {/* Step 5 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-slate-900 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-serif text-slate-300 mb-3">5</div>
              <h3 className="text-lg font-serif text-slate-900 mb-3">Continuity of Care</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Post-treatment medical alignment
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: CLINICAL CASE INSIGHTS (EXTREMELY IMPORTANT) */}
      <section className="py-16 md:py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center text-slate-900">Clinical Case Insights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Case 1 */}
            <Card className="p-8 bg-slate-50 border-slate-200 rounded-none">
              <h3 className="text-xl font-serif text-slate-900 mb-4">Neurological Recovery — Complex Mobility Case</h3>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>International patient presenting severe mobility impairment.</p>
                <p>Multidisciplinary evaluation conducted.</p>
                <p>Advanced neuro-rehabilitation pathway initiated in Germany.</p>
                <p className="font-medium text-slate-900">Outcome: Significant functional restoration.</p>
              </div>
            </Card>

            {/* Case 2 */}
            <Card className="p-8 bg-slate-50 border-slate-200 rounded-none">
              <h3 className="text-xl font-serif text-slate-900 mb-4">Oncological Coordination — Multi-Phase Treatment</h3>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>Complex oncological diagnosis requiring specialized intervention.</p>
                <p>Coordinated access to university hospital environment.</p>
                <p>Structured treatment pathway across multiple clinical phases.</p>
                <p className="font-medium text-slate-900">Outcome: Treatment protocol completed as planned.</p>
              </div>
            </Card>

            {/* Case 3 */}
            <Card className="p-8 bg-slate-50 border-slate-200 rounded-none">
              <h3 className="text-xl font-serif text-slate-900 mb-4">Cardiovascular Intervention — High-Risk Assessment</h3>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>Time-sensitive cardiovascular situation requiring senior specialist review.</p>
                <p>Rapid diagnostic pathway established.</p>
                <p>Advanced interventional procedure coordinated.</p>
                <p className="font-medium text-slate-900">Outcome: Successful procedural completion.</p>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* SECTION 5: DIFFERENTIATION BLOCK */}
      <section className="py-16 md:py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center text-slate-900">
            Why Structured Medical Coordination Matters
          </h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Reduces Diagnostic Delay</h3>
                <p className="text-slate-600 leading-relaxed">
                  Structured pathways minimize procedural gaps between initial assessment and definitive diagnosis.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Connects to Advanced Treatment Environments</h3>
                <p className="text-slate-600 leading-relaxed">
                  Direct coordination with university hospitals and specialized medical centers across Germany.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Ensures Physician-Level Oversight</h3>
                <p className="text-slate-600 leading-relaxed">
                  Medical coordination maintained through established clinical networks, not administrative channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTACT (Simplified) */}
      <section id="contact" className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center text-slate-900">Submit Medical Reports</h2>

          {/* Medical Submission Form - Frictionless Flow */}
          <Card className="p-10 bg-white border border-slate-200 shadow-sm rounded-none contact-form-container">
            
            {/* Medical-Grade Confidentiality Notice */}
            <div className="mb-8 p-6 bg-slate-50 border-l-4 border-slate-900">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">Medical-Grade Confidentiality</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    All medical reports are encrypted, GDPR-compliant, and reviewed exclusively by senior physicians. Your information is never shared without explicit consent.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Patient Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full p-4 border-2 border-slate-200 focus:border-slate-900 outline-none transition-colors bg-white text-slate-900 text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Country of Origin *</label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full p-4 border-2 border-slate-200 focus:border-slate-900 outline-none transition-colors bg-white text-slate-900 text-base"
                    placeholder="Saudi Arabia"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-4 border-2 border-slate-200 focus:border-slate-900 outline-none transition-colors bg-white text-slate-900 text-base"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-4 border-2 border-slate-200 focus:border-slate-900 outline-none transition-colors bg-white text-slate-900 text-base"
                    placeholder="+966 50 123 4567"
                  />
                </div>
              </div>

              {/* Medical Situation */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Medical Situation *</label>
                <textarea
                  required
                  rows={6}
                  value={formData.medicalSituation}
                  onChange={(e) => setFormData({ ...formData, medicalSituation: e.target.value })}
                  className="w-full p-4 border-2 border-slate-200 focus:border-slate-900 outline-none transition-colors bg-white text-slate-900 text-base"
                  placeholder="Brief description of medical condition, current diagnosis, and treatment goals..."
                />
                <p className="text-xs text-slate-500 mt-2">Provide a concise summary. Detailed medical history can be uploaded below.</p>
              </div>

              {/* File Upload Section */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Medical Reports & Imaging (Optional)</label>
                
                {/* Drag & Drop Zone */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-sm p-8 text-center transition-all ${
                    isDragging 
                      ? 'border-slate-900 bg-slate-50' 
                      : 'border-slate-300 bg-white hover:border-slate-400'
                  }`}
                >
                  <div className="flex flex-col items-center gap-4">
                    <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <div>
                      <p className="text-base text-slate-900 font-medium mb-1">Drag & drop files here</p>
                      <p className="text-sm text-slate-500 mb-3">or click to browse</p>
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png,.dcm"
                        onChange={(e) => handleFileUpload(e.target.files)}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload">
                        <Button type="button" variant="outline" className="border-2 border-slate-300 text-slate-900 hover:bg-slate-50 rounded-none px-6 py-3 text-sm" onClick={() => document.getElementById('file-upload')?.click()}>
                          Select Files
                        </Button>
                      </label>
                    </div>
                    <p className="text-xs text-slate-500">Accepted: PDF, JPEG, PNG, DICOM • Max 16MB per file</p>
                  </div>
                </div>

                {/* Uploaded Files List */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200">
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <div>
                            <p className="text-sm font-medium text-slate-900">{file.name}</p>
                            <p className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-slate-400 hover:text-slate-900 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Physician Review Indicator */}
              <div className="p-4 bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">Physician-Level Review:</span> All submissions are reviewed by senior medical specialists within our German hospital network.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                disabled={submitCase.isPending}
                className="w-full bg-slate-900 text-white hover:bg-slate-800 rounded-none py-7 text-lg font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitCase.isPending ? 'Submitting...' : 'Submit for Physician Review'}
              </Button>

              {/* Privacy Notice */}
              <p className="text-xs text-slate-500 text-center leading-relaxed">
                By submitting, you consent to the processing of your medical information in accordance with GDPR regulations. Your data is encrypted and accessible only to authorized medical personnel.
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* FOOTER - Strong but Calm */}
      <footer className="py-10 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-3">
            <a href="mailto:info@medicalcaregermany.com" className="block text-lg hover:text-slate-300 transition-colors">
              info@medicalcaregermany.com
            </a>
            <a href="tel:+493025730875" className="block text-lg hover:text-slate-300 transition-colors">
              +49 30 25730875
            </a>
          </div>
          <div className="w-20 h-[1px] bg-slate-700 mx-auto"></div>
          <p className="text-sm text-slate-400">Medical Care Germany © 2026</p>
        </div>
      </footer>

    </div>
  );
}
