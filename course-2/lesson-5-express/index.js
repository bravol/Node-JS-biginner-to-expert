const express = require("express");
// const fs = require("fs");
const users = require("./users");
const path = require("path");
const app = express();
const PORT = 3000;
// const data = fs.readFileSync("./index.html");
app.use(express.urlencoded()); //middleware to access data
// middleware is just function which is automatically called in the middle of every request and response. It receives a req and res objects before objects handled by the application/server
app.use("/users", users);
// GET REQUEST
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

//POST REQUEST
app.post("/blog", (req, res) => {
  console.log(req.body);
  res.send(req.method + "request received.");
});

app.get("/product", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html><head><title>product</title></head></html>");
  res.write("<body><h1>This is the product</h1></body>");
  return res.end();
});

app.listen(PORT, () => {
  console.log("server is running....");
});

// res.send() => responds and automatically closes the connection
// res.write()=> sends response but need to close the connection maually usning res.end()
