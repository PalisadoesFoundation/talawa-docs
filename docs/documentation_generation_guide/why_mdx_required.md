---
title: Why MDX Compatibility Script is Necessary
id: why_mdx_compatibility_script
---

# Why MDX Compatibility Script is Necessary

`md_mdx_format_adjuster.py`

When working with **Docusaurus v3**, it’s essential to ensure that Markdown files are compatible with MDX (Markdown with JSX). MDX allows us to integrate React components directly within our markdown, providing greater flexibility and interactivity in our documentation. However, certain characters (`<`, `>`, `{`, `}`) in Markdown files can cause issues when interpreted as JSX syntax, leading to rendering errors.

## Purpose of the Script

The provided Python script addresses this problem by:

- **Escaping Special Characters**: It scans Markdown files and automatically escapes the problematic characters `<`, `>`, `{`, and `}`, ensuring that the files are MDX-compatible.
  
- **Maintaining Readability**: By avoiding double escaping, the script ensures that the Markdown remains clean and readable.

- **Automating the Process**: It can be run on an entire directory of Markdown files, streamlining the process of making large documentation projects MDX-ready.
