# Macro layer catalog

This folder contains the "Constitutional" laws of the **Catenator** library. These macros define the global governance, schemas, and non-negotiable standards that all lower-level components must respect.

| Type | Item Name | Purpose | Status |
| --- | --- | --- | --- |
| **Governance** | `system_persona_macro` | Defines the AI's role, tone, and decision-making framework. | `v0.1` |
| **Governance** | `security_protocol_macro` | Global rules for encryption, sanitization, and PII handling. | `v0.1` |
| **Governance** | `brand_identity_macro` | Sets the tone of voice, vocabulary, and visual design tokens. | `v0.1` |
| **Governance** | `readiness_standard_macro` | Criteria for "hardened" vs "draft" logic components. | `v0.1` |
| **Standard** | `data_integrity_macro` | Defines global standards for timestamps, IDs, and null handling. | `v0.1` |
| **Standard** | `localization_policy_macro` | Governing rules for multi-language and regional formatting. | `v0.1` |
| **Schema** | `meso_schema_definition` | The `schema.yaml` that defines mandatory keys for all Mesos. | `Priority` |
| **Schema** | `micro_schema_definition` | The structural requirements for input/output in logic-atoms. | `Priority` |

Here are the implementation guidelines for the **Macro** and **Meso** layers. These ensure that your **Open standard** remains structurally sound as it scales.

## Implementation guidelines

The **Macro** layer serves as the "System constitution." Because these files are often cached in an ai's long-term memory, they must be high-density and strictly formatted.

* **Global scope:** Macros must only contain rules that apply across the entire library. Specific logic belongs in the meso or micro layers.
* **Immutability:** Once a macro reaches `v1.0`, changes should be handled through versioning rather than overwriting to prevent breaking downstream catenations.
* **Machine-readability:** Use strict yaml syntax. Avoid verbose prose; use key-value pairs that an ai can parse as instructions.
* **Documentation:** Every macro must include an `intent` field and a `conflict_resolution` key to guide the ai when two rules appear to overlap.
