<p align="left">
 <a href="../README.md"> <img src="../logo.png" alt="Catenator by Engaged Inquiry" width="100%"></a>
</p>

# Architecture

This document defines the structural rules and validation schemas for the **Catenator** framework, developed by Engaged Inquiry.

## The logic of the schema
The Catenator schema ensures that every logic unit is addressable, versioned, and descriptively dense enough for both system prompt caching and ml indexing.

## Core schema (v0.1)

```yaml
# Catenator Structural Schema v0.1
# This schema validates the integrity of Macro, Meso, and Micro catens.

$schema: "http://json-schema.org/draft-07/schema#"
title: CatenatorLogicUnit
type: object
required: [metadata, logic]

properties:
  metadata:
    type: object
    required: [id, version, layer, intent, readiness_score]
    properties:
      id:
        type: string
        description: "Unique kebab-case identifier (e.g., auth-validator)."
      version:
        type: string
        pattern: "^v?\\d+\\.\\d+(\\.\\d+)?$"
        description: "Semantic versioning of the logic unit."
      layer:
        type: string
        enum: [macro, meso, micro]
        description: "The architectural depth of the caten."
      intent:
        type: string
        minLength: 10
        description: "Natural language description for ML indexing/RAG."
      tags:
        type: array
        items: { type: string }
      readiness_score:
        type: integer
        minimum: 1
        maximum: 5
      anchors:
        type: array
        items: { type: string }
        description: "References to global Macro standards."

  logic:
    type: object
    description: "The primary technical payload of the caten."
    properties:
      definitions:
        type: object
        description: "Static parameters or regex patterns."
      triggers:
        type: array
        items: 
          type: object
          required: [on, action]
          properties:
            on: { type: string }
            action: { type: string }
      links:
        type: array
        items:
          type: object
          required: [ref]
          properties:
            ref: { type: string, description: "Pointer to another caten/version." }
            alias: { type: string }

  exceptions:
    type: array
    items:
      type: object
      required: [condition, response]
      properties:
        condition: { type: string }
        response: { type: string }

```

---

## How to implement this in your project

To turn your repository into a self-validating environment, follow these steps:

### 1. Save the schema

Place the code above into a file named `schema.yaml` in your root directory.

### 2. Configure VS Code (Automatic Linting)

Create a folder named `.vscode` in your root and add a `settings.json` file. This tells VS Code to check every `.yaml` file against your schema:

```json
{
  "yaml.schemas": {
    "./schema.yaml": ["/01_macros/**/*.yaml", "/02_mesos/**/*.yaml", "/03_micros/**/*.yaml"]
  }
}

```

### 3. The "Assembly" check

When you create a **Meso** manifest, the schema will now flag an error if you forget to include the `readiness_score` or if your `version` doesn't follow the correct format. This is what guarantees that the "Chain" never breaks before it reaches the AI.

## Architectural impact

By having this schema in your repo, you have moved from a "set of instructions" to a **validated logic system**.

* **For Caching:** The AI can now be told: "Treat any file passing the schema as a verified truth."
* **For ML Indexing:** The `intent` and `tags` fields are now mandatory, ensuring your vector database always has the context it needs to find the right logic.
