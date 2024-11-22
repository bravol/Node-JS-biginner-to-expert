// setting timeout.
// setTimeout(() => {
//   console.log("time out!");
// }, 3000);
// console.log("timeout statrted");

//// CLEAR  TIMEOUT
// firstTimer = setTimeout(() => {
//   console.log("time out!");
// }, 3000);

// const stopTimer = () => {
//   clearTimeout(firstTimer);
//   console.log("Timer cleared!");
// };

console.log("timeout started");

// stopTimer();

// another timer based set Interval()
// let i = 1;
// function startCounter() {
//   setInterval(() => {
//     console.log(i);
//     i++;
//   }, 1000);
// }

// startCounter();

//// CLEAR  INTERVAL
let i = 1;
function startCounter() {
  timerObj = setInterval(() => {
    if (i <= 5) {
      console.log(i);
      i++;
    } else {
      clearInterval(timerObj);
    }
  }, 1000);
}

startCounter();
