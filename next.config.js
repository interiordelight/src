const projects = require('./projects-json/index.json');

const pathMap = {
  '/': { page: '/' },
  '/services': { page: '/services' },
  '/contact': { page: '/contact' },
  '/terms-and-conditions': { page: '/terms-and-conditions' },
  '/cookie-policy': { page: '/cookie-policy' },
  '/portfolio': { page: '/portfolio' },
};

projects.forEach((project) => {
  const { slug } = project;
  pathMap[`/portfolio/${slug}`] = { page: '/project', query: { slug } };
});

module.exports = {
  exportPathMap: () => pathMap,
};
