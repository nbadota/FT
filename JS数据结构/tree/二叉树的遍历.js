/*
先序：根 左 右
中序：左 根 右
后序：左 右 根
 */
// 前序-递归&暴力递归&动态规划
// https://leetcode-cn.com/problems/binary-tree-paths/
import {BinarySearchTree} from "./BinarySearchTree";
var preorderTraversal = function(root) {
    const res = []
    const preorder = (root) => {
        if(!root) return null;
        res.push(root.val)
        preorder(root.left)
        preorder(root.right)
    }
    preorder(root)
    return res
};

// 前序 - 非递归
var preorderTraversal = function(root) {
    const stack = [root];
    const res = [];
    while (stack.length) {
        const node = stack.pop();
        res.push(node.val)
        if (node.right) {
            stack.push(node.right);
        }
        if (node.right) {
            stack.push(node.left);
        }
    }
    return res;
}


// 中序-递归&暴力递归&动态规划
var inorderTraversal = function(root) {
    const res = []
    const inorder = (root) => {
        if(!root) return null;
        inorder(root.left)
        res.push(root.val)
        inorder(root.right)
    }
    inorder(root)
    return res
};

// 中序-非递归
/*
1.整条左边界节点依次入栈
2.1无法执行，弹出栈顶节点加入结果数组，右树执行1
 */
var inorderTraversal = function(root) {
    const stack = [];
    const res = [];
    let node = root;
    while (stack.length || node !== null) {
        if(node) {
            stack.push(node)
            node = node.left;
        }else {
            node = stack.pop();
            res.push(node.val);
            node = node.right;
        }
    }
    return res;
};

// 后序-递归&暴力递归&动态规划

var postorderTraversal = function(root) {
    let res = []
    const postorder = (root) => {
        if(root == null) return null;
        postorder(root.left)
        postorder(root.right)
        res.push(root.val)
    }
    postorder(root)
    return res
};

// 后序-非递归
var postorderTraversal = function(root) {
    if(!root) {
        return [];
    }
    const res = [], stack = [root]
    while (stack.length) {
        let node = stack.pop();
        res.push(node);
        if(node.left) {
            stack.push(node.left);
        }
        if(node.right) {
            stack.push(node.right);
        }
    }

    return res.reverse();
};

