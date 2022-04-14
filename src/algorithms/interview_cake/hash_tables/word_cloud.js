/*
INTERVIEW CAKE - HASHING & HASH TABLE: WORD CLOUD
You want to build a word cloud, an infographic where
the size of a word corresponds to how often it appears in the body of text.

To do this, you'll need data.
Write code that takes a long string and builds its word cloud data in a map,
where the keys are words and the values are the number of times the words occurred.

We'll use a JavaScript Map instead of an object because
 it's more explicit—we're mapping words to counts.
 And it'll be easier and cleaner when we want to iterate over our data.

Think about capitalized words.
For example, look at these sentences:
  "After beating the eggs, Dana read the next step:"
"Add milk and eggs, then add flour and sugar."

What do we want to do with "After", "Dana", and "add"?
In this example, your final map should include one "Add" or "add" with a value of 22.
Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".

Assume the input will only contain words and standard punctuation.

You could make a reasonable argument to use regex in your solution. We won't, mainly because performance is difficult to measure and can get pretty bad.
 */

//Map fns - set(k(key can be any type),v), .delete, .has, .get
function wordCloud(str) {
  const cloudMap = new Map();
  // key = words, values = #times words occured
  let punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g
  let splitStr = str
    // replace w/ a regex that has all punctuation marks that we want to remove inside
    // g flag = match all instances in str that matches the given pattern
    // replace them all w/ empty string as we indicate with the 2nd argument
    .replace(punctuationRegex, "")
    .split(" ");
  // console.log(splitStr)

  for (let i = 0; i < splitStr.length; i++) {
    let word = splitStr[i].toLowerCase();
    cloudMap[word] = (cloudMap[word] || 0) + 1;
  }
  return cloudMap;
}

/*
['After', 'beating', 'the', 'eggs', 'Dana', 'read', 'the', 'next', 'step', 'Add', 'milk', 'and', 'eggs', 'then', 'add', 'flour', 'and', 'sugar']
Map(0) {after: 1, beating: 1, the: 2, eggs: 2, dana: 1, …}
[[Entries]]
add: 2
after: 1
and: 2
beating: 1
dana: 1
eggs: 2
flour: 1
milk: 1
next: 1
read: 1
step: 1
sugar: 1
the: 2
then: 1
 */

/*
Complexity
Runtime and memory cost are both O(n).
This is the best we can do because we have to look at every character in the input string
 and we have to return a map of every unique word.
 We optimized to only make one pass over our input and
 have only one O(n) data structure.
*/