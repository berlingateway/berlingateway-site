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

# German content data for Assessment page
CONTENT_DE_ASSESSMENT = {
    "page_title": "Chancenkarte Punkte Rechner – Testen Sie Ihre Chancen für Deutschland",
    "hero_title": "Prüfen Sie Ihre Chancenkarte-Punkte jetzt",
    "hero_subtitle": "Erhalten Sie sofort eine realistische Einschätzung basierend auf Ihren Angaben.",
    "cta_text": "Ihre Chancenkarte-Bewertung starten",
    "form_headline": "Ihre Chancenkarte-Bewertung starten",
    "form_subheadline": "Füllen Sie das Formular aus, um Ihre Chancenkarte-Chancen zu bewerten.",
    "form_button_text": "Chancenkarte-Chancen bewerten",
    "assessment_cta_headline_success": "Sie erfüllen die Mindestanforderung.",
    "assessment_cta_text_success": "Basierend auf Ihrer Bewertung erfüllen Sie die Mindestanforderungen für die Chancenkarte. Fahren Sie fort, um Ihre Chancenkarte-Bewertung zu starten.",
    "assessment_cta_button_success": "Zur Bewertung fortfahren",
    "assessment_cta_link_success": "/de/chancenkarte",
    "assessment_cta_headline_fail": "Aktuell erfüllen Sie die Anforderungen nicht vollständig.",
    "assessment_cta_text_fail": "Basierend auf Ihrer Bewertung erfüllen Sie die Mindestanforderungen für die Chancenkarte nicht vollständig. Prüfen Sie die Systemlogik, um Ihre Optionen zu verstehen.",
    "assessment_cta_button_fail": "Systemlogik prüfen",
    "assessment_cta_link_fail": "/de/systemlogik",
    "lang_switch_link": "/ar/assessment"
}

# Arabic content data for Assessment page
CONTENT_AR_ASSESSMENT = {
    "page_title": "حاسبة نقاط بطاقة الفرصة – اختبر فرصك لألمانيا",
    "hero_title": "احسب نقاطك لبطاقة الفرصة الآن",
    "hero_subtitle": "احصل على تقييم فوري لفرصتك بناءً على بياناتك.",
    "cta_text": "ابدأ تقييم بطاقة الفرصة الخاصة بك",
    "form_headline": "ابدأ تقييم بطاقة الفرصة الخاصة بك",
    "form_subheadline": "املأ النموذج لتقييم فرصك في الحصول على بطاقة الفرصة.",
    "form_button_text": "تقييم فرص بطاقة الفرصة",
    "assessment_cta_headline_success": "أنت مؤهل مبدئياً.",
    "assessment_cta_text_success": "بناءً على تقييمك، تستوفي الحد الأدنى من المتطلبات لبطاقة الفرصة. تابع لبدء تقييم بطاقة الفرصة الخاصة بك.",
    "assessment_cta_button_success": "ابدأ التقييم",
    "assessment_cta_link_success": "/ar/chancenkarte",
    "assessment_cta_headline_fail": "حالياً لا تستوفي المتطلبات بشكل كامل.",
    "assessment_cta_text_fail": "بناءً على تقييمك، لا تستوفي الحد الأدنى من المتطلبات لبطاقة الفرصة بشكل كامل. تحقق من منطق النظام لفهم خياراتك.",
    "assessment_cta_button_fail": "تحقق من منطق النظام",
    "assessment_cta_link_fail": "/ar/systemlogik",
    "lang_switch_link": "/de/assessment"
}

def render_page(lang_code, content_data, current_page, page_slug):
    """Build a page for a given language using Jinja2 and the assessment template."""
    template_file = f"assessment_{lang_code}.html"
    output_dir = OUTPUT_DIR_DE if lang_code == "de" else OUTPUT_DIR_AR
    output_path = output_dir / f"{page_slug}.html"
    
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
    print("Building Assessment pages...")
    render_page("de", CONTENT_DE_ASSESSMENT, "assessment", "assessment")
    render_page("ar", CONTENT_AR_ASSESSMENT, "assessment", "assessment")
    print("✓ Assessment build complete!")
