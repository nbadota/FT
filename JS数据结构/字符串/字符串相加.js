/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// https://leetcode-cn.com/problems/add-strings/
 var addStrings = function(num1, num2) {
    let res = '';
    let carry = 0;
    for(let i = num1.length -1, j = num2.length -1;i >= 0 || j >= 0;i--, j--) {
        const n1 = num1[i] ? +num1[i] : 0;
        const n2 = num2[j] ? +num2[j] : 0;
        const sum = n1 + n2 + carry;
        res = sum % 10 + res;
        carry = sum > 9 ? 1 : 0; 
    }
     carry && (res = '1' + res);
    return res;
};