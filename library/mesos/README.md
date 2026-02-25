# Meso layer catalog

This folder contains the "Blueprints" for functional modules and manifestations. Mesos orchestrate multiple Micro atoms into high-value features and third-party integrations.

| Type | Item Name | Purpose | Status |
| --- | --- | --- | --- |
| **Module** | `form_module` | Multi-field validation and submission orchestration. | `v0.1` |
| **Module** | `smart_data_table_module` | Integrated sorting, filtering, and pagination logic. | `v0.1` |
| **Module** | `visualization_module` | Data-to-visual state transformation logic. | `v0.1` |
| **Module** | `email_editor_module` | Rich-text drafting with HTML/Markdown conversion. | `v0.1` |
| **Module** | `markdown_editor_module` | Pain-text-to-formatting interface logic. | `v0.1` |
| **Manifest** | `authentication_manifest` | Orchestrates login, MFA, and session security flows. | `v0.1` |
| **Manifest** | `notification_manifest` | Coordinates triggers, templates, and delivery channels. | `v0.1` |
| **Integration** | `stripe_payment_link_integration` | Bridge for managing hosted Stripe checkout URLs. | `v0.1` |
| **Integration** | `mcp_integration` | Implements Model Context Protocol for tool-calling. | `v0.1` |
| **Integration** | `agent_integration` | Bridge between logic atoms and LLM orchestration. | `v0.1` |

### Implementation guidelines

The **Meso** layer is the "Assembly" layer. These manifests are responsible for orchestrating the atomic logic units into a functional feature.

* **Atomic catenation:** Mesos must not contain "hard-coded" logic. They should reference existing **Micro** atoms by their unique identifiers.
* **State management:** The meso manifest must define the lifecycle of the module, including initialization, validation states, and final output.
* **Dependency mapping:** Every meso must explicitly list the macros it respects and the micros it requires.
* **Readiness scoring:** A meso module cannot be marked as "Hardened" until it passes a validation check against the current `meso_schema_definition`.
