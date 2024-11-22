// file handling features, creating, editing, reading,deleting files
const fs = require("fs");

// console.log(fs);

fs.stat("./package.json", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
