/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// https://leetcode-cn.com/problems/merge-sorted-array/submissions/
 var merge = function(nums1, m, nums2, n) {
    let p1 = 0,p2 = 0,cur;
    const sorted = [];
    while(p1 < m || p2 < n) {
        if(p1 === m) {
            cur = nums2[p2++];
        }else if(p2 === n) {
            cur = nums1[p1++];
        }else if(nums1[p1] < nums2[p2]) {
            cur = nums1[p1++];
        }else {
            cur = nums2[p2++];
        }
        sorted[p1+p2-1] = cur
    }
    for(let i=0;i<m+n;i++) {
        nums1[i] = sorted[i]
    }
};


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = 0,j = 0,k=0;
    let res = [];
    while (i < m && j < n) {
        res[k++] = nums1[i] < nums2[j] ? nums1[i++] : nums2[j++];
    }

    while(i < m) {
        res[k++] = nums1[i++];
    }

    while(j < n) {
        res[k++] = nums2[j++];
    }

    for(let i=0;i<m+n;i++) {
        nums1[i] = res[i]
    }
};