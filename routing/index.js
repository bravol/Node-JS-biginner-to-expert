const url = require("url");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("this is over view page");
  } else if (pathName === "/product") {
    res.end("this is product page");
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
      "my-own-header": "hellow-world",
    });
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
