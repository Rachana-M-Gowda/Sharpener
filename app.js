const http = require('http');
const routes=require('./routes')

routes.testFunction();
const server = http.createServer(routes.handler);

server.listen(3001, () => {
  console.log("Server is running on http://localhost:3000");
});
