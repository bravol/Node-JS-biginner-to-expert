const fs = require("fs");
const http = require("http");
const url = require("url");
const replaceTemplate = require("./modules/replace_template");

// Read data synchronously at the beginning
const template_overview = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  "utf-8"
);
const template_card = fs.readFileSync(
  `${__dirname}/templates/card.html`,
  "utf-8"
);
const template_product = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  "utf-8"
);
const data = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  // const pathname = req.url;
  const { query, pathname } = url.parse(req.url, true);

  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const card_html = dataObj
      .map((product) => replaceTemplate(template_card, product))
      .join("");
    const output = template_overview.replace("{%PRODUCT_CARDS%}", card_html);
    res.end(output);
  } else if (pathname === "/product") {
    // console.log(query);
    const product = dataObj[query.id];
    res.writeHead(200, { "Content-Type": "text/html" });
    const output = replaceTemplate(template_product, product);
    res.end(output);
  } else if (pathname === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(dataObj));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is running on port 8000");
});
