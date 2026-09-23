/**
 * JSON-LD Utilities — WorldTrackTravel
 *
 * Safe serialization and rendering of JSON-LD structured data.
 * Prevents XSS injection from </script> sequences in schema values.
 */

import React from 'react';

// ---------------------------------------------------------------------------
// Safe JSON-LD serialization
// ---------------------------------------------------------------------------

/**
 * Serializes a schema object to a JSON string safe for use in
 * <script type="application/ld+json"> tags.
 *
 * Escapes the </script> sequence to prevent script tag injection.
 * Returns null if the schema is empty or serialization fails.
 */
export function safeJsonLd(schema: Record<string, unknown> | null | undefined): string | null {
  if (!schema || Object.keys(schema).length === 0) return null;

  try {
    return JSON.stringify(schema).replace(/<\/script>/gi, '<\\/script>');
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// JSON-LD Script Server Component
// ---------------------------------------------------------------------------

interface JsonLdScriptProps {
  schema: Record<string, unknown> | null | undefined;
}

/**
 * Server component that renders a <script type="application/ld+json"> block.
 * Safely serializes the schema. Renders nothing if schema is empty/null.
 */
export function JsonLdScript({ schema }: JsonLdScriptProps): React.ReactElement | null {
  const serialized = safeJsonLd(schema);
  if (!serialized) return null;

  return React.createElement('script', {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: { __html: serialized },
  });
}
