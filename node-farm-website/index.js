const fs = require("fs");
const http = require("http");
const url = require("url");

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

//replace template function
const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%QUANTITY%}/g, product.nutrients);
  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  return output;
};

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const card_html = dataObj
      .map((product) => replaceTemplate(template_card, product))
      .join("");
    const output = template_overview.replace("{%PRODUCT_CARDS%}", card_html);
    res.end(output);
    
  } else if (pathName === "/product") {
    res.end("This is product");
  } else if (pathName === "/api") {
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
