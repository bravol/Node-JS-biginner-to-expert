// console.log(process);
// console.log(process.argv);

process.on("beforeExit", () => {
  console.log("Before Exit fired!");
});
process.on("exit", () => {
  console.log("Exit Event fired!");
});
console.log("process executed!");
