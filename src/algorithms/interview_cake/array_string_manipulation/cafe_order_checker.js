/*
My cake shop is so popular, I'm adding some tables and hiring wait staff so folks can have a cute sit-down cake-eating experience.

I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe.
All the customer orders get combined into one list for the kitchen,
where they should be handled first-come, first-served.

Recently, some customers have been complaining that people who placed orders after them are getting their food first.
Yikes—that's not good for business!

To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:
* The take-out orders as they were entered into the system and given to the kitchen. (takeOutOrders)
* The dine-in orders as they were entered into the system and given to the kitchen. (dineInOrders)
* Each customer order (from either register) as it was finished by the kitchen. (servedOrders)
Given all three arrays, write a function to check that my service is first-come, first-served.
All food should come out in the same order customers requested it.

We'll represent each customer order as a unique integer.

As an example,
  Take Out Orders: [1, 3, 5]
  Dine In Orders: [2, 4, 6]
  Served Orders: [1, 2, 4, 6, 5, 3]
would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

But,
  Take Out Orders: [17, 8, 24]
  Dine In Orders: [12, 19, 2]
  Served Orders: [17, 8, 12, 19, 24, 2]
  would be first-come, first-served.

Note: Order numbers are arbitrary. They do not have to be in increasing order.

-Gotchas-
Watch out for bugs because your index is outside an array!
Will your function ever try to grab the 0th item from an empty array, or the nth
item from an array with n elements (where the last index would be n−1)?

We can do this in O(n) time and O(1) additional space.

Did you come up with a recursive solution?
Keep in mind that you may be incurring a hidden space cost (probably O(n)) in the call stack! ↴
You can avoid this using an iterative approach.
*/

/*
We walk through servedOrders, seeing if each customer order so far matches
 a customer order from one of the two registers. To check this, we:
1. Keep pointers to the curr index in takeOutOrders, dineInOrders, and servedOrders.
2. Walk through `servedOrders` from beginning to end.

3. If the current order in servedOrders is the same as the current customer order in takeOutOrders,
increment takeOutOrdersIndex and keep going.
This can be thought of as "checking off" the current customer order in takeOutOrders and servedOrders,
reducing the problem to the remaining customer orders in the arrays.
4. Same as above with dineInOrders.
5. If the current order ISN'T the same as the customer order at the front of takeOutOrders or dineInOrders,
we know something's gone wrong and we're not serving food first-come, first-served.
6. If we make it all the way to the end of servedOrders,
we'll check that we've reached the end of takeOutOrders and dineInOrders.
If every customer order checks out, that means we're serving food first-come, first-served.
 */

// O(N) time and O(1) Space - in place by iterating over servedOrders instead of using recursion
function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  let takeOutIdx = 0, dineInIdx = 0;
  let takeOutMaxIdx = takeOutOrders.length - 1;
  let dineInMaxIdx = dineInOrders.length - 1;

  for (let i = 0; i < servedOrders; i++) {
    let order = servedOrders[i];
    // if we still have orders in takeOutOrders
    // and curr order in takeOut = in servedOrders
    if (takeOutIdx <= takeOutMaxIdx &&
      order === takeOutOrders[takeOutIdx]) {
      takeOutIdx++;

      // still have order in dineInOrders
      // and curr order in dineIn = in servedOrders
    } else if (dineInIdx <= dineInMaxIdx &&
      order === dineInOrders[dineInMaxIdx]) {
      dineInIdx++;

      // if curr order in servedOrders does NOT match curr order in either orders list,
      // then not first come first served
    } else {
      return false;
    }
  }
  //check for extra orders at the end of takeOutOrders or dineInOrders
  // orders that may be missed in servedOrders - by checking if we've exhausted takeOutORders and dineInOrders
  if (dineInIdx !== dineInOrders.length ||
    takeOutIdx !== takeOutOrders.length) {
    return false;
  }

  // all orders in servedOrders have been evaluated
  // so they are first-come, first-served
  return true;
}

// What we learned:
// recrusive fn cost us extra space (recusive fn's call stack)
// save space by using iterative algo instead