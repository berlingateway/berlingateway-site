import os
import json
from pathlib import Path
import markdown

# ============================================================================
# CONFIGURATION
# ============================================================================

BASE_PATH = Path(__file__).parent
TEMPLATES_PATH = BASE_PATH / 'templates'
CONTENT_PATH = BASE_PATH / 'content'
OUTPUT_DE_PATH = BASE_PATH / 'de'
OUTPUT_AR_PATH = BASE_PATH / 'ar'

# ============================================================================
# PAGE CONTENT DEFINITIONS
# ============================================================================

def load_markdown_content(lang, slug):
    md_file_path = CONTENT_PATH / lang / f"{slug}.md"
    if md_file_path.exists():
        with open(md_file_path, 'r', encoding='utf-8') as f:
            md_content = f.read()
        return markdown.markdown(md_content)
    return "<!-- CONTENT NOT FOUND -->"

PAGES_DE = {
    'index': {
        'title': 'Berlin Gateway — Professionelle Bewertung für Deutschland',
        'slug': 'index',
        'hero_title': 'Können Sie in Deutschland arbeiten?',
        'hero_subtitle': 'Prüfen Sie jetzt in 60 Sekunden Ihre Chancen für die Chancenkarte 2026. Strukturierte Bewertung nach deutschen Standards.',
        'badge_1': 'Zertifizierte Bewertung',
        'badge_2': 'Echtzeit-Analyse',
        'content': load_markdown_content('de', 'homepage')
    },
    'chancenkarte': {
        'title': 'Berlin Gateway — Chancenkarte Bewertung',
        'slug': 'chancenkarte',
        'hero_title': 'Chancenkarte 2026 — Ihre Chancen prüfen',
        'hero_subtitle': 'Erfahren Sie in wenigen Minuten, ob Sie die Anforderungen der Chancenkarte erfüllen und welche Schritte als nächstes folgen.',
        'badge_1': 'Chancenkarte',
        'badge_2': 'Punktesystem',
        'content': load_markdown_content('de', 'chancenkarte')
    },
    'systemlogik': {
        'title': 'Berlin Gateway — Systemlogik',
        'slug': 'systemlogik',
        'hero_title': 'Wie funktioniert das deutsche System?',
        'hero_subtitle': 'Verstehen Sie die Logik hinter den Anforderungen und Bewertungskriterien.',
        'badge_1': 'Systemlogik',
        'badge_2': 'Transparenz',
        'content': load_markdown_content('de', 'systemlogik')
    },
    'monitor': {
        'title': 'Berlin Gateway — Monitor',
        'slug': 'monitor',
        'hero_title': 'Arbeitsmarkt-Monitor',
        'hero_subtitle': 'Aktuelle Daten und Trends für Ihre Berufsentscheidung.',
        'badge_1': 'Monitor',
        'badge_2': 'Echtzeit-Daten',
        'content': load_markdown_content('de', 'monitor')
    },
    'insights': {
        'title': 'Berlin Gateway — Insights',
        'slug': 'insights',
        'hero_title': 'Insights & Analysen',
        'hero_subtitle': 'Tiefgreifende Analysen zu Chancen und Herausforderungen.',
        'badge_1': 'Insights',
        'badge_2': 'Analyse',
        'content': load_markdown_content('de', 'insights')
    },
    'insights/chancenkarte-voraussetzungen': {
        'title': 'Berlin Gateway — Chancenkarte Voraussetzungen',
        'slug': 'insights/chancenkarte-voraussetzungen',
        'hero_title': 'Chancenkarte: Voraussetzungen',
        'hero_subtitle': 'Welche Kriterien müssen Sie erfüllen, um die Chancenkarte zu erhalten?',
        'badge_1': 'Chancenkarte',
        'badge_2': 'Voraussetzungen',
        'content': load_markdown_content('de', 'insights/chancenkarte-voraussetzungen')
    },
    'insights/chancenkarte-punkte': {
        'title': 'Berlin Gateway — Chancenkarte Punkte',
        'slug': 'insights/chancenkarte-punkte',
        'hero_title': 'Chancenkarte: Das Punktesystem',
        'hero_subtitle': 'Verstehen Sie, wie das Punktesystem der Chancenkarte funktioniert.',
        'badge_1': 'Chancenkarte',
        'badge_2': 'Punktesystem',
        'content': load_markdown_content('de', 'insights/chancenkarte-punkte')
    },
    'insights/chancenkarte-vs-bluecard': {
        'title': 'Berlin Gateway — Chancenkarte vs. Blue Card',
        'slug': 'insights/chancenkarte-vs-bluecard',
        'hero_title': 'Chancenkarte vs. Blue Card',
        'hero_subtitle': 'Ein Vergleich der beiden Wege zum Arbeiten in Deutschland.',
        'badge_1': 'Chancenkarte',
        'badge_2': 'Blue Card',
        'content': load_markdown_content('de', 'insights/chancenkarte-vs-bluecard')
    }
}

