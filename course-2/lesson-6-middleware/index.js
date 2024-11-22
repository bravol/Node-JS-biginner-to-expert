const express = require("express");
const app = express();

// to create a middleware- we just write a function which will receive 3 arguments(req,res,next())
const myMiddleWare = (req, res, next) => {
  console.log("Middleware called!");
  next();
};
// ensure the middleware is called automatically
app.use(myMiddleWare);

app.get("/", (req, res) => {
  console.log("Response sent");
  res.send("Response");
});

app.listen(3000, () => {
  console.log("Server is Running....");
});
