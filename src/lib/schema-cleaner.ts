/**
 * Schema Sanitizer & Cleaner — WorldTrackTravel
 *
 * Cleans, sanitizes, and normalizes schema inputs from admin:
 * - Automatically strips markdown code fences (e.g. ```json ... ``` or ``` ... ```)
 * - Safely handles objects, arrays, and JSON strings
 * - Returns clean JSON-LD string or null if empty / invalid
 * - Prevents XSS injection by escaping </script>
 */

export type RawSchemaInput =
  | string
  | Record<string, unknown>
  | Array<Record<string, unknown>>
  | null
  | undefined;

/**
 * Strips markdown code fences and whitespace from a schema string.
 */
export function stripMarkdownFences(raw: string): string {
  let cleaned = raw.trim();

  // Strip leading ```json or ``` (case-insensitive)
  cleaned = cleaned.replace(/^```(?:json)?\s*/i, '');

  // Strip trailing ```
  cleaned = cleaned.replace(/\s*```$/i, '');

  return cleaned.trim();
}

/**
 * Parses and sanitizes any schema input (string, object, array).
 * Returns a serialized JSON string ready to be embedded into <script type="application/ld+json">.
 * Returns null if the input is empty or invalid JSON.
 */
export function cleanAndSerializeSchema(input: RawSchemaInput): string | null {
  if (!input) return null;

  try {
    let parsed: unknown;

    if (typeof input === 'string') {
      const stripped = stripMarkdownFences(input);
      if (!stripped || stripped === '{}' || stripped === '[]' || stripped === 'null') {
        return null;
      }
      parsed = JSON.parse(stripped);
    } else if (typeof input === 'object') {
      parsed = input;
    } else {
      return null;
    }

    if (!parsed) return null;

    // Check for empty object or array
    if (Array.isArray(parsed)) {
      if (parsed.length === 0) return null;
    } else if (typeof parsed === 'object') {
      if (Object.keys(parsed).length === 0) return null;
    } else {
      return null;
    }

    // Serialize and escape </script> to prevent script injection
    return JSON.stringify(parsed).replace(/<\/script>/gi, '<\\/script>');
  } catch (err) {
    console.error('[schema-cleaner] Invalid JSON-LD schema provided:', err);
    return null;
  }
}
