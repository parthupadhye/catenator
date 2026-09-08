import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DEFAULT_FIXTURE, initialStateFromFixture } from '../src/app/core/default-fixture.ts';
import { parseSourcesFreetext, parsePersonasFreetext } from '../src/app/core/parse-freetext.ts';

/**
 * state.topic-refraction.initializes-from-default-fixture — the generated
 * default-fixture.ts is the build-time copy of build-config.yaml's defaultFixture
 * files, and seeding is exactly the free-text parse path.
 */
const FIX = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'fixtures', 'promotions');
const read = (f) => readFileSync(join(FIX, f), 'utf8').replace(/\r\n/g, '\n');

test('DEFAULT_FIXTURE embeds the current fixture files verbatim', () => {
  assert.equal(DEFAULT_FIXTURE.topicText.trim(), read('topic.md').trim());
  assert.equal(DEFAULT_FIXTURE.sources.trim(), read('sources-freetext-markdown.md').trim());
  assert.equal(DEFAULT_FIXTURE.personas.trim(), read('personas-freetext.md').trim());
});

test('initialStateFromFixture pre-populates all of Steps 1-3', () => {
  const s = initialStateFromFixture();
  assert.ok(s.topicText.length > 0, 'topic text seeded');
  assert.equal(s.sources.length, 1, 'one source seeded');
  assert.equal(s.personas.length, 2, 'two personas seeded');
});

test('seeded values are identical to parsing the same text as free-text input (no special path)', () => {
  const s = initialStateFromFixture();
  assert.deepEqual(s.sources, parseSourcesFreetext(DEFAULT_FIXTURE.sources).sources);
  assert.deepEqual(s.personas, parsePersonasFreetext(DEFAULT_FIXTURE.personas).personas);
});

test('seeded personas match the promotions expected-parsed.yaml (name, summary, canonical dimensions)', () => {
  const s = initialStateFromFixture();
  assert.deepEqual(s.personas.map((p) => p.name), ['First-time store owner', 'Experienced automation user']);
  assert.deepEqual(s.personas[0].dimensions, ['Context', 'Trust']);
  assert.deepEqual(s.personas[1].dimensions, ['Content', 'Time']);
  assert.ok(s.personas[0].summary.startsWith('Has never used an AI assistant'));
});

test('a fixture that fails to parse yields an empty section, not a throw', () => {
  const broken = { topicText: 'ok', sources: 'not a labeled record', personas: '## only a heading' };
  const s = initialStateFromFixture(broken);
  assert.equal(s.topicText, 'ok');
  assert.deepEqual(s.sources, []);
  // "## only a heading" has no summary line -> personas parse fails -> empty
  assert.deepEqual(s.personas, []);
});
