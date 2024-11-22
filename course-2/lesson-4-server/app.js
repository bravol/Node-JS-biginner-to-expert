const http = require("http");

const server = http.createServer((req, res) => {
  // //   console.log(req.headers);
  // //   console.log(req.url);
  //   console.log(req.method);
  //   console.log("server is running...");
  res.setHeader("Content-Type", "text/html");
  res.write("<html><head><title>Node Server</title></head>");
  res.write("<body><h1>Server running...</h1>");
  res.write("<h3>Hi</h3>");
  res.write("</body></html>");
  console.log("server is running...");

  res.end();
});

server.listen(3000);
