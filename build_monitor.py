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
    "page_title": "Markteinblicke für Fachkräfte – Berlin Gateway",
    "hero_title": "Markteinblicke für Fachkräfte",
    "hero_subtitle": "Aktuelle Trends und Chancen im deutschen Arbeitsmarkt. Direkt. Faktenbasiert.",
    "insights": [
        {"title": "IT-Sektor boomt", "text": "Hoher Bedarf an Softwareentwicklern und IT-Spezialisten."}, 
        {"title": "Pflegekräfte gesucht", "text": "Deutschland braucht dringend medizinisches Personal."}, 
        {"title": "Handwerk hat goldenen Boden", "text": "Fachkräftemangel in traditionellen Handwerksberufen."}, 
        {"title": "Ingenieure gefragt", "text": "Besonders in Maschinenbau und Elektrotechnik."}, 
        {"title": "Grüne Technologien", "text": "Wachsende Nachfrage nach Experten für erneuerbare Energien."}, 
        {"title": "Logistik im Wandel", "text": "Digitalisierung schafft neue Rollen in der Lieferkette."}
    ],
    "cta_text": "Lassen Sie Ihre Situation bewerten",
    "cta_link": "/de/chancenkarte",
    "lang_switch_link": "/ar/monitor"
}

# Arabic content data
CONTENT_AR = {
    "page_title": "رؤى السوق للعاملين بالمهارات – Berlin Gateway",
    "hero_title": "رؤى السوق للعاملين بالمهارات",
    "hero_subtitle": "اتجاهات وفرص حالية في سوق العمل الألماني. مباشر. قائم على الحقائق.",
    "insights": [
        {"title": "قطاع تكنولوجيا المعلومات يزدهر", "text": "طلب مرتفع على مطوري البرمجيات ومتخصصي تكنولوجيا المعلومات."}, 
        {"title": "مطلوب ممرضون", "text": "ألمانيا بحاجة ماسة إلى الكوادر الطبية."}, 
        {"title": "الحرف اليدوية ذات قيمة", "text": "نقص في العمالة الماهرة في الحرف التقليدية."}, 
        {"title": "المهندسون مطلوبون", "text": "خاصة في الهندسة الميكانيكية والكهربائية."}, 
        {"title": "التقنيات الخضراء", "text": "طلب متزايد على خبراء الطاقة المتجددة."}, 
        {"title": "اللوجستيات تتغير", "text": "الرقمنة تخلق أدوارًا جديدة في سلسلة التوريد."}
    ],
    "cta_text": "قيّم فرصتك الآن",
    "cta_link": "/ar/chancenkarte",
    "lang_switch_link": "/de/monitor"
}

def render_page(lang_code, content_data, current_page, page_slug):
    """Build a page for a given language using Jinja2."""
    template_file = f"monitor_{lang_code}.html"
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
    print("Building Monitor pages...")
    render_page("de", CONTENT_DE, "monitor", "monitor")
    render_page("ar", CONTENT_AR, "monitor", "monitor")
    print("✓ Monitor build complete!")
