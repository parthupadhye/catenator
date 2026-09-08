import type { Dimension } from './models';

/**
 * input-mode.dual.pre-populated-state-renders-in-both-modes — the reverse of
 * parse-freetext.ts. When the underlying state is pre-populated (e.g. from
 * state.topic-refraction.initializes-from-default-fixture), the free-text view
 * must show that content too, not just the structured form. This serializer
 * turns the same fields back into the same markdown mode-parity already
 * defines for parsing, so `parse(serialize(x))` round-trips to `x`.
 *
 * Pure, no Angular — round-trip-tested against the parser.
 */

interface SourceLike {
  title: string;
  reference: string;
  description: string;
}
interface PersonaLike {
  name: string;
  summary: string;
  dimensions: readonly Dimension[];
}

/** sources-format: "## Title" / "## Source" / "## Description" H2 sections. */
export function serializeSources(sources: readonly SourceLike[]): string {
  const s = sources[0];
  if (!s) return '';
  return [
    '## Title',
    s.title,
    '',
    '## Source',
    s.reference,
    '',
    '## Description',
    s.description
  ].join('\n');
}

/**
 * personas-format: "## <name>" heading, a summary paragraph, then a trailing
 * comma-separated dimension line (only when there are dimensions — an absent
 * line parses back to an empty dimension list, per parse-only-what-is-stated).
 */
export function serializePersonas(personas: readonly PersonaLike[]): string {
  return personas
    .map((p) => {
      const block = [`## ${p.name}`, '', p.summary];
      if (p.dimensions.length > 0) {
        block.push('', p.dimensions.join(', '));
      }
      return block.join('\n');
    })
    .join('\n\n');
}
