#!/usr/bin/env python3
"""
Global Architecture System for Berlin Gateway
- Defines strict section maps per page type
- Centralizes routing and link validation
- Enforces consistency across all pages
"""

import os
import re
from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

# ============================================================================
# ARCHITECTURE DEFINITIONS
# ============================================================================

PAGE_TYPES = {
    'homepage': {
        'pattern': r'^(index|home)\.html$',
        'sections': ['header', 'hero', 'value', 'process', 'cta', 'footer'],
        'required_elements': ['h1', 'form', 'footer'],
        'description': 'Homepage: Hero → Value → Process → CTA → Footer'
    },
    'chancenkarte': {
        'pattern': r'^chancenkarte\.html$',
        'sections': ['header', 'hero', 'why', 'criteria', 'process', 'cta', 'footer'],
        'required_elements': ['h1', 'h2', 'footer'],
        'description': 'Chancenkarte: Hero → Why → Criteria → Process → CTA → Footer'
    },
    'insights': {
        'pattern': r'^insights(\/.*)?\.html$',
        'sections': ['header', 'hero', 'article', 'cta', 'footer'],
        'required_elements': ['h1', 'article', 'footer'],
        'description': 'Insights: Hero → Article → CTA → Footer'
    },
    'system': {
        'pattern': r'^(systemlogik|monitor)\.html$',
        'sections': ['header', 'hero', 'explanation', 'blocks', 'cta', 'footer'],
        'required_elements': ['h1', 'h2', 'footer'],
        'description': 'System/Monitor: Hero → Explanation → Blocks → CTA → Footer'
    },
    'other': {
        'pattern': r'^.*\.html$',
        'sections': ['header', 'hero', 'content', 'footer'],
        'required_elements': ['footer'],
        'description': 'Other: Hero → Content → Footer'
    }
}

# ============================================================================
# ROUTING MAP (Centralized)
# ============================================================================

ROUTING_MAP = {
    'de': {
        'index': '/de/',
        'chancenkarte': '/de/chancenkarte',
        'systemlogik': '/de/systemlogik',
        'monitor': '/de/monitor',
        'insights': '/de/insights',
        'insights/chancenkarte-voraussetzungen': '/de/insights/chancenkarte-voraussetzungen',
        'insights/chancenkarte-punkte': '/de/insights/chancenkarte-punkte',
        'insights/chancenkarte-vs-bluecard': '/de/insights/chancenkarte-vs-bluecard',
    },
    'ar': {
        'index': '/ar/',
        'chancenkarte': '/ar/chancenkarte',
        'systemlogik': '/ar/systemlogik',
        'monitor': '/ar/monitor',
        'insights': '/ar/insights',
        'insights/chancenkarte-voraussetzungen': '/ar/insights/chancenkarte-voraussetzungen',
        'insights/chancenkarte-punkte': '/ar/insights/chancenkarte-punkte',
        'insights/chancenkarte-vs-bluecard': '/ar/insights/chancenkarte-vs-bluecard',
    }
}

# ============================================================================
# ANALYSIS FUNCTIONS
# ============================================================================

def classify_page(filename):
    """Classify a page based on its filename"""
    for page_type, config in PAGE_TYPES.items():
        if re.match(config['pattern'], filename):
            return page_type, config
    return 'other', PAGE_TYPES['other']

def extract_sections(html_content):
    """Extract section structure from HTML"""
    soup = BeautifulSoup(html_content, 'html.parser')
    sections = []
    
    # Find main content area
    main = soup.find('main')
    if main:
        for child in main.find_all(['section', 'article', 'div'], recursive=False):
            if child.get('class'):
                class_name = ' '.join(child.get('class', []))
                sections.append(class_name)
            else:
                sections.append(child.name)
    
    return sections

def extract_links(html_content, base_url=''):
    """Extract all internal links from HTML"""
    soup = BeautifulSoup(html_content, 'html.parser')
    links = []
    
    for a in soup.find_all('a', href=True):
        href = a['href']
        # Filter internal links only
        if href.startswith('/') or href.startswith('./'):
            links.append({
                'href': href,
                'text': a.get_text(strip=True)[:50],
                'title': a.get('title', '')
            })
    
    return links

def validate_page_structure(filepath):
    """Validate a page against its type's requirements"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    filename = os.path.basename(filepath)
    page_type, config = classify_page(filename)
    
    soup = BeautifulSoup(content, 'html.parser')
    issues = []
    
    # Check for required elements
    for element in config['required_elements']:
        if not soup.find(element):
            issues.append(f"Missing required element: <{element}>")
    
    # Check for duplicate footers
    footers = soup.find_all('footer')
    if len(footers) > 1:
        issues.append(f"Multiple footers found ({len(footers)}), expected 1")
    elif len(footers) == 0:
        issues.append("No footer found")
    
    # Check for header
    if not soup.find('header'):
        issues.append("Missing header")
    
    return {
        'file': filename,
        'type': page_type,
        'valid': len(issues) == 0,
        'issues': issues,
        'sections': extract_sections(content),
        'links': extract_links(content)
    }

# ============================================================================
# GLOBAL VALIDATION
# ============================================================================

def validate_all_pages(base_dir):
    """Validate all pages in a directory"""
    results = {
        'de': [],
        'ar': []
    }
    
    for lang in ['de', 'ar']:
        lang_dir = os.path.join(base_dir, lang)
        if os.path.exists(lang_dir):
            for filename in os.listdir(lang_dir):
                if filename.endswith('.html'):
                    filepath = os.path.join(lang_dir, filename)
                    result = validate_page_structure(filepath)
                    results[lang].append(result)
    
    return results

def generate_report(results):
    """Generate a validation report"""
    print("\n" + "="*80)
    print("GLOBAL ARCHITECTURE VALIDATION REPORT")
    print("="*80)
    
    for lang in ['de', 'ar']:
        print(f"\n--- Language: {lang.upper()} ---")
        pages = results[lang]
        
        valid_count = sum(1 for p in pages if p['valid'])
        print(f"Valid pages: {valid_count}/{len(pages)}")
        
        for page in pages:
            status = "✓" if page['valid'] else "✗"
            print(f"\n{status} {page['file']} (Type: {page['type']})")
            
            if page['issues']:
                for issue in page['issues']:
                    print(f"  ⚠ {issue}")
            
            # Show section structure
            if page['sections']:
                print(f"  Sections: {' → '.join(page['sections'][:3])}...")
            
            # Show links
            if page['links']:
                print(f"  Links found: {len(page['links'])}")

# ============================================================================
# MAIN
# ============================================================================

if __name__ == '__main__':
    base_dir = '/home/ubuntu/berlingateway-site'
    results = validate_all_pages(base_dir)
    generate_report(results)
