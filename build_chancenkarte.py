#!/usr/bin/env python3
"""
Build script for Berlin Gateway Chancenkarte decision page.
Renders DE and AR versions with exact copy and specialized form.
"""

import os
from pathlib import Path

BASE_PATH = Path(__file__).parent
TEMPLATES_PATH = BASE_PATH / 'templates'
OUTPUT_DE_PATH = BASE_PATH / 'de'
OUTPUT_AR_PATH = BASE_PATH / 'ar'

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
}

def render_page(lang, content):
    """Render a page with the given language and content."""
    if lang == 'de':
        template_path = TEMPLATES_PATH / 'chancenkarte_de.html'
        output_path = OUTPUT_DE_PATH / 'chancenkarte.html'
    else:
        template_path = TEMPLATES_PATH / 'chancenkarte_ar.html'
        output_path = OUTPUT_AR_PATH / 'chancenkarte.html'
    
    # Read template
    with open(template_path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Replace all variables
    for key, value in content.items():
        placeholder = '{{ ' + key + ' }}'
        if placeholder not in html:
            raise ValueError(f"Missing placeholder: {placeholder} in template {template_path}")
        html = html.replace(placeholder, str(value))
    
    # Check for remaining placeholders (excluding comments)
    import re
    placeholders = re.findall(r'{{\s*\w+\s*}}', html)
    if placeholders:
        raise ValueError(f"Unresolved placeholders: {placeholders}")
    
    # Write output
    os.makedirs(output_path.parent, exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)
    
    print(f"✓ {output_path}")

if __name__ == '__main__':
    print("Building Chancenkarte pages...")
    render_page('de', CHANCENKARTE_DE)
    render_page('ar', CHANCENKARTE_AR)
    print("✓ Chancenkarte build complete!")
