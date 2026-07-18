import os
from pathlib import Path
from jinja2 import Environment, FileSystemLoader

# Define base paths
BASE_DIR = Path(__file__).parent
TEMPLATES_DIR = BASE_DIR / "templates"
OUTPUT_DIR_DE = BASE_DIR / "de"
OUTPUT_DIR_AR = BASE_DIR / "ar"

# Ensure output directories exist
OUTPUT_DIR_DE.mkdir(exist_ok=True)
OUTPUT_DIR_AR.mkdir(exist_ok=True)

# Setup Jinja2 environment
env = Environment(loader=FileSystemLoader(TEMPLATES_DIR))

# German content data
CONTENT_DE = {
    "page_title": "Systemlogik – Berlin Gateway",
    "hero_title": "Die Basis unserer Zusammenarbeit",
    "hero_subtitle": "Wir arbeiten ausschließlich mit Kandidaten, die unsere hohen Standards erfüllen. Prüfen Sie, ob Sie dazu gehören.",
    "filter_1_title": "Qualifikation",
    "filter_1_text": "Hochschulabschluss oder anerkannte Berufsausbildung. Ohne Ausnahme.",
    "filter_2_title": "Sprachkenntnisse",
    "filter_2_text": "Mindestens B1-Niveau in Deutsch. Kommunikation ist entscheidend.",
    "filter_3_title": "Berufserfahrung",
    "filter_3_text": "Mindestens 2 Jahre relevante Berufserfahrung. Theorie allein genügt nicht.",
    "exclusion_text": "Wenn Sie diese Kriterien nicht erfüllen, können wir Sie derzeit nicht unterstützen.",
    "cta_text": "Lassen Sie Ihre Situation bewerten",
    "routing_section_title": "Nächster Schritt – was ist für Sie jetzt richtig?",
    "routing_section_intro": "Nicht jeder Besucher braucht dieselbe Seite. Wählen Sie den nächsten Schritt passend zu Ihrer Situation.",
    "routing_card_1_title": "Marktlage prüfen",
    "routing_card_1_text": "Wenn Sie zuerst verstehen möchten, wie der deutsche Arbeitsmarkt für Ihr Profil aussieht.",
    "routing_card_1_button": "Zum Monitor",
    "routing_card_1_link": "/de/monitor",
    "routing_card_2_title": "Chancen besser verstehen",
    "routing_card_2_text": "Wenn Sie Einordnung, Szenarien und realistische Perspektiven für Ihren Weg brauchen.",
    "routing_card_2_button": "Zu Insights",
    "routing_card_2_link": "/de/insights",
    "routing_card_3_title": "Profil direkt bewerten lassen",
    "routing_card_3_text": "Wenn Sie keine Theorie mehr brauchen, sondern eine konkrete Einschätzung Ihrer realen Chance.",
    "routing_card_3_button": "Chancenkarte-Bewertung starten",
    "routing_card_3_link": "/de/chancenkarte",
    "decision_cta_headline": "Treffen Sie jetzt die richtige Entscheidung",
    "decision_cta_text": "Wer die Logik verstanden hat, sollte den nächsten Schritt nicht aufschieben.",
    "decision_cta_button": "Chancenkarte-Bewertung starten",
    "decision_cta_secondary_link_1": "Monitor ansehen",
    "decision_cta_secondary_link_1_href": "/de/monitor",
    "decision_cta_secondary_link_2": "Insights lesen",
    "decision_cta_secondary_link_2_2_href": "/de/insights",
}

# Arabic content data
CONTENT_AR = {
    "page_title": "منطق النظام – Berlin Gateway",
    "hero_title": "أساس تعاوننا",
    "hero_subtitle": "نحن نعمل حصريًا مع المرشحين الذين يستوفون معاييرنا العالية. تحقق مما إذا كنت مؤهلاً.",
    "filter_1_title": "المؤهلات",
    "filter_1_text": "شهادة جامعية أو تدريب مهني معترف به. لا استثناءات.",
    "filter_2_title": "مهارات اللغة",
    "filter_2_text": "مستوى B1 على الأقل في اللغة الألمانية. التواصل أمر حاسم.",
    "filter_3_title": "الخبرة المهنية",
    "filter_3_text": "خبرة مهنية ذات صلة لا تقل عن سنتين. النظرية وحدها لا تكفي.",
    "exclusion_text": "إذا لم تستوف هذه المعايير، فلا يمكننا دعمك حاليًا.",
    "cta_text": "قيّم فرصتك الآن",
    "routing_section_title": "الخطوة التالية — ما الصفحة المناسبة لك الآن؟",
    "routing_section_intro": "ليس كل زائر يحتاج نفس الصفحة. اختر المسار المناسب حسب ما تحتاجه الآن.",
    "routing_card_1_title": "افهم وضع السوق",
    "routing_card_1_text": "إذا كنت تريد أولاً فهم وضع سوق العمل الألماني بالنسبة لملفك.",
    "routing_card_1_button": "إلى المرصد",
    "routing_card_1_link": "/ar/monitor",
    "routing_card_2_title": "افهم فرصك بعمق",
    "routing_card_2_text": "إذا كنت تحتاج تحليلاً أوضح وسيناريوهات واقعية وخطوات مفهومة.",
    "routing_card_2_button": "إلى الرؤى",
    "routing_card_2_link": "/ar/insights",
    "routing_card_3_title": "قيّم ملفك مباشرة",
    "routing_card_3_text": "إذا كنت لا تريد معلومات إضافية بل تريد حكماً واضحاً على فرصتك الحقيقية.",
    "routing_card_3_button": "ابدأ تقييم بطاقة الفرصة",
    "routing_card_3_link": "/ar/chancenkarte",
    "decision_cta_headline": "خذ القرار الصحيح الآن",
    "decision_cta_text": "بعد أن فهمت منطق النظام، لا تؤجل الخطوة التالية.",
    "decision_cta_button": "ابدأ تقييم بطاقة الفرصة",
    "decision_cta_secondary_link_1": "المرصد",
    "decision_cta_secondary_link_1_href": "/ar/monitor",
    "decision_cta_secondary_link_2": "الرؤى",
    "decision_cta_secondary_link_2_href": "/ar/insights",
}

def build_systemlogik_page(lang_code, content_data, current_page, page_slug):
    """Build a Systemlogik page for a given language using Jinja2."""
    template_file = f"systemlogik_{lang_code}.html"
    output_dir = OUTPUT_DIR_DE if lang_code == "de" else OUTPUT_DIR_AR
    output_path = output_dir / "systemlogik.html"
    
    template = env.get_template(template_file)
    
    # Combine content with global variables for rendering
    context = {
        **content_data,
        "current_page": current_page,
        "lang": lang_code,
        "page_slug": page_slug
    }
    
    rendered_html = template.render(context)
    
    os.makedirs(output_path.parent, exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(rendered_html)
    
    print(f"✓ {output_path}")

if __name__ == "__main__":
    print("Building Systemlogik pages...")
    build_systemlogik_page("de", CONTENT_DE, "systemlogik", "systemlogik")
    build_systemlogik_page("ar", CONTENT_AR, "systemlogik", "systemlogik")
    print("✓ Systemlogik build complete!")
