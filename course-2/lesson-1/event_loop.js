//  Javascript is a single threaded language.
//  it will execute the code line by line, one after the other. it will not execute the code simultaneously
//  the lines are sent individually one after the other to the stack/queue
console.log("line one");
console.log("line two");
// asyncronous process
setTimeout(() => {
  console.log("line three");
}, 500);
console.log("line four");
