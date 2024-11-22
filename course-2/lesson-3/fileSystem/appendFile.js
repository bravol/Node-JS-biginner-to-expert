const fs = require("fs");

const content = "\nNew Data";
//adding data to file without deleteing the exisitng one

fs.appendFile("text.txt", content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("appended successfully");
  }
});
