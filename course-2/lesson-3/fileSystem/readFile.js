const fs = require("fs");

fs.readFile("text.txt", (err, data) => {
  console.log(data.toString());
});
