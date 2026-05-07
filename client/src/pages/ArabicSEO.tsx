import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";

/**
 * Hidden Arabic SEO Landing Page
 * 
 * Purpose: Capture high-intent Arabic search traffic without altering brand perception
 * Visibility: Crawlable and indexed by Google, but NOT linked in main navigation
 * Tone: Formal, medical, institutional - no sales language
 */
export default function ArabicSEO() {
  const { user } = useAuth();

  // Set document metadata for SEO
  useEffect(() => {
    document.title = "التقييم الطبي المتقدم للحالات المعقدة في ألمانيا | Medical Care Germany";
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    
    // Add canonical tag
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://medicalcaregermany.com';
    document.head.appendChild(canonical);
    
    // Add meta description
    const metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    metaDesc.content = 'ننسّق المسارات العلاجية للحالات التي تتطلب دقة طبية وإشرافاً مؤسسياً وفق معايير المستشفيات الجامعية الألمانية.';
    document.head.appendChild(metaDesc);
    
    // Add keywords
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'رأي طبي ثاني ألمانيا, تقييم حالات معقدة ألمانيا, تنسيق علاج عبر الحدود, مراجعة طبية مستقلة ألمانيا, علاج مستشفيات جامعية ألمانيا';
    document.head.appendChild(metaKeywords);
    
    // Cleanup on unmount
    return () => {
      document.title = "Medical Care Germany - Institutional Clinical Coordination Authority";
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
      canonical.remove();
      metaDesc.remove();
      metaKeywords.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans" dir="rtl" lang="ar">
      


      {/* Minimal Header */}
      <nav className="w-full py-6 px-8 border-b border-slate-100 bg-white">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-serif font-bold tracking-tight text-slate-900">
            Medical Care Germany
          </Link>
          <div className="text-sm text-slate-500">
            سلطة التنسيق السريري المؤسسي
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 leading-tight text-center">
            التقييم الطبي المتقدم للحالات المعقدة في ألمانيا
          </h1>

          {/* Institutional Positioning */}
          <div className="prose prose-lg max-w-3xl mx-auto text-slate-700 space-y-8 mb-16">
            <p className="text-xl text-center leading-relaxed">
              ننسّق المسارات العلاجية للحالات التي تتطلب دقة طبية وإشرافاً مؤسسياً وفق معايير المستشفيات الجامعية الألمانية.
            </p>

            <div className="border-t border-slate-200 pt-8 mt-8">
              <h2 className="text-2xl font-serif text-slate-900 mb-6">من نحن</h2>
              <p className="leading-relaxed">
                نعمل كسلطة طبية مؤسسية عابرة للحدود، نربط المرضى الدوليين بشبكات الأطباء المنظمة والمسارات العلاجية المعتمدة في المستشفيات الجامعية الألمانية.
              </p>
            </div>

            <div className="border-t border-slate-200 pt-8 mt-8">
              <h2 className="text-2xl font-serif text-slate-900 mb-6">من نخدم</h2>
              <p className="leading-relaxed">
                يتم استشارتنا من قبل المرضى الدوليين والعائلات والأطباء المحيلين الذين يسعون للحصول على تنسيق طبي منظم للحالات المعقدة التي تتطلب تدخلات جراحية أو سريرية عالية المخاطر.
              </p>
            </div>

            <div className="border-t border-slate-200 pt-8 mt-8">
              <h2 className="text-2xl font-serif text-slate-900 mb-6">نطاق العمل</h2>
              <ul className="space-y-3 text-slate-700">
                <li>• تقييم الحالات الطبية المعقدة</li>
                <li>• الرأي الطبي الثاني المستقل</li>
                <li>• التنسيق الكامل للعلاج في ألمانيا</li>
                <li>• مراجعة المسار الاستراتيجي</li>
                <li>• الوصول المنظم إلى المستشفيات الجامعية</li>
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-8 mt-8">
              <h2 className="text-2xl font-serif text-slate-900 mb-6">المبادئ المؤسسية</h2>
              <p className="leading-relaxed">
                نعمل ضمن شبكات طبية منظمة — وليس أسواق مفتوحة. جميع التقييمات تتم وفق معايير السرية السريرية الصارمة والامتثال لقوانين حماية البيانات الأوروبية (GDPR).
              </p>
            </div>
          </div>

          {/* Institutional CTA */}
          <div className="text-center py-12 border-t border-slate-200">
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              لإرسال ملف الحالة للتقييم الطبي الأولي، يرجى استخدام نموذج التواصل.
            </p>
            <Link href="/#contact">
              <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-none px-10 py-6 text-base font-medium">
                إرسال الحالة للمراجعة السريرية
              </Button>
            </Link>
          </div>

          {/* Contact Information */}
          <div className="text-center mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-600 mb-4">للاستفسارات المباشرة:</p>
            <div className="space-y-2">
              <a href="mailto:info@medicalcaregermany.com" className="block text-slate-900 hover:text-slate-700">
                info@medicalcaregermany.com
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="py-8 bg-slate-50 text-center border-t border-slate-200">
        <p className="text-sm text-slate-500">Medical Care Germany © 2026</p>
        <p className="text-xs text-slate-400 mt-2">برلين، ألمانيا</p>
      </footer>

    </div>
  );
}
