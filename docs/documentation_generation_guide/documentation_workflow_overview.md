---
title: Documentation Workflow Overview
id: documentation_workflow
---

# Documentation Workflow Overview

This guide describes how documentation is generated, copied, and rendered for Talawa Admin and API using GitHub Actions and Typedoc.

## Overview

The documentation is generated from TSDoc comments and is hosted on the Talawa Docs website using **Docusaurus**. The workflow is automated via GitHub Actions and involves the following key steps:

- Cloning the Talawa Admin and API repositories.
- Generating documentation using `Typedoc`.
- Recursively copying the documentation to the appropriate directories.
- Rendering the documentation to the Talawa Docs website.
