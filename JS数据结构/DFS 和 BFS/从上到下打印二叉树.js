/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if(!root || root.length === 0) return []
    let res = []
    let queue = [root]
    while(queue.length) {
        for(let i=0;i<queue.length;i++) {
            let node = queue.shift()
            res.push(node.val)
            if(node.left) {
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right)
            }
        }
    }
    return res
};