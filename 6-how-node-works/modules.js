// console.log(arguments);
// console.log(require("module").wrapper);

//modlue.exports
const C = require("./modules/test-module-1");

const calculator1 = new C();
console.log(calculator1.add(3, 5));
// exports
// const calc2 = require("./modules/test-module-2");
// console.log(calc2.multiply(2, 3));
//descturcture
const { add, multiply } = require("./modules/test-module-2");
console.log(multiply(3, 3));
console.log(add(3, 3));

//caching
require("./modules/test-module-3")();
require("./modules/test-module-3")();
require("./modules/test-module-3")();
