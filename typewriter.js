const sentence = "hello there from lighthouse labs";
// set a variable of one second for delay
let delay = 1000;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  // increment the delay by 50ms with each passing of loop
  delay += 50;
};

setTimeout(() => {
  console.log('');
}, delay);