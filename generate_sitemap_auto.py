import os
import sys
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

def validate_sitemap(sitemap_path):
    """Validate the generated sitemap for duplicates, missing lastmod, and empty loc."""
    print(f"Validating {sitemap_path}...")
    try:
        tree = ET.parse(sitemap_path)
        root = tree.getroot()
        ns = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
        
        urls = []
        for url_node in root.findall('ns:url', ns):
            loc = url_node.find('ns:loc', ns)
            lastmod = url_node.find('ns:lastmod', ns)
            
            # Check for empty loc
            if loc is None or not loc.text or not loc.text.strip():
                print("ERROR: Empty <loc> field found.")
                return False
            
            loc_text = loc.text.strip()
            
            # Check for duplicates
            if loc_text in urls:
                print(f"ERROR: Duplicate URL found: {loc_text}")
                return False
            urls.append(loc_text)
            
            # Check for missing lastmod
            if lastmod is None or not lastmod.text or not lastmod.text.strip():
                print(f"ERROR: Missing <lastmod> for URL: {loc_text}")
                return False
                
        print(f"Validation successful: {len(urls)} unique URLs verified.")
        return True
    except Exception as e:
        print(f"ERROR: Sitemap validation failed with exception: {e}")
        return False

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
    
    # Run validation
    if not validate_sitemap(SITEMAP_PATH):
        print("Sitemap validation FAILED. Aborting.")
        sys.exit(1)
    
    print("Sitemap generated and validated successfully.")

if __name__ == "__main__":
    generate_sitemap()
