# Design document — Phase 1: Basic publication

## What this is

This is the progressive next step from `apps/phase-0-single-topic`. The major
change: in place of a single topic, the user works with a **publication**
built from multiple topics, arranged in a hierarchy of arbitrary depth —
depth is not fixed or assumed; it depends entirely on what the publication
actually needs.

Scope for this phase, confirmed:
- **Publication** — metadata, and topics (creation and editing, in hierarchy).
- **Sources** — publication-level, with per-topic override.
- **Personas** — same constraints as `apps/phase-0-single-topic`: **at most
  two personas**, each with `id` (positional: `persona-0`, `persona-1`),
  `name`, `summary`, and a list of dimensions drawn from the same **five
  fixed dimension names** (Surface, Content, Context, Time, Trust). Personas
  live at the **publication** level, not per-topic — one shared set governs
  refraction across every topic.
- **Variables** — publication-level metadata, substituted as `{{variable}}`
  inside topic content.

**Shared Blocks are explicitly out of scope for this phase** — they belong to
the next phase (Configured publication), which also introduces per-topic
persona visibility rules (`exclude-for` / `only-for`). Nothing about Shared
Blocks — no accordion section, no block-editing dialog, no block-reference
resolution — is built here.

By default, every source is available to every topic; a topic's own metadata
can identify which sources it prefers, overriding the default set for that
topic specifically.

Refraction is triggered at the publication level, in one action, and refracts
every topic in the publication — not one topic at a time.

Reference: `C:\Users\parth\ei\eisyntaxia_repos\playground\syntaxia-playground`
— for layout and interaction pattern only. The reference's Shared Blocks /
Source Decisions modal (Block ID, Category, Block title, Summary, Raw block
AST snippet) is **not** part of this phase; it is Shared Blocks, deferred.

## No dialogs in this phase

Everything in this phase's scope — Publication metadata, Topics, Sources,
Personas, Variables — is edited **inline, in Panel 2**, using the shared
markdown/YAML editor component. **No modal dialog is built or used anywhere
in this phase.** The reference app's Edit Atomic Block dialog is specific to
Shared Blocks, which is out of scope; nothing else in this phase's data model
needs a dialog, and none should be added.

## Layout

Following the pattern of the referenced workspace, the app layout is three
panels (excluding the left icon bar with the logo, which is unchanged from
that reference and from phase-0).

## Markdown and YAML form, editor, and preview

A core, reusable component — built with whatever library the system
configuration specifies — lets the user edit a markdown or YAML file, using a
form or an editor, with a Preview available wherever it's meaningful
(markdown). Where Preview wouldn't render anything meaningful (YAML,
structured metadata), the Preview button is not displayed at all.

### Panel 1 — Accordion navigation

Accordion sections, each showing:

- **Publication** — display name. Clicking opens the publication's metadata
  editor in Panel 2.
- **Topics** — the list of topics, with an action to add a new topic. Each
  topic item shows its name and action buttons: add a child topic, delete
  this topic, move up, move down. "Move up/down" reorders among siblings
  only — it does not promote or demote a topic to a different parent. There
  is no depth limit; a topic can have children, which can have children,
  following whatever hierarchy the publication actually needs.
- **Variables** — metadata (name/value pairs).
- **Sources** — metadata (`title`, `reference`, `description` — same shape
  as phase-0).
- **Personas** — metadata, capped at **two**, same shape as phase-0.

### Panel 2 — the editor, generic across everything selectable in Panel 1

Whatever is currently selected in Panel 1 (a topic, Publication metadata, a
Variable, a Source, a Persona) opens in Panel 2 using the shared markdown/YAML
editor component:

- **Publication metadata, Variables, Sources, Personas** — these are
  structured data (name/value pairs, or small metadata objects), not prose —
  so they render as a **form**, not a markdown editor. No Preview tab for any
  of them.
- **Topics** — these are the actual markdown content — Metadata / Editor /
  Preview tabs, matching the reference exactly.
- Selecting nothing (fresh load) shows the Publication metadata form by
  default, since that's the top-level entry point.

### Panel 3 — Guide and Quality Check

Both present, for this phase, as follows:

- **Guide tab** — instructional text, static per selection type. Whatever's
  currently selected in Panel 1 (Publication metadata, a Topic, Variables,
  Sources, Personas) determines which fixed guide content is shown — five
  pre-written blocks, one per type. This content is not generated and does
  not react to the actual content being edited, in this phase.

  A future phase may make Guide content responsive to the actual content
  being worked on. That is explicitly out of scope for this phase; the Guide
  here is static, selection-type-driven text only.

- **Quality Check tab** — runs four checks against the publication:
  - Every topic has required metadata filled in (at minimum: a name).
  - Every source reference used by a topic resolves to a real source in the
    publication's source list.
  - Every `{{variable}}` referenced inside a topic's content is defined in
    the publication's Variables list.
  - At least one persona exists before refraction is allowed to run.

## Technology

Angular frontend.

## Publication types and topic types — a fixed vocabulary, not free-form structure

The publication is created from one of a **fixed set of five publication
types**, chosen once, at creation — there is no "blank" publication:

- **User Manual**
- **Reference Guide**
- **Developer Guide**
- **API Documentation**
- **Product Documentation**

Each publication type has a fixed **allowed set of topic types**, drawn from a
shared catalog of 22 topic types (getting-started, introduction, setup,
overview, summary, next-steps, api-procedure, endpoint-reference,
authentication-guide, user-procedures, guides, tutorials, faq, sdk-reference,
integration-tutorials, technical-manuals, architecture-documents, methods,
errors, data-models, configuration, changelog):

| Publication type | Allowed topic types |
|---|---|
| User Manual | user-procedures, guides, tutorials, faq |
| Reference Guide | endpoint-reference, methods, errors, data-models, configuration |
| Developer Guide | tutorials, sdk-reference, integration-tutorials, getting-started |
| API Documentation | api-procedure, authentication-guide, endpoint-reference |
| Product Documentation | any of the 22 |

**What this governs, precisely — and what it doesn't:**

- **Adding a topic (or child topic)** offers a type picker, filtered to only
  the current publication's allowed topic types. The picker is the only
  effect of type — there is no per-type structured form, no required
  sub-fields (no `steps[]`, no `guidelines[]`), no ongoing schema
  conformance. **A topic's content stays exactly what it already is: a
  name and free markdown**, edited exactly as already specified. The topic
  type is a label governing *what can be selected*, not a shape governing
  *what must be written*.
- **Quality Check gains a fifth check:** the publication must contain **at
  least one topic** whose type is in its allowed set. A User Manual with
  zero topics is invalid by this check — matching the existing pattern (a
  named failure, not a blocking, live validation).
- **Topic type does not constrain parent/child nesting.** Any topic, of any
  allowed type, can be nested under any other topic in the tree — the
  hierarchy rules already specified (arbitrary depth, siblings-only
  reordering) are unaffected. Type filtering only applies to the *initial
  selection list* shown when adding a topic, drawn from the publication's
  allowed set as a whole, not from the specific parent topic's type.

This is the same governance discipline already applied to Variables: a fixed,
named vocabulary the author selects from, rather than free text — applied
here to structure instead of substitution.

### What this replaces

This is the concrete mechanism for what was earlier called "Templates" —
that deferred note is now resolved. It also replaces the earlier, larger idea
of per-topic-type structured forms with parent-child compatibility rules:
this is deliberately smaller — type as a selection filter and a presence
check, not a validated content shape.