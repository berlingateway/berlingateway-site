import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import cookieParser from "cookie-parser";
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
  // OAuth callback under /api/oauth/callback
  registerOAuthRoutes(app);
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
