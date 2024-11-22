const fs = require("fs");

fs.copyFile("./text.txt", "./new.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully coppied!");
  }
});
