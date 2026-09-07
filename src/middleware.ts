import { NextRequest, NextResponse } from "next/server";

/**
 * Paths that must always resolve to their all-lowercase form.
 *
 * This cannot be done with a `redirects()` rule in next.config.ts: Next matches
 * `source` case-insensitively, so a "/Foo" -> "/foo" rule also matches "/foo"
 * itself and the browser ends up in a redirect loop (ERR_TOO_MANY_REDIRECTS).
 * Middleware sees the raw pathname, so it can compare case exactly.
 *
 * Entries must be written in lowercase, with no trailing slash.
 */
const LOWERCASE_ONLY_PATHS = ["/heart-specialists-in-india"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname !== pathname.toLowerCase()) {
    const lower = pathname.toLowerCase();
    const withoutTrailingSlash =
      lower.length > 1 && lower.endsWith("/") ? lower.slice(0, -1) : lower;

    if (LOWERCASE_ONLY_PATHS.includes(withoutTrailingSlash)) {
      const url = request.nextUrl.clone();
      url.pathname = lower;
      return NextResponse.redirect(url, 308);
    }
  }

  return NextResponse.next();
}

export const config = {
  // Matcher patterns are case-sensitive, so this has to be the broad "every
  // page request" pattern for the uppercase spellings above to reach the
  // middleware at all. Next internals and API routes are skipped.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
