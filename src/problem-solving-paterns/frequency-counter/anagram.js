// Given 2 strings, validAnagram() determines if 2nd string is an anagram of the first
// Anagram = word, phrase, name formed by rearranging the letter of another (e.g. cinema <- iceman)

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// MY SOLUTION
// function validAnagram(str1, str2){
//   // test if lengths are same and letters are there
//   if (str1.length !== str2.length) return false;

//   let frequencyCounter1 = {}
//   let frequencyCounter2 = {}

//   for (let char of str1) {
//       frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
//   }
//   for (let char of str2) {
//       frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
//   }

//   for (let key in frequencyCounter1) {
//       // make sure the char exists in str2
//       if (!key in frequencyCounter2) return false;
//       // frequencies of letters must be correct
//       if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
//   }
//   return true;
//  }


validAnagram('anagram', 'nagaram') // true
// lookup ={a: 3, n: 1, g: 1, r: 1, m: 1}
// seocnd loop -> lookup = {a: 0, n: 0, g: 0, r: 0, m: 0}
validAnagram('anagrams', 'nagaramm') // false
// lookup ={a: 3, n: 1, g: 1, r: 1, m: 1,s:1}
// seocnd loop -> lookup ={a: 0, n: 0, g: 0, r: 0, m: 0, s:1}
// value of m was already at 0 when i is at 2nd 'm' -> falsey return FALSE
// 0 = working on char in 2nd str that didn't exist in 1st str
validAnagram('', '')
validAnagram('qwerty', 'qeywit')
validAnagram('texttwisttime', 'timetwisttext')

// BIG O = O(N)