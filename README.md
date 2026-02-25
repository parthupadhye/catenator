<p align="left">
  <img src="./logo.png" alt="Catenator by Engaged Inquiry" width="100%">
</p>


# Structural product architecture - Catenator

**Catenator**  by Engaged Inquiry is a [technical methodology](/docs/architecture.md) for assembling product specifications from atomic logic components. It treats product requirements not as prose, but as a library of composable, machine-readable data objects.

By moving the industry from conversational capture to structural assembly, **Catenator** ensures that AI-generated output is production-ready, measurable, and technically hardened. This structural approach enables two critical infrastructure scenarios for modern AI development:

## System prompt caching for zero-latency assembly

By storing logic in a structured, versioned registry, the entire **Catenator** library can be bundled into an LLM's system prompt cache. This turns the AI into a stateful architect that already "knows" your global standards and logic atoms. When you provide a specific project manifest, the AI retrieves the required versioned components from its active memory, resulting in near-instant generation and significant token cost savings.

## Semantic discovery through ML indexing

Every caten includes a metadata block designed for vector-based ML indexing. This allows for retrieval-augmented generation (rag) where the AI can find relevant logic through semantic meaning rather than exact file names. If a user describes a need—such as "secure user session handling"—the ML index identifies the most relevant macro standards and micro atoms based on their logical intent. This enables the system to suggest the most "hardened" components for a new assembly automatically.

---

### Implementation note

To support both scenarios, ensure every `.yaml` file maintains a high "descriptive density" in the `metadata` block. The `id` and `version` fields serve the **caching** scenario by providing absolute addresses, while the `intent` and `tags` fields serve the **ML indexing** scenario by providing the necessary surface area for semantic embeddings.

---

[Get started]('/docs/getting_started.md') with the **Catenator** ecosystem.

[Roadmap](roadmap.md)

---

## What is a Catenator?

The term **Catenator** refers to a person or system that chains items together to form a connected series. In the context of product development, a **Catenator** is the architect who takes discrete logic "atoms" and "meso" modules and chains them into a rigorous, unified technical specification. This process of catenation transforms fragmented ideas into a hardened backbone for software.

## The problem

As AI-generated code becomes the industry standard, the bottleneck has shifted from writing code to maintaining context. Standard product requirements documents (PRDs) are monolithic, static, and prone to context drift—the phenomenon where AI-generated code slowly loses alignment with the original product goal because the input specs are imprecise.

## The solution

The **Catenator** framework is a technical methodology for assembling product specifications from atomic logic components. It treats product requirements not as prose, but as a library of composable, machine-readable data objects. By moving the industry from conversational capture to structural assembly, **Catenator** ensures that AI-generated output is production-ready, measurable, and technically hardened.

## Core philosophy

* **Design first, assemble second, generate third:** Avoid conversational loops with AI. Assemble a validated logic manifest first to ensure the generative output has a hardened backbone.
* **Atomic integrity:** Logic is stored in versioned micro-atoms. This prevents redundancy and context drift by ensuring every assembly points to a single, objective source of truth.
* **Machine-readability:** Pure yaml structures allow for system prompt caching and semantic ml indexing, turning your documentation into a high-performance logic registry.
* **Interoperability by design:** Catenator is built as an open standard. By using a vendor-neutral logic grammar, manifests can be shared across different teams, AI models, and development environments without translation loss.
* **Open standard governance:** Similar to the evolution of openapi, catenator provides a public, schema-validated framework that allows the industry to move toward a collective library of hardened product logic.

---

## Why an open standard?

By open-sourcing the schemas for macros, mesos, and micros, **Catenator** is establishing a "logic handshake" between the human architect and the machine executor. This ensures that any component built today remains compatible with the AI orchestrators of tomorrow.

## The hierarchy

* **[Macro (standards)](/library/macros/README.md):** Global yaml rules such as security protocols, system personas, and ux standards.
* **[Meso (modules)](/library/mesos/README.md):** Versioned manifests that chain micro atoms into functional features.
* **[Micro (atoms)](/library/micros/README.md):** The smallest units of objective logic like field validations, triggers, or mappings.


## Features

* **Schema-Validated:** Every spec is validated against `schema.yaml` to ensure technical completeness.
* **Catenator Ready:** Designed to be "catenated" (assembled) from multiple Markdown sources into a single source of truth.
* **Ready Check 2.0:** Moving beyond manual checklists to an automated `validation_score` (1-5) based on structural metadata.
* **AI-Native:** Optimized for RAG (Retrieval-Augmented Generation) and high-fidelity code generation.

## A unified specification for the whole team

The **Catenator** framework creates a common structural language that satisfies the distinct needs of the product, design, and engineering teams.

* **Product managers:** Use **Catenator** to move from vague ideas to hardened logic and objectively measure progress with the **Ready Check** score.
* **Designers:** Define UI states and behavioral triggers as atoms, ensuring no "missing screens" are discovered during development.
* **Developers:** Feed the hardened YAML output directly into AI coding assistants for high-fidelity, zero-shot code generation.

## Why YAML structure beats standard text

While most product teams rely on unstructured Markdown or Notion pages, the **Catenator** framework uses a strict YAML schema to create a technical moat:

1. **Machine-readable validation:** Enforce error handling and empty states programmatically.
2. **Token efficiency:** Provide AI models with a clear map of relationships to reduce hallucinations.
3. **Programmatic assembly:** Merge and transform specs into different views (Minimal vs. Default) without manual editing.


## About 

**Catenator** was designed and is maintained by **[Parth Upadhye](https://www.linkedin.com/in/parth-upadhye)**, author of **[Spec-driven development with AI](https://www.amazon.com/dp/B0GNSTYJ6W)**.

> As a product architect, my work focuses on the intersection of systems thinking and AI-assisted engineering. I developed **Catenator** to solve the context collapse that occurs when scaling complex products with LLMs. In an open-source context, I serve as the lead architect and maintainer of these schemas to ensure a standardized grammar for the next generation of product management.


## Getting started

The **Catenator** ecosystem is currently evolving.

* **The manual:** Start with our [getting started guide](/docs/getting_started.md) for a step-by-step walkthrough.
* **The metric:** Learn how we quantify spec quality in the [readiness score guide](/docs/readiness_score.md).
* **Documentation library:** Use the provided templates in `/templates` to begin building your own library.


## Contributing

This project is maintained as a rigorous, architectural standard for AI-assisted product development. [We welcome contributions](contributing.md) that help refine this "unified grammar."

---

## License

This framework (the schemas and templates) is released under the **MIT License**. Use it to build better software.

---
