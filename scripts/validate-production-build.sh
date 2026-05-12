#!/bin/bash

# ============================================================================
# PRODUCTION BUILD VALIDATION SCRIPT
# ============================================================================
# Enterprise-grade validation to ensure ZERO development artifacts in production.
# ============================================================================

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔍 PRODUCTION BUILD VALIDATION"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

DIST_DIR="dist/public"
FAILED=0

# Check if dist directory exists
if [ ! -d "$DIST_DIR" ]; then
  echo "❌ ERROR: Production build directory not found: $DIST_DIR"
  exit 1
fi

echo ""
echo "📦 Checking production bundle..."
echo ""

# Layer 1: Check for editor/dev script references
echo "🔎 Layer 1: Scanning for editor/dev script references..."
EDITOR_REFS=$(grep -r "manus-space-dispatcher\|spaceEditor\|isWebDev\|cursorStyleElement\|jsxLocPlugin\|vitePluginManusRuntime" "$DIST_DIR" 2>/dev/null || true)

if [ -n "$EDITOR_REFS" ]; then
  echo "❌ FAILED: Editor/dev script references found in production bundle:"
  echo "$EDITOR_REFS"
  FAILED=1
else
  echo "✅ PASSED: No editor/dev script references found"
fi

# Layer 2: Check for builder.io references
echo ""
echo "🔎 Layer 2: Scanning for builder.io references..."
BUILDER_REFS=$(grep -r "builder\.io\|@builder\.io" "$DIST_DIR" 2>/dev/null || true)

if [ -n "$BUILDER_REFS" ]; then
  echo "❌ FAILED: Builder.io references found in production bundle:"
  echo "$BUILDER_REFS"
  FAILED=1
else
  echo "✅ PASSED: No builder.io references found"
fi

# Layer 3: Check for dev mode flags
echo ""
echo "🔎 Layer 3: Scanning for development mode flags..."
DEV_FLAGS=$(grep -rw "isDevelopment\|__DEV__" "$DIST_DIR" 2>/dev/null || true)

if [ -n "$DEV_FLAGS" ]; then
  echo "❌ FAILED: Development mode flags found in production bundle:"
  echo "$DEV_FLAGS"
  FAILED=1
else
  echo "✅ PASSED: No development mode flags found"
fi

# Layer 4: Check HTML for injected scripts
echo ""
echo "🔎 Layer 4: Validating HTML output..."
HTML_FILE="$DIST_DIR/index.html"

if [ ! -f "$HTML_FILE" ]; then
  echo "❌ FAILED: index.html not found"
  FAILED=1
else
  # Check for editor scripts in HTML
  EDITOR_HTML=$(grep -i "manus-space\|spaceEditor\|builder.*editor" "$HTML_FILE" || true)
  
  if [ -n "$EDITOR_HTML" ]; then
    echo "❌ FAILED: Editor scripts found in HTML:"
    echo "$EDITOR_HTML"
    FAILED=1
  else
    echo "✅ PASSED: HTML is clean (no editor scripts)"
  fi
  
  # Verify only analytics script exists
  SCRIPT_COUNT=$(grep -c "<script" "$HTML_FILE" || true)
  echo "   📊 Script tags found: $SCRIPT_COUNT"
  
  if [ "$SCRIPT_COUNT" -gt 8 ]; then
    echo "⚠️  WARNING: More than 8 script tags found (expected: vendor chunks + module + analytics)"
  fi
fi

# Layer 5: Check bundle size (should be reasonable without editor code)
echo ""
echo "🔎 Layer 5: Checking bundle size..."
JS_SIZE=$(du -sh "$DIST_DIR/assets/"*.js 2>/dev/null | awk '{print $1}' || echo "unknown")
CSS_SIZE=$(du -sh "$DIST_DIR/assets/"*.css 2>/dev/null | awk '{print $1}' || echo "unknown")

echo "   📊 JavaScript bundle: $JS_SIZE"
echo "   📊 CSS bundle: $CSS_SIZE"

# Layer 6: Check for source maps (should not exist in production)
echo ""
echo "🔎 Layer 6: Checking for source maps..."
SOURCE_MAPS=$(find "$DIST_DIR" -name "*.map" 2>/dev/null || true)

if [ -n "$SOURCE_MAPS" ]; then
  echo "⚠️  WARNING: Source maps found in production build:"
  echo "$SOURCE_MAPS"
  echo "   (Consider removing for production)"
else
  echo "✅ PASSED: No source maps in production build"
fi

# Layer 7: Final verdict
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ $FAILED -eq 0 ]; then
  echo "✅ VALIDATION PASSED"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "🎉 Production build is clean and ready for deployment."
  echo ""
  exit 0
else
  echo "❌ VALIDATION FAILED"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "⚠️  Production build contains development artifacts."
  echo "   Please review the errors above and rebuild."
  echo ""
  exit 1
fi
