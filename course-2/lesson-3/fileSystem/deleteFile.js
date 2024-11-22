const fs = require("fs");
fs.unlink("./new.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("success");
  }
});
