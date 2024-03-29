/*
方法：栈
判断括号的有效性可以使用「栈」这一数据结构来解决。

我们遍历给定的字符串 ss。当我们遇到一个左括号时，我们会期望在后续的遍历中，有一个相同类型的右括号将其闭合。由于后遇到的左括号要先闭合，因此我们可以将这个左括号放入栈顶。

当我们遇到一个右括号时，我们需要将一个相同类型的左括号闭合。此时，我们可以取出栈顶的左括号并判断它们是否是相同类型的括号。
如果不是相同的类型，或者栈中并没有左括号，那么字符串 ss 无效，返回 \text{False}False。
为了快速判断括号的类型，我们可以使用哈希表存储每一种括号。哈希表的键为右括号，值为相同类型的左括号。

在遍历结束后，如果栈中没有左括号，说明我们将字符串 ss 中的所有左括号闭合，返回 \text{True}True，否则返回 \text{False}False。

注意到有效字符串的长度一定为偶数，因此如果字符串的长度为奇数，我们可以直接返回 \text{False}False，省去后续的遍历判断过程。
 */
function isValid1(s) {
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    const stk = [];
    let arr = s.split('')
    for(let ch of arr){
        if (pairs.has(ch)) {
            if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
                return false;
            }
            stk.pop();
        }
        else {
            stk.push(ch);
        }
    }
    return !stk.length;
};

/**
 *方法2：不借助栈，只需要一个变量
 * @param s
 */
console.log(isValid2('(())())'))
function isValid2(s) {
    let count = 0;
    for(let i = 0;i < s.length;i++) {
        if(s[i] === ')') {
            count--;
            if(count < 0) {
                return false;
            }
        }else {
            count++;
        }
    }

    return count === 0;
}

/**
 * 扩展：需要添加至少几个括号才变为有效
 * @param s
 */
console.log(needParentheses('(()))(('))
function needParentheses(s) {
    let count = 0;
    let need = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            count++;
        } else { // 遇到的是')'
            if (count === 0) {
                need++;
            } else {
                count--;
            }
        }
    }
    return count + need;
}

/**
 * 扩展：最长有效子串
 * @param s
 */
console.log(maxLength('(())())'))
function maxLength(s) {
    if(s == null || s.length < 2) {
        return 0;
    }
    let res = 0;
    let pre = 0;
    const dp = new Array(s.length).fill(0);
    dp[0] = 0;
    for (let i = 1;i < s.length;i++) {
        if (s[i] === ')') {
            pre = i - dp[i - 1] - 1; // 与str[i]配对的左括号的位置 pre
            if (pre >= 0 && s[pre] === '(') {
                dp[i] = dp[i - 1] + 2 + (pre > 0 ? dp[pre - 1] : 0);
            }
        }
        res = Math.max(res, dp[i]);
    }
    return res;
}
