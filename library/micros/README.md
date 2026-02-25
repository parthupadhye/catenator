# Micro-Atom Catalog
This folder contains the smallest, reusable units of objective logic. All atoms here follow the standardized `logic-atom.md` template. Examples of specific implementations can be found in the sub-folders for each atom.

| Type | Item Name | Purpose | Status |
| --- | --- | --- | --- |
| **Validator** | `required_validator` | Checks for the presence of a value. | `v0.1` |
| **Validator** | `email_regex_validator` | Pattern matching for email integrity. | `v0.1` |
| **Validator** | `password_entropy_validator` | Logic for complexity and strength auditing. | `v0.1` |
| **Filter** | `mime_type_filter` | Removes or blocks unauthorized file extensions. | `v0.1` |
| **Converter** | `iso_date_converter` | Date-to-string transformation with format arguments. | `v0.1` |
| **Converter** | `currency_unit_converter` | Handles decimal/unit shifts (e.g., cents to dollars). | `v0.1` |
| **Formatter** | `phone_number_formatter` | Rewrites raw digits into standard international formats. | `v0.1` |
| **Sorter** | `alphanumeric_asc_sorter` | Arranges strings/numbers in ascending order. | `v0.1` |
| **Sorter** | `chronological_sorter` | Arranges entries based on date/time stamps. | `v0.1` |

