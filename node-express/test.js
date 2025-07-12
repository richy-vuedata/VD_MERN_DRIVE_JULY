console.log('Message no. 1: Sync');

setTimeout(() => {
  console.log('Message no. 2: setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Message no. 3: 1st Promise');
}).then(() => {
  console.log('Message no. 4: 2nd Promise');
});