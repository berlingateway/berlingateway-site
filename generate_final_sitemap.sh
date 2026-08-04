#!/bin/bash

BASE_URL="https://berlingateway.de"
OUTPUT_FILE="/home/ubuntu/sitemap.xml"

# Consolidation Decisions (Explicitly skip these to favor Primary)
declare -A consolidation_skips
consolidation_skips["ar/assessment.html"]=1
consolidation_skips["de/assessment.html"]=1
consolidation_skips["en/assessment.html"]=1

consolidation_skips["ar/ausbildung.html"]=1
consolidation_skips["de/ausbildung.html"]=1
consolidation_skips["en/ausbildung.html"]=1

consolidation_skips["ar/visum-deutschland.html"]=1
consolidation_skips["de/visum-deutschland.html"]=1
consolidation_skips["en/visum-deutschland.html"]=1

# Nursing Consolidation: Keep pathway-nursing (Primary), skip pflegekraefte
consolidation_skips["de/pflegekraefte.html"]=1

# Doctors Consolidation: Keep aerzte (Primary), skip pathway-doctors
consolidation_skips["ar/pathway-doctors.html"]=1
consolidation_skips["de/pathway-doctors.html"]=1
consolidation_skips["en/pathway-doctors.html"]=1

# Landing variants - skip if not primary
consolidation_skips["ar/chancenkarte.html"]=1
consolidation_skips["de/chancenkarte.html"]=1
consolidation_skips["en/chancenkarte.html"]=1

declare -A included_urls

# Function to get final 200 URL for a file
get_final_200_url() {
    local file="$1"
    local initial_url=""
    
    # Check _redirects
    if grep -qE "^/(${file%.html}|${file%/index.html})(\s|$)" _redirects; then
        local target=$(grep -E "^/(${file%.html}|${file%/index.html})(\s|$)" _redirects | awk '{print $2}' | head -n 1)
        initial_url="$BASE_URL$target"
    elif [[ "$file" == *"index.html" ]]; then
        initial_url="$BASE_URL/${file%/index.html}/"
    else
        initial_url="$BASE_URL/${file%.html}"
    fi
    
    local res=$(curl -s -o /dev/null -w "%{http_code}|%{url_effective}" -L -I --max-time 10 "$initial_url")
    local status=$(echo "$res" | cut -d'|' -f1)
    local final=$(echo "$res" | cut -d'|' -f2 | sed 's|//|/|g' | sed 's|https:/|https://|')
    
    if [[ "$status" == "200" ]]; then
        echo "$final"
    else
        echo ""
    fi
}

echo "Generating sitemap.xml..."

cat <<EOF > "$OUTPUT_FILE"
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
EOF

# Process refined files
while read -r file; do
    # Skip excluded patterns
    [[ "$file" == *"404.html"* ]] && continue
    [[ "$file" == *"google"* ]] && continue
    [[ "$file" == *"bg-master-template"* ]] && continue
    [[ "$file" == *"framework.html"* ]] && continue
    
    # Consolidation Skip
    if [[ -n "${consolidation_skips[$file]}" ]]; then
        echo "Consolidation Skip: $file"
        continue
    fi
    
    # Robots check
    if grep -q "noindex" "$file"; then
        echo "Noindex Skip: $file"
        continue
    fi
    
    final_url=$(get_final_200_url "$file")
    
    if [[ -n "$final_url" ]]; then
        # Avoid duplicates
        if [[ -z "${included_urls[$final_url]}" ]]; then
            lastmod=$(git log -1 --format=%aI -- "$file" 2>/dev/null || date -I)
            cat <<EOF >> "$OUTPUT_FILE"
  <url>
    <loc>$final_url</loc>
    <lastmod>$lastmod</lastmod>
  </url>
EOF
            included_urls["$final_url"]=1
            echo "Added: $final_url"
        else
            echo "Duplicate Skip: $file -> $final_url"
        fi
    fi
done < all_sitemap_files_refined.txt

echo "</urlset>" >> "$OUTPUT_FILE"
echo "Done. Sitemap saved to $OUTPUT_FILE"
