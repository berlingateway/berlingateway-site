import os
import json
from pathlib import Path
import markdown
import re
import sys

# ============================================================================
# CONFIGURATION
# ============================================================================

BASE_PATH = Path(__file__).parent
TEMPLATES_PATH = BASE_PATH / 'templates'
CONTENT_PATH = BASE_PATH / 'content'
OUTPUT_DE_PATH = BASE_PATH / 'de'
OUTPUT_AR_PATH = BASE_PATH / 'ar'

# ============================================================================
# STRICT CONTENT MAPPING (NO FALLBACKS)
# ============================================================================

# GERMAN PAGES
PAGES_DE = {
    'index': {
        'page_title': 'Berlin Gateway — Professionelle Bewertung für Deutschland',
        'page_slug': 'index',
        'is_chancenkarte': False,
        'hero_title': 'Können Sie in Deutschland arbeiten?',
        'hero_subtitle': 'Prüfen Sie jetzt in 60 Sekunden Ihre Chancen für die Chancenkarte 2026. Strukturierte Bewertung nach deutschen Standards.',
        'badge_1': 'Zertifizierte Bewertung',
        'badge_2': 'Echtzeit-Analyse',
        'authority_statement_title': 'Professionelle Einschätzung nach deutschen Maßstäben',
        'authority_statement_content': 'Wir analysieren Ihre Qualifikation nicht nach allgemeinen Kriterien, sondern nach den realen Anforderungen des deutschen Arbeitsmarkts.',
        'who_this_is_for_title': 'Für wen ist diese Bewertung?',
        'who_this_is_for_item1': 'Sie haben einen akademischen oder beruflichen Abschluss',
        'who_this_is_for_item2': 'Sie verfügen über relevante Berufserfahrung',
        'who_this_is_for_item3': 'Sie planen konkret den Schritt nach Deutschland',
        'who_this_is_for_disclaimer': 'Wenn diese Voraussetzungen nicht zutreffen, ist diese Bewertung nicht geeignet.',
        'form_title': 'Erste Einschätzung starten',
        'micro_trust_item1': 'Antwort innerhalb von 24–48 Stunden',
        'micro_trust_item2': 'Basierend auf aktuellen Arbeitsmarktdaten',
        'micro_trust_item3': 'Nur ernsthafte Anfragen werden bearbeitet',
        'final_statement_content': 'Erhalten Sie eine klare, realistische Einschätzung Ihrer Chancen – bevor Sie Zeit und Geld investieren.'
    },
    'chancenkarte': {
        'page_title': 'Berlin Gateway — Chancenkarte Bewertung',
        'page_slug': 'chancenkarte',
        'is_chancenkarte': True,
        'hero_title': 'Chancenkarte Deutschland – Lassen Sie Ihr Profil professionell prüfen',
        'hero_subtitle': 'Viele beginnen – wenige erreichen das Ziel. Nicht wegen fehlender Chancen, sondern wegen falscher Einschätzung.',
        'badge_1': 'Chancenkarte',
        'badge_2': 'Professionelle Bewertung',
        'authority_statement_title': 'Warum unsere Bewertung zählt',
        'authority_statement_content': 'Wir geben keine allgemeinen Ratschläge. Wir prüfen Profile nach klaren Kriterien des deutschen Arbeitsmarkts.',
        'who_this_is_for_title': 'Diese Bewertung ist für Sie geeignet, wenn:',
        'who_this_is_for_item1': 'Sie haben einen Abschluss (Studium/Ausbildung)',
        'who_this_is_for_item2': 'Sie verfügen über Berufserfahrung',
        'who_this_is_for_item3': 'Sie planen konkret den Weg nach Deutschland',
        'who_this_is_for_disclaimer': 'Wenn das nicht zutrifft, ist diese Prüfung nicht geeignet.',
        'form_title': 'Professionelle Bewertung starten',
        'micro_trust_item1': 'Antwort innerhalb von 24–48 Stunden',
        'micro_trust_item2': 'Prüfung basiert auf realen Anforderungen',
        'micro_trust_item3': 'Bearbeitung nur qualifizierter Anfragen',
        'final_statement_content': 'Sie erfahren Ihren realistischen Status, bevor Sie Zeit und Geld investieren.'
    },
    'systemlogik': {
        'page_title': 'Berlin Gateway — Systemlogik',
        'page_slug': 'systemlogik',
        'is_chancenkarte': False,
        'hero_title': 'Die Logik des deutschen Arbeitsmarkts',
        'hero_subtitle': 'Verstehen Sie die Struktur und Anforderungen, die hinter der Chancenkarte stehen.',
        'badge_1': 'Systemlogik',
        'badge_2': 'Transparenz',
        'authority_statement_title': 'Wie das System funktioniert',
        'authority_statement_content': 'Die Chancenkarte folgt klaren, nachvollziehbaren Regeln. Wir erklären die Logik dahinter und zeigen, wie Sie diese zu Ihrem Vorteil nutzen.',
        'who_this_is_for_title': 'Diese Seite hilft Ihnen, wenn:',
        'who_this_is_for_item1': 'Sie die Anforderungen der Chancenkarte verstehen möchten',
        'who_this_is_for_item2': 'Sie wissen wollen, wie Ihre Qualifikation bewertet wird',
        'who_this_is_for_item3': 'Sie Ihre Chancen realistisch einschätzen möchten',
        'who_this_is_for_disclaimer': 'Detaillierte Informationen zur Systemlogik finden Sie in unseren Insights-Artikeln.',
        'form_title': 'Ihre Chancen prüfen',
        'micro_trust_item1': 'Basierend auf aktuellen Arbeitsmarktdaten',
        'micro_trust_item2': 'Strukturierte Analyse nach deutschen Standards',
        'micro_trust_item3': 'Klare, verständliche Ergebnisse',
        'final_statement_content': 'Verstehen Sie das System und treffen Sie informierte Entscheidungen für Ihre Karriere in Deutschland.'
    },
    'monitor': {
        'page_title': 'Berlin Gateway — Arbeitsmarkt-Monitor',
        'page_slug': 'monitor',
        'is_chancenkarte': False,
        'hero_title': 'Arbeitsmarkt-Monitor Deutschland',
        'hero_subtitle': 'Aktuelle Trends und Daten für Ihre Berufsentscheidung.',
        'badge_1': 'Monitor',
        'badge_2': 'Live-Daten',
        'authority_statement_title': 'Datengestützte Einschätzung',
        'authority_statement_content': 'Unser Monitor zeigt aktuelle Trends im deutschen Arbeitsmarkt. Basierend auf realen Daten, nicht auf Vermutungen.',
        'who_this_is_for_title': 'Der Monitor ist für Sie relevant, wenn:',
        'who_this_is_for_item1': 'Sie aktuelle Arbeitsmarkttrends verstehen möchten',
        'who_this_is_for_item2': 'Sie Ihre Berufswahl datengestützt treffen wollen',
        'who_this_is_for_item3': 'Sie wissen möchten, welche Qualifikationen gefragt sind',
        'who_this_is_for_disclaimer': 'Die Daten werden regelmäßig aktualisiert und basieren auf offiziellen Quellen.',
        'form_title': 'Marktanalyse anfordern',
        'micro_trust_item1': 'Aktuelle Arbeitsmarktdaten',
        'micro_trust_item2': 'Regelmäßig aktualisiert',
        'micro_trust_item3': 'Basierend auf offiziellen Quellen',
        'final_statement_content': 'Treffen Sie Ihre Entscheidung auf Basis aktueller, verlässlicher Daten.'
    },
    'insights': {
        'page_title': 'Berlin Gateway — Insights & Analysen',
        'page_slug': 'insights',
        'is_chancenkarte': False,
        'hero_title': 'Insights & Analysen',
        'hero_subtitle': 'Tiefgreifende Analysen zu Chancen, Anforderungen und Strategien.',
        'badge_1': 'Insights',
        'badge_2': 'Analyse',
        'authority_statement_title': 'Fundierte Analysen für Ihre Entscheidung',
        'authority_statement_content': 'Unsere Insights basieren auf Daten, Erfahrung und direktem Marktverständnis. Wir zeigen, was wirklich zählt.',
        'who_this_is_for_title': 'Diese Analysen helfen Ihnen, wenn:',
        'who_this_is_for_item1': 'Sie tiefere Einblicke in die Chancenkarte benötigen',
        'who_this_is_for_item2': 'Sie Ihre Strategie optimieren möchten',
        'who_this_is_for_item3': 'Sie fundierte Entscheidungen treffen wollen',
        'who_this_is_for_disclaimer': 'Alle Insights sind kostenlos zugänglich und regelmäßig aktualisiert.',
        'form_title': 'Insights erhalten',
        'micro_trust_item1': 'Fundiert und datengestützt',
        'micro_trust_item2': 'Regelmäßig aktualisiert',
        'micro_trust_item3': 'Direkt von Marktexperten',
        'final_statement_content': 'Nutzen Sie unser Wissen, um Ihre Chancen in Deutschland zu maximieren.'
    }
}

