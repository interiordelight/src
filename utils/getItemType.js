const projectRegexp = /^\/portfolio\/.+/;

export default url => `http://schema.org/${projectRegexp.test(url) ? 'Article' : 'WebSite'}`;
