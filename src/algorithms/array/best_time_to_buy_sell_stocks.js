// Best Time to Buy and Sell Stock II

// You have an array `prices` for which the ith element is the price of a given stock on day i.
// Design an algorithm to find the maximum profit.
// You may complete as many transactions as you like
// (i.e., buy one and sell one share of the stock multiple times).
// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:
// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

// Example 2:
// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//  Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//  engaging multiple transactions at the same time. You must sell before buying again.

// Example 3:
// Input: [7,6,4,3,1]
// Output: 0
// Explanation: No transaction is done, i.e. max profit = 0

// Constraints:
// 1 <= prices.length <= 3 * 104
// 0 <= prices[i] <= 104

// THOUGHT PROCESSES
// Want to buy at lowest prices[i] possible and sell at highest prices[i] possible
// I don't have to explain when to buy and sell, I just have to return the maximum profit -
// done by comparing current profit with price next day
// PROFIT is the SUM OF SUB-PROFITS (earnings - cost)
// Each sub-profit = the diff between selling at day j, and buying at day i (with j > i)

let maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    let j = i + 1;
    if (prices[j] > prices[i]) {
      profit = profit + prices[j] - prices[i];
    }
  }
  return profit;
}

// [7,1,5,3,6,4]
//    i j
// p = p + prices[j] - prices[i] => p = 5-1 = 4
//         i j
// p = 4 + (6 - 3)<-subprofit  = 7
// we are always just updating total profit based on subprofits


// You have an array `prices` for which the ith element is the price of a given stock on day i.
// Design an algorithm to find the maximum profit.
// You may complete as many transactions as you like
// (i.e., buy one and sell one share of the stock multiple times).
// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:
// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

// Example 2:
// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//  Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//  engaging multiple transactions at the same time. You must sell before buying again.

// Example 3:
// Input: [7,6,4,3,1]
// Output: 0
// Explanation: No transaction is done, i.e. max profit = 0