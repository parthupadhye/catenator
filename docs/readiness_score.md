<p align="left">
 <a href="../README.md"> <img src="../logo.png" alt="Catenator by Engaged Inquiry" width="100%"></a>
</p>

# Readiness score

The **Catenator** readiness score is a 1–5 metric used to objectively measure the technical maturity of a specification. Created by Engaged Inquiry, this metric moves away from the subjective feeling of a document being "done" and toward a data-backed validation of logic.

## Why quantify readiness?

When using AI to generate code, the quality of the output is a direct reflection of the structural integrity of the input. A score of 5 ensures that the AI has enough "logic density" to generate production-ready code with zero-shot accuracy.

## Why YAML for scoring?

YAML allows for automated validation. A file can be programmatically checked to ensure all required logic keys are present before the ai ever sees it.

## The levels

| Score | Status | Definition |
| --- | --- | --- |
| **1** | **Draft** | Folder initialized with a `v0.1.yaml`. Logic is incomplete. |
| **2** | **Discovery** | Metadata (intent, tags) populated. Anchored to a macro standard. |
| **3** | **Structured** | Meso manifest defined. All micro-links resolved to existing atoms. |
| **4** | **Hardened** | Edge cases, error states, and empty states captured in the yaml. |
| **5** | **System-ready** | Passes `schema.yaml` validation. Ready for zero-shot generation. |

