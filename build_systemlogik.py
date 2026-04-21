#!/usr/bin/env python3
"""
Build script for Systemlogik pages (DE + AR)
Generates /de/systemlogik and /ar/systemlogik from templates with filter logic and routing
"""

import os
from pathlib import Path

# Define base paths
BASE_DIR = Path(__file__).parent
TEMPLATES_DIR = BASE_DIR / "templates"
OUTPUT_DIR_DE = BASE_DIR / "de"
OUTPUT_DIR_AR = BASE_DIR / "ar"

# Ensure output directories exist
OUTPUT_DIR_DE.mkdir(exist_ok=True)
OUTPUT_DIR_AR.mkdir(exist_ok=True)

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
    "decision_cta_secondary_link_2_href": "/de/insights",
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

def generate_filters_html(content_data, lang_code):
    """Generate HTML blocks for filters with inline links"""
    html = ""
    link_text_de = "Ihre Chancenkarte-Bewertung starten"
    link_text_ar = "ابدأ تقييم بطاقة الفرصة الخاصة بك"
    link_target = f"/{lang_code}/chancenkarte"

    filters = [
        {"title": content_data["filter_1_title"], "text": content_data["filter_1_text"]},
        {"title": content_data["filter_2_title"], "text": content_data["filter_2_text"]},
        {"title": content_data["filter_3_title"], "text": content_data["filter_3_text"]},
    ]

    for i, filter_data in enumerate(filters):
        html += f'            <div class="filter-block">\n                <h3>{filter_data["title"]}</h3>\n                <p>{filter_data["text"]}</p>\n            </div>\n'
        if i == 1: # After the second filter block
            html += f'            <div class="inline-link-container">\n                <a href="{link_target}" class="inline-cta-link">{link_text_de if lang_code == "de" else link_text_ar}</a>\n            </div>\n'
    return html

def generate_routing_cards_html(content_data, lang_code):
    """Generate HTML for routing cards"""
    html = ""
    for i in range(1, 4):
        card_title = content_data[f"routing_card_{i}_title"]
        card_text = content_data[f"routing_card_{i}_text"]
        card_button = content_data[f"routing_card_{i}_button"]
        card_link = content_data[f"routing_card_{i}_link"]
        html += f'''            <div class="routing-card">
                <h3>{card_title}</h3>
                <p>{card_text}</p>
                <a href="{card_link}" class="routing-card-button">{card_button}</a>
            </div>
'''
    return html

def generate_decision_cta_secondary_links(content_data):
    """Generate secondary links for decision CTA"""
    html = ""
    link_1_text = content_data["decision_cta_secondary_link_1"]
    link_1_href = content_data["decision_cta_secondary_link_1_href"]
    link_2_text = content_data["decision_cta_secondary_link_2"]
    link_2_href = content_data["decision_cta_secondary_link_2_href"]
    
    html += f'            <a href="{link_1_href}">{link_1_text} →</a>\n'
    html += f'            <a href="{link_2_href}">{link_2_text} →</a>\n'
    return html

def build_systemlogik_page(lang_code, content_data, current_page):
    """Build a Systemlogik page for a given language"""
    template_name = f"systemlogik_{lang_code}.html"
    template_path = TEMPLATES_DIR / template_name
    output_dir = OUTPUT_DIR_DE if lang_code == "de" else OUTPUT_DIR_AR
    output_path = output_dir / "systemlogik.html"
    
    with open(template_path, 'r', encoding='utf-8') as f:
        template = f.read()
    
    filters_content_with_links = generate_filters_html(content_data, lang_code)
    routing_cards_html = generate_routing_cards_html(content_data, lang_code)
    decision_cta_secondary_links = generate_decision_cta_secondary_links(content_data)

    # Replace placeholders with actual content
    template = template.replace(
        "{{ page_title }}", content_data["page_title"]
    ).replace(
        "{{ hero_title }}", content_data["hero_title"]
    ).replace(
        "{{ hero_subtitle }}", content_data["hero_subtitle"]
    ).replace(
        "{{ filters_content_with_links }}", filters_content_with_links
    ).replace(
        "{{ exclusion_text }}", content_data["exclusion_text"]
    ).replace(
        "{{ cta_text }}", content_data["cta_text"]
    ).replace(
        "{{ routing_section_title }}", content_data["routing_section_title"]
    ).replace(
        "{{ routing_section_intro }}", content_data["routing_section_intro"]
    ).replace(
        "{{ routing_cards_html }}", routing_cards_html
    ).replace(
        "{{ decision_cta_headline }}", content_data["decision_cta_headline"]
    ).replace(
        "{{ decision_cta_text }}", content_data["decision_cta_text"]
    ).replace(
        "{{ decision_cta_button }}", content_data["decision_cta_button"]
    ).replace(
        "{{ decision_cta_secondary_links }}", decision_cta_secondary_links
    )

    # Replace current_page and lang placeholders for active nav item
    template = template.replace('{{ current_page }}', current_page)
    template = template.replace('{{ lang }}', lang_code)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(template)
    
    print(f"✓ {output_path}")

if __name__ == "__main__":
    print("Building Systemlogik pages...")
    build_systemlogik_page("de", CONTENT_DE, "systemlogik")
    build_systemlogik_page("ar", CONTENT_AR, "systemlogik")
    print("✓ Systemlogik build complete!")
