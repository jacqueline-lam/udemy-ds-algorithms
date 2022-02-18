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
  // Slice(0,-1) returns whole arr with last ele removed
  const result = capitalizeFirst(array.slice(0, -1));
  // Last word in array with first ltr capitalized
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
  let result = capitalizeAllWords(array.slice(0, -1));
  // take last str and change entire str to uppercase
  result.push(array.slice(array.length - 1)[0].toUpperCase());
  return result;
}
// Examples
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

// -------- QUESTION 7 -------------
// Return sum of all even nums in an obj which may contain nested objects.
function nestedEvenSum(obj, sum = 0) {
  let values = Object.values(obj) //O(N)
  values.forEach(value => {
    if (typeof value === "object") {
      sum += nestedEvenSum(value);
    } else if (typeof value === "number" && value % 2 === 0) {
      sum += value;
    }
  })
  return sum;
}
// Examples
// let obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }
// let obj2 =
//   a: 2,
//     b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
// c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
// d: 1,
//   e: { e: { e: 2 }, ee: 'car' }
// };
// nestedEvenSum(obj1); // 6
// (return 2 + 4 = 6)
// values = [2, {inner: 2, otherObj: {superInner: 2, notANumber: true, alsoNotANumber: "yup"}}]
// i=0 -> sum = 0 + 2
// i=1 -> 2+ nestedEvenSum({inner: 2, otherObj: {superInner: 2, notANumber: true, alsoNotANumber: "yup"}})
// (return 4)
// values = [2, {superInner: 2, notANumber: true, alsoNotANumber: "yup"}}]
// i=0 -> sum = 0 +2 = 2
// i=1 -> nestedEvenSum({superInner: 2, notANumber: true, alsoNotANumber: "yup"}})
// values = [2, true, 'yes']
// i=0 -> sum = 0 + 2
// Return 2

// nestedEvenSum(obj2); //n0

// REFACTORED
function nestedEvenSum(obj, sum = 0) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

// -------- QUESTION 7 -------------
// takes an obj and find all values which are numbers and converts them to strs
// fn should not modify existing obj
function stringifyNumbers(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key])
    } else if (typeof obj[key] === 'number') {
      let newValue = obj[key].toString();
      newObj[key] = newValue;
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
// Refactored - use Object.assign to avoid last else statement
function stringifyNumbers(obj) {
  let newObj = Object.assign({}, obj);
  for (let key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key])
    } else if (typeof obj[key] === 'number') {
      let newValue = obj[key].toString();
      newObj[key] = newValue;
    }
  }
  return newObj;
}

// Example
// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }
// stringifyNumbers(obj);
// RESULT:
// {
//   num: "1",
//   test: [],
//   data: {
//       val: "4",
//       info: {
//           isRight: true,
//           random: "66"
//       }
//   }
// }
