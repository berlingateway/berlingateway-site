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

# German content data for Visa page
CONTENT_DE_VISA = {
    "page_title": "Visum – Berlin Gateway",
    "hero_title": "Haben Sie eine reale Chance, ein Visum für Deutschland zu bekommen – oder verschwenden Sie Ihre Zeit?",
    "hero_subtitle": "Strategische Bewertung innerhalb von 48 Stunden – basierend auf realen Einwanderungsregeln.",
    "cta_text": "Visum prüfen lassen",
    "form_headline": "Ihre Visum-Bewertung starten",
    "form_subheadline": "Füllen Sie das Formular aus, um Ihre Visum-Chancen zu bewerten.",
    "form_button_text": "Visum-Chancen bewerten",
    "assessment_cta_headline_success": "Ihre Visum-Chancen sind gut!",
    "assessment_cta_text_success": "Basierend auf Ihrer Bewertung erfüllen Sie die Mindestanforderungen für ein Visum. Fahren Sie fort, um Ihre Chancenkarte-Bewertung zu starten.",
    "assessment_cta_button_success": "Zur Chancenkarte-Bewertung",
    "assessment_cta_link_success": "/de/chancenkarte",
    "assessment_cta_headline_fail": "Ihre Visum-Chancen sind begrenzt.",
    "assessment_cta_text_fail": "Basierend auf Ihrer Bewertung erfüllen Sie die Mindestanforderungen für ein Visum nicht vollständig. Prüfen Sie die Systemlogik, um Ihre Optionen zu verstehen.",
    "assessment_cta_button_fail": "Systemlogik prüfen",
    "assessment_cta_link_fail": "/de/systemlogik",
    "lang_switch_link": "/ar/visa"
}

# Arabic content data for Visa page
CONTENT_AR_VISA = {
    "page_title": "تأشيرة – Berlin Gateway",
    "hero_title": "هل لديك فرصة حقيقية للحصول على تأشيرة إلى ألمانيا أم تضيع وقتك؟",
    "hero_subtitle": "تقييم استراتيجي خلال 48 ساعة بناءً على قوانين الهجرة الفعلية.",
    "cta_text": "تحقق من فرصتك",
    "form_headline": "ابدأ تقييم التأشيرة الخاص بك",
    "form_subheadline": "املأ النموذج لتقييم فرصتك في الحصول على التأشيرة.",
    "form_button_text": "تقييم فرص التأشيرة",
    "assessment_cta_headline_success": "فرصتك في الحصول على التأشيرة جيدة!",
    "assessment_cta_text_success": "بناءً على تقييمك، تستوفي الحد الأدنى من المتطلبات للحصول على تأشيرة. تابع لبدء تقييم بطاقة الفرصة الخاصة بك.",
    "assessment_cta_button_success": "إلى تقييم بطاقة الفرصة",
    "assessment_cta_link_success": "/ar/chancenkarte",
    "assessment_cta_headline_fail": "فرصتك في الحصول على التأشيرة محدودة.",
    "assessment_cta_text_fail": "بناءً على تقييمك، لا تستوفي الحد الأدنى من المتطلبات للحصول على تأشيرة بشكل كامل. تحقق من منطق النظام لفهم خياراتك.",
    "assessment_cta_button_fail": "تحقق من منطق النظام",
    "assessment_cta_link_fail": "/ar/systemlogik",
    "lang_switch_link": "/de/visa"
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
    print("Building Visa pages...")
    render_page("de", CONTENT_DE_VISA, "visa", "visa")
    render_page("ar", CONTENT_AR_VISA, "visa", "visa")
    print("✓ Visa build complete!")
