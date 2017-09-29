const { readdirSync, writeFileSync } = require('fs');
const pug = require('pug');

const dstPath = `${__dirname}/../out`;

writeFileSync(
  `${dstPath}/robots.txt`,
  'User-agent: *\nhttp://www.interiordelight.ro/sitemap.xml'
);

const sitemapParams = {
  root: 'http://www.interiordelight.ro',
  now: (new Date()).toJSON().slice(0, 10),
  projects: readdirSync(`${__dirname}/../projects-json`).map(fileName => fileName.slice(0, -5))
};

writeFileSync(
  `${dstPath}/sitemap.xml`,
  pug.renderFile(`${__dirname}/sitemap.pug`, sitemapParams)
);

