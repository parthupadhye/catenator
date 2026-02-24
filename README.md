# Catenator framework (CF)

### Design first. Assemble second. Generate third.

**Atomic spec framework (ASF)** is a modular architecture for product documentation, designed to eliminate the "hallucination gap" in AI-generated code. Based on the principles in *[Spec-Driven Development with AI](https://www.amazon.com/dp/B0GNSTYJ6W)*, this framework treats product logic as a library of composable data objects rather than static text.

---

## The philosophy: Macro, Meso, Micro

Standard PRDs are monoliths; they are hard to maintain and even harder for LLMs to parse accurately. ASF breaks product documentation into three hierarchical layers:

* **Macro (The OS):** Global constraints and system personas (e.g., Auth standards, PII rules, API rate limits).
* **Meso (The Modules):** Functional clusters (e.g., Stripe Integration, User Profile Logic) that inherit Macro rules.
* **Micro (The Atoms):** The smallest unit of logic (e.g., a single field mapping, a specific error state, a button trigger).

---

## Features

* **Schema-Validated:** Every spec is validated against `schema.yaml` to ensure technical completeness.
* **Catenator Ready:** Designed to be "catenated" (assembled) from multiple Markdown sources into a single source of truth.
* **Ready Check 2.0:** Moving beyond manual checklists to an automated `validation_score` (1-5) based on structural metadata.
* **AI-Native:** Optimized for RAG (Retrieval-Augmented Generation) and high-fidelity code generation.

---

## Getting started

### 1. Define your systems

Create a **System Persona** for every third-party service or internal database.

```yaml
# system-persona.yaml
name: Salesforce
role: source
auth: oauth2

```

### 2. Build your library

Store your functional logic in **Micro Atoms**.

```markdown
# atom-field-mapping.md
source: Opportunity_Amount
target: Ledger_Total
transform: currency_to_string

```

### 3. Assemble (Catenate)

Use the **Meso Template** to link your atoms into a production-ready guide.

```markdown
---
type: meso
inherits: [Macro_Security_Global]
systems: [Salesforce_Persona, Slack_Persona]
atoms: [atom-field-mapping]
---

```

---

## Validation & quality

This framework introduces the **Ready Check** metric. A spec is only "Code Ready" when the `validation_level` reaches `approved`.

| Score | Status | Description |
| --- | --- | --- |
| **1-2** | `needs_work` | Structural gaps; missing field mappings or error states. |
| **3-4** | `validated` | All blocks defined; UI and logic aligned. |
| **5** | **`approved`** | Code-ready. Can be handed to an LLM for zero-shot generation. |

---

## Alignment with *Spec-Driven Development with AI*

This repository serves as the technical implementation of the methods described in the book. While the book teaches the **Conversation**, this framework provides the **Architecture**.

* **Book:** How to extract decisions from a chat.
* **Framework:** How to store and validate those decisions for scale.

---

## License

This framework (the schemas and templates) is released under the **MIT License**. Use it to build better software.
