const fs = require("fs");

fs.readdir("../nodel_modules", (err, data) => {
  console.log(data);
});

const dirPath = process.argv[2];

fs.readdir(dirPath, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
