const fs = require("fs");

//blocing synronous way
const textIn = fs.readFileSync("input.txt", "utf-8");
console.log(textIn);

const textOut = `Here is the text: ${textIn} and this is the end of the text.\n Created o ${Date.now()}`;

fs.writeFileSync("output.txt", textOut); // synchronous
console.log(textOut);
//non blocking asyncronous way
fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("the data is", data);
  fs.writeFile("output.txt", data, (err) => {
    if (err) throw err;
    console.log("the data is written to file");
  });
});
