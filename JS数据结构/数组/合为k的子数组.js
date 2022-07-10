/*
给定一个整数数组和一个整数k，你需要找到该数组中和为k的连续的子数组的个数。

示例 1 :

输入:nums = [1,1,1], k = 2
输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
 */

const subarraySum = (nums, k) => {
    const map = { 0: 1 };
    let prefixSum = 0;
    let count = 0;
  
    for (let i = 0; i < nums.length; i++) {
      prefixSum += nums[i];
  
      if (map[prefixSum - k]) {
        count += map[prefixSum - k];
      }
  
      if (map[prefixSum]) {
        map[prefixSum]++;
      } else {
        map[prefixSum] = 1;
      }
    }
    return count;
};
//https://leetcode-cn.com/problems/subarray-sum-equals-k/solution/dai-ni-da-tong-qian-zhui-he-cong-zui-ben-fang-fa-y/