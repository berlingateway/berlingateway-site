import os
import json
from pathlib import Path
import markdown
import re

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

def parse_chancenkarte_markdown(md_content):
    data = {}
    
    # Extract hero_title and hero_subtitle from front matter or first lines
    lines = md_content.split('\n')
    for line in lines:
        if line.startswith('hero_title:'):
            data['hero_title'] = line.replace('hero_title:', '').strip()
        elif line.startswith('hero_subtitle:'):
            data['hero_subtitle'] = line.replace('hero_subtitle:', '').strip()
    
    # Remove front matter for further parsing
    md_content_body = re.sub(r'^(hero_title:|hero_subtitle:).*\n', '', md_content, flags=re.MULTILINE)

    # Authority Statement
    match = re.search(r'# Authority Statement\n(.*?)(?=#|$)', md_content_body, re.DOTALL)
    if match:
        content = match.group(1).strip().split('\n', 1)
        data['authority_statement_title'] = 'Authority Statement'
        data['authority_statement_content'] = content[0].strip() if content else ''

    # Who This Is For
    match = re.search(r'# Who This Is For\n(.*?)(?=#|$)', md_content_body, re.DOTALL)
    if match:
        content = match.group(1).strip().split('\n')
        data['who_this_is_for_title'] = 'Who This Is For'
        data['who_this_is_for_item1'] = content[0].replace('- ', '').strip() if len(content) > 0 else ''
        data['who_this_is_for_item2'] = content[1].replace('- ', '').strip() if len(content) > 1 else ''
        data['who_this_is_for_item3'] = content[2].replace('- ', '').strip() if len(content) > 2 else ''
        data['who_this_is_for_disclaimer'] = content[3].strip() if len(content) > 3 else ''

    # Form Title
    match = re.search(r'# Form Title\n(.*?)(?=#|$)', md_content_body, re.DOTALL)
    if match:
        data['form_title'] = match.group(1).strip()

    # Micro-Trust
    match = re.search(r'# Micro-Trust\n(.*?)(?=#|$)', md_content_body, re.DOTALL)
    if match:
        content = match.group(1).strip().split('\n')
        data['micro_trust_item1'] = content[0].replace('- ', '').strip() if len(content) > 0 else ''
        data['micro_trust_item2'] = content[1].replace('- ', '').strip() if len(content) > 1 else ''
        data['micro_trust_item3'] = content[2].replace('- ', '').strip() if len(content) > 2 else ''

    # Final Statement
    match = re.search(r'# Final Statement\n(.*?)(?=#|$)', md_content_body, re.DOTALL)
    if match:
        data['final_statement_content'] = match.group(1).strip()

    return data

def load_markdown_content(lang, slug):
    md_file_path = CONTENT_PATH / lang / f"{slug}.md"
    if md_file_path.exists():
        with open(md_file_path, 'r', encoding='utf-8') as f:
            md_content = f.read()
        
        if slug == 'chancenkarte':
            return parse_chancenkarte_markdown(md_content)
        else:
            # For other pages, just convert markdown to HTML
            return {'page_content': markdown.markdown(md_content)}
    return {'page_content': '<!-- CONTENT NOT FOUND -->', 'hero_title': '', 'hero_subtitle': ''}

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
        **load_markdown_content('de', 'chancenkarte')
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
        'hero_title': 'Chancenkarte: Das Punktesystem',
        'hero_subtitle': 'Verstehen Sie, wie das Punktesystem der Chancenkarte funktioniert.',
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
        **load_markdown_content('ar', 'chancenkarte')
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
        'hero_title': 'بطاقة الفرص: نظام النقاط',
        'hero_subtitle': 'افهم كيف يعمل نظام النقاط لبطاقة الفرص.',
        'badge_1': 'بطاقة الفرص',
        'badge_2': 'البطاقة الزرقاء',
        'content': load_markdown_content('ar', 'insights/chancenkarte-vs-bluecard')
    }
}

# ============================================================================
# TEMPLATE RENDERING
# ============================================================================

def render_page(template_name, page_data, output_path):
    template_file = TEMPLATES_PATH / f"master_{template_name}.html"
    with open(template_file, 'r', encoding='utf-8') as f:
        template_content = f.read()

    # Replace common placeholders
    rendered_html = template_content.replace('{{ page_title }}', page_data.get('title', ''))
    rendered_html = rendered_html.replace('{{ hero_title }}', page_data.get('hero_title', ''))
    rendered_html = rendered_html.replace('{{ hero_subtitle }}', page_data.get('hero_subtitle', ''))
    rendered_html = rendered_html.replace('{{ page_slug }}', page_data.get('slug', ''))

    # Replace Chancenkarte-specific placeholders
    if page_data.get('slug') == 'chancenkarte':
        rendered_html = rendered_html.replace('{{ authority_statement_title }}', page_data.get('authority_statement_title', ''))
        rendered_html = rendered_html.replace('{{ authority_statement_content }}', page_data.get('authority_statement_content', ''))
        rendered_html = rendered_html.replace('{{ who_this_is_for_title }}', page_data.get('who_this_is_for_title', ''))
        rendered_html = rendered_html.replace('{{ who_this_is_for_item1 }}', page_data.get('who_this_is_for_item1', ''))
        rendered_html = rendered_html.replace('{{ who_this_is_for_item2 }}', page_data.get('who_this_is_for_item2', ''))
        rendered_html = rendered_html.replace('{{ who_this_is_for_item3 }}', page_data.get('who_this_is_for_item3', ''))
        rendered_html = rendered_html.replace('{{ who_this_is_for_disclaimer }}', page_data.get('who_this_is_for_disclaimer', ''))
        rendered_html = rendered_html.replace('{{ form_title }}', page_data.get('form_title', ''))
        rendered_html = rendered_html.replace('{{ micro_trust_item1 }}', page_data.get('micro_trust_item1', ''))
        rendered_html = rendered_html.replace('{{ micro_trust_item2 }}', page_data.get('micro_trust_item2', ''))
        rendered_html = rendered_html.replace('{{ micro_trust_item3 }}', page_data.get('micro_trust_item3', ''))
        rendered_html = rendered_html.replace('{{ final_statement_content }}', page_data.get('final_statement_content', ''))
    else:
        # For other pages, use the generic page_content
        rendered_html = rendered_html.replace('{{ page_content }}', page_data.get('page_content', ''))
        rendered_html = rendered_html.replace('{{ badge_1 }}', page_data.get('badge_1', ''))
        rendered_html = rendered_html.replace('{{ badge_2 }}', page_data.get('badge_2', ''))

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
        render_page('de', data, OUTPUT_DE_PATH)
    
    # Build Arabic pages
    for slug, data in PAGES_AR.items():
        render_page('ar', data, OUTPUT_AR_PATH)

    print("Site build complete!")

if __name__ == "__main__":
    build_site()
