/**
 * Normalizes common CMS HTML quirks so paragraphs read continuously
 * and plain line blocks become real lists where it is safe to do so.
 */
export function normalizeBlogContentHtml(html: string): string {
  let s = html;
  if (!s.trim()) return s;

  // Repeatedly join mid-sentence <br> (word / punctuation … <br> … continuation)
  let prev = "";
  let guard = 0;
  while (prev !== s && guard < 24) {
    prev = s;
    guard += 1;
    s = s.replace(/([a-zA-Z])\s*<br\s*\/?>\s*([a-z])/g, "$1 $2");
    s = s.replace(/([,;:])\s*<br\s*\/?>\s*([a-z])/gi, "$1 $2");
  }

  s = mergeRunsOfPlainTextDivsToLists(s);
  s = mergeRunsOfPlainTextPsToLists(s);

  return s;
}

/** 4+ consecutive simple one-line <p> blocks → list (avoids blocks with multiple sentences). */
function mergeRunsOfPlainTextPsToLists(html: string): string {
  const runRe = /(?:<p[^>]*>[^<]+<\/p>\s*){4,}/gi;
  return html.replace(runRe, (chunk) => {
    const texts = [...chunk.matchAll(/<p[^>]*>([^<]+)<\/p>/gi)]
      .map((m) => m[1].trim())
      .filter(Boolean);
    if (texts.length < 4) return chunk;
    if (texts.some((t) => t.length > 200)) return chunk;
    if (texts.some((t) => (t.match(/\./g) || []).length >= 2)) return chunk;
    return `<ul class="blog-auto-list">${texts.map((t) => `<li>${t}</li>`).join("")}</ul>`;
  });
}

/** 3+ consecutive simple text-only divs → unordered list (admin-authored, trusted). */
function mergeRunsOfPlainTextDivsToLists(html: string): string {
  const runRe = /(?:<div[^>]*>[^<]+<\/div>\s*){3,}/gi;
  return html.replace(runRe, (chunk) => {
    const texts = [...chunk.matchAll(/<div[^>]*>([^<]+)<\/div>/gi)]
      .map((m) => m[1].trim())
      .filter(Boolean);
    if (texts.length < 3) return chunk;
    if (texts.some((t) => t.length > 220)) return chunk;
    return `<ul class="blog-auto-list">${texts.map((t) => `<li>${t}</li>`).join("")}</ul>`;
  });
}
