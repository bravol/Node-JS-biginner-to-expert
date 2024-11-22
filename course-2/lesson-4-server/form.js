const http = require("http");
const qs = require("querystring");
const fs = require("fs");
const server = http.createServer((req, res) => {
  let url = req.url;
  let method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Data Form</title></head>");
    res.write('<body><form action="/data" method="POST">');
    res.write('<input type="text" name="code"/>');
    res.write('<input type="text" name="product"/>');
    res.write("<button>Submit</button>");
    res.write("<h3>" + req.url + "</h3>");
    res.write("</body></html>");
    return res.end();
  } else if (url === "/data" && method === "POST") {
    const data = [];
    let s = "";
    req.on("data", (chunk) => {
      data.push(chunk);
    });
    req.on("end", () => {
      s = Buffer.concat(data).toString();
      const obj = qs.parse(s);
      const str = obj.code + "," + obj.product;
      fs.writeFileSync("data.txt", str);
    });

    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Data Form</title></head>");
    res.write("<body>");
    res.write("<h3>" + req.url + "</h3>");
    res.write("</body></html>");
    return res.end();
  }
});

server.listen(3000);
