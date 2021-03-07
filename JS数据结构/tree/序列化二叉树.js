/*
#题目
请实现两个函数，分别用来序列化和反序列化二叉树

#思路
若一颗二叉树是不完全的，我们至少需要两个遍历才能将它重建（像题目重建二叉树一样）
但是这种方式仍然有一定的局限性，比如二叉树中不能出现重复节点。
如果二叉树是一颗完全二叉树，我们只需要知道前序遍历即可将它重建。
因此在序列化时二叉树时，可以将空节点使用特殊符号存储起来，这样就可以模拟一棵完全二叉树的前序遍历
在重建二叉树时，当遇到特殊符号当空节点进行处理
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (root == null) {                  // 遍历到 null 节点
        return 'null';
    }
    const left = serialize(root.left);   // 左子树的序列化结果
    const right = serialize(root.right); // 右子树的序列化结果
    return root.val + ',' + left + ','+ right; // 按  根,左,右  拼接字符串
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const list = data.split(',');   // split成数组

    const buildTree = (list) => {   // 基于list构建当前子树
        const rootVal = list.shift(); // 弹出首项，获取它的“数据”
        if (rootVal === "null") {         // 是X，返回null节点
            return null;
        }
        const root = new TreeNode(rootVal); // 不是X，则创建节点
        root.left = buildTree(list);        // 递归构建左子树
        root.right = buildTree(list);       // 递归构建右子树
        return root;                        // 返回当前构建好的root
    };

    return buildTree(list); // 构建的入口
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */