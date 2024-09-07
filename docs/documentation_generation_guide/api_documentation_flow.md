---
title: API Documentation Flow
id: api_documentation_flow
---

# API Documentation Flow

This section explains the process of generating documentation for Talawa API and updating the Talawa Docs website.

- ![DocsWorkFlow](/img/docs_workflow.png)

## Steps:

1. Clone the `talawa-api` repository into the `talawa-docs` directory.
   ```bash
   git clone --depth=1 --branch develop https://github.com/PalisadoesFoundation/talawa-api.git
   ```

2. Create a new directory inside `talawa-docs` for API documentation.
   ```bash
   mkdir -p docs/talawa-api-docs
   ```

3. Enter the cloned `talawa-api` repository.
   ```bash
   cd talawa-api
   ```

4. Generate documentation using `Typedoc` inside the `talawa-api-docs` directory.
   ```bash
   npm install --global typedoc
   npm install typedoc-plugin-markdown
   npx typedoc --entryPoints src --out talawa-api-docs --plugin typedoc-plugin-markdown --entryPointStrategy expand
   ```

5. Recursively copy the generated documentation to the `docs/talawa-api-docs` folder.
   ```bash
   cp -r talawa-api/talawa-api-docs/* docs/talawa-api-docs/
   ```

6. Clean up the cloned repository and push the updated documentation.
   ```bash
   rm -rf talawa-api
   git add .
   git commit -m "Updated talawa api docs"
   git pull --rebase origin develop
   git push -u origin develop
   ```

