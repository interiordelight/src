const { readdirSync, writeFileSync } = require('fs');
const pug = require('pug');

const dstPath = `${__dirname}/../out`;
const domainUrl = 'https://interiordelight.cc';

writeFileSync(`${dstPath}/robots.txt`, `User-agent: *\n${domainUrl}/sitemap.xml`);

const sitemapParams = {
  root: domainUrl,
  now: new Date().toJSON().slice(0, 10),
  projects: readdirSync(`${__dirname}/../projects-json`).map(fileName => fileName.slice(0, -5))
};

writeFileSync(`${dstPath}/sitemap.xml`, pug.renderFile(`${__dirname}/sitemap.pug`, sitemapParams));
