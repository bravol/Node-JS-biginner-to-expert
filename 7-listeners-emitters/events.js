const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new Sales();
// Event listener
myEmitter.on("newSale", () => {
  console.log("that was a new sale");
});
myEmitter.on("newSale", () => {
  console.log("Customer name Brian");
});

myEmitter.on("newSale", (stack) => {
  console.log("there are " + stack + " left in stack");
});

//objects that emits events
myEmitter.emit("newSale", 10);

///////////////////////////////////////////////////////////////
const server = http.createServer();
server.on("request", (req, res) => {
  console.log("request received");
  console.log(req.url);
  res.end("request was received");
});
server.on("request", (req, res) => {
  console.log("Another request");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(5000, "127.0.0.1", () => {
  console.log("waiting for request....");
});
