---
title: Admin Documentation Flow
id: admin_documentation_flow
---

# Admin Documentation Flow

This section explains the process of generating documentation for Talawa Admin and updating the Talawa Docs website.

- ![DocsWorkFlow](/img/docs_workflow.png)

## Steps:

1. Clone the `talawa-admin` repository into the `talawa-docs` directory.
   ```bash
   git clone --depth=1 --branch develop https://github.com/adi790uu/talawa-admin.git
   ```

2. Create a new directory inside `talawa-docs` for admin documentation.
   ```bash
   mkdir -p docs/talawa-admin-docs
   ```

3. Enter the cloned `talawa-admin` repository.
   ```bash
   cd talawa-admin
   ```

4. Generate documentation using `Typedoc` inside the `talawa-admin-docs` directory.
   ```bash
   npm install --global typedoc
   npm install typedoc-plugin-markdown
   npx typedoc --entryPoints src/components src/screens --out talawa-admin-docs --plugin typedoc-plugin-markdown --entryPointStrategy expand
   ```

5. Recursively copy the generated documentation to the `docs/talawa-admin-docs` folder.
   ```bash
   cp -r talawa-admin/talawa-admin-docs/* docs/talawa-admin-docs/
   ```

6. Clean up the cloned repository and push the updated documentation.
   ```bash
   rm -rf talawa-admin
   git add .
   git commit -m "Updated talawa admin docs"
   git pull --rebase origin develop
   git push -u origin develop
   ```

