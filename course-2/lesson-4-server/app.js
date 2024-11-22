const http = require("http");

const product = {
  pcode: 1001,
  product: "Apple",
};

const server = http.createServer((req, res) => {
  //   console.log(req.headers);
  //   console.log(req.url);
  //   console.log(req.method);
  //   console.log("server is running...");
  let url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Node Server</title></head>");
    res.write("<body><h1>Home Page</h1>");
    res.write("<h3>" + req.url + "</h3>");
    res.write("</body></html>");
    return res.end();
  } else if (url === "/data") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(product));
    return res.end();
  } else if (url === "/getdate") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({ now: new Date() }));
    return res.end();
  }
});

server.listen(3000);
