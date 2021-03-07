/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    /*
        思路二 DP  Time: O(n) + Space: O(n)
        dp[i] 前i天卖出的最大利润
        min : prices 前i项中的最小值
        prices[i] - min: 当前位置卖出可得最大利润
        dp[i - 1] : 前i-1项目卖出可得的最大利润
        [7, 1, 5, 3, 6, 4] => dp[i] = Math.max( dp[i - 1], prices[i] - min )
        [7]                [0, 0, 0, 0, 0, 0]
        [7, 1]             [0, 0, 0, 0, 0, 0]
        [7, 1, 5]          [0, 0, 4, 0, 0, 0]
        [7, 1, 5, 3]       [0, 0, 4, 4, 0, 0]
        [7, 1, 5, 3, 6]    [0, 0, 4, 4, 5, 0]
        [7, 1, 5, 3, 6, 4] [0, 0, 4, 4, 5, 5]

        输出结果 dp[len - 1]
    */


    if (!prices || !prices.length) return 0

    const len = prices.length, dp = new Array(len).fill(0)
    let min1 = prices[0] // 前i项的最小值

    for (let i = 1, price; i < len; i++) {
        price = prices[i]
        min1 = Math.min(min1, price)
        dp[i] = Math.max(dp[i - 1], price - min1 )
    }

    return dp[len - 1]


    /*
        思路三 DP + 常量级变量 min max Time - O(n) + Space - O(1)
        精简 我们只关心 max 与 min 故不需要再构建dp 数组
    */

    if (!prices || !prices.length) return 0

    let min = Number.MAX_SAFE_INTEGER, max = 0

    for (let i = 0, price; i < prices.length; i++) {
        price = prices[i]
        min = Math.min(min, price)
        max = Math.max(max, price - min)
    }

    return max
};

