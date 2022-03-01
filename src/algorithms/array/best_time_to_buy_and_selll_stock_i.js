// 121. Best Time to Buy and Sell Stock
// Given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a SINGLE day to buy one stock and
// choosing a different day in the future to sell that stock.

// Return the max profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.

// EXAMPLES:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

// PROBLEM SOLVING
// input: array of prices
// output: max profit
// 0 if no profit
// determine by - consecutive nums, nextNum must be bigger than prevNum - or return 0;
// Example [7,1,5,3,6,4]
//          i j
// 1 not > 7, next j
//            i j
// 5 > 1, profit - 1 + 5 = 4
//              i j
// 3 not > 5
//                i j
// 6 > 3. profit = 4

function maxProfit(prices) {
  let profit = 0; // base case
  // Use min to replace i=0; set as price on day 1
  let min = prices[0];
  // let i = 0;
  for (let i = 1; i < prices.length; i++) {
    // *KEY IS MIN -> the only thing that changes as we loop thru array (i.e. buy at cheapest price)
    min = Math.min(prices[i], min);
    // compare last maxProfit with current sell-buy
    profit = Math.max(profit, prices[i] - min);
  }
  return profit;
}