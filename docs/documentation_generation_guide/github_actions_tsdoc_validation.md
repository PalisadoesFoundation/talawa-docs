---
title: GitHub Actions for TSDoc Validation
id: github_actions_tsdoc_validation
---

# GitHub Actions for TSDoc Validation

We have implemented a **GitHub Action** to validate TSDoc comments during commits or pull requests. This ensures that new or modified code adheres to documentation standards.

## Steps:

1. A custom script or plugin checks the deltas in the pull requests or commits.
2. The script is integrated into the linting process to target modified code segments.
3. The script ensures that the modified or newly added code includes valid TSDoc comments.

## Example Script

```bash
const fs = require('fs');
const path = require('path');

function findTsxFiles(dir) {
    // Logic to find files and check for TSDoc comments
}

function containsTsDocComment(filePath) {
    // Logic to validate TSDoc comments
}

run();
