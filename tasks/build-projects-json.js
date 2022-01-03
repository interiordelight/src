const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const { readdirSync, readFileSync, writeFileSync } = require('fs');
const fm = require('front-matter');
const marked = require('marked');
const slugify = require('underscore.string/slugify');

const allProjects = [];
const root = `${__dirname}/..`;
const srcPath = `${root}/projects-md`;
const dstPath = `${root}/projects-json`;

marked.setOptions({ smartypants: true });
const renderer = new marked.Renderer();

const buildImageRenderer = (slug) => (href, _title, text) => {
  const prefix = `${slug}-${slugify(text)}`;
  const thumbnailPrefix = `/static/pics/t/${prefix}`;
  return (
    '<div class="pic">' +
    '<img' +
    ' class="lazyload image"' +
    ` alt="${text}" title="${text}"` +
    ` src="${thumbnailPrefix}-20x20.jpg"` +
    ' data-sizes="auto"' +
    ` data-srcset="${thumbnailPrefix}-230x230.jpg 230w, ${thumbnailPrefix}-460x460.jpg 460w"` +
    ` data-src="${thumbnailPrefix}-230x230.jpg"` +
    // by convention, our href holds the original file extension
    ` data-gallery-item-src="${prefix}.${href}"` +
    '>' +
    '</div>'
  );
};

const mdPicRegex = /!\[(.+)\]\((.+)\)/g;

const buildPictureGallery = (projectSlug, projectBodyMarkdown) => {
  const items = [];
  let matches;
  // eslint-disable-next-line no-cond-assign
  while ((matches = mdPicRegex.exec(projectBodyMarkdown))) {
    items.push(`${projectSlug}-${slugify(matches[1])}.${matches[2]}`);
  }
  return items;
};

// eslint-disable-next-line no-console
console.log('Building project json files...');

rimraf.sync(dstPath);
mkdirp.sync(dstPath);

readdirSync(srcPath)
  .reverse()
  .forEach((fileName) => {
    const content = fm(readFileSync(`${srcPath}/${fileName}`, 'utf-8'));
    const index = parseInt(fileName.substr(0, 2));
    const slug = fileName.slice(3, -3);
    const { title, color, description } = content.attributes;

    renderer.image = buildImageRenderer(slug);

    const gallery = buildPictureGallery(slug, content.body);

    const body = marked(content.body.replace(/:::pics/gim, '<div class="pics">').replace(/pics:::/gim, '</div>'), {
      renderer,
    });

    writeFileSync(
      `${dstPath}/${slug}.json`,
      JSON.stringify({
        description,
        body,
        gallery,
      })
    );

    allProjects.push({ index, slug, title, color });
  });

for (let i = 0, len = allProjects.length; i < len; i++) {
  const currentProject = allProjects[i];
  if (i > 0) {
    const { slug, title } = allProjects[i - 1];
    currentProject.prevProject = { slug, title };
  }
  if (i < len - 1) {
    const { slug, title } = allProjects[i + 1];
    currentProject.nextProject = { slug, title };
  }
}

writeFileSync(`${dstPath}/index.json`, JSON.stringify(allProjects));
