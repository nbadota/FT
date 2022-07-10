/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    const res = [];
    const dfs = function (lRemain, rRemain, str) {
        if(str.length === 2*n){
            res.push(str);
            return;
        }
        if(lRemain > 0) {
            dfs(lRemain - 1, rRemain, str+ '(');
        }
        if(lRemain < rRemain) {
            dfs(lRemain, rRemain - 1, str+ ')');
        }
    };

    dfs(n, n , '')
    return res
};

 //https://leetcode-cn.com/problems/generate-parentheses/solution/shou-hua-tu-jie-gua-hao-sheng-cheng-hui-su-suan-fa/