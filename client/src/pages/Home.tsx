import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Activity, Users, FileText, Lock } from "lucide-react";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } as any }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-200">
      
      {/* Navigation (Minimal) */}
      <nav className="w-full py-6 px-8 flex justify-between items-center border-b border-slate-100">
        <div className="text-xl font-serif font-bold tracking-tight text-slate-900">Berlin Medical Care</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
          <span>Strategic Approach</span>
          <span>Operations</span>
          <span>Discretion</span>
        </div>
        <Button variant="outline" className="rounded-none border-slate-300 text-slate-700 hover:bg-slate-50">
          Patient Portal
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-slate-900 leading-tight mb-6">
            Strategic Medical Authority <br/> for Complex Cases
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light mb-8 max-w-3xl mx-auto">
            Consulted before critical medical decisions are made.
          </p>
          <p className="text-lg text-slate-400 font-cairo font-light mb-12">
            مرجعية طبية استراتيجية يُستشار رأيها قبل اتخاذ القرارات العلاجية الكبرى
          </p>
          
          <div className="flex justify-center">
            <div className="h-16 w-[1px] bg-slate-200"></div>
          </div>
        </motion.div>
      </section>

      {/* Positioning Statement */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-serif text-slate-800 leading-relaxed mb-6">
            "Trusted with the direction of complex medical pathways across Germany."
          </p>
          <p className="text-xl text-slate-500 font-cairo">
            نُؤتمن على توجيه المسارات الطبية المعقدة داخل ألمانيا.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-6">Philosophy</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Serious medical cases require structured leadership. We do not facilitate tourism; we engineer medical pathways. Our role is to provide the strategic oversight necessary for high-stakes medical interventions.
            </p>
            <p className="text-lg text-slate-500 font-cairo leading-relaxed">
              الحالات الطبية الجادة تحتاج إلى قيادة منظمة. نحن لا نسهل السياحة العلاجية؛ نحن نهندس المسارات الطبية. دورنا هو توفير الرقابة الاستراتيجية اللازمة للتدخلات الطبية الحاسمة.
            </p>
          </div>
          <div className="bg-slate-100 h-96 w-full flex items-center justify-center">
            {/* Abstract Architectural Visual Placeholder */}
            <div className="text-slate-300">
              <ShieldCheck size={64} strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-16 text-center">How We Operate</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <Activity className="text-slate-400 mb-4" size={32} />
              <h3 className="text-xl font-medium">Strategic Case Evaluation</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Rigorous analysis of medical history and current status before any travel or treatment begins.
              </p>
            </div>
            <div className="space-y-4">
              <Users className="text-slate-400 mb-4" size={32} />
              <h3 className="text-xl font-medium">Physician Coordination</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Direct engagement with Germany's leading specialists to form a cohesive treatment team.
              </p>
            </div>
            <div className="space-y-4">
              <FileText className="text-slate-400 mb-4" size={32} />
              <h3 className="text-xl font-medium">Treatment Oversight</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Continuous monitoring of the medical pathway to ensure adherence to the strategic plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discretion */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto">
        <Lock className="mx-auto text-slate-300 mb-6" size={48} strokeWidth={1} />
        <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-6">
          "Discretion is not a feature of our work — it is a foundational principle."
        </h2>
        <p className="text-xl text-slate-500 font-cairo">
          السرية ليست خيارًا في عملنا — بل هي مبدأ أساسي.
        </p>
      </section>

      {/* Contact / Request Consultation */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-12">Request Confidential Consultation</h2>
          
          <Card className="p-8 shadow-sm border-slate-200 bg-white rounded-none">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Full Name</label>
                  <input type="text" className="w-full p-3 border border-slate-200 focus:border-slate-400 outline-none transition-colors bg-slate-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Country</label>
                  <input type="text" className="w-full p-3 border border-slate-200 focus:border-slate-400 outline-none transition-colors bg-slate-50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Medical Situation (Brief Description)</label>
                <textarea className="w-full p-3 border border-slate-200 focus:border-slate-400 outline-none transition-colors bg-slate-50 h-32"></textarea>
              </div>

              <div className="pt-4">
                <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 rounded-none py-6 text-lg font-light tracking-wide">
                  Submit Confidential Request
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
      <footer className="py-12 bg-white text-center border-t border-slate-100">
        <p className="text-slate-400 text-sm font-serif">Berlin Medical Care © 2026</p>
        <p className="text-slate-300 text-xs mt-2">Strategic Medical Authority • Berlin, Germany</p>
      </footer>

    </div>
  );
}
