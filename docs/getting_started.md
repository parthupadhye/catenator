# Getting started with Catenator

This guide walks you through the initial setup of the **Catenator** framework for your product development lifecycle. Following these steps ensures that your product documentation is structural, modular, and ready for high-fidelity AI code generation.

### 1. Set up your environment

The **Catenator** framework is tool-agnostic, but it is optimized for a modular Markdown environment.

* We recommend using **Obsidian** to manage your library of atoms.
* Clone this repository to your local machine.
* Copy the contents of the `templates/` folder into your Obsidian vault or preferred Markdown editor.

### 2. Define your macro standards

Before documenting specific features, you must define the environment they live in. This prevents you from repeating global rules in every specification.

* Use the `system-persona.md` template to define the third-party services or internal platforms you use (e.g., Stripe, AWS, or an internal Auth service).
* Establish your global security and data standards as **Macro** files.

### 3. Draft your micro atoms

Break down your product requirements into the smallest units of logic.

* Use the `logic-atom.md` template to capture a single decision, such as a field mapping, a specific validation rule, or a button trigger.
* By keeping these "Atoms" separate, you can reuse them across multiple features without duplicating content.

### 4. Assemble a meso module

Catenation is the act of chaining these pieces together.

* Create a new file in your `_meso/` folder using the `integration-module.md` template.
* Instead of rewriting logic, use internal links to reference your **Macro** standards and **Micro** atoms.
* This file acts as the "Assembly Manual" for your feature.

### 5. Run the readiness check

Before handing the specification to a developer or an AI coding assistant, evaluate its structural integrity.

* Review your **Meso** module against the [Readiness score guide](readiness_score.md).
* Assign a score from 1 to 5 in the file metadata.
* Aim for a score of 5 to ensure zero-shot code generation accuracy.

### 6. Generate code

Once your spec reaches a **Readiness score** of 5, provide the catenated output (or the raw YAML from your templates) to your AI coding assistant. Because the context is structured and validated, the resulting code will be technically hardened and aligned with your original intent.

---