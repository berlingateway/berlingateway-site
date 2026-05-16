import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import cookieParser from "cookie-parser";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Trust the Cloudflare/Manus reverse proxy so req.protocol reflects the
  // original scheme and req.hostname reflects the original host.
  app.set('trust proxy', 1);

  // ─────────────────────────────────────────────────────────────────────────
  // CANONICAL HOST ENFORCEMENT
  // Primary canonical: https://medicalcaregermany.com  (non-www, HTTPS)
  // Rule 1: www → non-www  (301, direct, no chain)
  // Rule 2: HTTP → HTTPS   (301, direct, no chain)
  // Both rules fire independently so there is never a double-hop.
  // ─────────────────────────────────────────────────────────────────────────
  app.use((req, res, next) => {
    if (process.env.NODE_ENV !== 'production') return next();

    // Resolve actual host: prefer x-forwarded-host (set by Cloudflare/proxy)
    // then fall back to the Host header.
    const forwardedHost = (req.headers['x-forwarded-host'] as string || '').split(',')[0].trim();
    const host = forwardedHost || req.get('host') || '';

    // Resolve actual protocol via x-forwarded-proto (set by Cloudflare)
    const forwardedProto = (req.headers['x-forwarded-proto'] as string || '').split(',')[0].trim();
    const protocol = forwardedProto || req.protocol;

    const isWww = host === 'www.medicalcaregermany.com';
    const isHttp = protocol === 'http';

    // www → non-www (single 301, preserves full path + query)
    if (isWww) {
      return res.redirect(301, `https://medicalcaregermany.com${req.url}`);
    }

    // HTTP → HTTPS (single 301, preserves full path + query)
    if (isHttp) {
      return res.redirect(301, `https://medicalcaregermany.com${req.url}`);
    }

    next();
  });

  // Security Headers Middleware (Production-Grade)
  app.use((req, res, next) => {
    // HSTS - Force HTTPS for 1 year, include subdomains, allow preload
    res.setHeader(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    );

    // Content Security Policy - Restrict resource loading
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "font-src 'self' https://fonts.gstatic.com; " +
      "img-src 'self' data: https:; " +
      "connect-src 'self' https:; " +
      "frame-ancestors 'self';"
    );

    // Prevent clickjacking
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');

    // Prevent MIME type sniffing
    res.setHeader('X-Content-Type-Options', 'nosniff');

    // Referrer Policy - Control referrer information
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

    // Permissions Policy - Restrict browser features
    res.setHeader(
      'Permissions-Policy',
      'geolocation=(), microphone=(), camera=()'
    );

    // X-XSS-Protection (legacy browsers)
    res.setHeader('X-XSS-Protection', '1; mode=block');

    next();
  });

  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  
  // Cookie parser for CSRF token handling
  app.use(cookieParser());

  // CORS Configuration - Allow custom domain and development origins
  const allowedOrigins: (string | RegExp)[] = [
    'https://medicalcaregermany.com',
    'https://www.medicalcaregermany.com',
  ];
  
  if (process.env.NODE_ENV === 'development') {
    allowedOrigins.push('http://localhost:3000');
    allowedOrigins.push(/\.manus\.computer$/); // Allow Manus dev preview domains
  }

  app.use(cors({
    origin: allowedOrigins,
    credentials: true, // Allow cookies for authentication
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie', 'X-Requested-With'],
    exposedHeaders: ['Set-Cookie'],
  }));
  
  // CSRF Protection Middleware (for non-API routes)
  // Note: tRPC handles its own security through superjson and type-safe procedures
  // This is additional protection for any future form endpoints
  app.use((req, res, next) => {
    // Skip CSRF check for API routes (tRPC handles security)
    if (req.path.startsWith('/api/')) {
      return next();
    }
    // Skip CSRF check for GET, HEAD, OPTIONS (safe methods)
    if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
      return next();
    }
    // For POST/PUT/DELETE on non-API routes, verify origin
    const origin = req.get('origin') || req.get('referer');
    const host = req.get('host');
    if (origin && host && !origin.includes(host)) {
      return res.status(403).json({ error: 'CSRF validation failed' });
    }
    next();
  });
  // ─────────────────────────────────────────────────────────────────────────
  // ARABIC-FIRST SEO ARCHITECTURE
  // ─────────────────────────────────────────────────────────────────────────

  // 301 Redirects: hybrid/English pages → canonical Arabic equivalents
  const REDIRECTS_301: Record<string, string> = {
    '/intake-form-ar.html':                    '/ar',
    '/neurology-treatment-germany':           '/ar/neurology-treatment-germany',
    '/brain-tumor-treatment-germany':         '/ar/brain-tumor-treatment-germany',
    '/trigeminal-neuralgia-treatment-germany':'/ar/trigeminal-neuralgia-treatment-germany',
    '/lung-cancer-treatment-germany':         '/ar/lung-cancer-treatment-germany',
    '/herniated-disc-treatment-germany':      '/ar/herniated-disc',
    '/spine-surgery-germany':                 '/ar/neurology-treatment-germany',
  };

  // 410 Gone: permanently deleted English-only pages
  const GONE_410: string[] = [
    '/brain-surgery-germany',
  ];

  app.use((req, res, next) => {
    const path = req.path.replace(/\/+$/, '') || '/';

    // 410 Gone — permanently removed pages
    if (GONE_410.includes(path)) {
      res.status(410).send(
        '<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"><title>410 Gone</title></head>' +
        '<body><h1>410 — هذه الصفحة لم تعد متاحة</h1>' +
        '<p><a href="/ar">العودة إلى الصفحة الرئيسية</a></p></body></html>'
      );
      return;
    }

    // 301 Redirect — hybrid/English pages → Arabic canonical
    const target = REDIRECTS_301[path];
    if (target) {
      return res.redirect(301, target);
    }

    next();
  });

  // ─────────────────────────────────────────────────────────────────────────

  // OAuth callback under /api/oauth/callback
  registerOAuthRoutes(app);
  
  // Sitemap.xml route (SEO Authority Pack)
  const { handleSitemap } = await import('../sitemap');
  app.get('/sitemap.xml', handleSitemap);
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
