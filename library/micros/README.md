# Micro atom catalog

This folder contains the smallest, reusable units of objective logic in the **Catenator** ecosystem. These atoms are the fundamental building blocks used to assemble complex product specifications. Every atom follows the standardized `logic-atom.md` template to ensure machine-readability and compatibility with system prompt caching.

## Logic atoms index

| Type | Item Name | Purpose | Status |
| --- | --- | --- | --- |
| **Validator** | `required_validator` | Checks for the presence of a value. | `v0.1` |
| **Validator** | `email_regex_validator` | Pattern matching for email integrity. | `v0.1` |
| **Validator** | `password_entropy_validator` | Logic for complexity and strength auditing. | `v0.1` |
| **Filter** | `mime_type_filter` | Removes or blocks unauthorized file extensions. | `v0.1` |
| **Converter** | `iso_date_converter` | Date-to-string transformation with format arguments. | `v0.1` |
| **Converter** | `currency_unit_converter` | Handles decimal/unit shifts (e.g., cents to dollars). | `v0.1` |
| **Formatter** | `phone_number_formatter` | Rewrites raw digits into standard international formats. | `v0.1` |
| **Sorter** | `alphanumeric_asc_sorter` | Arranges strings or numbers in ascending order. | `v0.1` |
| **Sorter** | `chronological_sorter` | Arranges entries based on date and time stamps. | `v0.1` |


## Implementation guidelines

To maintain the integrity of the **Open standard**, all new micro-atoms must satisfy the following requirements:

1. **Single responsibility:** Each atom must perform exactly one logical task.
2. **Naming convention:** Files must use snake_case and include the appropriate suffix (e.g., `_validator`, `_converter`).
3. **Schema compliance:** Every atom must be valid against the `micro_schema_definition` located in the macros folder.
