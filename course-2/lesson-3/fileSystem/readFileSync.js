const fs = require("fs");

let content = fs.readFileSync("../package.json");
// synchronous means it's going to stop the execution and awit for the job to finish

// fs.writeFile
fs.writeFile("./text.txt", content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file written successfully");
  }
});