# ARABIC PAGES
PAGES_AR = {
    'index': {
        'page_title': 'Berlin Gateway — تقييم احترافي لألمانيا',
        'page_slug': 'index',
        'is_chancenkarte': False,
        'hero_title': 'هل يمكنك العمل في ألمانيا؟',
        'hero_subtitle': 'تحقق الآن خلال 60 ثانية من فرصك للحصول على بطاقة الفرص لعام 2026. تقييم منظم وفقاً للمعايير الألمانية.',
        'badge_1': 'تقييم معتمد',
        'badge_2': 'تحليل فوري',
        'authority_statement_title': 'تقييم احترافي وفقاً للمعايير الألمانية',
        'authority_statement_content': 'لا نقدم نصائح عامة. نقيّم مؤهلاتك وفقاً للمعايير الحقيقية لسوق العمل الألماني.',
        'who_this_is_for_title': 'هذا التقييم مناسب لك إذا:',
        'who_this_is_for_item1': 'لديك شهادة أكاديمية أو مهنية',
        'who_this_is_for_item2': 'لديك خبرة عملية ذات صلة',
        'who_this_is_for_item3': 'تخطط بجدية للعمل في ألمانيا',
        'who_this_is_for_disclaimer': 'إذا لم تنطبق هذه الشروط، فهذا التقييم قد لا يكون مناسباً لك.',
        'form_title': 'ابدأ التقييم الأول',
        'micro_trust_item1': 'الرد خلال 24–48 ساعة',
        'micro_trust_item2': 'بناءً على بيانات سوق العمل الحالية',
        'micro_trust_item3': 'معالجة الطلبات الجادة فقط',
        'final_statement_content': 'احصل على تقييم واضح وواقعي لفرصك – قبل أن تستثمر وقتك وأموالك.'
    },
    'chancenkarte': {
        'page_title': 'Berlin Gateway — تقييم بطاقة الفرص',
        'page_slug': 'chancenkarte',
        'is_chancenkarte': True,
        'hero_title': 'بطاقة الفرص الألمانية – اترك ملفك يُقيّم بشكل احترافي',
        'hero_subtitle': 'كثيرون يبدأون… وقليل يصلون. ليس بسبب نقص الفرص، بل بسبب التقييم الخاطئ.',
        'badge_1': 'بطاقة الفرص',
        'badge_2': 'تقييم احترافي',
        'authority_statement_title': 'لماذا تقييمنا مهم',
        'authority_statement_content': 'نحن لا نقدم نصائح عامة. نقوم بتقييم الحالات وفق معايير سوق العمل الألماني.',
        'who_this_is_for_title': 'هذا التقييم مناسب لك إذا:',
        'who_this_is_for_item1': 'لديك شهادة (جامعية أو مهنية)',
        'who_this_is_for_item2': 'لديك خبرة عملية',
        'who_this_is_for_item3': 'لديك نية حقيقية للعمل في ألمانيا',
        'who_this_is_for_disclaimer': 'إذا لم تنطبق هذه الشروط، هذا التقييم غير مناسب لك.',
        'form_title': 'ابدأ التقييم الآن',
        'micro_trust_item1': 'الرد خلال 24–48 ساعة',
        'micro_trust_item2': 'التقييم مبني على واقع السوق الألماني',
        'micro_trust_item3': 'يتم التعامل فقط مع الحالات الجادة',
        'final_statement_content': 'تعرف وضعك الحقيقي قبل أن تضيع وقتك ومالك.'
    },
    'systemlogik': {
        'page_title': 'Berlin Gateway — منطق النظام الألماني',
        'page_slug': 'systemlogik',
        'is_chancenkarte': False,
        'hero_title': 'منطق سوق العمل الألماني',
        'hero_subtitle': 'افهم البنية والمتطلبات التي تقف خلف بطاقة الفرص.',
        'badge_1': 'منطق النظام',
        'badge_2': 'الشفافية',
        'authority_statement_title': 'كيف يعمل النظام',
        'authority_statement_content': 'بطاقة الفرص تتبع قواعد واضحة وقابلة للفهم. نشرح المنطق وراءها وكيفية استخدامها لصالحك.',
        'who_this_is_for_title': 'هذه الصفحة مفيدة لك إذا:',
        'who_this_is_for_item1': 'تريد فهم متطلبات بطاقة الفرص',
        'who_this_is_for_item2': 'تريد معرفة كيف يتم تقييم مؤهلاتك',
        'who_this_is_for_item3': 'تريد تقييم فرصك بشكل واقعي',
        'who_this_is_for_disclaimer': 'معلومات تفصيلية عن منطق النظام تجدها في مقالات الرؤى الخاصة بنا.',
        'form_title': 'تحقق من فرصك',
        'micro_trust_item1': 'بناءً على بيانات سوق العمل الحالية',
        'micro_trust_item2': 'تحليل منظم وفقاً للمعايير الألمانية',
        'micro_trust_item3': 'نتائج واضحة وسهلة الفهم',
        'final_statement_content': 'افهم النظام واتخذ قرارات مستنيرة لمستقبلك الوظيفي في ألمانيا.'
    },
    'monitor': {
        'page_title': 'Berlin Gateway — مراقب سوق العمل الألماني',
        'page_slug': 'monitor',
        'is_chancenkarte': False,
        'hero_title': 'مراقب سوق العمل الألماني',
        'hero_subtitle': 'الاتجاهات والبيانات الحالية لقرارك الوظيفي.',
        'badge_1': 'المراقب',
        'badge_2': 'بيانات حية',
        'authority_statement_title': 'تقييم قائم على البيانات',
        'authority_statement_content': 'مراقبنا يعرض الاتجاهات الحالية في سوق العمل الألماني. بناءً على بيانات حقيقية، وليس على تخمينات.',
        'who_this_is_for_title': 'المراقب مهم لك إذا:',
        'who_this_is_for_item1': 'تريد فهم اتجاهات سوق العمل الحالية',
        'who_this_is_for_item2': 'تريد اتخاذ قرار وظيفي قائم على البيانات',
        'who_this_is_for_item3': 'تريد معرفة المؤهلات المطلوبة',
        'who_this_is_for_disclaimer': 'يتم تحديث البيانات بانتظام وتستند إلى مصادر رسمية.',
        'form_title': 'اطلب تحليل السوق',
        'micro_trust_item1': 'بيانات سوق العمل الحالية',
        'micro_trust_item2': 'محدثة بانتظام',
        'micro_trust_item3': 'بناءً على مصادر رسمية',
        'final_statement_content': 'اتخذ قرارك بناءً على بيانات حالية وموثوقة.'
    },
    'insights': {
        'page_title': 'Berlin Gateway — رؤى وتحليلات',
        'page_slug': 'insights',
        'is_chancenkarte': False,
        'hero_title': 'رؤى وتحليلات',
        'hero_subtitle': 'تحليلات متعمقة للفرص والمتطلبات والاستراتيجيات.',
        'badge_1': 'الرؤى',
        'badge_2': 'التحليل',
        'authority_statement_title': 'تحليلات موثوقة لقرارك',
        'authority_statement_content': 'رؤيتنا تستند إلى البيانات والخبرة والفهم المباشر للسوق. نظهر لك ما يحقق النتائج فعلاً.',
        'who_this_is_for_title': 'هذه التحليلات تساعدك إذا:',
        'who_this_is_for_item1': 'تحتاج إلى رؤى أعمق حول بطاقة الفرص',
        'who_this_is_for_item2': 'تريد تحسين استراتيجيتك',
        'who_this_is_for_item3': 'تريد اتخاذ قرارات موثوقة',
        'who_this_is_for_disclaimer': 'جميع الرؤى متاحة مجاناً وتُحدّث بانتظام.',
        'form_title': 'احصل على الرؤى',
        'micro_trust_item1': 'موثوقة وقائمة على البيانات',
        'micro_trust_item2': 'محدثة بانتظام',
        'micro_trust_item3': 'مباشرة من خبراء السوق',
        'final_statement_content': 'استخدم معرفتنا لتعظيم فرصك في ألمانيا.'
    }
}

