git add -A
git commit -m 'Automatic predeployment commit'
npm version patch
git push
git push --tags
yarn build-projects-json
next build
next export
yarn build-seo-files
cp -R out-files/. out
cp readme.md out
cd out
git init
git remote add master https://github.com/interiordelight/interiordelight.github.io.git
git add -A
git commit -m 'Automatic deployment commit'
git push master --force
cd ..
