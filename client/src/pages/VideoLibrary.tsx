import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";

const arFont: React.CSSProperties = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const WA_PHONE = "4915781497451";
const WA_RARE = encodeURIComponent("مرحباً، أودّ الاستفسار عن حالة مرض مناعي أو نادر.");

// ─── Types ────────────────────────────────────────────────────────────────────

interface VideoCard {
  videoId: string;
  tag: string;
  tagStyle: string;
  title: string;
  description: string;
  isShort?: boolean;
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function ThumbnailSkeleton() {
  return <div className="absolute inset-0 bg-slate-200 animate-pulse" />;
}

// ─── Video card ───────────────────────────────────────────────────────────────

function VideoCardItem({ video }: { video: VideoCard }) {
  const [loaded, setLoaded] = useState(false);
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
      style={{ maxWidth: "380px", width: "100%" }}
    >
      {/* Thumbnail — 16:9, object-cover fills frame, no black bars */}
      <div className="relative w-full aspect-video bg-slate-100 overflow-hidden">
        {!loaded && <ThumbnailSkeleton />}
        <img
          src={thumbnailUrl}
          alt={video.title}
          onLoad={() => setLoaded(true)}
          onError={(e) => {
            const img = e.currentTarget;
            if (!img.src.includes("hqdefault")) {
              img.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
            }
            setLoaded(true);
          }}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[52px] h-[52px] bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-200">
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
    <div className="flex items-center gap-4 my-2">
      <div className="flex-1 h-px bg-slate-200" />
      <span className="text-[10px] text-slate-300 tracking-widest" style={arFont}>✦</span>
      <div className="flex-1 h-px bg-slate-200" />
    </div>
  );
}

// ─── CTA banner ───────────────────────────────────────────────────────────────

function CTABanner({ text, label, href, external }: { text: string; label: string; href: string; external?: boolean }) {
  return (
    <div className="mt-8 border border-slate-200 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white" dir="rtl">
      <p className="text-sm text-slate-700 font-medium" style={arFont}>{text}</p>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="flex-shrink-0 inline-block px-6 py-2.5 bg-[#0B1C2C] text-white text-xs rounded-lg hover:bg-slate-700 transition-colors"
        style={arFont}
      >
        {label}
      </a>
    </div>
  );
}

// ─── Minimal Arabic nav header ────────────────────────────────────────────────

function ArabicPageHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className="sticky z-50 w-full py-3 px-6 flex justify-between items-center border-b border-slate-100 bg-white/95 backdrop-blur-sm"
        style={{ top: "var(--banner-height, 0px)", fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
        dir="rtl"
      >
        {/* Logo */}
        <Link href="/ar">
          <span className="flex flex-col items-start cursor-pointer">
            <span className="text-base font-bold tracking-tight text-slate-900" style={{ fontFamily: "Georgia, serif" }}>
              Medical Care Germany
            </span>
            <span className="text-[9px] text-slate-500 tracking-wide uppercase mt-0.5">
              سلطة التنسيق السريري المؤسسي
            </span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-7 text-sm text-slate-500 items-center" style={arFont}>
          <Link href="/ar"><span className="hover:text-slate-900 cursor-pointer transition-colors">الرئيسية</span></Link>
          <Link href="/ar/videos"><span className="text-slate-900 font-medium cursor-pointer">مكتبة الفيديو</span></Link>
          <Link href="/ar#submit-case"><span className="hover:text-slate-900 cursor-pointer transition-colors">تقديم الحالة</span></Link>
          <Link href="/ar#contact"><span className="hover:text-slate-900 cursor-pointer transition-colors">تواصل</span></Link>
        </div>

        {/* CTA + lang */}
        <div className="flex items-center gap-3">
          <a
            href="/send-medical-reports"
            className="hidden md:inline-block bg-slate-900 text-white text-xs font-medium px-4 py-2 hover:bg-slate-700 transition-colors tracking-wide"
            style={arFont}
          >
            إرسال التقارير الطبية
          </a>
          <Link href="/"><span className="text-xs text-slate-400 hover:text-slate-700 cursor-pointer transition-colors">EN</span></Link>
          <span className="text-slate-300 text-xs">|</span>
          <span className="text-xs text-slate-900 font-medium">AR</span>
          {/* Mobile hamburger */}
          <button
            className="md:hidden mr-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="القائمة"
          >
            <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-end p-8 gap-6 text-lg text-slate-700" dir="rtl" style={arFont}>
          <button onClick={() => setMobileOpen(false)} className="self-start text-slate-400 hover:text-slate-700 text-2xl">✕</button>
          <Link href="/ar" onClick={() => setMobileOpen(false)}><span className="cursor-pointer hover:text-slate-900">الرئيسية</span></Link>
          <Link href="/ar/videos" onClick={() => setMobileOpen(false)}><span className="cursor-pointer text-slate-900 font-medium">مكتبة الفيديو</span></Link>
          <Link href="/ar#submit-case" onClick={() => setMobileOpen(false)}><span className="cursor-pointer hover:text-slate-900">تقديم الحالة</span></Link>
          <Link href="/ar#contact" onClick={() => setMobileOpen(false)}><span className="cursor-pointer hover:text-slate-900">تواصل</span></Link>
          <a href="/send-medical-reports" className="bg-slate-900 text-white text-sm px-6 py-3 rounded" style={arFont}>
            إرسال التقارير الطبية
          </a>
        </div>
      )}
    </>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const thoracicVideos: VideoCard[] = [
  {
    videoId: "iLMZmn82_DE",
    tag: "التشخيص السريري",
    tagStyle: "bg-[#0B1C2C]/10 text-[#0B1C2C] border border-[#0B1C2C]/20",
    title: "التشخيص الدقيق والقرار الجراحي (أورام الصدر)",
    description: "كيف كشف فحص PET-CT عن ورم في الصدر وأدى إلى قرار علاجي دقيق في ألمانيا.",
  },
  {
    videoId: "lnxXzDQ8dts",
    tag: "نتيجة جراحية",
    tagStyle: "bg-[#0B1C2C]/10 text-[#0B1C2C] border border-[#0B1C2C]/20",
    title: "نتائج التدخل الجراحي في برلين",
    description: "توثيق نتائج العملية الجراحية لأورام الصدر وتقييم المسار العلاجي بعد التدخل.",
    isShort: true,
  },
];

