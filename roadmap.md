# Catenator roadmap

The **Catenator** framework is currently in active development. Our goal is to move product management from subjective prose to objective, structural data.

#### v0.1: The architectural foundation (Current)

We are currently finalizing the core grammar of the framework.

* **Core schemas:** Finalize the `schema.yaml` definitions for macro, meso, and micro components.
* **Template library:** Complete the foundational Obsidian-ready markdown templates.
* **Standard library:** Populate the repository with three reference meso modules (e.g., authentication, payment processing, and data export).
* **Readiness metric:** Formally document the 1–5 scoring logic for manual auditing.

#### v0.2: The validation engine

The focus shifts from manual documentation to automated structural integrity.

* **Linter release:** A command-line tool to validate **Catenator** files against the core schema.
* **Automated readiness check:** A script to programmatically calculate the readiness score based on metadata density.
* **Visualizer:** A tool to generate a dependency graph showing how atoms chain into meso modules.

#### v1.0: AI-native assembly

Achieving the "zero-shot" generation goal.

* **Context injector:** A tool to bundle catenated specs into a single, token-optimized context block for LLMs (Cursor, Claude, or Copilot).
* **Schema registry:** A hosted directory of community-contributed logic atoms.
* **The architect's console:** A web interface for assembling specs from the component library without manual YAML editing.

---
