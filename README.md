# Catenator framework

### Structural product architecture for the AI era.

[Get started]('/docs/getting_started.md') with the **Catenator** ecosystem.

## What is a Catenator?

The term **Catenator** refers to a person or system that chains items together to form a connected series. In the context of product development, a **Catenator** is the architect who takes discrete logic "atoms" and "meso" modules and chains them into a rigorous, unified technical specification. This process of catenation transforms fragmented ideas into a hardened backbone for software.

### The problem

As AI-generated code becomes the industry standard, the bottleneck has shifted from writing code to maintaining context. Standard product requirements documents (PRDs) are monolithic, static, and prone to context drift—the phenomenon where AI-generated code slowly loses alignment with the original product goal because the input specs are imprecise.

### The solution

The **Catenator** framework is a technical methodology for assembling product specifications from atomic logic components. It treats product requirements not as prose, but as a library of composable, machine-readable data objects. By moving the industry from conversational capture to structural assembly, **Catenator** ensures that AI-generated output is production-ready, measurable, and technically hardened.

## Core philosophy: design first, assemble second, generate third

Most teams fail with AI because they attempt to generate code from raw conversation. The **Catenator** framework introduces a critical assembly layer between the human idea and the machine code. This ensures that developers, designers, and product people are aligned on a single source of truth before a coding assistant ever sees the spec.

* **Macro (Standards):** The product operating system. These are universal rules (auth, PII, security) that apply to every feature.
* **Meso (Modules):** Functional clusters. These are self-contained, reusable units of logic like identity management or payment processing.
* **Micro (Atoms):** The technical DNA. These are discrete objects like a single field mapping, an error trigger, or a button state.

---

## Features

* **Schema-Validated:** Every spec is validated against `schema.yaml` to ensure technical completeness.
* **Catenator Ready:** Designed to be "catenated" (assembled) from multiple Markdown sources into a single source of truth.
* **Ready Check 2.0:** Moving beyond manual checklists to an automated `validation_score` (1-5) based on structural metadata.
* **AI-Native:** Optimized for RAG (Retrieval-Augmented Generation) and high-fidelity code generation.

---

### A unified specification for the whole team

The **Catenator** framework creates a common structural language that satisfies the distinct needs of the product, design, and engineering teams.

* **Product managers:** Use **Catenator** to move from vague ideas to hardened logic and objectively measure progress with the **Ready Check** score.
* **Designers:** Define UI states and behavioral triggers as atoms, ensuring no "missing screens" are discovered during development.
* **Developers:** Feed the hardened YAML output directly into AI coding assistants for high-fidelity, zero-shot code generation.

## Why YAML structure beats standard text

While most product teams rely on unstructured Markdown or Notion pages, the **Catenator** framework uses a strict YAML schema to create a technical moat:

1. **Machine-readable validation:** Enforce error handling and empty states programmatically.
2. **Token efficiency:** Provide AI models with a clear map of relationships to reduce hallucinations.
3. **Programmatic assembly:** Merge and transform specs into different views (Minimal vs. Default) without manual editing.


---

## About 

**Catenator** was designed and is maintained by **Parth Upadhye**, author of **[Spec-driven development with AI](https://www.amazon.com/dp/B0GNSTYJ6W)**.

As a product architect, my work focuses on the intersection of systems thinking and AI-assisted engineering. I developed **Catenator** to solve the context collapse that occurs when scaling complex products with LLMs. In an open-source context, I serve as the lead architect and maintainer of these schemas to ensure a standardized grammar for the next generation of product management.

---
Here is the updated README.md with the **Getting started** section moved to the bottom. This allows the high-level philosophy and the "About" section to build your authority first, before diving into implementation details.

# Catenator framework

### Structural product architecture for the AI era.

## What is a Catenator?

The term **Catenator** refers to a person or system that chains items together to form a connected series. In the context of product development, a **Catenator** is the architect who takes discrete logic "atoms" and "meso" modules and chains them into a rigorous, unified technical specification. This process of catenation transforms fragmented ideas into a hardened backbone for software.

### The problem

As AI-generated code becomes the industry standard, the bottleneck has shifted from writing code to maintaining context. Standard product requirements documents (PRDs) are monolithic, static, and prone to context drift—the phenomenon where AI-generated code slowly loses alignment with the original product goal because the input specs are imprecise.

### The solution

The **Catenator** framework is a technical methodology for assembling product specifications from atomic logic components. It treats product requirements not as prose, but as a library of composable, machine-readable data objects. By moving the industry from conversational capture to structural assembly, **Catenator** ensures that AI-generated output is production-ready, measurable, and technically hardened.

## Core philosophy: design first, assemble second, generate third

Most teams fail with AI because they attempt to generate code from raw conversation. The **Catenator** framework introduces a critical assembly layer between the human idea and the machine code. This ensures that developers, designers, and product people are aligned on a single source of truth before a coding assistant ever sees the spec.

* **Macro (Standards):** The product operating system. These are universal rules (auth, PII, security) that apply to every feature.
* **Meso (Modules):** Functional clusters. These are self-contained, reusable units of logic like identity management or payment processing.
* **Micro (Atoms):** The technical DNA. These are discrete objects like a single field mapping, an error trigger, or a button state.

---

## Features

* **Schema-validated:** Every spec is validated against `schema.yaml` to ensure technical completeness.
* **Catenator ready:** Designed to be assembled from multiple Markdown sources into a single source of truth.
* **Ready Check 2.0:** Moving beyond manual checklists to an automated validation score (1-5) based on structural metadata.
* **AI-native:** Optimized for RAG (retrieval-augmented generation) and high-fidelity code generation.

---

### A unified specification for the whole team

The **Catenator** framework creates a common structural language that satisfies the distinct needs of the product, design, and engineering teams.

* **Product managers:** Use **Catenator** to move from vague ideas to hardened logic and objectively measure progress with the **Ready Check** score.
* **Designers:** Define UI states and behavioral triggers as atoms, ensuring no missing screens are discovered during development.
* **Developers:** Feed the hardened YAML output directly into AI coding assistants for high-fidelity, zero-shot code generation.

## Why YAML structure beats standard text

While most product teams rely on unstructured Markdown or Notion pages, the **Catenator** framework uses a strict YAML schema to create a technical moat:

1. **Machine-readable validation:** Enforce error handling and empty states programmatically.
2. **Token efficiency:** Provide AI models with a clear map of relationships to reduce hallucinations.
3. **Programmatic assembly:** Merge and transform specs into different views (minimal vs. default) without manual editing.

---

## About the architect

**Catenator** was designed and is maintained by **Parth Upadhye**, author of **[Spec-driven development with AI](https://www.amazon.com/dp/B0GNSTYJ6W)**.

As a product architect, my work focuses on the intersection of systems thinking and AI-assisted engineering. I developed **Catenator** to solve the context collapse that occurs when scaling complex products with LLMs. In an open-source context, I serve as the lead architect and maintainer of these schemas to ensure a standardized grammar for the next generation of product management.

---

## Getting started

The **Catenator** ecosystem is currently evolving.

* **Documentation library:** Use the provided templates in `/templates` to begin building your own Macro, Meso, and Micro library.
* **Validation (coming soon):** We are developing a specialized **Catenator** validator that uses AI to audit your spec against your custom schema, ensuring your **Ready Check** score is accurate and objective.

For a detailed walkthrough, see [Getting started ](docs/getting_started.md).

---

## License


This framework (the schemas and templates) is released under the **MIT License**. Use it to build better software.