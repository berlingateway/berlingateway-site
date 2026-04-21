#!/usr/bin/env python3
"""
Build script for Insights pages (DE + AR)
Generates /de/insights and /ar/insights from templates with real scenarios
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
    "page_title": "Insights – Berlin Gateway",
    "hero_title": "Ihre Situation. Unsere Realität.",
    "hero_subtitle": "Erkennen Sie sich in diesen Szenarien wieder? Dann sind Sie hier richtig.",
    "scenarios": [
        "Sie haben einen exzellenten Abschluss, aber keine deutsche Arbeitserfahrung.",
        "Ihre Qualifikation ist im Ausland hoch angesehen, in Deutschland jedoch unbekannt.",
        "Sie sprechen gut Englisch, aber Ihr Deutsch ist noch nicht auf B1-Niveau.",
        "Sie erhalten Absagen, weil Ihr Profil nicht 'passt', obwohl Sie qualifiziert sind.",
        "Sie suchen nach einer klaren Strategie, um in den deutschen Arbeitsmarkt einzusteigen.",
        "Sie möchten Ihre Chancen maximieren und Fehler vermeiden."
    ],
    "mirror_text": "Wenn diese Punkte auf Sie zutreffen, verstehen wir Ihre Herausforderung.",
    "cta_text": "Lassen Sie Ihre Situation bewerten"
}

# Arabic content data
CONTENT_AR = {
    "page_title": "رؤى – Berlin Gateway",
    "hero_title": "وضعك. واقعنا.",
    "hero_subtitle": "هل تجد نفسك في هذه السيناريوهات؟ إذن أنت في المكان الصحيح.",
    "scenarios": [
        "لديك شهادة ممتازة، ولكن لا توجد خبرة عمل ألمانية.",
        "مؤهلاتك تحظى بتقدير كبير في الخارج، ولكنها غير معروفة في ألمانيا.",
        "تتحدث الإنجليزية بطلاقة، ولكن مستوى لغتك الألمانية لم يصل بعد إلى B1.",
        "تتلقى رفضًا لأن ملفك الشخصي لا 'يتناسب'، على الرغم من أنك مؤهل.",
        "تبحث عن استراتيجية واضحة لدخول سوق العمل الألماني.",
        "ترغب في زيادة فرصك وتجنب الأخطاء."
    ],
    "mirror_text": "إذا كانت هذه النقاط تنطبق عليك، فنحن نتفهم تحديك.",
    "cta_text": "قيّم فرصتك الآن"
}

def generate_scenarios_html(scenarios):
    """Generate HTML list items for scenarios"""
    html = ""
    for scenario in scenarios:
        html += f"            <li>{scenario}</li>\n"
    return html

def build_insights_page(lang_code, content_data):
    """Build an Insights page for a given language"""
    template_name = f"insights_{lang_code}.html"
    template_path = TEMPLATES_DIR / template_name
    output_dir = OUTPUT_DIR_DE if lang_code == "de" else OUTPUT_DIR_AR
    output_path = output_dir / "insights.html"
    
    with open(template_path, 'r', encoding='utf-8') as f:
        template = f.read()
    
    # Replace placeholders with actual content
    template = template.replace(
        "{{ page_title }}", content_data["page_title"]
    ).replace(
        "{{ hero_title }}", content_data["hero_title"]
    ).replace(
        "{{ hero_subtitle }}", content_data["hero_subtitle"]
    ).replace(
        "{{ scenario_blocks }}", generate_scenarios_html(content_data["scenarios"])
    ).replace(
        "{{ mirror_text }}", content_data["mirror_text"]
    ).replace(
        "{{ cta_text }}", content_data["cta_text"]
    )
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(template)
    
    print(f"✓ {output_path}")

if __name__ == "__main__":
    print("Building Insights pages...")
    build_insights_page("de", CONTENT_DE)
    build_insights_page("ar", CONTENT_AR)
    print("✓ Insights build complete!")
