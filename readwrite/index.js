const fs = require("fs");

const textIn = fs.readFileSync("input.txt", "utf-8");
console.log(textIn);

const textOut = `Here is the text: ${textIn} and this is the end of the text.\n Created o ${Date.now()}`;
console.log(textOut);

fs.writeFileSync("output.txt", textOut); // synchronous