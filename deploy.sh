yarn build-projects-json
next build
next export
yarn build-seo-files
cp -R out-files/. out
cp readme.md out
cd out
git init
git remote add origin git@github.com:interiordelight/interiordelight.github.io.git
git add -A
git commit -m 'Auto publish commit'
git push --force --set-upstream origin master
cd ..
