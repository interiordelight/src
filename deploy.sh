yarn build-projects-json
next build
next export
node tasks/build-seo-files.js
touch out/.nojekyll
echo 'www.interiordelight.ro' > out/CNAME
cd out
git add -A
git commit -m 'Auto publish commit'
git push --force
cd ..
