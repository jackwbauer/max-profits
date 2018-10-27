function maxProfit(prices) {
  var maxProfit = 0;
  prices.forEach((buy, index) => {
    for(var i = index + 1; i < prices.length; i++) {
      var profit = prices[i] - buy;
      if(profit > maxProfit) {
        maxProfit = profit;
      }
    }
  });
  return maxProfit;
}

module.exports = maxProfit;