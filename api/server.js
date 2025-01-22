require('dotenv').config();
const jsonServer = require('json-server');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router(process.env.DB_ROUTER);
const port = process.env.SERVER_PORT;

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
  console.log('http://localhost:4000/posts');
});

module.exports = server;
