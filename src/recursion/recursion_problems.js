// =========== EASY PROBLEMS ===================
// -------- QUESTION 1 -------------
function power(base, exponent) {
  if (exponent === 0) return 1;
  // return power of base to exponent
  return base * power(base, exponent - 1);
}
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 2 * 2 * 2 * 2 = 16
power(2, 2)
// 2 * power(2, 1)
// 2 * 2 * power(2,0)
// 2 * 2 * 1

// -------- QUESTION 2 -------------
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1)
}
//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040


// -------- QUESTION 3 -------------
function productOfArray(arr) {
  if (arr.length <= 1) {
    return [arr]
  }
  return arr[0] * productOfArray(arr.slice(1))
}
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// -------- QUESTION 4 -------------
function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}
// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

// -------- QUESTION 5 -------------
function fib(n) {
  // add whatever parameters you deem necessary - good luck!
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2)
}
// fib(4) // (fib(2) + fib(1)) + fib(2) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// fib = [1,1,2,3,5,8]


// =========== CHALLENGING PROBLEMS ===================
// -------- QUESTION 1 -------------
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}
// reverse('awesome') // 'emosewa'
// reverse('wesome') + 'a'
// reverse('esome') + 'w' 'a'
// reverse('rithmschool') // 'loohcsmhtir'


// -------- QUESTION 2 -------------
function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!
  return (reverse(str) === str) ? true : false
}
function reverse(string) {
  if (string.length <= 1) return string;
  return reverse(string.slice(1)) + string[0];
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false


// -------- QUESTION 3 -------------
function someRecursive(arr, callBack) {
  if (arr.length === 0) return false;
  if (callBack(arr[0])) return true; // T if single value in arr returns T when passed to callback
  return someRecursive(arr.slice(1), callBack);
}

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false


// -------- QUESTION 4 -------------
function flatten(arr) {
  let newArr = [];
  arr.forEach(ele => {
    if (Array.isArray(ele)) {
      // PURE FN
      newArr = newArr.concat(flatten(ele))
    } else {
      newArr.push(ele)
    }
  })
  return newArr;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

// -------- QUESTION 5 -------------
// Given array of strings, capitalize 1st ltr of each str

// SLOW SOLUTION - O(N)
function capitalizeFirst(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let firstLtr = arr[i][0].toUpperCase();
    newArr.push(firstLtr + arr[i].slice(1));
  }
  return newArr;
}

// FASTER SOLUTION - O(1)
// Space is at least O(N) -> result getting longer - directly in proportion to length of input
function capitalizeFirst(array) {
  // base case - first str
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substring(1)];
  }
  // slice(0,-1) returns whole arr with last ele removed
  const result = capitalizeFirst(array.slice(0, -1));
  // last word in array with first ltr capitalized
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substring(1);
  result.push(string);
  return result;
}

// -------- QUESTION 6 -------------
// Given array of strings, capitalize ALL ltrs of each str
function capitalizeAllWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeAllWords(array.slice(0, -1));
  // take last str and change entire str to uppercase
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

