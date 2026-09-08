import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { serializeSources, serializePersonas } from '../src/app/core/serialize-freetext.ts';
import { parseSourcesFreetext, parsePersonasFreetext } from '../src/app/core/parse-freetext.ts';
import { initialStateFromFixture } from '../src/app/core/default-fixture.ts';

/**
 * input-mode.dual.pre-populated-state-renders-in-both-modes: the serializer is
 * the exact inverse of the parser — parse(serialize(x)) === x — so a
 * pre-populated state can be shown in the free-text view and parsed straight
 * back with no drift.
 */

const FIX = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'fixtures', 'promotions');
const read = (f) => readFileSync(join(FIX, f), 'utf8').replace(/\r\n/g, '\n');

test('empty state serializes to empty markdown (nothing to show in either mode)', () => {
  assert.equal(serializeSources([]), '');
  assert.equal(serializePersonas([]), '');
});

test('sources round-trip: parse(serialize(state)) deep-equals state', () => {
  const src = parseSourcesFreetext(read('sources-freetext-markdown.md')).sources;
  const back = parseSourcesFreetext(serializeSources(src)).sources;
  assert.deepEqual(back, src);
});

test('personas round-trip: parse(serialize(state)) deep-equals state', () => {
  const personas = parsePersonasFreetext(read('personas-freetext.md')).personas;
  const back = parsePersonasFreetext(serializePersonas(personas)).personas;
  assert.deepEqual(back, personas);
});

test('the default-fixture pre-populated state survives a serialize -> parse round trip', () => {
  const initial = initialStateFromFixture();
  assert.deepEqual(parseSourcesFreetext(serializeSources(initial.sources)).sources, initial.sources);
  assert.deepEqual(parsePersonasFreetext(serializePersonas(initial.personas)).personas, initial.personas);
});

test('serialized markdown actually contains the pre-populated values (not blank)', () => {
  const initial = initialStateFromFixture();
  const sMd = serializeSources(initial.sources);
  assert.match(sMd, /## Title/);
  assert.match(sMd, /AI-managed store promotions/);
  const pMd = serializePersonas(initial.personas);
  assert.match(pMd, /## First-time store owner/);
  assert.match(pMd, /Context, Trust/);
  assert.match(pMd, /## Experienced automation user/);
});

test('a persona with no dimensions serializes without a trailing dimension line', () => {
  const md = serializePersonas([{ name: 'R', summary: 'Just a summary.', dimensions: [] }]);
  assert.equal(md, '## R\n\nJust a summary.');
  assert.deepEqual(parsePersonasFreetext(md).personas[0].dimensions, []);
});
