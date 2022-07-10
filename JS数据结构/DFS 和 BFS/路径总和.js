/*
#思路
sum —— 从根节点到叶子节点的路径上的节点值相加的目标和
对 root 递归&暴力递归&动态规划。转为判断：root 的左、右子树中能否找出和为 sum - root.val 的路径
即，每遍历一个节点，sum 就减去当前节点值，当遍历到叶子节点时，已经没有子节点了，如果 sum - 当前叶子节点值 == 0 ，
就是找到了从根节点到叶子节点的和为 sum 的路径
时间复杂度：O(n)，每个节点被遍历一次

 */
const hasPathSum = (root, sum) => {
    if (root == null) return false;                // 遍历到null节点
    if (root.left == null && root.right == null) { // 遍历到叶子节点
        return sum - root.val === 0;                  // 如果满足这个就返回true。否则返回false
    }
    // 当前递归问题 拆解成 两个子树的问题，其中一个true了就行
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}
