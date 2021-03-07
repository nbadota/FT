/*
给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

示例 1:
输入: J = "aA", S = "aAAbbbb"
输出: 3

示例 2:
输入: J = "z", S = "ZZ"
输出: 0


#思路
首先对J进行遍历，将字符分别存到HashSet中，以便之后遍历S的时候查找
遍历S，并将每个字符与HashSet中的进行比对，如果存在，则结果ans++，遍历结束，返回ans
时间复杂度：O(m+n)，m为J的长度，n为S的长度

 */

var numJewelsInStones = function(J, S) {
    const set = new Set();
    for(const s of J) {
        set.add(s);
    }
    let ans = 0;
    for(const s of S) {
        if(set.has(s)){
            ans++;
        }
    }
    return ans;
};
