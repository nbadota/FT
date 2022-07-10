/*
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
#思路
使用一个map将遍历过的数字存起来，值作为key，下标作为值。

对于每一次遍历：

取map中查找是否有key为target-nums[i]的值
如果取到了，则条件成立，返回。
如果没有取到，将当前值作为key，下标作为值存入map
时间复杂度：O(n)

空间复杂度O(n)
 */
let array = [2, 7, 11, 15]
let target = 9
function twoSum(array,target) {
    let map = new Map()
    for(let i=0;i< array.length;i++) {
        if(map.get(target - array[i]) != null) {
            return [map.get(target-array[i]),i]
        }else {
            map.set(array[i],i)
        }
    }
}

console.log(twoSum(array,target))
