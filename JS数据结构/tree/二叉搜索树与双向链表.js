/*
#思路
1.首先进行中序遍历，获得升序排列的节点列表
2.进行两次for循环，分别设置前驱指针和后继指针
3.最终，返回节点列表的第一个节点即可
 */

/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    const link = [];
    var helper = function(root) {
        if (root) {
            helper(root.left);
            link.push(root);
            helper(root.right);
        }
    }
    helper(root);
    let len = link.length;
    // 设置后继指针
    for (let i = 0; i < len; i++) {
        if (i+1 === len) {
            link[i].right = link[i+1-len];
        } else {
            link[i].right = link[i+1]
        }
    }
    // 设置前驱指针
    for (let i = 0; i < len; i++) {
        if (i - 1 < 0) {
            link[i].left = link[len-1];
        } else {
            link[i].left = link[i-1];
        }
    }
    return link[0];
};
