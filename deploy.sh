yarn build-projects-json
next build
next export
yarn build-seo-files
cp out-files/* out
cp readme.md out
cd out
git add -A
git commit -m 'Auto publish commit'
git push --force
cd ..
