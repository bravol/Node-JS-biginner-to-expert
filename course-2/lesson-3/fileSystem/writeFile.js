// fs.writeFile(filePath,content, option,()=>{})
const fs = require("fs");
fs.writeFile("text.txt", "New content Written!", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written successfully");
  }
});
