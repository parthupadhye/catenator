/**
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
  topicText: `Store owners can now manage promotions by talking to an AI assistant directly inside their favorite chat tool, instead of clicking through a promotions dashboard. You describe what you want in plain language — "give returning customers 15% off orders over $50 through the end of the month" — and the assistant creates the actual promotion: the discount type, the eligibility rule, the expiry date, all filled in correctly, ready to review before it goes live. It can also manage existing promotions the same way: "pause the summer sale," "extend the loyalty discount by a week," "show me which promotions are expiring this week." The assistant reads your store's current promotion rules before making changes, so it won't create something that conflicts with an existing one — like accidentally stacking two discounts a customer shouldn't be able to combine. Every change the assistant makes is shown to you before it's applied, and every past change is logged, so you can always see what was changed, when, and in response to what request.
`,
  sources: `## Title
AI-managed store promotions

## Source
Product design decision, PROMO-AI-01 (chat-based promotion creation, conflict checking, review-before-apply)

## Description
Explains how store owners create and manage promotions by describing what they want in plain language to an AI assistant, instead of using a dashboard form. Covers conflict checking against existing promotions and the review-before-apply safeguard, so integrators and writers understand the actual mechanism, not just the pitch.
`,
  personas: `## First-time store owner

Has never used an AI assistant for any store task before. Doesn't know what it can or can't do, or whether it's safe to trust with something that affects real customers. Needs the concept explained plainly, and needs reassurance about the review-before-apply safeguard before trying it.

Context, Trust

## Experienced automation user

Already delegates other store tasks to AI tools and assistants. Doesn't need convincing that this is safe or useful — wants to know specifically what this feature can do that a dashboard can't, and what its actual limits are.

Content, Time
`
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
