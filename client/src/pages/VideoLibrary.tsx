import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const arFont: React.CSSProperties = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };

// ─── Types ────────────────────────────────────────────────────────────────────

interface VideoCard {
  videoId: string;
  tag: string;
  tagBg: string;
  tagText: string;
  title: string;
  description: string;
  isShort?: boolean;
}

interface Section {
  id: string;
  heading: string;
  description: string;
  accentColor: string;
  videos: VideoCard[];
  cta?: { text: string; label: string; href: string };
}

// ─── Sections — only sections with real assigned videos ───────────────────────

const sections: Section[] = [
  {
    id: "thoracic",
    heading: "أورام الصدر وسرطان الرئة",
    description: "توثيق طبي لحالات أورام الصدر — من التشخيص بـ PET-CT إلى القرار العلاجي في ألمانيا.",
    accentColor: "bg-blue-500",
    cta: {
      text: "هل تحتاج إلى تقييم تخصصي لحالة أورام الصدر؟",
      label: "أرسل ملفك الطبي لتقييم البروفيسور",
      href: "/send-medical-reports",
    },
    videos: [
      {
        videoId: "iLMZmn82_DE",
        tag: "دقة التشخيص: حالة أورام صدر",
        tagBg: "bg-blue-50",
        tagText: "text-blue-700",
        title: "دقة التشخيص: حالة أورام صدر",
        description: "كيف كشف فحص PET-CT عن ورم في الصدر وأدى إلى قرار علاجي دقيق في ألمانيا.",
      },
    ],
  },
  {
    id: "journey",
    heading: "رحلة المريض",
    description: "قصص نجاح حقيقية لمرضى أتمّوا علاجهم في ألمانيا وعادوا إلى حياتهم الطبيعية.",
    accentColor: "bg-[#C9A646]",
    cta: {
      text: "هل تريد أن تبدأ رحلتك العلاجية في ألمانيا؟",
      label: "تواصل معنا الآن",
      href: "/send-medical-reports",
    },
    videos: [
      {
        videoId: "lnxXzDQ8dts",
        tag: "قصة نجاح",
        tagBg: "bg-amber-50",
        tagText: "text-[#C9A646]",
        title: "ماذا حدث بعد الجراحة؟",
        description: "مريض يشارك تجربته الحقيقية بعد إجراء العملية في برلين والعودة إلى حياته الطبيعية.",
        isShort: true,
      },
    ],
  },
];

// ─── Video card ───────────────────────────────────────────────────────────────

function VideoCardItem({ video }: { video: VideoCard }) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
  const videoUrl = video.isShort
    ? `https://www.youtube.com/shorts/${video.videoId}`
    : `https://www.youtube.com/watch?v=${video.videoId}`;

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group border border-slate-100 max-w-sm"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video bg-slate-100 overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/25 transition-colors duration-200">
          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-md group-hover:bg-white transition-colors">
            <svg className="w-5 h-5 text-slate-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="p-4" dir="rtl" style={arFont}>
        <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded mb-2 ${video.tagBg} ${video.tagText}`}>
          {video.tag}
        </span>
        <h3 className="text-sm font-semibold text-slate-900 leading-snug mb-1">
          {video.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed">
          {video.description}
        </p>
      </div>
    </a>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function VideoLibrary() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-[#F8F9FA]" style={arFont}>

      {/* Sticky nav */}
      <header
        className="bg-[#0B1F3A] text-white sticky z-40 px-5 py-4 flex items-center justify-between"
        style={{ top: "var(--banner-height, 0px)" }}
      >
        <Link href="/ar">
          <span className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5" style={arFont}>
            <ArrowRight className="w-4 h-4 rotate-180" />
            الرئيسية
          </span>
        </Link>
        <span className="text-sm font-medium" style={arFont}>مكتبة الفيديو الطبي</span>
        <div className="w-20" />
      </header>

      {/* Page title */}
      <div className="bg-white border-b border-slate-100 py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3" style={arFont}>
            مكتبة الفيديو الطبي
          </h1>
          <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed" style={arFont}>
            توثيق حقيقي لحالات طبية ورحلات مرضى تلقّوا علاجهم في ألمانيا.
          </p>
        </div>
      </div>

      {/* Sections */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        {sections.map((section) => (
          <section key={section.id}>

            {/* Section header */}
            <div className="mb-6" dir="rtl">
              <div className="flex items-center gap-3 mb-1">
                <div className={`w-1 h-6 rounded-full flex-shrink-0 ${section.accentColor}`} />
                <h2 className="text-lg font-semibold text-slate-900" style={arFont}>
                  {section.heading}
                </h2>
              </div>
              <p className="text-xs text-slate-500 pr-4 leading-relaxed" style={arFont}>
                {section.description}
              </p>
            </div>

            {/* Video cards */}
            <div className="flex flex-wrap gap-4">
              {section.videos.map((video, idx) => (
                <VideoCardItem key={idx} video={video} />
              ))}
            </div>

            {/* CTA */}
            {section.cta && (
              <div className="mt-6 bg-white border border-slate-200 rounded-xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4" dir="rtl">
                <p className="text-sm text-slate-700 font-medium" style={arFont}>
                  {section.cta.text}
                </p>
                <a
                  href={section.cta.href}
                  className="flex-shrink-0 inline-block px-5 py-2.5 bg-[#0B1F3A] text-white text-xs rounded hover:bg-slate-700 transition-colors"
                  style={arFont}
                >
                  {section.cta.label}
                </a>
              </div>
            )}

          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-200 bg-white mt-8">
        <p className="text-xs text-slate-400" style={arFont}>
          Medical Care Germany © 2026 — الرعاية الطبية في ألمانيا
        </p>
        <Link href="/ar">
          <span className="text-xs text-slate-400 hover:text-slate-700 underline underline-offset-4 cursor-pointer mt-2 inline-block" style={arFont}>
            العودة إلى الصفحة الرئيسية
          </span>
        </Link>
      </footer>

    </div>
  );
}
