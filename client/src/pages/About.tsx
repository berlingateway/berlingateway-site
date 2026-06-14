import { useEffect } from "react";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

export default function About() {
  useEffect(() => {
    document.title = "About Us | Medical Care Germany — Berlin";

    const descContent =
      "An Arab-German medical team working from Berlin since 2012. We speak your language and understand the German medical system from the inside. 500+ complex cases coordinated.";
    let m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", descContent);
    else {
      const n = document.createElement("meta");
      n.name = "description";
      n.content = descContent;
      document.head.appendChild(n);
    }

    // Organization + AboutPage Schema JSON-LD
    const schema = [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Us — Medical Care Germany",
        "url": "https://medicalcaregermany.com/about",
        "description":
          "An Arab-German medical team working from Berlin since 2012. Over 500 complex cases coordinated from Libya, Algeria, Iraq, Saudi Arabia and more than 20 Arab countries.",
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Medical Care Germany",
          "url": "https://medicalcaregermany.com",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Medical Care Germany",
        "url": "https://medicalcaregermany.com",
        "foundingDate": "2012",
        "description":
          "An Arab-German medical team specialising in coordinating complex cases with hospitals and professors in Germany.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Perleberger Str. 41",
          "addressLocality": "Berlin",
          "postalCode": "10559",
          "addressCountry": "DE",
        },
        "telephone": "+493025730875",
        "email": "info@medicalcaregermany.com",
      },
    ];
    const existing = document.querySelector('script[data-schema="about-en"]');
    if (!existing) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-schema", "about-en");
      s.textContent = JSON.stringify(schema);
      document.head.appendChild(s);
    }
    return () => {
      const s = document.querySelector('script[data-schema="about-en"]');
      if (s) s.remove();
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-white text-slate-900"
      style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
    >
      <HreflangTags currentPath="/about" />
      <SmartNavLayer currentPath="/about" />

      {/* ══ SECTION 1: HERO (dark) ══════════════════════════════════════════════ */}
      <section
        style={{
          background: "#0B1C2C",
          padding: "100px 24px 80px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "#64748b",
              textTransform: "uppercase",
              marginBottom: 24,
              fontFamily: "inherit",
            }}
          >
            MEDICAL CARE GERMANY — BERLIN
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 300,
              color: "#f8fafc",
              lineHeight: 1.4,
              marginBottom: 32,
              fontFamily: "inherit",
            }}
          >
            We're not a middleman.
            <br />
            We're the bridge.
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 19px)",
              fontWeight: 300,
              color: "#94a3b8",
              lineHeight: 1.9,
              maxWidth: 620,
              margin: "0 auto 40px",
              fontFamily: "inherit",
            }}
          >
            We grew up in the Arab world — and have lived
            <br />
            in Germany for decades.
            <br />
            We studied here. We worked here.
            <br />
            We understand how German medicine thinks
            <br />
            when it reads your file.
            <br />
            <br />
            We've seen patients get lost between hospitals —
            <br />
            unqualified translators, medical language
            <br />
            that doesn't cross the barrier properly.
            <br />
            We decided to be the solution.
          </p>
          <a
            href="https://wa.me/4915781497451?text=I%20would%20like%20to%20speak%20with%20a%20medical%20coordinator%20about%20my%20case."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#25D366",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: 4,
              fontFamily: "inherit",
              fontSize: 15,
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Talk to Us on WhatsApp
          </a>
        </div>
      </section>

      {/* ══ SECTION 2: 3 CARDS (light) ══════════════════════════════════════════ */}
      <section style={{ padding: "72px 24px 64px", background: "#f8fafc" }}>
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {[
            {
              title: "Based inside Germany",
              body: "Our team works daily from Berlin — with patient files, hospitals, and specialists. Not a remote coordination office.",
            },
            {
              title: "We speak both languages",
              body: "Medical Arabic and clinical German. The difference between a correct translation and a precise medical translation — we know it.",
            },
            {
              title: "Since 2012",
              body: "Over 500 complex cases coordinated. From Libya, Algeria, Iraq, Saudi Arabia and more than 20 Arab countries.",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: 8,
                padding: "32px 28px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#0f172a",
                  marginBottom: 12,
                  fontFamily: "inherit",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 300,
                  color: "#475569",
                  lineHeight: 1.85,
                  fontFamily: "inherit",
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SECTION 3: QUOTE (dark) ══════════════════════════════════════════════ */}
      <section
        style={{
          padding: "80px 24px 72px",
          background: "#0f172a",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 52,
              color: "#334155",
              marginBottom: 24,
              fontFamily: "Georgia, serif",
              lineHeight: 1,
            }}
          >
            &ldquo;
          </div>
          <blockquote
            style={{
              fontSize: "clamp(18px, 2.5vw, 26px)",
              fontWeight: 300,
              color: "#f1f5f9",
              lineHeight: 1.9,
              fontFamily: "inherit",
            }}
          >
            We saw a patient sit in front of a German
            <br />
            professor and not understand a word.
            <br />
            We saw a family make a surgical decision
            <br />
            based on a mistranslation.
            <br />
            <br />
            That's why we decided:
            <br />
            every Arab patient deserves the right doctor,
            <br />
            the right information,
            <br />
            at the right time.
          </blockquote>
        </div>
      </section>

      {/* ══ SECTION 4: HOW WE WORK (light, 4 steps) ═════════════════════════════ */}
      <section style={{ padding: "72px 24px 64px", background: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 400,
              color: "#0f172a",
              textAlign: "center",
              marginBottom: 48,
              fontFamily: "inherit",
            }}
          >
            How We Work With You
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {[
              {
                num: "1",
                title: "We read your full file",
                body: "A real person reviews all your reports and understands your medical history.",
              },
              {
                num: "2",
                title: "We speak to the right specialist",
                body: "In their language and terminology — not just forwarding a document.",
              },
              {
                num: "3",
                title: "We translate everything for you",
                body: "The medical decision, options, risks — in clear language you don't need to decode.",
              },
              {
                num: "4",
                title: "We stay with you until the end",
                body: "From the airport to the hospital to your return home.",
              },
            ].map((step) => (
              <div
                key={step.num}
                style={{
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                  padding: "24px 28px",
                  background: "#f8fafc",
                  borderRadius: 8,
                  border: "1px solid #e2e8f0",
                }}
              >
                <div
                  style={{
                    minWidth: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "#0B1C2C",
                    color: "#f8fafc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "inherit",
                    fontSize: 18,
                    fontWeight: 500,
                    flexShrink: 0,
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 600,
                      color: "#0f172a",
                      marginBottom: 6,
                      fontFamily: "inherit",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 300,
                      color: "#475569",
                      lineHeight: 1.8,
                      fontFamily: "inherit",
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 5: TESTIMONIAL — Dr. Khaled ═════════════════════════════════ */}
      <section
        style={{
          padding: "72px 24px 64px",
          background: "#0B1C2C",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 48,
              color: "#475569",
              marginBottom: 24,
              fontFamily: "Georgia, serif",
            }}
          >
            &ldquo;
          </div>
          <blockquote
            style={{
              fontSize: "clamp(18px, 2.5vw, 24px)",
              fontWeight: 400,
              color: "#f8fafc",
              lineHeight: 1.8,
              marginBottom: 32,
              fontFamily: "inherit",
            }}
          >
            The team is distinguished by honesty and integrity,
            <br />
            and they spare no effort in selecting the best doctors in Germany.
            <br />
            They also have expertise in visas and residency in Germany,
            <br />
            and they strive for the patient's comfort from the moment
            <br />
            they arrive at the airport until they are seen off.
          </blockquote>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <p
              style={{
                color: "#cbd5e1",
                fontSize: 15,
                fontWeight: 500,
                fontFamily: "inherit",
              }}
            >
              Dr. Khaled — Resident in the United Arab Emirates
            </p>
            <p style={{ color: "#facc15", fontSize: 20, letterSpacing: "0.15em" }}>
              ★★★★★
            </p>
            <p
              style={{
                color: "#64748b",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontFamily: "inherit",
              }}
            >
              Google Reviews
            </p>
          </div>
        </div>
      </section>

      {/* ══ SECTION 6: FINAL CTA (dark) ══════════════════════════════════════════ */}
      <section
        style={{
          padding: "80px 24px 72px",
          background: "#0f172a",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 36px)",
              fontWeight: 400,
              color: "#f8fafc",
              lineHeight: 1.65,
              marginBottom: 16,
              fontFamily: "inherit",
            }}
          >
            Talk to us — before any decision.
          </h2>
          <p
            style={{
              fontSize: 17,
              fontWeight: 300,
              color: "#94a3b8",
              lineHeight: 1.8,
              marginBottom: 36,
              fontFamily: "inherit",
            }}
          >
            You don't need a complete file to start.
            <br />
            One WhatsApp message is enough.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <a
              href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#f8fafc",
                color: "#0f172a",
                padding: "14px 28px",
                borderRadius: 4,
                fontFamily: "inherit",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Send Your Medical File
            </a>
            <a
              href="https://wa.me/4915781497451?text=I%20would%20like%20to%20speak%20with%20a%20medical%20coordinator%20about%20my%20case."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#25D366",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: 4,
                fontFamily: "inherit",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              WhatsApp
            </a>
          </div>
          <p
            style={{
              color: "#475569",
              fontSize: 13,
              fontFamily: "inherit",
            }}
          >
            We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ══ FOOTER ══════════════════════════════════════════════════════════════ */}
      <footer
        style={{
          padding: "40px 24px",
          background: "#0f172a",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <a
            href="mailto:info@medicalcaregermany.com"
            style={{
              display: "block",
              color: "#94a3b8",
              fontSize: 15,
              marginBottom: 8,
              textDecoration: "none",
              fontFamily: "inherit",
            }}
          >
            info@medicalcaregermany.com
          </a>
          <p
            style={{
              color: "#475569",
              fontSize: 13,
              marginBottom: 16,
              fontFamily: "inherit",
            }}
          >
            Medical Care Germany · Perleberger Str. 41 · 10559 Berlin · Germany
          </p>
          <p style={{ color: "#334155", fontSize: 12, fontFamily: "inherit" }}>
            Medical Care Germany © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
