# Catenator readiness score

The **Readiness score** is a 1–5 metric used to objectively measure the technical maturity of a specification. In the **Catenator** framework, we move away from the subjective feeling of a document being "done" and toward a data-backed validation of logic.

### Why quantify readiness?

When using AI to generate code, the quality of the output is a direct reflection of the structural integrity of the input. A score of 5 ensures that the AI has enough "logic density" to generate production-ready code with zero-shot accuracy.

### The scoring levels

| Score | Status | Definition | AI generation risk |
| --- | --- | --- | --- |
| **1** | **Draft** | High-level goals defined. No micro atoms present. | **High:** Extreme hallucination. |
| **2** | **Discovery** | Systems and personas identified (macro). Logic is still conversational. | **High:** AI will guess the data structure. |
| **3** | **Structured** | Meso modules defined. Happy-path field mappings are complete. | **Medium:** AI will generate the core but fail on edge cases. |
| **4** | **Hardened** | Edge cases, error states, and empty states captured as micro atoms. | **Low:** Reliable code; requires minor human audit. |
| **5** | **Code-ready** | Validated against `schema.yaml`. All triggers and mappings are bi-directional. | **Minimal:** Zero-shot production-ready code. |

### How the score is calculated

In the current version of the framework, the score is assigned based on the presence of specific **Catenator** components:

1. **Macro alignment (1 point):** Are the system personas and global security standards linked?
2. **Logic density (1 point):** Are there at least three micro atoms per meso module?
3. **Edge case coverage (1 point):** Are empty states and error triggers explicitly defined?
4. **Data mapping (1 point):** Are all source-to-target fields mapped in a structured table or YAML object?
5. **Schema validation (1 point):** Does the document pass the `schema.yaml` structural linting?

### Future automation

We are currently developing a **Catenator validator** that will automatically scan your Markdown files, count the presence of specific atoms, and calculate this score programmatically within your metadata.