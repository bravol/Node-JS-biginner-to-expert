const obj = {
  a: "hello",
  b: 6,
};

console.log(obj.a);
obj.a = "new value";
obj.b = obj.b + 10;

console.log(obj.b);

// global objects
// console.log(module);
console.log(__filename);
console.log(__dirname);
