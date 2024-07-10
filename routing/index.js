const url = require("url");
const http = require("http");

const server = http.createServer((req, res) => {
  req.url;
  res.end("Hello from the server");
});
