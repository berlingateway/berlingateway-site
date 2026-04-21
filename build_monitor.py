#!/usr/bin/env python3
"""
Build script for Monitor pages (DE + AR)
Generates /de/monitor and /ar/monitor from templates with market insights
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

# German insights data
INSIGHTS_DE = [
    {
        "title": "Fachkräftemangel in Deutschland",
        "insight": "Über 500.000 offene Stellen in Fachberufen. Arbeitgeber suchen aktiv nach qualifizierten Kandidaten aus dem Ausland."
    },
    {
        "title": "Chancenkarte-Regelung",
        "insight": "Neue Punkte-basierte Zuwanderung für Fachkräfte. Anerkennung ausländischer Abschlüsse ist entscheidend."
    },
    {
        "title": "Anerkennung von Abschlüssen",
        "insight": "Formale Anerkennung erhöht Gehalt um durchschnittlich 25%. Arbeitgeber bevorzugen anerkannte Qualifikationen."
    },
    {
        "title": "Sprachanforderungen",
        "insight": "B1-Deutsch ist Mindeststandard. Höhere Sprachniveaus öffnen Türen zu besseren Positionen und Gehältern."
    },
    {
        "title": "Arbeitsmarkt-Dynamik",
        "insight": "Nachfrage nach IT, Ingenieurwesen und Pflege ist am höchsten. Schnelle Bewerbungsprozesse sind üblich."
    },
    {
        "title": "Gehaltstruktur",
        "insight": "Durchschnittseinstiegsgehalt für Fachkräfte: 45.000–65.000 EUR. Erfahrung und Anerkennung sind entscheidend."
    }
]

# Arabic insights data
INSIGHTS_AR = [
    {
        "title": "نقص الكفاءات في ألمانيا",
        "insight": "أكثر من 500 ألف وظيفة شاغرة في المهن الماهرة. أصحاب العمل يبحثون بنشاط عن مرشحين مؤهلين من الخارج."
    },
    {
        "title": "نظام بطاقة الفرص",
        "insight": "هجرة جديدة قائمة على النقاط للعاملين بالمهارات. الاعتراف بالشهادات الأجنبية حاسم."
    },
    {
        "title": "الاعتراف بالشهادات",
        "insight": "الاعتراف الرسمي يزيد الراتب بمتوسط 25%. يفضل أصحاب العمل المؤهلات المعترف بها."
    },
    {
        "title": "متطلبات اللغة",
        "insight": "B1 الألمانية هي الحد الأدنى. مستويات لغة أعلى تفتح أبواباً لوظائف وراتب أفضل."
    },
    {
        "title": "ديناميكية سوق العمل",
        "insight": "الطلب على تكنولوجيا المعلومات والهندسة والرعاية هو الأعلى. عمليات التقديم السريعة شائعة."
    },
    {
        "title": "هيكل الراتب",
        "insight": "متوسط راتب البداية للعاملين بالمهارات: 45000–65000 يورو. الخبرة والاعتراف حاسمان."
    }
]

def generate_insights_html(insights, lang_code):
    """Generate HTML blocks for insights with inline links"""
    html = ""
    link_text_de = "Ihre Chancenkarte-Bewertung starten"
    link_text_ar = "ابدأ تقييم بطاقة الفرص الخاصة بك"
    link_target = f"/{lang_code}/chancenkarte"

    for i, insight in enumerate(insights):
        html += f'            <div class="insight-block">\n                <h3>{insight["title"]}</h3>\n                <p>{insight["insight"]}</p>\n            </div>\n'
        # Add inline link after every 2-3 content blocks
        if (i + 1) % 2 == 0 and i < len(insights) - 1: # After 2nd and 4th block
            html += f'            <div class="inline-link-container">\n                <a href="{link_target}" class="inline-cta-link">{link_text_de if lang_code == "de" else link_text_ar}</a>\n            </div>\n'
    return html

def render_page(lang, content_data, current_page):
    """Build a Monitor page for a given language"""
    template_name = f"monitor_{lang}.html"
    template_path = TEMPLATES_DIR / template_name
    output_dir = OUTPUT_DIR_DE if lang == "de" else OUTPUT_DIR_AR
    output_path = output_dir / "monitor.html"
    
    with open(template_path, 'r', encoding='utf-8') as f:
        template = f.read()
    
    insights_html = generate_insights_html(content_data["insights"], lang)
    
    # Replace placeholders with actual content
    template = template.replace(
        "{{ page_title }}", content_data["page_title"]
    ).replace(
        "{{ hero_title }}", content_data["hero_title"]
    ).replace(
        "{{ hero_subtitle }}", content_data["hero_subtitle"]
    ).replace(
        "{{ insights_blocks }}", insights_html
    ).replace(
        "{{ cta_text }}", content_data["cta_text"]
    )

    # Replace current_page and lang placeholders for active nav item
    template = template.replace('{{ current_page }}', current_page)
    template = template.replace('{{ lang }}', lang)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(template)
    
    print(f"✓ {output_path}")

if __name__ == "__main__":
    print("Building Monitor pages...")
    monitor_content_de = {
        "page_title": "Monitor – Berlin Gateway",
        "hero_title": "Markteinblicke für Fachkräfte",
        "hero_subtitle": "Aktuelle Trends und Chancen im deutschen Arbeitsmarkt. Direkt. Faktenbasiert.",
        "insights": INSIGHTS_DE,
        "cta_text": "Lassen Sie Ihre Situation bewerten"
    }
    monitor_content_ar = {
        "page_title": "المراقب – Berlin Gateway",
        "hero_title": "رؤى السوق للعاملين بالمهارات",
        "hero_subtitle": "اتجاهات وفرص حالية في سوق العمل الألماني. مباشر. قائم على الحقائق.",
        "insights": INSIGHTS_AR,
        "cta_text": "قيّم فرصتك الآن"
    }
    render_page("de", monitor_content_de, "monitor")
    render_page("ar", monitor_content_ar, "monitor")
    print("✓ Monitor build complete!")
