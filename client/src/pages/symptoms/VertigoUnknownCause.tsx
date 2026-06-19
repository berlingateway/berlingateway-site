import { SymptomPage } from "./_SymptomPageTemplate";

const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const intakeHref = "https://tally.so/r/68MrBP";
const whatsappHref =
  "https://wa.me/4915781497451?text=" +
  encodeURIComponent("أريد التحدث مع منسق طبي");

export default function VertigoUnknownCause() {
  return (
    <SymptomPage
      heroTitle="دوار حاد متكرر بدون سبب محدد؟"
      heroLine2="التشخيص الصحيح يبدأ من تحليل الأسباب، لا من علاج الأعراض."
      triggers={[
        "نوبات دوار حادة ومتكررة",
        "الشعور بأن الغرفة تدور حولك",
        "الدوار يحدث بدون تحريك الرأس",
        "فشل علاجات متعددة في إيقاف النوبات",
        "الدوار مصحوب بطنين أو فقدان سمع",
      ]}
      warning="الدوار المتكرر غير المشخص قد يكون مؤشراً لحالة عصبية أو وعائية تحتاج تقييماً متخصصاً."
      filterText="هذه الصفحة مخصصة للحالات التي لم يُحدَّد سببها بعد."
    >
      {/* ══ SECTION A — Dark: تشعر بالدوار ══ */}
      <section style={{ background: "#0B1C2C", padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ ...FONT, fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 300, color: "#fff", lineHeight: 1.5, marginBottom: 24 }}>
            تشعر بالدوار —<br />ولا أحد يعرف من أين يأتي.
          </h2>
          <p style={{ ...FONT, fontSize: 15, color: "#94a3b8", lineHeight: 1.9, marginBottom: 8 }}>
            فحوصات كثيرة. أطباء كثيرون.
          </p>
          <p style={{ ...FONT, fontSize: 15, color: "#94a3b8", lineHeight: 1.9, marginBottom: 8 }}>
            والإجابة الواضحة لم تأتِ بعد.
          </p>
          <p style={{ ...FONT, fontSize: 15, color: "#94a3b8", lineHeight: 1.9, marginBottom: 36 }}>
            هذا النوع من الحالات هو ما نتخصص فيه.
          </p>
          <a
            href={intakeHref} target="_blank" rel="noopener noreferrer"
            style={{ ...FONT, display: "inline-block", padding: "14px 36px", background: "#fff", color: "#0B1C2C", fontSize: 14, fontWeight: 500, textDecoration: "none" }}
          >
            أرسل ملفك — رد خلال 24 ساعة
          </a>
        </div>
      </section>

      {/* ══ SECTION B — Light: 4 cards ══ */}
      <section style={{ background: "#f8fafc", padding: "72px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ ...FONT, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>
            السبب الحقيقي
          </p>
          <h2 style={{ ...FONT, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 40, lineHeight: 1.5, textAlign: "center" }}>
            لماذا يبقى الدوار بدون تفسير؟
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {[
              { title: "فحص منفرد", text: "كل طبيب يرى تخصصه فقط — التداخل بين التخصصات لا يُكشف" },
              { title: "تقارير متفرقة", text: "النتائج لا تُقرأ معاً — كل تقرير معزول عن الآخر" },
              { title: "غياب البروتوكول", text: "لا يوجد مسار تشخيصي موحد للدوار غير المحسوم" },
              { title: "تأخير العلاج", text: "كل إحالة تأخذ أسابيع — والحالة تتفاقم بدون اتجاه واضح" },
            ].map((card, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e2e8f0", padding: "24px 20px" }}>
                <h3 style={{ ...FONT, fontSize: 14, fontWeight: 600, color: "#0B1C2C", marginBottom: 10 }}>{card.title}</h3>
                <p style={{ ...FONT, fontSize: 13, color: "#64748b", lineHeight: 1.7 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION C — Dark CTA ══ */}
      <section style={{ background: "#0B1C2C", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ ...FONT, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 300, color: "#fff", lineHeight: 1.6, marginBottom: 32 }}>
            إذا شعرت أن حالتك لم تُفهم بالكامل —<br />
            أرسل ملفك. سيقرأه متخصص ويرد عليك خلال 24 ساعة.
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 20 }}>
            <a
              href={intakeHref} target="_blank" rel="noopener noreferrer"
              style={{ ...FONT, display: "inline-block", padding: "14px 32px", background: "#fff", color: "#0B1C2C", fontSize: 14, fontWeight: 500, textDecoration: "none" }}
            >
              أرسل ملفك الطبي
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...FONT, display: "inline-block", padding: "14px 32px", border: "1px solid #fff", color: "#fff", fontSize: 14, fontWeight: 300, textDecoration: "none" }}
            >
              تحدث معنا عبر واتساب
            </a>
          </div>
          <p style={{ ...FONT, fontSize: 12, color: "#64748b", lineHeight: 1.7 }}>
            لا تشخيص عن بُعد. فقط تقييم حقيقي لما تحتاجه فعلاً.
          </p>
        </div>
      </section>
    </SymptomPage>
  );
}
