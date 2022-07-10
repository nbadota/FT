/*
#题目
扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。

2-10为数字本身，A为1，J为11...大小王可以看成任何数字，可以把它当作0处理。

#解题思路
依据题意数组需要满足：

除 0 以外，数组最大数与最小数之差不能超过 4 ；因为长度为 5 的数组里数字若是连续的必定满足这一条件（不理解的同学可以自己试试枚举连续的 5 个数字出来）
除 0 以外，数组中不能有相同的数字
故解题思路为：

要直接获取数组 最大数 与 最小数 ，就必须将数组进行排序
以上条件都需要除去 0 ，故使用了数组的 filter方法 将数组中的 0 过滤掉
获取到 最大数 与 最小数 之后，判断它们的差是否大于 4 ，大于 4 则不符题意，返回 false
遍历一次新数组判断是否有重复的数字，有重复则不符题意，返回 false
以上都判断都通过，说明符合题意，返回 true
 */
let nums = [1,0,3,4,5]
function pukepai(nums) {
    nums = nums.sort((a, b) => a - b).filter(item => item !== 0)
    if((nums[nums.length -1] - nums[0]) > 4) return false
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) return false
    }
    return true
}

console.log(pukepai(nums))