#!/usr/bin/env python3
"""
Build-Time Master Template System
Generates static HTML pages from master templates and content data.
No JavaScript injection. Pure build-time generation.
"""

import os
import json
from pathlib import Path

# ============================================================================
# CONFIGURATION
# ============================================================================

BASE_PATH = Path(__file__).parent
TEMPLATES_PATH = BASE_PATH / 'templates'
OUTPUT_DE_PATH = BASE_PATH / 'de'
OUTPUT_AR_PATH = BASE_PATH / 'ar'

# ============================================================================
# PAGE CONTENT DEFINITIONS
# ============================================================================

PAGES_DE = {
    'index': {
        'title': 'Berlin Gateway — Professionelle Bewertung für Deutschland',
        'slug': 'index',
        'hero_title': 'Können Sie in Deutschland arbeiten?',
        'hero_subtitle': 'Prüfen Sie jetzt in 60 Sekunden Ihre Chancen für die Chancenkarte 2026. Strukturierte Bewertung nach deutschen Standards.',
        'badge_1': 'Zertifizierte Bewertung',
        'badge_2': 'Echtzeit-Analyse',
        'content': '''
    <section class="container">
        <h2>Welcher Weg passt zu Ihnen?</h2>
        <div class="grid-3">
            <div class="card">
                <h3>Anerkennung</h3>
                <p>Ihr Abschluss wird in Deutschland anerkannt. Klare Wege zur formalen Gleichstellung.</p>
            </div>
            <div class="card">
                <h3>Ausbildung / Studium</h3>
                <p>Sie möchten in Deutschland lernen und arbeiten. Strukturierte Einstiegspfade.</p>
            </div>
            <div class="card">
                <h3>Chancenkarte</h3>
                <p>Das neue Punktesystem für die Jobsuche in Deutschland. Prüfen Sie Ihre Eignung.</p>
            </div>
        </div>
    </section>

    <section class="container">
        <h2>Der Prozess in 4 Schritten</h2>
        <div class="grid-3">
            <div class="card">
                <div style="font-size:28px; font-weight:900; color:#E5E7EB; margin-bottom:16px;">01</div>
                <h3>Bewertung</h3>
                <p>Ihre Qualifikation wird anhand der aktuellen Systemlogik analysiert.</p>
            </div>
            <div class="card">
                <div style="font-size:28px; font-weight:900; color:#E5E7EB; margin-bottom:16px;">02</div>
                <h3>Filterung</h3>
                <p>Klare Einordnung nach Arbeitsmarktdaten und gesetzlichen Vorgaben.</p>
            </div>
            <div class="card">
                <div style="font-size:28px; font-weight:900; color:#E5E7EB; margin-bottom:16px;">03</div>
                <h3>Entscheidung</h3>
                <p>Sie erhalten klare Handlungsempfehlungen für Ihren nächsten Schritt.</p>
            </div>
        </div>
    </section>

    <section class="container">
        <h2>Warum Berlin Gateway?</h2>
        <div class="grid-3">
            <div class="card">
                <h3>Systemwissen</h3>
                <p>Nicht auf Hoffnung, sondern auf struktureller Analyse des deutschen Systems.</p>
            </div>
            <div class="card">
                <h3>Fokus</h3>
                <p>Wir filtern nach Qualifikation, nicht nach Quantität. Nur ernsthafte Bewerber.</p>
            </div>
            <div class="card">
                <h3>Klarheit</h3>
                <p>Keine Garantien, sondern strukturierte Fakten über Ihre Möglichkeiten.</p>
            </div>
        </div>
    </section>
'''
    },
    'chancenkarte': {
        'title': 'Berlin Gateway — Chancenkarte Bewertung',
        'slug': 'chancenkarte',
        'hero_title': 'Chancenkarte 2026 — Ihre Chancen prüfen',
        'hero_subtitle': 'Erfahren Sie in wenigen Minuten, ob Sie die Anforderungen der Chancenkarte erfüllen und welche Schritte als nächstes folgen.',
        'badge_1': 'Chancenkarte',
        'badge_2': 'Punktesystem',
        'content': '''
    <section class="container">
        <h2>Das Chancenkarte-System</h2>
        <div class="grid-3">
            <div class="card">
                <h3>Qualifikation</h3>
                <p>Ihre Ausbildung und Berufserfahrung werden nach deutschen Standards bewertet.</p>
            </div>
            <div class="card">
                <h3>Punkte</h3>
                <p>Das Punktesystem berücksichtigt Ihre Chancen auf dem deutschen Arbeitsmarkt.</p>
            </div>
            <div class="card">
                <h3>Prognose</h3>
                <p>Klare Einschätzung Ihrer Erfolgsaussichten für die Chancenkarte.</p>
            </div>
        </div>
    </section>
'''
    },
    'systemlogik': {
        'title': 'Berlin Gateway — Systemlogik',
        'slug': 'systemlogik',
        'hero_title': 'Wie funktioniert das deutsche System?',
        'hero_subtitle': 'Verstehen Sie die Logik hinter den Anforderungen und Bewertungskriterien.',
        'badge_1': 'Systemlogik',
        'badge_2': 'Transparenz',
        'content': '''
    <section class="container">
        <h2>Systemkomponenten</h2>
        <div class="grid-3">
            <div class="card">
                <h3>Anerkennung</h3>
                <p>Wie Ihre Abschlüsse und Zertifikate in Deutschland anerkannt werden.</p>
            </div>
            <div class="card">
                <h3>Arbeitsmarkt</h3>
                <p>Anforderungen und Chancen in Ihrem Berufsfeld.</p>
            </div>
            <div class="card">
                <h3>Visum & Aufenthalt</h3>
                <p>Rechtliche Grundlagen für Arbeit und Aufenthalt in Deutschland.</p>
            </div>
        </div>
    </section>
'''
    },
    'monitor': {
        'title': 'Berlin Gateway — Monitor',
        'slug': 'monitor',
        'hero_title': 'Arbeitsmarkt-Monitor',
        'hero_subtitle': 'Aktuelle Daten und Trends für Ihre Berufsentscheidung.',
        'badge_1': 'Monitor',
        'badge_2': 'Echtzeit-Daten',
        'content': '''
    <section class="container">
        <h2>Markttrends</h2>
        <div class="grid-3">
            <div class="card">
                <h3>Nachfrage</h3>
                <p>Welche Berufe sind derzeit in Deutschland gefragt?</p>
            </div>
            <div class="card">
                <h3>Gehalt</h3>
                <p>Gehaltsspannen und Verdienstmöglichkeiten in verschiedenen Branchen.</p>
            </div>
            <div class="card">
                <h3>Prognose</h3>
                <p>Zukunftstrends und langfristige Chancen.</p>
            </div>
        </div>
    </section>
'''
    },
    'insights': {
        'title': 'Berlin Gateway — Insights',
        'slug': 'insights',
        'hero_title': 'Insights & Analysen',
        'hero_subtitle': 'Tiefgreifende Analysen zu Chancen und Herausforderungen.',
        'badge_1': 'Insights',
        'badge_2': 'Analyse',
        'content': '''
    <section class="container">
        <h2>Detaillierte Analysen</h2>
        <div class="grid-3">
            <div class="card">
                <h3>Branchenanalyse</h3>
                <p>Detaillierte Einblicke in verschiedene Branchen und Sektoren.</p>
            </div>
            <div class="card">
                <h3>Erfolgsgeschichten</h3>
                <p>Erfahrungsberichte von Fachkräften, die erfolgreich nach Deutschland gekommen sind.</p>
            </div>
            <div class="card">
                <h3>Best Practices</h3>
                <p>Bewährte Strategien für einen erfolgreichen Einstieg.</p>
            </div>
        </div>
    </section>
'''
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
        'content': '''
    <section class="container">
        <h2>أي مسار يناسبك؟</h2>
        <div class="grid-3">
            <div class="card">
                <h3>الاعتراف المهني</h3>
                <p>يتم الاعتراف بشهادتك في ألمانيا. مسارات واضحة للمساواة الرسمية.</p>
            </div>
            <div class="card">
                <h3>التدريب / الدراسة</h3>
                <p>ترغب في التعلم والعمل في ألمانيا. مسارات دخول منظمة.</p>
            </div>
            <div class="card">
                <h3>بطاقة الفرص</h3>
                <p>نظام النقاط الجديد للبحث عن عمل في ألمانيا. تحقق من أهليتك.</p>
            </div>
        </div>
    </section>

    <section class="container">
        <h2>العملية في 4 خطوات</h2>
        <div class="grid-3">
            <div class="card">
                <div style="font-size:28px; font-weight:900; color:#E5E7EB; margin-bottom:16px;">01</div>
                <h3>التقييم</h3>
                <p>يتم تحليل مؤهلاتك بناءً على منطق النظام الحالي.</p>
            </div>
            <div class="card">
                <div style="font-size:28px; font-weight:900; color:#E5E7EB; margin-bottom:16px;">02</div>
                <h3>التصفية</h3>
                <p>تصنيف واضح وفقاً لبيانات سوق العمل والمتطلبات القانونية.</p>
            </div>
            <div class="card">
                <div style="font-size:28px; font-weight:900; color:#E5E7EB; margin-bottom:16px;">03</div>
                <h3>القرار</h3>
                <p>تتلقى توصيات واضحة للعمل لخطوتك التالية.</p>
            </div>
        </div>
    </section>

    <section class="container">
        <h2>لماذا Berlin Gateway؟</h2>
        <div class="grid-3">
            <div class="card">
                <h3>معرفة بالنظام</h3>
                <p>لا نعتمد على الأمل، بل على التحليل الهيكلي للنظام الألماني.</p>
            </div>
            <div class="card">
                <h3>التركيز</h3>
                <p>نقوم بالتصفية بناءً على المؤهلات، وليس الكمية. للمتقدمين الجادين فقط.</p>
            </div>
            <div class="card">
                <h3>الوضوح</h3>
                <p>لا توجد ضمانات، بل حقائق منظمة حول إمكانياتك.</p>
            </div>
        </div>
    </section>
'''
    },
    'chancenkarte': {
        'title': 'Berlin Gateway — تقييم بطاقة الفرص',
        'slug': 'chancenkarte',
        'hero_title': 'بطاقة الفرص 2026 — تحقق من فرصك',
        'hero_subtitle': 'اكتشف في دقائق قليلة ما إذا كنت تستوفي متطلبات بطاقة الفرص والخطوات التالية.',
        'badge_1': 'بطاقة الفرص',
        'badge_2': 'نظام النقاط',
        'content': '''
    <section class="container">
        <h2>نظام بطاقة الفرص</h2>
        <div class="grid-3">
            <div class="card">
                <h3>المؤهلات</h3>
                <p>يتم تقييم تعليمك وخبرتك المهنية وفقاً للمعايير الألمانية.</p>
            </div>
            <div class="card">
                <h3>النقاط</h3>
                <p>يأخذ نظام النقاط في الاعتبار فرصك في سوق العمل الألماني.</p>
            </div>
            <div class="card">
                <h3>التوقعات</h3>
                <p>تقييم واضح لاحتمالات نجاحك في الحصول على بطاقة الفرص.</p>
            </div>
        </div>
    </section>
'''
    },
    'systemlogik': {
        'title': 'Berlin Gateway — منطق النظام',
        'slug': 'systemlogik',
        'hero_title': 'كيف يعمل النظام الألماني؟',
        'hero_subtitle': 'افهم المنطق وراء المتطلبات ومعايير التقييم.',
        'badge_1': 'منطق النظام',
        'badge_2': 'الشفافية',
        'content': '''
    <section class="container">
        <h2>مكونات النظام</h2>
        <div class="grid-3">
            <div class="card">
                <h3>الاعتراف</h3>
                <p>كيف يتم الاعتراف بشهاداتك وشهاداتك في ألمانيا.</p>
            </div>
            <div class="card">
                <h3>سوق العمل</h3>
                <p>المتطلبات والفرص في مجال عملك.</p>
            </div>
            <div class="card">
                <h3>التأشيرة والإقامة</h3>
                <p>الأساس القانوني للعمل والإقامة في ألمانيا.</p>
            </div>
        </div>
    </section>
'''
    },
    'monitor': {
        'title': 'Berlin Gateway — المرصد',
        'slug': 'monitor',
        'hero_title': 'مرصد سوق العمل',
        'hero_subtitle': 'بيانات واتجاهات حالية لقرارك الوظيفي.',
        'badge_1': 'المرصد',
        'badge_2': 'بيانات فورية',
        'content': '''
    <section class="container">
        <h2>اتجاهات السوق</h2>
        <div class="grid-3">
            <div class="card">
                <h3>الطلب</h3>
                <p>أي المهن مطلوبة حالياً في ألمانيا؟</p>
            </div>
            <div class="card">
                <h3>الراتب</h3>
                <p>نطاقات الراتب والإمكانيات الكسب في القطاعات المختلفة.</p>
            </div>
            <div class="card">
                <h3>التوقعات</h3>
                <p>اتجاهات المستقبل والفرص طويلة الأجل.</p>
            </div>
        </div>
    </section>
'''
    },
    'insights': {
        'title': 'Berlin Gateway — الرؤى',
        'slug': 'insights',
        'hero_title': 'الرؤى والتحليلات',
        'hero_subtitle': 'تحليلات عميقة للفرص والتحديات.',
        'badge_1': 'الرؤى',
        'badge_2': 'التحليل',
        'content': '''
    <section class="container">
        <h2>التحليلات المفصلة</h2>
        <div class="grid-3">
            <div class="card">
                <h3>تحليل القطاع</h3>
                <p>رؤى مفصلة عن القطاعات والصناعات المختلفة.</p>
            </div>
            <div class="card">
                <h3>قصص النجاح</h3>
                <p>تقارير من متخصصين نجحوا في القدوم إلى ألمانيا.</p>
            </div>
            <div class="card">
                <h3>أفضل الممارسات</h3>
                <p>استراتيجيات مثبتة للبدء الناجح.</p>
            </div>
        </div>
    </section>
'''
    }
}

