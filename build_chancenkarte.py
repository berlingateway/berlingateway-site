import os
from pathlib import Path
from jinja2 import Environment, FileSystemLoader

BASE_PATH = Path(__file__).parent
TEMPLATES_PATH = BASE_PATH / 'templates'
OUTPUT_DE_PATH = BASE_PATH / 'de'
OUTPUT_AR_PATH = BASE_PATH / 'ar'

# Setup Jinja2 environment
env = Environment(loader=FileSystemLoader(TEMPLATES_PATH))

# ============================================================================
# CHANCENKARTE CONTENT (EXACT COPY FROM REQUIREMENTS)
# ============================================================================

CHANCENKARTE_DE = {
    'page_title': 'Chancenkarte Deutschland – Professionelle Bewertung',
    'hero_title': 'Haben Sie eine reale Chance, in Deutschland zu arbeiten – oder verschwenden Sie Ihre Zeit?',
    'hero_subtitle': 'Professionelle Bewertung innerhalb von 48 Stunden – basierend auf realen Marktanforderungen, nicht auf allgemeinen Informationen.',
    'authority_statement': 'Wir erklären keine Gesetze. Wir analysieren Ihre Situation und bewerten Ihre reale Chance.',
    'filter_title': 'Diese Bewertung ist nur für Sie geeignet, wenn:',
    'filter_item1': 'Sie eine klare Qualifikation haben',
    'filter_item2': 'Sie relevante Berufserfahrung besitzen',
    'filter_item3': 'Sie ernsthaft in Deutschland arbeiten möchten',
    'filter_disclaimer': 'Wenn Sie nur Informationen suchen – ist diese Seite nicht für Sie.',
    'form_title': 'Professionelle Bewertung starten',
    'form_field_1_label': 'Zielberuf',
    'form_field_2_label': 'Abschluss',
    'form_field_3_label': 'Berufserfahrung (Jahre)',
    'form_field_4_label': 'Sprachkenntnisse',
    'form_field_5_label': 'Lebenslauf hochladen (PDF)',
    'form_button': 'Anfrage zur Bewertung senden',
    'micro_trust': 'Antwort in 24–48h | Individuelle Bewertung | Reale Marktanforderungen',
    'final_close': 'Die falsche Entscheidung kostet Jahre. Die richtige Bewertung spart Zeit.',
    'routing_block_1_title': 'Verstehen Sie zuerst die Systemlogik',
    'routing_block_1_text': 'Nicht jede Person mit Interesse an Deutschland ist automatisch geeignet. Wenn Sie zuerst verstehen möchten, nach welchen Kriterien entschieden wird, beginnen Sie hier.',
    'routing_block_1_button': 'Systemlogik verstehen',
    'routing_block_1_link': '/de/systemlogik',
    'routing_block_2_title': 'Prüfen Sie zuerst Ihre reale Position',
    'routing_block_2_text': 'Bevor Sie Ihre Unterlagen senden, sollten Sie verstehen, wie Ihr Profil im aktuellen Arbeitsmarkt einzuordnen ist.',
    'routing_block_2_button': 'Zum Monitor',
    'routing_block_2_link': '/de/monitor',
}

CHANCENKARTE_AR = {
    'page_title': 'بطاقة الفرص – تقييم احترافي',
    'hero_title': 'هل لديك فرصة حقيقية للعمل في ألمانيا… أم تضيع وقتك؟',
    'hero_subtitle': 'تقييم احترافي خلال 48 ساعة — بناءً على معايير سوق العمل الألماني، وليس معلومات عامة.',
    'authority_statement': 'نحن لا نشرح القوانين. نحن نقيّم حالتك ونحدد فرصتك الحقيقية.',
    'filter_title': 'هذا التقييم مناسب لك فقط إذا:',
    'filter_item1': 'لديك شهادة أو مهنة واضحة',
    'filter_item2': 'لديك خبرة عملية حقيقية',
    'filter_item3': 'تنوي العمل في ألمانيا بشكل جدي',
    'filter_disclaimer': 'إذا كنت تبحث عن معلومات عامة — هذه الصفحة ليست لك.',
    'form_title': 'ابدأ التقييم الآن',
    'form_field_1_label': 'المسمى الوظيفي المستهدف',
    'form_field_2_label': 'المؤهل العلمي',
    'form_field_3_label': 'سنوات الخبرة',
    'form_field_4_label': 'مستوى اللغة',
    'form_field_5_label': 'رفع السيرة الذاتية',
    'form_button': 'إرسال الطلب للتقييم',
    'micro_trust': 'الرد خلال 24–48 ساعة | تقييم فردي وليس آلي | معايير سوق العمل الفعلية',
    'final_close': 'القرار الخطأ يكلفك سنوات. التقييم الصحيح يختصر الطريق.',
    'routing_block_1_title': 'افهم أولاً منطق النظام',
    'routing_block_1_text': 'ليس كل من يرغب في ألمانيا مؤهلاً تلقائياً. إذا كنت تريد أولاً فهم المعايير التي يُبنى عليها القرار، ابدأ من هنا.',
    'routing_block_1_button': 'فهم منطق النظام',
    'routing_block_1_link': '/ar/systemlogik',
    'routing_block_2_title': 'قيّم موقعك الحقيقي أولاً',
    'routing_block_2_text': 'قبل إرسال الملف، من الأفضل أن تعرف كيف يمكن قراءة ملفك داخل سوق العمل الحالي.',
    'routing_block_2_button': 'إلى المرصد',
    'routing_block_2_link': '/ar/monitor',
}

def render_page(lang, content, current_page, page_slug):
    """Render a page with the given language and content using Jinja2."""
    if lang == 'de':
        template_file = 'chancenkarte_de.html'
        output_path = OUTPUT_DE_PATH / 'chancenkarte.html'
    else:
        template_file = 'chancenkarte_ar.html'
        output_path = OUTPUT_AR_PATH / 'chancenkarte.html'
    
    template = env.get_template(template_file)
    
    # Combine content with global variables for rendering
    context = {
        **content,
        'current_page': current_page,
        'lang': lang,
        'page_slug': page_slug
    }
    
    rendered_html = template.render(context)
    
    os.makedirs(output_path.parent, exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(rendered_html)
    
    print(f"✓ {output_path}")

if __name__ == '__main__':
    print("Building Chancenkarte pages...")
    render_page('de', CHANCENKARTE_DE, 'chancenkarte', 'chancenkarte')
    render_page('ar', CHANCENKARTE_AR, 'chancenkarte', 'chancenkarte')
    print("✓ Chancenkarte build complete!")
