// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1500);
//   }, 2000);
// });


// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3500);
//   }, 2000);
// })

// Promise.all([promise1, promise1]).then(console.log);

async function generateTotalPrice() {
  const startTime = Date.now();
  Promise.all([
    new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1500);
    }, 2000);
  }),

  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3500);
    }, 2000);
  }),
])
  .then(console
  .log).then(() => {
    const endTime = Date.now();
    console.log(`alapsedTime ${endTime - startTime}ms`);

}); 
}

generateTotalPrice();