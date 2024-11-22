const fs = require("fs");
fs.rename("text.txt", "./new.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success");
  }
});

// renaming or relocatinf or moving the file
