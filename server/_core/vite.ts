import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import viteConfig from "../../vite.config";
import { injectMeta } from "./meta-map";

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "../..",
        "client",
        "index.html"
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      let page = await vite.transformIndexHtml(url, template);

      // Inject page-specific meta tags based on URL path (server-side, visible to crawlers)
      const urlPath = url.split("?")[0];
      page = injectMeta(page, urlPath);

      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath =
    process.env.NODE_ENV === "development"
      ? path.resolve(import.meta.dirname, "../..", "dist", "public")
      : path.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html with meta injection
  app.use("*", (req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    fs.readFile(indexPath, "utf-8", (err, html) => {
      if (err) {
        res.status(500).send("Internal Server Error");
        return;
      }
      // Inject page-specific meta tags based on URL path (server-side, visible to crawlers)
      const urlPath = (req.originalUrl || req.path).split("?")[0];
      const injected = injectMeta(html, urlPath);
      res.status(200).set({ "Content-Type": "text/html" }).send(injected);
    });
  });
}