PAGES_AR = {
    'index': {
        'title': 'Berlin Gateway — تقييم مهني احترافي لألمانيا',
        'slug': 'index',
        'hero_title': 'هل يمكنك العمل في ألمانيا؟',
        'hero_subtitle': 'تحقق الآن خلال 60 ثانية من فرصك للحصول على بطاقة الفرص لعام 2026. تقييم منظم وفقاً للمعايير الألمانية.',
        'badge_1': 'تقييم معتمد',
        'badge_2': 'تحليل فوري',
        'content': load_markdown_content('ar', 'homepage')
    },
    'chancenkarte': {
        'title': 'Berlin Gateway — تقييم بطاقة الفرص',
        'slug': 'chancenkarte',
        'hero_title': 'بطاقة الفرص 2026 — تحقق من فرصك',
        'hero_subtitle': 'اكتشف في دقائق قليلة ما إذا كنت تستوفي متطلبات بطاقة الفرص والخطوات التالية.',
        'badge_1': 'بطاقة الفرص',
        'badge_2': 'نظام النقاط',
        'content': load_markdown_content('ar', 'chancenkarte')
    },
    'systemlogik': {
        'title': 'Berlin Gateway — منطق النظام',
        'slug': 'systemlogik',
        'hero_title': 'كيف يعمل النظام الألماني؟',
        'hero_subtitle': 'افهم المنطق وراء المتطلبات ومعايير التقييم.',
        'badge_1': 'منطق النظام',
        'badge_2': 'الشفافية',
        'content': load_markdown_content('ar', 'systemlogik')
    },
    'monitor': {
        'title': 'Berlin Gateway — مراقب سوق العمل',
        'slug': 'monitor',
        'hero_title': 'مراقب سوق العمل',
        'hero_subtitle': 'أحدث البيانات والاتجاهات لقرارك المهني.',
        'badge_1': 'مراقب',
        'badge_2': 'بيانات فورية',
        'content': load_markdown_content('ar', 'monitor')
    },
    'insights': {
        'title': 'Berlin Gateway — رؤى وتحليلات',
        'slug': 'insights',
        'hero_title': 'رؤى وتحليلات',
        'hero_subtitle': 'تحليلات متعمقة للفرص والتحديات.',
        'badge_1': 'رؤى',
        'badge_2': 'تحليل',
        'content': load_markdown_content('ar', 'insights')
    },
    'insights/chancenkarte-voraussetzungen': {
        'title': 'Berlin Gateway — شروط بطاقة الفرص',
        'slug': 'insights/chancenkarte-voraussetzungen',
        'hero_title': 'بطاقة الفرص: الشروط',
        'hero_subtitle': 'ما هي المعايير التي يجب أن تستوفيها للحصول على بطاقة الفرص؟',
        'badge_1': 'بطاقة الفرص',
        'badge_2': 'الشروط',
        'content': load_markdown_content('ar', 'insights/chancenkarte-voraussetzungen')
    },
    'insights/chancenkarte-punkte': {
        'title': 'Berlin Gateway — نقاط بطاقة الفرص',
        'slug': 'insights/chancenkarte-punkte',
        'hero_title': 'بطاقة الفرص: نظام النقاط',
        'hero_subtitle': 'افهم كيف يعمل نظام النقاط لبطاقة الفرص.',
        'badge_1': 'بطاقة الفرص',
        'badge_2': 'نظام النقاط',
        'content': load_markdown_content('ar', 'insights/chancenkarte-punkte')
    },
    'insights/chancenkarte-vs-bluecard': {
        'title': 'Berlin Gateway — بطاقة الفرص مقابل البطاقة الزرقاء',
        'slug': 'insights/chancenkarte-vs-bluecard',
        'hero_title': 'بطاقة الفرص مقابل البطاقة الزرقاء',
        'hero_subtitle': 'مقارنة بين المسارين للعمل في ألمانيا.',
        'badge_1': 'بطاقة الفرص',
        'badge_2': 'البطاقة الزرقاء',
        'content': load_markdown_content('ar', 'insights/chancenkarte-vs-bluecard')
    }
}

