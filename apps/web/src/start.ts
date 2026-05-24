import { createMiddleware, createStart } from "@tanstack/react-start";

const assetCacheMiddleware = createMiddleware().server(async ({ next, request }) => {
  const response = await next();

  if (!(response instanceof Response)) {
    return response;
  }

  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/assets/")) {
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
  } else if (
    pathname === "/favicon.ico" ||
    pathname === "/manifest.json" ||
    pathname === "/robots.txt"
  ) {
    response.headers.set("Cache-Control", "public, max-age=86400, stale-while-revalidate=604800");
  }

  return response;
});

export const startInstance = createStart(() => ({
  requestMiddleware: [assetCacheMiddleware],
}));
