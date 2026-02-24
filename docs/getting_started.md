<p align="left">
 <a href="../README.md"> <img src="../logo.png" alt="Catenator by Engaged Inquiry" width="100%"></a>
</p>


# Getting started

This guide walks you through the initial setup of the Catenator framework by Engaged Inquiry. Following these steps ensures that your product documentation is structural, modular, and ready for high-fidelity ai code generation.

## 1. Set up environment
The framework is tool-agnostic. We recommend using **VS Code** with a YAML extension for real-time schema validation.
- Clone the repository.
- Structure your logic library into `01_macros/`, `02_mesos/`, and `03_micros/`.

## 2. Create a Caten
Every logic unit (a "Caten") is a folder containing versioned YAML files (e.g., `v0.1.yaml`).
- **Define the Metadata:** Start every file with an `id`, `version`, and `intent`.
- **Describe the Logic:** Use structured keys rather than paragraphs.

## 3. Assemble a Manifest
To build a feature, create a Meso manifest that lists the specific versions of the Atoms you wish to "chain" together.