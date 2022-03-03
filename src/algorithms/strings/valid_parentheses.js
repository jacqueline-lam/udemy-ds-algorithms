// 20. Valid Parentheses
// Given a string s containing just the characters
//'(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// EDGE CASE - WRAPPING IS OK
// INPUT: "{[]}"
// Output: true

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// Problem solving:
// edge case would be even number
// loop thru str, multiple pointer? to check next ele

// ATTEMPT #1
// // This solution only works if wrapping like "{[]}" is not allowed
// function isValidParatheses(brackets) {
//   if (brackets.length % 2 !== 0) return false;
//   let i = 0;

//   while (i < brackets.length) {
//     if (brackets[i] === "(" && brackets[i + 1] !== ")") return false;
//     if (brackets[i] === "[" && brackets[i + 1] !== "]") return false;
//     if (brackets[i] === "{" && brackets[i + 1] !== "}") return false;
//     i = i + 2;
//   }
//   return true;
// }

// ATTEMPT #2
// Given that parentheses can be wrapped
// Only have to match number of open brackets with # of close brackets
function isValidParatheses(brackets) {
  if (brackets.length % 2 !== 0) return false;
  const lookup = {};

  for (let bracket of brackets) {
    lookup[bracket] = (lookup[bracket] || 0) + 1
  }

  for (let key in lookup) {
    switch (key) {
      case "{":
        if (lookup["{"] !== lookup["}"]) return false;
        else break;
      case "[":
        if (lookup["["] !== lookup["]"]) return false;
        else break;
      case "(":
        if (lookup["("] !== lookup[")"]) return false;
        else break;
    }
  }
  return true;
}
// WRONG ANSWER - "([)]" should reuturn false not true

// STACK SOLUTION ON DISCUSSION PAGE - REVIEW LATER
var isValid = function (s) {
  let mapLeft = {
    '{': 1,
    '[': 2,
    '(': 3
  },
    mapRight = {
      '}': 1,
      ']': 2,
      ')': 3
    };
  let stack = [];
  for (let i = 0; i < s.length; ++i) {
    if (mapLeft[s[i]]) {
      stack.push(s[i])
    } else if (!stack.length || mapRight[s[i]] != mapLeft[stack.pop()])
      return false;
  }
  return stack.length ? false : true;
};

// STACK #2**
var isValid = function (s) {
  let map = {
    ")": "(",
    "]": "[",
    "}": "{"
  }
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let bracket = s[i]
    if (bracket === "(" || bracket === "[" || bracket === "{") {
      arr.push(bracket);
    }
    else {
      if (arr[arr.length - 1] === map[bracket]) {
        arr.pop();
      }
      else return false;
    }
  }
  return arr.length === 0 ? true : false;
};

// STACK #3
var map = {
  "(": ")",
  "[": "]",
  "{": "}"
}

var isValid = function (s) {
  var stack = [];

  for (var i = 0; i < s.length; i++) {
    var ele = s[i];

    if (map[ele]) {
      stack.push(map[ele]);
    } else {
      if (ele !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};