import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const arFont: React.CSSProperties = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };

// ─── Types ────────────────────────────────────────────────────────────────────

type TabId = "medical" | "visa" | "recovery";

interface VideoCard {
  videoId: string;
  tag: string;
  title: string;
  description: string;
  isShort?: boolean;
}

// ─── Tag color map ─────────────────────────────────────────────────────────────
// Medical = Blue | Visa/Logistics = Green | Recovery = Gold

const tagStyles: Record<TabId, { bg: string; text: string }> = {
  medical:  { bg: "bg-blue-50",   text: "text-blue-700"  },
  visa:     { bg: "bg-green-50",  text: "text-green-700" },
  recovery: { bg: "bg-amber-50",  text: "text-[#C9A646]" },
};

// ─── Video card component ──────────────────────────────────────────────────────

function VideoCardItem({ video, tab }: { video: VideoCard; tab: TabId }) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
  const videoUrl = video.isShort
    ? `https://www.youtube.com/shorts/${video.videoId}`
    : `https://www.youtube.com/watch?v=${video.videoId}`;
  const { bg, text } = tagStyles[tab];

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group border border-slate-100"
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
        <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded mb-2 ${bg} ${text}`}>
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

// ─── CTA Banner ────────────────────────────────────────────────────────────────

function CTABanner({ tab }: { tab: TabId }) {
  if (tab === "medical") {
    return (
      <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4" dir="rtl">
        <p className="text-sm text-blue-800 font-medium" style={arFont}>
          هل تحتاج إلى تقييم طبي متخصص من بروفيسور ألماني؟
        </p>
        <a
          href="/send-medical-reports"
          className="flex-shrink-0 inline-block px-5 py-2.5 bg-[#0B1F3A] text-white text-xs rounded hover:bg-slate-700 transition-colors"
          style={arFont}
        >
          أرسل ملفك الطبي لتقييم البروفيسور
        </a>
      </div>
    );
  }

  if (tab === "visa") {
    return (
      <div className="mt-8 bg-green-50 border border-green-100 rounded-xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4" dir="rtl">
        <p className="text-sm text-green-800 font-medium" style={arFont}>
          هل تواجه صعوبة في الحصول على تأشيرة علاجية؟
        </p>
        <a
          href="/send-medical-reports"
          className="flex-shrink-0 inline-block px-5 py-2.5 bg-green-700 text-white text-xs rounded hover:bg-green-800 transition-colors"
          style={arFont}
        >
          تواصل معنا الآن
        </a>
      </div>
    );
  }

  // Recovery — no CTA, just a soft note
  return (
    <div className="mt-8 bg-amber-50 border border-amber-100 rounded-xl px-6 py-4 text-center" dir="rtl">
      <p className="text-xs text-amber-700" style={arFont}>
        هذه قصص حقيقية لمرضى أتمّوا علاجهم في ألمانيا وعادوا إلى حياتهم الطبيعية.
      </p>
    </div>
  );
}

// ─── Tab data ──────────────────────────────────────────────────────────────────

const tabs: { id: TabId; label: string; description: string }[] = [
  {
    id: "medical",
    label: "الحالات الطبية والأورام",
    description: "توثيق طبي لحالات معقدة تلقّت تشخيصاً وعلاجاً في ألمانيا — أورام، جراحات دقيقة، وتقييمات تخصصية.",
  },
  {
    id: "visa",
    label: "قصص النجاح وتسهيلات الفيزا",
    description: "تجارب مرضى واجهوا تحديات الحصول على تأشيرة العلاج وكيف تمّ حلّها بنجاح.",
  },
  {
    id: "recovery",
    label: "رحلة التعافي",
    description: "متابعة واقعية لمراحل التعافي بعد الجراحة والعودة إلى الحياة الطبيعية.",
  },
];

const videosByTab: Record<TabId, VideoCard[]> = {
  medical: [
    {
      videoId: "iLMZmn82_DE",
      tag: "أورام الصدر",
      title: "تشخيص ورم الصدر بـ PET-CT",
      description: "كيف كشف فحص PET-CT عن ورم في الصدر وأدى إلى قرار علاجي دقيق في ألمانيا.",
    },
    {
      videoId: "lnxXzDQ8dts",
      tag: "جراحة العمود الفقري",
      title: "ماذا حدث بعد جراحة الفقرات؟",
      description: "نتيجة العملية وتجربة المريض بعد علاج الانزلاق الغضروفي في برلين.",
      isShort: true,
    },
    {
      videoId: "lnxXzDQ8dts",
      tag: "جراحة العمود الفقري",
      title: "الاستعداد للعملية الثانية",
      description: "تجربة المريض بعد العملية الأولى والتحضير للجراحة التالية.",
      isShort: true,
    },
    {
      videoId: "iLMZmn82_DE",
      tag: "مسار العلاج",
      title: "من التقييم إلى قرار العلاج",
      description: "توثيق كامل لمسار علاجي من التقييم السريري الأولي حتى الخطة العلاجية.",
    },
  ],
  visa: [
    {
      videoId: "iLMZmn82_DE",
      tag: "تأشيرة علاجية",
      title: "كيف حصلنا على التأشيرة بعد رفضها",
      description: "قصة مريض واجه صعوبات في استخراج تأشيرة العلاج وكيف تمّ حلّ المشكلة.",
    },
    {
      videoId: "iLMZmn82_DE",
      tag: "تسهيلات السفر",
      title: "التنسيق من البلد الأصلي حتى برلين",
      description: "كيف يتم ترتيب السفر والإقامة والمواعيد الطبية قبل وصول المريض.",
    },
    {
      videoId: "lnxXzDQ8dts",
      tag: "نجاح الفيزا",
      title: "تأشيرة في أسبوع واحد",
      description: "تجربة عائلة نجحت في الحصول على تأشيرة علاجية خلال أسبوع بمساعدة التنسيق الطبي.",
      isShort: true,
    },
  ],
  recovery: [
    {
      videoId: "lnxXzDQ8dts",
      tag: "التعافي",
      title: "ما الذي يتوقعه المريض بعد الجراحة؟",
      description: "مراحل التعافي والمتابعة الطبية بعد الخروج من المستشفى.",
      isShort: true,
    },
    {
      videoId: "iLMZmn82_DE",
      tag: "العودة إلى الوطن",
      title: "المتابعة عن بُعد بعد العودة",
      description: "كيف يتم التنسيق لمتابعة العلاج عن بُعد بعد مغادرة ألمانيا.",
    },
    {
      videoId: "iLMZmn82_DE",
      tag: "قصة نجاح",
      title: "بعد ستة أشهر من الجراحة",
      description: "مريض يشارك تجربته بعد ستة أشهر من إجراء العملية وعودته لحياته الطبيعية.",
    },
  ],
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function VideoLibrary() {
  const [activeTab, setActiveTab] = useState<TabId>("medical");

  const currentTab = tabs.find((t) => t.id === activeTab)!;
  const videos = videosByTab[activeTab];

  return (
    <div
      dir="rtl"
      lang="ar"
      className="min-h-screen bg-[#F8F9FA]"
      style={arFont}
    >
      {/* Sticky nav */}
      <header
        className="bg-[#0B1F3A] text-white sticky z-40 px-5 py-4 flex items-center justify-between"
        style={{ top: "var(--banner-height, 0px)" }}
      >
        <Link href="/ar">
          <span
            className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            style={arFont}
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            الرئيسية
          </span>
        </Link>
        <span className="text-sm font-medium" style={arFont}>
          مكتبة الفيديو الطبي
        </span>
        <div className="w-20" />
      </header>

      {/* Page title */}
      <div className="bg-white border-b border-slate-100 py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3"
            style={arFont}
          >
            مكتبة الفيديو الطبي
          </h1>
          <p
            className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed"
            style={arFont}
          >
            تجارب حقيقية لمرضى تلقّوا علاجهم في ألمانيا — مصنّفة حسب الموضوع لسهولة التصفح.
          </p>
        </div>
      </div>

      {/* Tab bar */}
      <div className="bg-white border-b border-slate-200 sticky z-30" style={{ top: "calc(var(--banner-height, 0px) + 57px)" }}>
        <div className="max-w-4xl mx-auto px-4 flex gap-0 overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const activeUnderline =
              tab.id === "medical"
                ? "border-blue-600"
                : tab.id === "visa"
                ? "border-green-600"
                : "border-[#C9A646]";
            const activeText =
              tab.id === "medical"
                ? "text-blue-700"
                : tab.id === "visa"
                ? "text-green-700"
                : "text-[#C9A646]";

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 py-4 text-sm font-medium border-b-2 transition-colors ${
                  isActive
                    ? `${activeUnderline} ${activeText}`
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
                style={arFont}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Section content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Section header */}
        <div className="mb-8" dir="rtl">
          <h2
            className="text-lg font-semibold text-slate-900 mb-1"
            style={arFont}
          >
            {currentTab.label}
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed" style={arFont}>
            {currentTab.description}
          </p>
          <div
            className={`mt-3 h-0.5 w-12 rounded-full ${
              activeTab === "medical"
                ? "bg-blue-500"
                : activeTab === "visa"
                ? "bg-green-500"
                : "bg-[#C9A646]"
            }`}
          />
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video, idx) => (
            <VideoCardItem key={idx} video={video} tab={activeTab} />
          ))}
        </div>

        {/* CTA */}
        <CTABanner tab={activeTab} />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-200 bg-white mt-8">
        <p className="text-xs text-slate-400" style={arFont}>
          Medical Care Germany © 2026 — الرعاية الطبية في ألمانيا
        </p>
        <Link href="/ar">
          <span
            className="text-xs text-slate-400 hover:text-slate-700 underline underline-offset-4 cursor-pointer mt-2 inline-block"
            style={arFont}
          >
            العودة إلى الصفحة الرئيسية
          </span>
        </Link>
      </footer>
    </div>
  );
}
