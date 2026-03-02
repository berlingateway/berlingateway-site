import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import ContactBar from "@/components/ContactBar";
import PremiumFooter from "@/components/PremiumFooter";
import { Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      <ContactBar />
      
      {/* Navigation */}
      <nav className="w-full py-6 px-8 flex justify-between items-center border-b border-slate-100">
        <Link href="/" className="text-xl font-serif font-bold tracking-tight text-slate-900">
          Medical Care Germany
        </Link>
        <div className="hidden md:flex gap-10 text-sm text-slate-500">
          <Link href="/physician-referral-clinical" className="hover:text-slate-900 transition-colors">Physician Referral</Link>
          <Link href="/governmental-bodies" className="hover:text-slate-900 transition-colors">Embassies & Government</Link>
          <Link href="/private-medical-advisory" className="hover:text-slate-900 transition-colors">Private Advisory</Link>
          <Link href="/institutional-framework" className="hover:text-slate-900 transition-colors">Framework</Link>
          <Link href="/contact" className="text-slate-900">Contact</Link>
        </div>
        <a href="/#contact">
          <Button variant="outline" className="rounded-none border-slate-300 text-slate-700 hover:bg-slate-50 text-sm">
            Confidential Inquiry
          </Button>
        </a>
      </nav>

      {/* Hero Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-slate-400 mb-8">Get in Touch</p>
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-12 leading-tight">
          Contact Medical Care Germany
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Professional inquiries are received within a structured advisory setting. Our German medical coordination team evaluates all submissions with deliberate attention to clinical context.
        </p>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <Card className="p-8 bg-white border-slate-200 rounded-none">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-6">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-serif mb-4 text-slate-900">Email</h3>
                <a href="mailto:info@medicalcaregermany.de" className="text-slate-600 hover:text-slate-900 transition-colors hover:underline">
                  info@medicalcaregermany.de
                </a>
                <p className="text-sm text-slate-500 mt-4">
                  Send your medical reports for professional evaluation
                </p>
              </div>
            </Card>

            {/* Address */}
            <Card className="p-8 bg-white border-slate-200 rounded-none">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-serif mb-4 text-slate-900">Address</h3>
                <p className="text-slate-600">
                  Perleberger Str. 41<br/>
                  10559 Berlin<br/>
                  Germany
                </p>
                <p className="text-sm text-slate-500 mt-4">
                  Berlin-based strategic medical advisory
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Medical CTA Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-slate-900 text-white p-12 rounded-none">
          <h2 className="text-3xl font-serif mb-6">Professional Medical Evaluation</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Send your medical reports to receive a professional evaluation by our German medical coordination team.
          </p>
          <a href="mailto:info@medicalcaregermany.com">
            <Button className="bg-white text-slate-900 hover:bg-slate-100 rounded-none px-10 py-4 text-base">
              Send Medical Reports
            </Button>
          </a>
        </div>
      </section>

      {/* Response Time Notice */}
      <section className="py-16 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Clock className="w-12 h-12 text-slate-400" />
          </div>
          <h3 className="text-2xl font-serif text-slate-900 mb-6">Response Intervals</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            All submissions undergo structured administrative and clinical review prior to coordination acceptance.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Response intervals reflect the care taken to appropriately review medical context prior to engagement.
          </p>
        </div>
      </section>

      <PremiumFooter />

    </div>
  );
}
