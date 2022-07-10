/*
题目
输入一个正数S，打印出所有和为S的连续正数序列。

例如：输入15，有序1+2+3+4+5 = 4+5+6 = 7+8 = 15 所以打印出3个连续序列1-5，5-6和7-8。

#思路（双指针，滑动窗口）
leetcode:
https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/solution/shi-yao-shi-hua-dong-chuang-kou-yi-ji-ru-he-yong-h/
创建一个容器child，用于表示当前的子序列，初始元素为1,2

记录子序列的开头元素small和末尾元素big

big向右移动子序列末尾增加一个数 small向右移动子序列开头减少一个数

当子序列的和大于目标值，small向右移动，子序列的和小于目标值，big向右移动
 */

let sum = 15
function FindContinuousSequence(sum) {
    let result = []
    let start = 1
    let end = 2
    let child = [1,2]
    let currsum = 3
    while (start < end) {
        while (currsum < sum) {
            child.push(++end)
            currsum += end
        }
        while (currsum > sum) {
            child.shift()
            currsum -= start++
        }
        if(sum === currsum && child.length > 1) {
            result.push(child.slice())
            /*
            child.push(++end)
            currsum += end
             */
            child.shift()
            currsum -= start++
        }
    }
    return result
}
console.log(FindContinuousSequence(sum))


