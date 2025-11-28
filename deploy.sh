#!/bin/bash
set -e

npm run build

git add dist -f
git commit -m "Deploy: Update dist folder for GitHub Pages" || true

git subtree push --prefix dist origin gh-pages
