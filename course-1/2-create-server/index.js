///erver
const http = require("http");

const server = http.createServer((req, res) => {
  res.end(" Hello World\n from the server!");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("a server has been started o port 3000");
});
