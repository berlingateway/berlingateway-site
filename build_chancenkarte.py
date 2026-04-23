
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

def build_chancenkarte_pages():
    # German Chancenkarte Page
    template_de = env.get_template("chancenkarte_de.html")
    context_de = {
        "current_page": "chancenkarte",
        "lang": "de",
        "page_title": "Chancenkarte Deutschland – Professionelle Bewertung",
        "meta_description": "Die Chancenkarte ist Ihr Weg nach Deutschland. Erfahren Sie, wie Sie Ihre Chancen maximieren und den Prozess erfolgreich durchlaufen.",
        "hero_title": "Ihre Chancenkarte für Deutschland",
        "hero_subtitle": "Der direkte Weg zu Arbeit und Leben in Deutschland. Starten Sie jetzt Ihre Bewertung.",
        "form_headline": "Ihre Chancenkarte-Bewertung starten",
        "form_subheadline": "Füllen Sie das Formular aus, um Ihre Chancenkarte-Chancen zu bewerten.",
        "form_button_text": "Chancenkarte-Chancen bewerten",
        "internal_links": [
            {
                "url": "/de/systemlogik.html",
                "text": "Systemlogik verstehen"
            },
            {
                "url": "/de/assessment.html",
                "text": "Punkte-Rechner nutzen"
            }
        ]
    }
    output_de = template_de.render(context_de)
    with open(os.path.join(OUTPUT_DIR_DE, "chancenkarte.html"), "w", encoding="utf-8") as f:
        f.write(output_de)

    # Arabic Chancenkarte Page
    template_ar = env.get_template("chancenkarte_ar.html")
    context_ar = {
        "current_page": "chancenkarte",
        "lang": "ar",
        "page_title": "بطاقة الفرصة لألمانيا – تقييم احترافي",
        "meta_description": "بطاقة الفرص هي طريقك إلى ألمانيا. اكتشف كيف يمكنك زيادة فرصك وإكمال العملية بنجاح.",
        "hero_title": "بطاقة الفرصة الخاصة بك لألمانيا",
        "hero_subtitle": "الطريق المباشر للعمل والعيش في ألمانيا. ابدأ تقييمك الآن.",
        "form_headline": "ابدأ تقييم بطاقة الفرصة الخاصة بك",
        "form_subheadline": "املأ النموذج لتقييم فرصك في بطاقة الفرص.",
        "form_button_text": "تقييم فرص بطاقة الفرص",
        "internal_links": [
            {
                "url": "/ar/systemlogik.html",
                "text": "فهم منطق النظام"
            },
            {
                "url": "/ar/assessment.html",
                "text": "استخدام حاسبة النقاط"
            }
        ]
    }
    output_ar = template_ar.render(context_ar)
    with open(os.path.join(OUTPUT_DIR_AR, "chancenkarte.html"), "w", encoding="utf-8") as f:
        f.write(output_ar)

if __name__ == "__main__":
    build_chancenkarte_pages()
