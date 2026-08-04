#!/bin/bash

# Base URL for the site
BASE_URL="https://berlingateway.de"

# Static list of known files to fix
static_files=(
    "ar/index.html"
    "ar/aerzte-zahnaerzte/index.html"
    "ar/anerkennung/index.html"
    "ar/insights/gefragte-berufe/index.html"
    "ar/pflege-aegypten/index.html"
    "ar/pflege-algerien/index.html"
    "ar/pflege-golf/index.html"
    "ar/pflege-irak/index.html"
    "ar/pflege-jordanien/index.html"
    "ar/pflege-marokko/index.html"
    "ar/pflege-tunesien/index.html"
    "ar/pflege/index.html"
    "ar/study-in-germany/scholarships/index.html"
    "ar/visa/index.html"
    "de/anerkennung/index.html"
    "de/orientierung/index.html"
    "de/voraussetzungen/index.html"
    "en/nurses-gulf/index.html"
    "en/nursing/index.html"
    "en/pflege-aegypten/index.html"
)

# Dynamically find Arabic insights files
insight_files=($(find ar/insights -type f -name "*.html"))

# Combine all files
all_files=("${static_files[@]}" "${insight_files[@]}")

# Function to check if a file is redirected by _redirects
is_redirected() {
    local file_path_no_html="$1"
    file_path_no_html=$(echo "$file_path_no_html" | sed -E 's/(\.html|\/index\.html)$//')
    grep -qE "^/${file_path_no_html}(\s|$)" _redirects
}

# Function to get redirect target from _redirects
get_redirect_target() {
    local file_path_no_html="$1"
    file_path_no_html=$(echo "$file_path_no_html" | sed -E 's/(\.html|\/index\.html)$//')
    grep -E "^/${file_path_no_html}(\s|$)" _redirects | awk '{print $2}' | head -n 1
}

# Filter existing files and map them to initial target URLs
declare -A file_to_initial_url
initial_urls=()

for file in "${all_files[@]}"; do
    if [ -f "$file" ]; then
        initial_target_url=""
        if is_redirected "$file"; then
            redirect_target=$(get_redirect_target "$file")
            initial_target_url="$BASE_URL$redirect_target"
        elif [[ "$file" == *"index.html" ]]; then
            initial_target_url="$BASE_URL/${file%/index.html}/"
        elif [[ "$file" == *".html" ]]; then
            initial_target_url="$BASE_URL/${file%.html}"
        else
            initial_target_url="$BASE_URL/$file"
        fi
        file_to_initial_url["$file"]="$initial_target_url"
        initial_urls+=("$initial_target_url")
    fi
done

# Parallel execution of curl using xargs -P
# Output format: initial_url|status|final_url
CURL_RESULTS=$(mktemp)
printf "%s\n" "${initial_urls[@]}" | xargs -P 4 -I {} bash -c '
    url="{}"
    res=$(curl -s -o /dev/null -w "%{http_code}|%{url_effective}" -L -I --max-time 20 "$url")
    echo "$url|$res"
' > "$CURL_RESULTS"

# Build a map from the results
declare -A url_to_status
declare -A url_to_final

while IFS='|' read -r orig_url status final_url; do
    url_to_status["$orig_url"]="$status"
    url_to_final["$orig_url"]="$final_url"
done < "$CURL_RESULTS"

# Apply fixes with safety checks
for file in "${!file_to_initial_url[@]}"; do
    initial_url="${file_to_initial_url[$file]}"
    status="${url_to_status[$initial_url]}"
    final_url="${url_to_final[$initial_url]}"

    # Clean up double slashes in final_url
    final_url=$(echo "$final_url" | sed 's|//|/|g' | sed 's|https:/|https://|')

    if [[ "$status" == "200" ]]; then
        # Safety check: new canonical should contain a relevant part of the file path
        # For index.html, check the parent directory name
        # For standalone .html, check the filename slug
        slug=""
        if [[ "$file" == *"index.html" ]]; then
            slug=$(basename "$(dirname "$file")")
        else
            slug=$(basename "$file" .html)
        fi
        
        # Special case for root ar/index.html or de/index.html
        if [[ "$slug" == "ar" || "$slug" == "de" || "$slug" == "en" || "$slug" == "fr" ]]; then
             slug="/$slug/"
        fi

        # Decode URLs for comparison (rough check)
        decoded_final=$(python3 -c "import urllib.parse, sys; print(urllib.parse.unquote(sys.stdin.read()))" <<< "$final_url")
        
        if [[ "$decoded_final" != *"$slug"* && "$file" != "ar/index.html" && "$file" != "de/index.html" ]]; then
            echo "⚠️ SUSPICIOUS: $file (Initial: $initial_url) → $final_url (Slug '$slug' not found in final URL)"
        else
            # Apply fix using perl
            perl -pi -e "s|<link rel=\"canonical\" href=\"[^\"]*\"|<link rel=\"canonical\" href=\"$final_url\"|g" "$file"
            echo "Fixed: $file → $final_url"
        fi
    else
        echo "Skipped: $file (Status $status for $initial_url)"
    fi
done

rm "$CURL_RESULTS"
