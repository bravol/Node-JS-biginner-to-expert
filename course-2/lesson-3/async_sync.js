const fs = require("fs");
let existFlag = fs.existsSync(process.argv[2]);
console.log(existFlag);
