import os
from pathlib import Path
from jinja2 import Environment, FileSystemLoader

BASE_PATH = Path(__file__).parent
TEMPLATES_PATH = BASE_PATH / 'templates'
OUTPUT_DE_PATH = BASE_PATH / 'de'
OUTPUT_AR_PATH = BASE_PATH / 'ar'

env = Environment(loader=FileSystemLoader(TEMPLATES_PATH))

MONITOR_DE = {
    'page_title': 'Markteinblicke für Fachkräfte – Berlin Gateway',
    'hero_title': 'Markteinblicke für Fachkräfte',
    'hero_subtitle': 'Aktuelle Trends und Chancen im deutschen Arbeitsmarkt. Direkt. Faktenbasiert.',
    'insights': [
        {'title': 'Fachkräftemangel', 'text': 'Deutschland sucht händeringend qualifizierte Fachkräfte in bestimmten Branchen.'},
        {'title': 'Regionale Unterschiede', 'text': 'Die Jobchancen variieren stark je nach Bundesland und Stadt. Berlin ist ein Hotspot.'},
        {'title': 'Sprachkenntnisse', 'text': 'Ohne Deutschkenntnisse (mind. B1) sind die Chancen auf dem Arbeitsmarkt stark begrenzt.'},
        {'title': 'Anerkennung', 'text': 'Ausländische Abschlüsse müssen oft anerkannt werden, um in regulierten Berufen zu arbeiten.'},
        {'title': 'Visumsprozess', 'text': 'Der Visumsprozess kann langwierig sein und erfordert präzise Dokumentation.'},
        {'title': 'Gehaltsaussichten', 'text': 'Die Gehälter sind im europäischen Vergleich attraktiv, aber Lebenshaltungskosten sind zu beachten.'},
    ],
    'cta_text': 'Lassen Sie Ihre Situation bewerten',
    'cta_link': '/de/chancenkarte',
}

MONITOR_AR = {
    'page_title': 'رؤى السوق للعاملين بالمهارات – Berlin Gateway',
    'hero_title': 'رؤى السوق للعاملين بالمهارات',
    'hero_subtitle': 'اتجاهات وفرص حالية في سوق العمل الألماني. مباشر. قائم على الحقائق.',
    'insights': [
        {'title': 'نقص العمالة الماهرة', 'text': 'ألمانيا تبحث بشدة عن عمالة ماهرة مؤهلة في قطاعات معينة.'},
        {'title': 'الاختلافات الإقليمية', 'text': 'تختلف فرص العمل بشكل كبير حسب الولاية والمدينة. برلين نقطة جذب.'},
        {'title': 'مهارات اللغة', 'text': 'بدون معرفة اللغة الألمانية (B1 على الأقل)، فإن فرص العمل محدودة للغاية.'},
        {'title': 'الاعتراف بالمؤهلات', 'text': 'يجب غالبًا الاعتراف بالشهادات الأجنبية للعمل في المهن المنظمة.'},
        {'title': 'عملية التأشيرة', 'text': 'يمكن أن تكون عملية التأشيرة طويلة وتتطلب وثائق دقيقة.'},
        {'title': 'توقعات الرواتب', 'text': 'الرواتب جذابة مقارنة بأوروبا، ولكن يجب مراعاة تكاليف المعيشة.'},
    ],
    'cta_text': 'قيّم فرصتك الآن',
    'cta_link': '/ar/chancenkarte',
}

def render_page(lang, content, current_page, page_slug):
    """Render a page with the given language and content using Jinja2."""
    if lang == 'de':
        template_file = 'monitor_de.html'
        output_path = OUTPUT_DE_PATH / 'monitor.html'
    else:
        template_file = 'monitor_ar.html'
        output_path = OUTPUT_AR_PATH / 'monitor.html'
    
    template = env.get_template(template_file)
    
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
    print("Building Monitor pages...")
    render_page('de', MONITOR_DE, 'monitor', 'monitor')
    render_page('ar', MONITOR_AR, 'monitor', 'monitor')
    print("✓ Monitor build complete!")
