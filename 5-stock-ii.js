var maxProfit = function(prices) {
    var profit = 0;
    for (var i = 0; i < prices.length - 1; i++) {
        if (prices[i+1] > prices[i]) {
            profit += (prices[i + 1] - prices[i])
        }
    }
    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
