/*
INTERVIEW CAKE - GREEDY ALGO - APPLE STOCKS
- GREEDY APPROACH- ASK YOURSELF:
* "Suppose we could come up with the answer in one pass through the input,
 by simply updating the 'best answer so far' as we went.
* What ADDITIONAL VALUES would we need to keep updated as we looked at each item in our input,
 in order to be able to update the 'BEST ANSWER SO FAR' in constant time?"

Writing programming interview questions hasn't made me rich yet ...
so I might give up and start trading Apple stocks all day instead.

First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

So I grabbed Apple's stock prices from yesterday and
put them in an array called stockPrices, where:
*The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
*The values are the price (in US dollars) of one share of Apple stock at that time.
 -- So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.

Write an efficient function that takes stockPrices and
returns the best profit I could have made from one purchase and
 one sale of one share of Apple stock yesterday.

For example:
  const stockPrices = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)

No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass.

- Notes -
You can't just take the difference between the highest price and the lowest price,
because the highest price might come before the lowest price. And you have to buy before you can sell.

What if the price goes down all day?
In that case, the best profit will be negative.

You can do this in O(n) time and O(1) space!

Whiteboarding-
[10, 7, 5, 8, 11, 9]
initial maxProfit = buy at 10, sell at 7 = -3
minPrice = 10

i=1
maxProfit = 7-10 = -3
minPrice = min(10,7)=7

i=2
maxProfit = max(-3, 5-7=-2) = -2
minPrice = min(7,5) = 5

i=3
maxProfit = max(-2, 8-5 =3) = 3
minPrice = min(5,8) = 5

i=4
maxProfit = max(3, 11-5=6) = 6 <-- MAXPROFIT
minPrice = min(5,11)= 5

i=5
maxProfit = max(6, 9-5= 4) = 4
minPrice = min(5,9) = 5
*/


function getMaxProfit(stockPrices) {
  // handle edge cases
  if (stockPrices < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }

  // Greedily update minPrice and maxProfit
  // initialize them to first price and first possible profit
  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  // Start at i=1 - we can't sell at first time since we must buy first
  // and can't buy and sell at same time
  // If started at i=0, we'd try to buy and sell at time 0
  // this would = profit of 0 - problem if our maxProfit is supposed to be -ve
  for (let i = 1; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];
    // Check what profit will be if bought at min price & sold at currentPrice
    const potentialProfit = currentPrice - minPrice;

    // Update maxProfit if we can do better - prev max profit vs profit we can get by selling NOW
    maxProfit = Math.max(maxProft, potentialProfit);
    // Update minPrice so it's always lowest price seen so far
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}

/*
-Time and Space complexity:-
O(n) time and O(1)space.
We only loop through the array once.

-What We Learned:-
This one's a good example of the greedy approach in action.
Greedy approaches are great because they're fast (usually just one pass through the input).
But they don't work for every problem.

How do you know if a problem will lend itself to a greedy approach?
Best bet is to try it out and see if it works.
Trying out a greedy approach should be one of the first ways you try to break down a new question.

To try it on a new problem, start by asking yourself:
* "Suppose we could come up with the answer in one pass through the input,
 by simply updating the 'best answer so far' as we went.
 What ADDITIONAL VALUES would we need to keep updated as we looked at each item in our input,
 in order to be able to update the 'BEST ANSWER SO FAR' in constant time?"

In this case:
* The "BEST ANSWER SO FAR" is, of course,
the max profit that we can get based on the prices we've seen so far.
* The "ADDITIONAL VALUES" is the minimum price we've seen so far.

If we keep that updated, we can use it to calculate the new max profit so far in constant time.
The max profit is the larger of:
  1. The previous max profit
  2. The max profit we can get by selling now (the current price minus the minimum price seen so far)

*/