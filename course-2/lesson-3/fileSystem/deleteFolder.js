const fs = require("fs");

fs.rm("./newFolder", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Removed");
  }
});
