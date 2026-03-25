import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const arFont: React.CSSProperties = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };

// ─── Types ────────────────────────────────────────────────────────────────────

interface VideoCard {
  videoId: string;
  tag: string;
  tagStyle: string;           // full Tailwind class string for the tag pill
  title: string;
  description: string;
  isShort?: boolean;          // true → vertical video, crop-center thumbnail
}

// ─── Skeleton loader (shown while thumbnail loads) ────────────────────────────

function ThumbnailSkeleton() {
  return (
    <div className="absolute inset-0 bg-slate-200 animate-pulse" />
  );
}

// ─── Video card ───────────────────────────────────────────────────────────────

function VideoCardItem({ video }: { video: VideoCard }) {
  const [loaded, setLoaded] = useState(false);

  // For Shorts: use maxresdefault which tends to be cropped tighter;
  // fall back to hqdefault. We use object-cover + object-center to fill
  // the 16:9 container without black bars regardless of source ratio.
  const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`;
  const videoUrl = video.isShort
    ? `https://www.youtube.com/shorts/${video.videoId}`
    : `https://www.youtube.com/watch?v=${video.videoId}`;

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-2xl overflow-hidden group border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
      style={{ maxWidth: "380px" }}
    >
      {/* Thumbnail — always 16:9, object-cover crops away black bars */}
      <div className="relative w-full aspect-video bg-slate-100 overflow-hidden">
        {!loaded && <ThumbnailSkeleton />}
        <img
          src={thumbnailUrl}
          alt={video.title}
          onLoad={() => setLoaded(true)}
          onError={(e) => {
            // Fallback to hqdefault if maxresdefault 404s
            const img = e.currentTarget;
            if (!img.src.includes("hqdefault")) {
              img.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
            }
            setLoaded(true);
          }}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-13 h-13 w-[52px] h-[52px] bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-200">
            <svg className="w-5 h-5 text-slate-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="px-5 py-4" dir="rtl" style={arFont}>
        <span className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-3 tracking-wide ${video.tagStyle}`}>
          {video.tag}
        </span>
        <h3 className="text-sm font-semibold text-slate-900 leading-snug mb-1.5">
          {video.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed">
          {video.description}
        </p>
      </div>
    </a>
  );
}

// ─── Section divider ──────────────────────────────────────────────────────────

function SectionDivider() {
  return (
    <div className="flex items-center gap-4 my-2" dir="rtl">
      <div className="flex-1 h-px bg-slate-200" />
      <span className="text-[10px] text-slate-300 tracking-widest uppercase" style={arFont}>
        ✦
      </span>
      <div className="flex-1 h-px bg-slate-200" />
    </div>
  );
}

// ─── CTA banner ───────────────────────────────────────────────────────────────

function CTABanner({ text, label, href }: { text: string; label: string; href: string }) {
  return (
    <div
      className="mt-8 border border-slate-200 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white"
      dir="rtl"
    >
      <p className="text-sm text-slate-700 font-medium" style={arFont}>
        {text}
      </p>
      <a
        href={href}
        className="flex-shrink-0 inline-block px-6 py-2.5 bg-[#0B1C2C] text-white text-xs rounded-lg hover:bg-slate-700 transition-colors"
        style={arFont}
      >
        {label}
      </a>
    </div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const medicalVideos: VideoCard[] = [
  {
    videoId: "iLMZmn82_DE",
    tag: "دقة التشخيص: حالة أورام صدر",
    // Deep Blue tag — #0B1C2C background tint
    tagStyle: "bg-[#0B1C2C]/10 text-[#0B1C2C] border border-[#0B1C2C]/20",
    title: "دقة التشخيص: حالة أورام صدر",
    description: "كيف كشف فحص PET-CT عن ورم في الصدر وأدى إلى قرار علاجي دقيق في ألمانيا.",
  },
];

const journeyVideos: VideoCard[] = [
  {
    videoId: "lnxXzDQ8dts",
    tag: "قصة نجاح",
    // Warm Gold tag — #C8A96A
    tagStyle: "bg-[#C8A96A]/15 text-[#8B6914] border border-[#C8A96A]/30",
    title: "ماذا حدث بعد الجراحة؟",
    description: "مريض يشارك تجربته الحقيقية بعد إجراء العملية في برلين والعودة إلى حياته الطبيعية.",
    isShort: true,
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function VideoLibrary() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-[#F7F8FA]" style={arFont}>

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
        <span className="text-sm font-medium tracking-wide" style={arFont}>
          مكتبة الفيديو الطبي
        </span>
        <div className="w-20" />
      </header>

      {/* Page title */}
      <div className="bg-white border-b border-slate-100 py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3 tracking-tight" style={arFont}>
            مكتبة الفيديو الطبي
          </h1>
          <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed" style={arFont}>
            توثيق حقيقي لحالات طبية ورحلات مرضى تلقّوا علاجهم في ألمانيا.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-0">

        {/* ── Section 1: Medical / Oncology ── */}
        <section className="pb-16">
          <div className="mb-8" dir="rtl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-[3px] h-7 rounded-full bg-[#0B1C2C] flex-shrink-0" />
              <h2 className="text-base font-semibold text-slate-900 tracking-tight" style={arFont}>
                أورام الصدر وسرطان الرئة
              </h2>
            </div>
            <p className="text-xs text-slate-400 pr-5 leading-relaxed" style={arFont}>
              توثيق طبي لحالات أورام الصدر — من التشخيص بـ PET-CT إلى القرار العلاجي في ألمانيا.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            {medicalVideos.map((video, idx) => (
              <VideoCardItem key={idx} video={video} />
            ))}
          </div>

          <CTABanner
            text="هل تحتاج إلى تقييم تخصصي لحالة أورام الصدر؟"
            label="أرسل ملفك الطبي لتقييم البروفيسور"
            href="/send-medical-reports"
          />
        </section>

        {/* ── Divider ── */}
        <SectionDivider />

        {/* ── Section 2: Patient Journey ── */}
        <section className="pt-16">
          <div className="mb-8" dir="rtl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-[3px] h-7 rounded-full bg-[#C8A96A] flex-shrink-0" />
              <h2 className="text-base font-semibold text-slate-900 tracking-tight" style={arFont}>
                رحلة المريض
              </h2>
            </div>
            <p className="text-xs text-slate-400 pr-5 leading-relaxed" style={arFont}>
              قصص نجاح حقيقية لمرضى أتمّوا علاجهم في ألمانيا وعادوا إلى حياتهم الطبيعية.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            {journeyVideos.map((video, idx) => (
              <VideoCardItem key={idx} video={video} />
            ))}
          </div>
          {/* No CTA here — personal story, no forced selling */}
        </section>

      </main>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-slate-200 bg-white mt-16">
        <p className="text-xs text-slate-400" style={arFont}>
          Medical Care Germany © 2026 — الرعاية الطبية في ألمانيا
        </p>
        <Link href="/ar">
          <span className="text-xs text-slate-400 hover:text-slate-600 underline underline-offset-4 cursor-pointer mt-2 inline-block transition-colors" style={arFont}>
            العودة إلى الصفحة الرئيسية
          </span>
        </Link>
      </footer>

    </div>
  );
}
