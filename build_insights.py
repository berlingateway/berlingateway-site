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
    "page_title": "Insights – Berlin Gateway",
    "hero_title": "Ihre Situation. Unsere Realität.",
    "hero_subtitle": "Erkennen Sie sich in diesen Szenarien wieder? Dann sind Sie hier richtig.",
    "scenarios": [
        "Sie haben einen exzellenten Abschluss, aber keine deutsche Arbeitserfahrung.",
        "Ihre Qualifikation ist im Ausland hoch angesehen, in Deutschland jedoch unbekannt.",
        "Sie sprechen gut Englisch, aber Ihr Deutsch ist noch nicht auf B1-Niveau.",
        "Sie erhalten Absagen, weil Ihr Profil nicht \'passt\', obwohl Sie qualifiziert sind.",
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
        "تتلقى رفضًا لأن ملفك الشخصي لا \'يتناسب\'، على الرغم من أنك مؤهل.",
        "تبحث عن استراتيجية واضحة لدخول سوق العمل الألماني.",
        "ترغب في زيادة فرصك وتجنب الأخطاء."
    ],
    "mirror_text": "إذا كانت هذه النقاط تنطبق عليك، فنحن نتفهم تحديك.",
    "cta_text": "قيّم فرصتك الآن"
}

def generate_scenarios_html(scenarios, lang_code):
    """Generate HTML list items for scenarios with inline links"""
    html = ""
    link_text_de = "Ihre Chancenkarte-Bewertung starten"
    link_text_ar = "ابدأ تقييم بطاقة الفرصة الخاصة بك"
    link_target = f"/{lang_code}/chancenkarte"

    for i, scenario in enumerate(scenarios):
        html += f"            <li>{scenario}</li>\n"
        # Add inline link after every 2-3 content blocks
        if (i + 1) % 2 == 0 and i < len(scenarios) - 1: # After 2nd and 4th block
            link_text = link_text_de if lang_code == "de" else link_text_ar
            html += f'            <div class="inline-link-container">\n                <a href="{link_target}" class="inline-cta-link">{link_text}</a>\n            </div>\n'
    return html

def render_page(lang, content_data, current_page, page_slug):
    """Build an Insights page for a given language using Jinja2."""
    template_file = f"insights_{lang}.html"
    output_dir = OUTPUT_DIR_DE if lang == "de" else OUTPUT_DIR_AR
    output_path = output_dir / "insights.html"
    
    template = env.get_template(template_file)
    
    # Combine content with global variables for rendering
    context = {
        **content_data,
        "current_page": current_page,
        "lang": lang,
        "page_slug": page_slug,
        "scenario_blocks": generate_scenarios_html(content_data["scenarios"], lang)
    }
    
    rendered_html = template.render(context)
    
    os.makedirs(output_path.parent, exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(rendered_html)
    
    print(f"✓ {output_path}")

if __name__ == "__main__":
    print("Building Insights pages...")
    render_page("de", CONTENT_DE, "insights", "insights")
    render_page("ar", CONTENT_AR, "insights", "insights")
    print("✓ Insights build complete!")