# ============================================================================
# STRICT VALIDATION & RENDERING
# ============================================================================

def validate_page_data(page_data, page_name):
    """Validate that all required fields are present. Fail hard if any are missing."""
    required_fields = [
        'page_title', 'page_slug', 'is_chancenkarte',
        'hero_title', 'hero_subtitle',
        'authority_statement_title', 'authority_statement_content',
        'who_this_is_for_title', 'who_this_is_for_item1', 'who_this_is_for_item2', 'who_this_is_for_item3',
        'who_this_is_for_disclaimer', 'form_title',
        'micro_trust_item1', 'micro_trust_item2', 'micro_trust_item3',
        'final_statement_content',
        'badge_1', 'badge_2'
    ]
    
    missing_fields = [field for field in required_fields if field not in page_data or (field != 'is_chancenkarte' and not page_data[field])]
    
    if missing_fields:
        raise ValueError(f"Page '{page_name}' is missing required fields: {', '.join(missing_fields)}")

def render_page(lang, page_data, output_path):
    """Render a page with strict validation. No fallbacks."""
    page_name = f"{lang}/{page_data['page_slug']}"
    
    # Validate all required fields
    validate_page_data(page_data, page_name)
    
    # Select template
    if page_data.get('is_chancenkarte'):
        template_file = TEMPLATES_PATH / f"master_{lang}_chancenkarte.html"
    else:
        template_file = TEMPLATES_PATH / f"master_{lang}_generic.html"
    
    if not template_file.exists():
        raise FileNotFoundError(f"Template not found: {template_file}")
    
    with open(template_file, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Replace ALL variables (strict mode - no fallbacks)
    html = html.replace('{{ page_title }}', page_data['page_title'])
    html = html.replace('{{ hero_title }}', page_data['hero_title'])
    html = html.replace('{{ hero_subtitle }}', page_data['hero_subtitle'])
    html = html.replace('{{ page_slug }}', page_data['page_slug'])
    html = html.replace('{{ badge_1 }}', page_data.get('badge_1', ''))
    html = html.replace('{{ badge_2 }}', page_data.get('badge_2', ''))
    html = html.replace('{{ page_content }}', page_data.get('page_content', ''))
    html = html.replace('{{ authority_statement_title }}', page_data['authority_statement_title'])
    html = html.replace('{{ authority_statement_content }}', page_data['authority_statement_content'])
    html = html.replace('{{ who_this_is_for_title }}', page_data['who_this_is_for_title'])
    html = html.replace('{{ who_this_is_for_item1 }}', page_data['who_this_is_for_item1'])
    html = html.replace('{{ who_this_is_for_item2 }}', page_data['who_this_is_for_item2'])
    html = html.replace('{{ who_this_is_for_item3 }}', page_data['who_this_is_for_item3'])
    html = html.replace('{{ who_this_is_for_disclaimer }}', page_data['who_this_is_for_disclaimer'])
    html = html.replace('{{ form_title }}', page_data['form_title'])
    html = html.replace('{{ micro_trust_item1 }}', page_data['micro_trust_item1'])
    html = html.replace('{{ micro_trust_item2 }}', page_data['micro_trust_item2'])
    html = html.replace('{{ micro_trust_item3 }}', page_data['micro_trust_item3'])
    html = html.replace('{{ final_statement_content }}', page_data['final_statement_content'])
    
    # Check for any remaining placeholders
    remaining_placeholders = re.findall(r'\{\{[^}]+\}\}', html)
    if remaining_placeholders:
        raise ValueError(f"Page '{page_name}' has unresolved placeholders: {remaining_placeholders}")
    
    # Write file
    output_file = output_path / f"{page_data['page_slug']}.html"
    output_file.parent.mkdir(parents=True, exist_ok=True)
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(html)
    
    print(f"✓ {page_name}")

def build_site():
    """Build all pages with strict validation."""
    try:
        print("Building German pages...")
        for slug, data in PAGES_DE.items():
            render_page('de', data, OUTPUT_DE_PATH)
        
        print("\nBuilding Arabic pages...")
        for slug, data in PAGES_AR.items():
            render_page('ar', data, OUTPUT_AR_PATH)
        
        print("\n✓ Site build complete! All pages validated and rendered.")
        return True
    except Exception as e:
        print(f"\n✗ BUILD FAILED: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    build_site()
