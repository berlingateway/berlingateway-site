import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const arFont: React.CSSProperties = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };

interface VideoCard {
  videoId: string;
  tag: string;
  title: string;
  description: string;
  isShort?: boolean;
}

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
        {/* Play overlay */}
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
        <span className="inline-block text-xs font-medium text-[#C9A646] bg-amber-50 px-2 py-0.5 rounded mb-2">
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

interface SectionData {
  sectionTitle: string;
  sectionSubtitle: string;
  videos: VideoCard[];
}

const sections: SectionData[] = [
  {
    sectionTitle: "العمود الفقري",
    sectionSubtitle: "جراحات وعلاجات أمراض العمود الفقري والانزلاق الغضروفي",
    videos: [
      {
        videoId: "lnxXzDQ8dts",
        tag: "بعد العملية",
        title: "ماذا حدث بعد الجراحة؟",
        description: "نتيجة العملية وتجربة المريض بعد علاج الانزلاق الغضروفي في برلين.",
        isShort: true,
      },
      {
        videoId: "lnxXzDQ8dts",
        tag: "بعد العملية الأولى",
        title: "الاستعداد للعملية الثانية",
        description: "تجربة المريض بعد العملية الأولى والتحضير للجراحة التالية.",
        isShort: true,
      },
      {
        videoId: "iLMZmn82_DE",
        tag: "قصة مريض",
        title: "رحلة علاج الانزلاق الغضروفي",
        description: "توثيق كامل لمسار علاجي من التقييم الأولي حتى التعافي.",
      },
    ],
  },
  {
    sectionTitle: "الأورام",
    sectionSubtitle: "علاج الأورام الدماغية وأورام الجهاز العصبي في ألمانيا",
    videos: [
      {
        videoId: "iLMZmn82_DE",
        tag: "مسار العلاج",
        title: "مسار علاج السرطان في ألمانيا",
        description: "توثيق واقعي لمسار علاجي من التقييم الأولي إلى القرار العلاجي.",
      },
      {
        videoId: "iLMZmn82_DE",
        tag: "الأورام الدماغية",
        title: "الجراحة الدقيقة لأورام الدماغ",
        description: "كيف تُعالَج أورام الجهاز العصبي بتقنيات الجراحة المجهرية في المستشفيات الألمانية.",
      },
    ],
  },
  {
    sectionTitle: "تجربة العلاج في ألمانيا",
    sectionSubtitle: "قصص مرضى حقيقية من الوصول حتى التعافي",
    videos: [
      {
        videoId: "iLMZmn82_DE",
        tag: "رحلة المريض",
        title: "من التقييم إلى العلاج",
        description: "توثيق واقعي لمسار علاجي في ألمانيا، من التقييم السريري الأولي إلى المتابعة.",
      },
      {
        videoId: "lnxXzDQ8dts",
        tag: "بعد العلاج",
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
    ],
  },
];

export default function VideoLibrary() {
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
          <span className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5" style={arFont}>
            <ArrowRight className="w-4 h-4 rotate-180" />
            الرئيسية
          </span>
        </Link>
        <span className="text-sm font-medium" style={arFont}>
          مكتبة الفيديو الطبي
        </span>
        {/* spacer */}
        <div className="w-20" />
      </header>

      {/* Page title */}
      <div className="bg-white border-b border-slate-100 py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3" style={arFont}>
            مكتبة الفيديو الطبي
          </h1>
          <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed" style={arFont}>
            تجارب حقيقية لمرضى تلقّوا علاجهم في ألمانيا، ومقاطع طبية تشرح أبرز التخصصات والإجراءات.
          </p>
        </div>
      </div>

      {/* Sections */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14">
        {sections.map((section) => (
          <section key={section.sectionTitle}>
            {/* Section header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-1 h-6 bg-[#C9A646] rounded-full flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900" style={arFont}>
                  {section.sectionTitle}
                </h2>
              </div>
              <p className="text-xs text-slate-500 pr-4" style={arFont}>
                {section.sectionSubtitle}
              </p>
            </div>

            {/* Video grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.videos.map((video, idx) => (
                <VideoCardItem key={`${section.sectionTitle}-${idx}`} video={video} />
              ))}
            </div>
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
