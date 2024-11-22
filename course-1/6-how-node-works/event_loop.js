const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 1;

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log(Date.now() - start, "password encrypted");
});
crypto.pbkdf2("password", "hello", 100000, 1024, "sha512", () => {
  console.log(Date.now() - start, "password encrypted");
});

setTimeout(() => console.log("Timer 1 finshed"), 0);
setImmediate(() => console.log("Immediate one is finshed"));
fs.readFile("test.txt", "utf-8", () => {
  console.log("I/O finished");
  console.log("------------------------------");
  setTimeout(() => console.log("Timer 2 finshed"), 0);
  setTimeout(() => console.log("Timer 3 finshed"), 3000);
  setImmediate(() => console.log("Immediate two is finshed"));

  process.nextTick(() => console.log("process.nextTick"));

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
  crypto.pbkdf2("password", "hello", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
});

console.log("hello from top level code"); //executed first
