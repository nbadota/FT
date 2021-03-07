/*
#题目
给定一棵二叉搜索树，请找出其中第k大的节点

#思路
反中序遍历
 */


var kthLargest = function(root, k) {
    // 反中序遍历，记录数值到数组，获取第k -1 个
    let setArray = []
    const dfs = function(node) {
        if (node === null) {
            return
        }
        dfs(node.right)
        setArray.push(node.val)
        dfs(node.left)
    }
    dfs(root)
    return setArray[k - 1]
};
