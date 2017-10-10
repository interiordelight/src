yarn build-projects-json
next build
next export
node tasks/build-seo-files.js
cp out-files/manifest.json out
cp out-files/CNAME out
cp out-files/.nojekyll out
cd out
git add -A
git commit -m 'Auto publish commit'
git push --force
cd ..