const immuneVideos: VideoCard[] = [
  {
    videoId: "UMzijBy0pQ4",
    tag: "رحلة المريض",
    tagStyle: "bg-[#C8A96A]/15 text-[#8B6914] border border-[#C8A96A]/30",
    title: "قصة المعاناة والوصول إلى ألمانيا (مرض مناعي نادر)",
    description: "شهادة مريض عن المعاناة قبل الوصول إلى العلاج والتعرف على Medical Care Germany.",
    isShort: true,
  },
  {
    videoId: "K9v4u6HT-YM",
    tag: "تعافي",
    tagStyle: "bg-[#C8A96A]/15 text-[#8B6914] border border-[#C8A96A]/30",
    title: "تحسن الحالة والنتائج بعد العلاج الدقيق",
    description: "شهادة مريض عن التحسن بعد العلاج وبداية العودة إلى الحياة الطبيعية.",
    isShort: true,
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function VideoLibrary() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-[#F7F8FA]" style={arFont}>

      {/* Global Arabic navigation header */}
      <ArabicPageHeader />

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

        {/* ── Shelf A: Thoracic Oncology ── */}
        <section className="pb-16">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-[3px] h-7 rounded-full bg-[#0B1C2C] flex-shrink-0" />
              <h2 className="text-base font-semibold text-slate-900 tracking-tight" style={arFont}>
                أورام الصدر والجراحات الدقيقة
              </h2>
            </div>
            <p className="text-xs text-slate-400 pr-5 leading-relaxed" style={arFont}>
              توثيق طبي لحالات أورام الصدر — من التشخيص بـ PET-CT إلى نتائج التدخل الجراحي في ألمانيا.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            {thoracicVideos.map((video, idx) => (
              <VideoCardItem key={idx} video={video} />
            ))}
          </div>

          <CTABanner
            text="هل تحتاج إلى تقييم تخصصي لحالة أورام الصدر؟"
            label="أرسل ملفك للأورام"
            href="/ar/send-medical-reports"
          />
        </section>

        {/* ── Divider ── */}
        <SectionDivider />

        {/* ── Shelf B: Autoimmune & Rare Diseases ── */}
        <section className="pt-16">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-[3px] h-7 rounded-full bg-[#C8A96A] flex-shrink-0" />
              <h2 className="text-base font-semibold text-slate-900 tracking-tight" style={arFont}>
                الأمراض المناعية والنادرة
              </h2>
            </div>
            <p className="text-xs text-slate-400 pr-5 leading-relaxed" style={arFont}>
              قصص مرضى تلقّوا علاجاً متخصصاً للأمراض المناعية والنادرة في ألمانيا.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            {immuneVideos.map((video, idx) => (
              <VideoCardItem key={idx} video={video} />
            ))}
          </div>

          <CTABanner
            text="هل تعاني من مرض مناعي أو نادر وتبحث عن علاج في ألمانيا؟"
            label="استشارة للحالات النادرة"
            href={`https://wa.me/${WA_PHONE}?text=${WA_RARE}`}
            external
          />
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