# ============================================================================
# TEMPLATE RENDERING
# ============================================================================

def render_page(template_name, page_data, lang_pages, output_path):
    template_file = TEMPLATES_PATH / f"master_{template_name}.html"
    with open(template_file, 'r', encoding='utf-8') as f:
        template_content = f.read()

    # Replace placeholders with actual data
    rendered_html = template_content.replace('{{ page.title }}', page_data['title'])
    rendered_html = rendered_html.replace('{{ page.hero_title }}', page_data['hero_title'])
    rendered_html = rendered_html.replace('{{ page.hero_subtitle }}', page_data['hero_subtitle'])
    rendered_html = rendered_html.replace('{{ page.badge_1 }}', page_data['badge_1'])
    rendered_html = rendered_html.replace('{{ page.badge_2 }}', page_data['badge_2'])
    rendered_html = rendered_html.replace('{{ page.content }}', page_data['content'])

    # Generate navigation links dynamically
    nav_links = ""
    for slug, data in lang_pages.items():
        if not slug.startswith('insights/'): # Hauptnavigation
            nav_links += f"<a href=\"/" + (output_path.name if output_path.name == 'de' else 'ar') + f"/{data['slug']}\">{data['title'].split('—')[-1].strip()}</a>\n"

    rendered_html = rendered_html.replace('{{ nav_links }}', nav_links)

    # Generate sub-navigation links dynamically (for Insights pages)
    subnav_links = ""
    for slug, data in lang_pages.items():
        if slug.startswith('insights/'):
            subnav_links += f"<a href=\"/" + (output_path.name if output_path.name == 'de' else 'ar') + f"/{data['slug']}\">{data['title'].split('—')[-1].strip()}</a>\n"
    rendered_html = rendered_html.replace('{{ subnav_links }}', subnav_links)

    # Canonical URL
    canonical_url = f"https://berlingateway.de/" + (output_path.name if output_path.name == 'de' else 'ar') + f"/{page_data['slug']}"
    rendered_html = rendered_html.replace('{{ canonical_url }}', canonical_url)

    # Language switch
    other_lang_prefix = 'ar' if template_name == 'de' else 'de'
    other_lang_slug = page_data['slug']
    other_lang_link = f"/{other_lang_prefix}/{other_lang_slug}"
    rendered_html = rendered_html.replace('{{ other_lang_link }}', other_lang_link)

    output_file = output_path / f"{page_data['slug']}.html"
    output_file.parent.mkdir(parents=True, exist_ok=True)
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(rendered_html)

# ============================================================================
# BUILD PROCESS
# ============================================================================

def build_site():
    # Build German pages
    for slug, data in PAGES_DE.items():
        render_page('de', data, PAGES_DE, OUTPUT_DE_PATH)
    
    # Build Arabic pages
    for slug, data in PAGES_AR.items():
        render_page('ar', data, PAGES_AR, OUTPUT_AR_PATH)

    print("Site build complete!")

if __name__ == "__main__":
    build_site()
