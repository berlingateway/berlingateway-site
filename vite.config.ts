import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// ============================================================================
// STRICT PRODUCTION BUILD CONFIGURATION
// ============================================================================
// Enterprise-grade production build with ZERO development artifacts.
// Multi-layer guards ensure NO editor/builder/dev/runtime scripts in production.
// ============================================================================

// Layer 1: Environment Detection (multiple sources for reliability)
const NODE_ENV = process.env.NODE_ENV;
const VITE_MODE = process.env.VITE_MODE;
const BUILD_MODE = process.env.BUILD_MODE;

// Layer 2: Strict Production Flag (explicit override capability)
const FORCE_PRODUCTION = process.env.FORCE_PRODUCTION === 'true';
const DISABLE_EDITOR = process.env.DISABLE_EDITOR === 'true';

// Layer 3: Production Detection Logic (conservative - default to production if unclear)
const isProduction = 
  FORCE_PRODUCTION || 
  DISABLE_EDITOR ||
  NODE_ENV === 'production' || 
  VITE_MODE === 'production' ||
  BUILD_MODE === 'production' ||
  process.argv.includes('build');

// Layer 4: Development Mode (ONLY if explicitly set AND not overridden)
const isDevelopment = !isProduction && (
  NODE_ENV === 'development' ||
  VITE_MODE === 'development' ||
  BUILD_MODE === 'development'
);

// Layer 5: Console Warning (alert if editor plugins load in production)
if (!isDevelopment && (NODE_ENV !== 'production' && VITE_MODE !== 'production')) {
  console.warn('⚠️  WARNING: Environment unclear. Defaulting to PRODUCTION mode (no editor plugins).');
}

// Layer 6: Plugin Configuration (strict isolation)
const editorPlugins = isDevelopment ? [
  jsxLocPlugin(),
  vitePluginManusRuntime()
] : [];

// Layer 7: Core Plugins (always loaded)
const corePlugins = [
  react(),
  tailwindcss()
];

// Layer 8: Final Plugin Array (explicit separation)
const plugins = [
  ...corePlugins,
  ...editorPlugins
];

// Layer 9: Build-time Validation (log configuration)
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('🔒 VITE BUILD CONFIGURATION');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`Environment:        ${NODE_ENV || 'undefined'}`);
console.log(`Vite Mode:          ${VITE_MODE || 'undefined'}`);
console.log(`Build Mode:         ${BUILD_MODE || 'undefined'}`);
console.log(`Force Production:   ${FORCE_PRODUCTION}`);
console.log(`Disable Editor:     ${DISABLE_EDITOR}`);
console.log(`Is Production:      ${isProduction}`);
console.log(`Is Development:     ${isDevelopment}`);
console.log(`Core Plugins:       ${corePlugins.length} (react, tailwindcss)`);
console.log(`Editor Plugins:     ${editorPlugins.length} ${isDevelopment ? '(jsxLocPlugin, vitePluginManusRuntime)' : '(DISABLED)'}`);
console.log(`Total Plugins:      ${plugins.length}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

// Layer 10: Production Assertion (fail-safe)
if (isProduction && editorPlugins.length > 0) {
  throw new Error('❌ CRITICAL: Editor plugins detected in production build. Build aborted.');
}

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  publicDir: path.resolve(import.meta.dirname, "client", "public"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    // Production optimization
    minify: 'terser',
    sourcemap: false, // No source maps in production
    rollupOptions: {
      output: {
        // Clean production output (no dev artifacts)
        manualChunks: undefined,
        // Remove comments from production build
        banner: '',
        footer: '',
      },
    },
  },
  server: {
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
