#!/bin/bash

git clone --depth=1 --branch develop https://github.com/adi790uu/talawa-admin.git

mkdir -p docs/talawa-admin-docs

cd talawa-admin

npm install --global typedoc
npm install typedoc-plugin-markdown
npm install --save-dev @types/node
npx typedoc --entryPoints src/components src/screens --out talawa-admin-docs --plugin typedoc-plugin-markdown --entryPointStrategy expand --exclude "**/*.test.ts" --exclude "**/*.css"

python3 .github/workflows/md_mdx_format_adjuster.py --directory talawa-admin-docs

cd ..

cp -r talawa-admin/talawa-admin-docs/* docs/talawa-admin-docs/

rm -rf talawa-admin

git add .

git commit -m "Updated talawa admin docs"

git pull --rebase origin develop
git push -u origin develop
