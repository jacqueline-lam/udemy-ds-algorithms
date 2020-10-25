// accepts a vairabe number of arguments
// check whether there are any duplciates among the args passed in
// use frequency counter of mulitple point pattern to solve

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

// MULTIPLE POINTERS - O(N)
function areThereDuplicatesCounter(...args) {
  // must sort args to use below method
  args.sort((a, b) => a > b); // default sort
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
// areThereDuplicatesCounter(1, 2, 2)
// [1 === 2?, 2, 2] -> [1, 2 === 2 ? T] => TRUE
// areThereDuplicatesCounter(1, 2, 3)
// [1 === 2?, 2, 3] -> [1, 2 === 3 ?] => FALSE

// FREQUENCY COUNTER - O(N)
// loop over args and collection one time individually
function areThereDuplicatesPointers(...args) {
  let collection = {};
  for (let ele of args) {
    collection[ele] = (collection[ele] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true; // ele w/ duplicates
  }
  return false;
}

// BONUS: TIME O(n log n) & SPACE O(1)
// One liner solution
// Set object lets you store unique values of any type (primitive values or object references)

// Set will only return unique keys
// let s = new Set(['a', 'b', 'c', 'a'])
// s => {"a", "b", "c"}
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length
}