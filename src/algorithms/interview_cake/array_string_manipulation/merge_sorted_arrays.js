/*
INTERVIEW CAKE - MERGE SORTED ARRAY

In order to win the price for most cookies sold,
my friend Alice and I are going to merge our
Girl Scout Cookies orders and enter as one unit.

Each order is represented by an "order id" (an integer).
We have our lists of orders sorted numerically already, in lists.
 Write a function to merge our lists of orders into one sorted list.

For example:
   my_list = [3, 4, 6, 10, 11, 15]
   alices_list = [1, 5, 8, 12, 14, 19]
   // [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
   mer

-Gotchas-
 We can do this in O(n) time and space.

If you're running a built-in sorting function,
your algorithm probably takes O(n log n) time for that sort.

Think about edge cases!
What happens when we've merged in all of the elements from one of our lists
but we still have elements to merge in from our other list?

Since our lists are sorted, we know they each have their smallest item in the 0th index.
So the smallest item overall is in the 0th index of one of our input lists
- whichever saller ele

*/
// Step 1 - find and add smallest item overall to 0th idx of mergedList:
function mergeListsA(myList, alicesList) {
  let mergedList = [];
  let headOfMyList = myList[0];
  let headOfAlicesList = alicesList[0];

  // smallest ele comes from my/ alice's list
  if (headOfMyList < headOfAlicesList) {
    mergedList.push(headOfMyList);
  } else {
    mergedList.push(headOfAlicesList);
  }
  return mergedList;
}

// Step 2: choosing the remaining elements - smalest of ealiest unmerged elements in either list
// a) We'll start at the beginnings of our input lists, since the smallest elements will be there.
// b) As we put items in our final merged_list, we'll keep track of the fact that they're already merged.
// c) At each step, each list has a first "not yet merged" item.

function mergeListsB(myList, alicesList) {
  let length = myList.length + alicesList.length;
  let mergedList = new Array(length);

  let currIdxMine = 0;
  let currIdxAlices = 0;
  let currIdxMerged = 0;

  while (currIdxMerged < length) {
    // first unmerged mine < first unmerged alices
    if (myList[currIdxMine] < alicesList[currIdxAlices]) {
      // Next comex from my list
      mergedList[currIdxMerged] = myList[currIdxMine];
      currIdxMine++;
    } else {
      // Next comes from Alice's list
      mergedList[currIdxMerged] = alicesList[currIdxAlices];
      currIdxAlices++;
    }
    currIdxMerged++;
  }
  return mergedList;
}

// Here are some edge cases:
// 1. One or both of our input lists is 0 elements or 1 element
// 2. One of our input lists is longer than the other — IndexError
// 3. One of our lists runs out of elements before we're done merging — IndexError

// We also need to account for the case - we exhuast one of our lists and there're still eles in other
// To handle this, curr item in myList is next item to add to mergedList ONLY IF myList is NOT exahusted AND either:
// 1. Alice's is exhausted, or
// 2. the curr item in myList < curr item in alicesList

// Step 3: Handle edge cases - indexing past end of lists
function mergeLists(myList, alicesList) {
  let length = myList.length + alicesList.length;
  let mergedList = new Array(length);

  let currIdxM = 0, currIdxA = 0;
  let currIdxMerged = 0;

  while (currIdxMerged < length) {
    // first unmerged mine < first unmerged alices]
    let myListExahusted = currIdxM >= myList.length;
    let alicesListExhausted = currIdxA >= alicesList.length;

    if (!myListExahusted &&
      (alicesListExhausted || myList[currIdxM] < alicesList[currIdxA])) {
      // Next comex from my list — myList not exahusted AND
      // either (Alice's exhausted OR my curr ele < alice's ele)
      mergedList[currIdxMerged] = myList[currIdxMine];
      currIdxM++;
    } else {
      // Next comes from Alice's list
      mergedList[currIdxMerged] = alicesList[currIdxA];
      currIdxA++;
    }
    currIdxMerged++;
  }
  return mergedList;
}
// - complexity -
//  Time: O(N), Space: O(N) — where n = num of items in merged list
// Added N space comes from allocating the mergedList (can't edit in place) -
// because neither of our input lists are big enough to hold the merged list.
// BUT if inputs are linked list,
// we could avoid allocating a new structure and do merge by adjusting `next` pointers in list nodes

/*
-Bonus-
What if we wanted to merge several sorted lists.
 Write a function that takes as an input a list of sorted lists and
outputs a single sorted list with all the items from each list.

Do we absolutely have to allocate a new list to use for the merged output?
Where else could we store our merged list? How would our function need to change?

-What We Learned-
We spent a lot of time figuring out how to cleanly handle edge cases.
Sometimes it's easy to lose steam at the end of a coding interview when you're debugging.
Think about edge cases. Look for off-by-one errors.
*/