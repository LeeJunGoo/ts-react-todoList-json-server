require('dotenv').config();
const jsonServer = require('json-server');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');
const port = 4000;

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    '/api/*': '/$1', // /api/posts → /posts로 재작성(mapping)
    '/blog/:resource/:id/show': '/:resource/:id',
  })
);
server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running');
});

module.exports = server;
