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

import {Node,BinaryTree} from "./BinaryTree.js";
let tree1 = new BinaryTree([1,2,3,4,5,6,7]);
let queue = [];
serialize(tree1.root,queue);
console.log(queue);
console.log(deserialize(queue));
function serialize(root,queue = []) {
    if (root == null) {                  // 遍历到 null 节点
        queue.push(null);
    }else {
        queue.push(root.key);
        serialize(root.left,queue);   // 左子树的序列化结果
        serialize(root.right,queue); // 右子树的序列化结果
    }
};


function deserialize(list) {

    const rootVal = list.shift(); // 弹出首项，获取它的“数据”
    if (rootVal == null) {         // 是null，返回null节点
        return null;
    }
    const root = new Node(rootVal); // 不是null，则创建节点
    root.left = deserialize(list);        // 递归构建左子树
    root.right = deserialize(list);       // 递归构建右子树

    return root;                        // 返回当前构建好的root
};


//层序序列化
