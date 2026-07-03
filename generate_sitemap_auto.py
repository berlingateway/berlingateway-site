import os
from pathlib import Path
from datetime import datetime
import xml.etree.ElementTree as ET

BASE_DIR = Path('/home/ubuntu/berlingateway-site')
SITEMAP_PATH = BASE_DIR / 'sitemap.xml'
DOMAIN = 'https://berlingateway.de'

# Configuration for specific pages
PRIORITIES = {
    '/ar/': '1.0',
    '/de/': '0.8',
    '/ar/chancenkarte': '0.9',
    '/en/chancenkarte': '0.9',
    '/ar/aerzte': '0.9',
    '/ar/pflege': '0.9',
    '/ar/visa': '0.9',
    '/ar/anerkennung': '0.9',
    '/ar/insights/تجنس-ألمانيا': '0.9',
    '/ar/insights/راتب-ممرض-ألمانيا': '0.9',
    '/ar/insights/راتب-طبيب-ألمانيا': '0.9',
    '/ar/aerzte-zahnaerzte': '0.9',
}

CHANGEFREQS = {
    '/ar/': 'weekly',
    '/de/': 'monthly',
    '/ar/assessment': 'weekly',
    '/de/assessment': 'weekly',
    '/ar/apply': 'weekly',
    '/de/apply': 'weekly',
}

def get_html_files(directory):
    files = []
    for root, _, filenames in os.walk(directory):
        for filename in filenames:
            if filename.endswith('.html'):
                path = Path(root) / filename
                files.append(path)
    return files

def generate_sitemap():
    root = ET.Element('urlset', xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    
    # Scan ar, de, en, fr directories
    langs = ['ar', 'de', 'en', 'fr']
    all_urls = set()

    for lang in langs:
        lang_dir = BASE_DIR / lang
        if not lang_dir.exists():
            continue
            
        html_files = get_html_files(lang_dir)
        for file_path in html_files:
            relative_path = file_path.relative_to(BASE_DIR)
            
            # Clean up the path for the URL
            url_path = '/' + str(relative_path).replace('\\', '/')
            if url_path.endswith('/index.html'):
                url_path = url_path[:-10]
            elif url_path.endswith('.html'):
                url_path = url_path[:-5]
            
            # Skip duplicates and specific exclusions
            if url_path in all_urls:
                continue
            all_urls.add(url_path)
            
            url_node = ET.SubElement(root, 'url')
            loc_node = ET.SubElement(url_node, 'loc')
            loc_node.text = f"{DOMAIN}{url_path}"
            
            mod_node = ET.SubElement(url_node, 'lastmod')
            # Use file modification time or current date
            mtime = datetime.fromtimestamp(file_path.stat().st_mtime).strftime('%Y-%m-%d')
            mod_node.text = mtime
            
            freq_node = ET.SubElement(url_node, 'changefreq')
            freq_node.text = CHANGEFREQS.get(url_path, 'monthly')
            
            pri_node = ET.SubElement(url_node, 'priority')
            priority = PRIORITIES.get(url_path, '0.5')
            pri_node.text = priority

    # Indent and write
    def indent(elem, level=0):
        i = "\n" + level*"  "
        if len(elem):
            if not elem.text or not elem.text.strip():
                elem.text = i + "  "
            if not elem.tail or not elem.tail.strip():
                elem.tail = i
            for elem in elem:
                indent(elem, level+1)
            if not elem.tail or not elem.tail.strip():
                elem.tail = i
        else:
            if level and (not elem.tail or not elem.tail.strip()):
                elem.tail = i

    indent(root)
    tree = ET.ElementTree(root)
    tree.write(SITEMAP_PATH, encoding='utf-8', xml_declaration=True)
    print(f"Successfully generated {SITEMAP_PATH} with {len(all_urls)} URLs.")

if __name__ == "__main__":
    generate_sitemap()
