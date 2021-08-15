require('dotenv').config();
const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const { PORT = 3000, NODE_ENV, API_URL } = process.env;
const dev = NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  if (dev) {
    server.use(
      '/client',
      createProxyMiddleware({
        target: API_URL,
        pathRewrite: {
          '^': '',
        },
        changeOrigin: true,
      })
    );
  }

  server.all('*', (req, res) => handle(req, res));

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
