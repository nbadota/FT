/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    if(root == null) {
        return null
    };
    if(root === p || root === q) {
        return root
    };
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if(left && right) {
        return  root
    }
    if(left == null) {
        return right
    }
    return left
};

 // https://leetcode-cn.com/problems/generate-parentheses/solution/shou-hua-tu-jie-gua-hao-sheng-cheng-hui-su-suan-fa/

class Info {
    constructor(a,f1,f2) {
        this.ans = a;
        this.findO1 = f1;
        this.findO2 = f2;
    }
}

function process(x,o1,o2) {
    if (x == null) {
        return new Info(null,false,false);
    }
    const leftInfo = process(x.left,o1,o2);
    const rightInfo = process(x.right,o1,o2);

    const findO1 = x === o1 || leftInfo.findO1 || rightInfo.findO1;
    const findO2 = x === o2 || leftInfo.findO2 || rightInfo.findO2;

    let ans = null;
    if(leftInfo.ans != null) {
        ans = leftInfo.ans;
    }
    if(rightInfo.ans != null) {
        ans = rightInfo.ans;
    }
    if (ans == null) {
        if(findO1 && findO2) {
            ans = x;
        }
    }
    return new Info(ans,findO1,findO2);
}