// ac地址：https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
// 原文地址：https://xxoo521.com/2019-12-21-re-construct-btree/


var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }

    const rootVal = preorder[0];
    const node = new TreeNode(rootVal);

    let i = 0; // i有两个含义，一个是根节点在中序遍历结果中的下标，另一个是当前左子树的节点个数
    for (; i < inorder.length; ++i) {
        if (inorder[i] === rootVal) {
            break;
        }
    }

    node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
    node.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
    return node;
};

// i == 3
// [0,1,2,3,4,5,6]
// [1,2,4,5,3,6,7] p
// [4,2,5,1,6,3,7] i