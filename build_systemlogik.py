#!/usr/bin/env python3
"""
Build script for Systemlogik pages (DE + AR)
Generates /de/systemlogik and /ar/systemlogik from templates with filter logic
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
    "cta_text": "Lassen Sie Ihre Situation bewerten"
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
    "cta_text": "قيّم فرصتك الآن"
}

def build_systemlogik_page(lang_code, content_data):
    """Build a Systemlogik page for a given language"""
    template_name = f"systemlogik_{lang_code}.html"
    template_path = TEMPLATES_DIR / template_name
    output_dir = OUTPUT_DIR_DE if lang_code == "de" else OUTPUT_DIR_AR
    output_path = output_dir / "systemlogik.html"
    
    with open(template_path, 'r', encoding='utf-8') as f:
        template = f.read()
    
    # Replace placeholders with actual content
    for key, value in content_data.items():
        template = template.replace(f"{{{{ {key} }}}}", value)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(template)
    
    print(f"✓ {output_path}")

if __name__ == "__main__":
    print("Building Systemlogik pages...")
    build_systemlogik_page("de", CONTENT_DE)
    build_systemlogik_page("ar", CONTENT_AR)
    print("✓ Systemlogik build complete!")
