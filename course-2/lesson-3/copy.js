const fs = require("fs");

const source = process.argv[2];
const destination = process.argv[3];

fs.copyFile(source, destination, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("created");
  }
});
// node index.js ./index.js ../copy.js
