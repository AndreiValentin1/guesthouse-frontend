/**
 * Resolves a data tree that stores bilingual leaves as `{ ro, en }` pairs into a
 * plain tree for one language. Anything that is not such a pair is walked through
 * untouched.
 */
export function localize(node, lang) {
  if (Array.isArray(node)) return node.map((n) => localize(n, lang));

  if (node && typeof node === 'object') {
    const keys = Object.keys(node).sort();
    if (keys.length === 2 && keys[0] === 'en' && keys[1] === 'ro') return node[lang];

    const out = {};
    for (const key of keys) out[key] = localize(node[key], lang);
    return out;
  }

  return node;
}