# ============================================================================
# BUILD FUNCTIONS
# ============================================================================

def load_template(template_path):
    """Load template file"""
    with open(template_path, 'r', encoding='utf-8') as f:
        return f.read()

def render_template(template, context):
    """Render template with context variables"""
    html = template
    for key, value in context.items():
        placeholder = f'{{{{ {key} }}}}'
        html = html.replace(placeholder, value)
    return html

def build_pages():
    """Build all pages from master templates"""
    
    # Load templates
    master_de = load_template(TEMPLATES_PATH / 'master_de.html')
    master_ar = load_template(TEMPLATES_PATH / 'master_ar.html')
    
    # Build German pages
    print("Building German pages...")
    for page_slug, page_data in PAGES_DE.items():
        context = {
            'page_title': page_data['title'],
            'page_slug': page_data['slug'],
            'hero_title': page_data['hero_title'],
            'hero_subtitle': page_data['hero_subtitle'],
            'badge_1': page_data['badge_1'],
            'badge_2': page_data['badge_2'],
            'page_content': page_data['content']
        }
        
        html = render_template(master_de, context)
        
        # Determine output filename
        if page_slug == 'index':
            output_file = OUTPUT_DE_PATH / 'index.html'
        else:
            output_file = OUTPUT_DE_PATH / f'{page_slug}.html'
        
        # Write file
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(html)
        
        print(f"  ✓ {output_file}")
    
    # Build Arabic pages
    print("\nBuilding Arabic pages...")
    for page_slug, page_data in PAGES_AR.items():
        context = {
            'page_title': page_data['title'],
            'page_slug': page_data['slug'],
            'hero_title': page_data['hero_title'],
            'hero_subtitle': page_data['hero_subtitle'],
            'badge_1': page_data['badge_1'],
            'badge_2': page_data['badge_2'],
            'page_content': page_data['content']
        }
        
        html = render_template(master_ar, context)
        
        # Determine output filename
        if page_slug == 'index':
            output_file = OUTPUT_AR_PATH / 'index.html'
        else:
            output_file = OUTPUT_AR_PATH / f'{page_slug}.html'
        
        # Write file
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(html)
        
        print(f"  ✓ {output_file}")
    
    print("\n✓ Build complete!")

# ============================================================================
# MAIN
# ============================================================================

if __name__ == '__main__':
    build_pages()
