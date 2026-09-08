/**
 * Generate src/app/core/default-fixture.ts from the fixture files named in
 * build-config.yaml's defaultFixture block. Run after changing those fixtures:
 *
 *   node scripts/gen-default-fixture.mjs
 *
 * state.topic-refraction.initializes-from-default-fixture: the app is a static
 * SPA and cannot read the fixture files at runtime, so their content is
 * embedded here at build time. The strings are still parsed through the same
 * parseSourcesFreetext / parsePersonasFreetext the free-text input mode uses.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const FIX = join(here, '..', '..', 'fixtures', 'promotions');

const read = (f) => readFileSync(join(FIX, f), 'utf8').replace(/\r\n/g, '\n').replace(/\s+$/, '') + '\n';
const esc = (s) => s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

const topicText = read('topic.md');
const sources = read('sources-freetext-markdown.md');
const personas = read('personas-freetext.md');

const out = `/**
 * state.topic-refraction.initializes-from-default-fixture — the build-time
 * materialization of build-config.yaml's defaultFixture block:
 *   topicText -> fixtures/promotions/topic.md
 *   sources   -> fixtures/promotions/sources-freetext-markdown.md
 *   personas  -> fixtures/promotions/personas-freetext.md
 *
 * These are STARTING values only. SessionStore seeds Steps 1-3 from them on
 * first load (and on Start-over); the author can edit or fully replace any of
 * it exactly as if they had typed it. Nothing about mandatory / validation
 * behavior differs between fixture-sourced and author-typed content — the
 * sources / personas strings below are parsed through the very same
 * parseSourcesFreetext / parsePersonasFreetext the free-text input mode uses.
 *
 * GENERATED FILE — do not hand-edit. Regenerate with
 * scripts/gen-default-fixture.mjs after changing the fixtures.
 */
import { parsePersonasFreetext, parseSourcesFreetext } from './parse-freetext';
import type { PersonaDraft } from './parse-freetext';
import type { SourceItem } from './models';

export const DEFAULT_FIXTURE = {
  topicText: \`${esc(topicText)}\`,
  sources: \`${esc(sources)}\`,
  personas: \`${esc(personas)}\`
} as const;

export interface InitialState {
  topicText: string;
  sources: SourceItem[];
  personas: PersonaDraft[];
}

/**
 * Pure: turn the default fixture into the same shape an author action would
 * produce. A parse failure yields an empty section rather than throwing, so the
 * app still loads (just without that pre-fill).
 */
export function initialStateFromFixture(fixture: { topicText: string; sources: string; personas: string } = DEFAULT_FIXTURE): InitialState {
  const sr = parseSourcesFreetext(fixture.sources);
  const pr = parsePersonasFreetext(fixture.personas);
  return {
    topicText: fixture.topicText.trim(),
    sources: sr.ok ? sr.sources : [],
    personas: pr.ok ? pr.personas : []
  };
}
`;

writeFileSync(join(here, '..', 'src', 'app', 'core', 'default-fixture.ts'), out);
console.log('wrote src/app/core/default-fixture.ts');
