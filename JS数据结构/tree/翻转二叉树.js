/*
#思路
一个二叉树，怎么才算翻转了？
它的左右子树要交换，并且左右子树内部的所有子树，都要进行左右子树的交换。

先 “做事”——先交换左右子树，它们内部的子树还没翻转——丢给递归去做。
把交换的操作，放在递归子树之前。
问题是在递归压栈前被解决的。
 */
const invertTree = (root) => {
    if (root == null) { // 遍历到null节点时，不用翻转，直接返回它本身
        return root;
    }
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    // 内部的翻转交给递归去做
    invertTree(root.left);
    invertTree(root.right);
    return root;
};
