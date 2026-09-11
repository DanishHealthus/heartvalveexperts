import he from "he";

/**
 * WordPress ships editor HTML inside the ACF description fields. It is broadly
 * trustworthy, but it is still remote content, so it is passed through an
 * allow-list before it ever reaches `dangerouslySetInnerHTML`.
 *
 * The sanitiser also drops `style` / `class`, which strips the `font-weight:400`
 * spans the classic editor sprinkles everywhere and lets the page typography win.
 */

const ALLOWED_TAGS = new Set([
  "p", "br", "hr",
  "strong", "b", "em", "i", "u", "s", "mark", "small", "sup", "sub",
  "ul", "ol", "li",
  "h2", "h3", "h4", "h5", "h6",
  "blockquote", "figure", "figcaption",
  "a", "img",
  "table", "thead", "tbody", "tfoot", "tr", "th", "td",
  "span", "div", "section",
]);

/** Tags whose *contents* are thrown away, not just the tag itself. */
const STRIPPED_WITH_CONTENT = [
  "script", "style", "iframe", "object", "embed", "form",
  "input", "select", "textarea", "button", "noscript", "svg", "template",
];

const STRIPPED_GROUP = STRIPPED_WITH_CONTENT.join("|");

/** `<script>…</script>` and friends, contents included. */
const STRIPPED_WITH_CONTENT_RE = new RegExp(
  String.raw`<(${STRIPPED_GROUP})\b[^>]*>[\s\S]*?<\/\1\s*>`,
  "gi",
);

/** Any leftover opening/closing/void tag from that same list. */
const STRIPPED_TAG_RE = new RegExp(String.raw`<\/?(?:${STRIPPED_GROUP})\b[^>]*>`, "gi");

const ALLOWED_ATTRS: Record<string, Set<string>> = {
  a: new Set(["href", "title", "target", "rel"]),
  img: new Set(["src", "alt", "width", "height", "loading"]),
  td: new Set(["colspan", "rowspan"]),
  th: new Set(["colspan", "rowspan", "scope"]),
};

const VOID_TAGS = new Set(["br", "hr", "img"]);

const SAFE_URL = /^(https?:|mailto:|tel:|#|\/|\.\/|\.\.\/)/i;

function isSafeUrl(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  // Reject anything that smells like a scheme we do not allow (javascript:, data:, vbscript:).
  if (/^[a-z][a-z0-9+.-]*:/i.test(trimmed) && !SAFE_URL.test(trimmed)) return false;
  return SAFE_URL.test(trimmed) || !/^[a-z][a-z0-9+.-]*:/i.test(trimmed);
}

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const ATTR_RE = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g;

function cleanAttributes(tag: string, raw: string): string {
  const allowed = ALLOWED_ATTRS[tag];
  if (!allowed || !raw.trim()) return "";

  const out: string[] = [];
  let match: RegExpExecArray | null;
  ATTR_RE.lastIndex = 0;

  while ((match = ATTR_RE.exec(raw)) !== null) {
    const name = match[1].toLowerCase();
    if (!allowed.has(name)) continue;

    const value = match[2] ?? match[3] ?? match[4] ?? "";
    if ((name === "href" || name === "src") && !isSafeUrl(value)) continue;

    out.push(`${name}="${escapeAttr(value)}"`);
  }

  // Anchors that leave the site should not hand over the opener.
  if (tag === "a") {
    const hasBlankTarget = out.some((a) => a.startsWith('target="_blank"'));
    if (hasBlankTarget && !out.some((a) => a.startsWith("rel="))) {
      out.push('rel="noopener noreferrer"');
    }
  }

  return out.length ? ` ${out.join(" ")}` : "";
}

/**
 * Returns allow-listed HTML. Disallowed tags are unwrapped (their text is kept)
 * except for the tags listed in `STRIPPED_WITH_CONTENT`, which go entirely.
 * Malformed markup degrades to plain text rather than throwing.
 */
export function sanitizeHtml(input: unknown): string {
  if (typeof input !== "string" || !input.trim()) return "";

  let html = input;

  // Comments and conditional comments.
  html = html.replace(/<!--[\s\S]*?-->/g, "");
  // Doctype / processing instructions.
  html = html.replace(/<![\s\S]*?>/g, "");

  html = html.replace(STRIPPED_WITH_CONTENT_RE, "");
  html = html.replace(STRIPPED_TAG_RE, "");

  html = html.replace(
    /<(\/)?([a-zA-Z][a-zA-Z0-9-]*)((?:"[^"]*"|'[^']*'|[^'">])*)\/?>/g,
    (_full, closing: string | undefined, rawTag: string, rawAttrs: string) => {
      const tag = rawTag.toLowerCase();
      if (!ALLOWED_TAGS.has(tag)) return "";
      if (closing) return VOID_TAGS.has(tag) ? "" : `</${tag}>`;
      const attrs = cleanAttributes(tag, rawAttrs ?? "");
      return VOID_TAGS.has(tag) ? `<${tag}${attrs} />` : `<${tag}${attrs}>`;
    },
  );

  // Any leftover naked "<" would be parsed as a tag by the browser.
  html = html.replace(/<(?![a-zA-Z/!])/g, "&lt;");

  return html.trim();
}

/** Decodes entities and strips markup — for titles, labels and alt text. */
export function toPlainText(input: unknown): string {
  if (typeof input !== "string") return "";
  const stripped = input.replace(/<[^>]*>/g, " ");
  let decoded = stripped;
  try {
    decoded = he.decode(stripped);
  } catch {
    /* keep the raw string if the entity decoder chokes */
  }
  return decoded.replace(/\s+/g, " ").trim();
}

/** True when the HTML carries something a reader would actually see. */
export function hasContent(html: string): boolean {
  if (!html) return false;
  if (/<img\b/i.test(html)) return true;
  return toPlainText(html).length > 0;
}

/**
 * Splits WordPress HTML into the leading prose and the first list, so a section
 * can render the copy and the bullets in different visual treatments (as the
 * design does) without the API needing separate fields.
 */
export interface SplitHtml {
  intro: string;
  bullets: string[];
  outro: string;
}

export function splitListHtml(html: string): SplitHtml {
  if (!html) return { intro: "", bullets: [], outro: "" };

  const listMatch = html.match(/<(ul|ol)\b[^>]*>([\s\S]*?)<\/\1>/i);
  if (!listMatch) return { intro: html, bullets: [], outro: "" };

  const start = listMatch.index ?? 0;
  const intro = html.slice(0, start).trim();
  const outro = html.slice(start + listMatch[0].length).trim();

  const bullets = Array.from(listMatch[2].matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi))
    .map((m) => toPlainText(m[1]))
    .filter(Boolean);

  return { intro, bullets, outro };
}
