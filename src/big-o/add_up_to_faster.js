function addUpTo(n) {
  return n * (n + 1) / 2;
}

// performance.now works in browser
var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)
// Time Elapsed: 0.000039999998989515007 seconds.
