const fs = require("fs");

const path = process.argv[2];
let content = fs.readdirSync(path);
console.log(content);
