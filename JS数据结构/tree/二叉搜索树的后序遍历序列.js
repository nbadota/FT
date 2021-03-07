/*
#二叉树的后续遍历
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

#思路
1.后序遍历：分成三部分：最后一个节点为跟节点，第二部分为左子树的值比跟节点都小，第三部分为右子树的值比跟节点都大。

2.先检测左子树，左侧比跟节点小的值都判定为左子树。

3.除最后一个节点外和左子树外的其他值为右子树，右子树有一个比跟节点小，则返回false。

4.若存在，左、右子树，递归检测左、右子树是否复合规范。
 */

var verifyPostorder = function(postorder) {
    if(postorder.length <=2)return true
    //后序遍历结果：左右根
    //左子树比根节点小，右子树比根节点大
    const root = postorder.pop()
    let i =0
    while (postorder[i]< root) {
        i++
    }
    //i及后面的节点都应该大于root
    const rightResult =  postorder.slice(i).every(item=>item>root)
    //对左右子树递归判断。如果所有的都满足就返回true，否则返回false
    return rightResult && verifyPostorder(postorder.slice(0,i)) && verifyPostorder(postorder.slice(i))
};