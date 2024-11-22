const http = require("http");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  let url = req.url;
  let method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Data Form</title></head>");
    res.write('<body><form action="/data" method="POST">');
    res.write('Code:<input type="text" name="code"/>');
    res.write('Product:<input type="text" name="product"/>');
    res.write("<button>Submit</button>");
    res.write("<h3>" + req.url + "</h3>");
    res.write("</body>");
    return res.end();
  } else if (url === "/data" && method === "POST") {
    const data = [];
    let s = "";

    req.on("data", (chunk) => {
      console.log(chunk);
      data.push(chunk);
    });
    req.on("end", () => {
      s = Buffer.concat(data).toString();
      console.log(s);
    });

    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Data Form</title></head>");

    res.write("<h3>" + req.url + "</h3>");
    res.write("</body>");
    return res.end();
  }
});
server.listen(3000);
