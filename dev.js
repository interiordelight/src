const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/portfolio/:projectSlug', (req, res) => {
    app.render(req, res, '/project', { slug: req.params.projectSlug });
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(3000, (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log('> Listening on http://localhost:3000');
  });
}).catch((e) => {
  // eslint-disable-next-line no-console
  console.error(e.stack);
  process.exit(1);
});
