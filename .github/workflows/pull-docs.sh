#!/bin/bash

git clone --depth=1 --branch develop https://github.com/PalisadoesFoundation/talawa-api.git

mkdir -p docs/talawa-api-docs

cd talawa-api

npm install --global typedoc
npm install typedoc-plugin-markdown
npm i --save-dev @types/node
npx typedoc --entryPoints src --out talawa-api-docs --plugin typedoc-plugin-markdown --theme markdown --entryPointStrategy expand

python3 .github/workflows/md_mdx_format_adjuster.py --directory talawa-api-docs

cd ..

cp -r talawa-api/talawa-api-docs/* docs/talawa-api-docs/

rm -rf talawa-api

git add .

git commit -m "Updated talawa api docs"

# Pull latest changes from remote repository
git pull --rebase origin develop

git push origin develop
