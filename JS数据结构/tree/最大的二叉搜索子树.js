/*
【题目】
找出一颗二叉树中最大的（节点数最多）的二叉搜索子树，返回子树的大小与头节点
 */

class Info {
    isAllBst;
    maxSubBstSize;
    min;
    max;

    constructor(h,size,mi,ma) {
        this.maxSubBstHead = h;
        //this.isAllBst = is;
        this.maxSubBstSize = size;
        this.min = mi;
        this.max = ma;
    }
}

function process(x) {
    if(x == null) {
        return null;
    }

    let leftInfo = process(x.left);
    let rightInfo = process(x.right);

    let min = x.value;
    let max = x.value;

    if(leftInfo != null) {
        min = Math.min(min,leftInfo.min);
        max = Math.max(max,leftInfo.max);
    }
    if(rightInfo != null) {
        min = Math.min(min,rightInfo.min);
        max = Math.max(max,rightInfo.max);
    }

    let maxSubBstSize = 0;
    let maxSubBstHead = null;
    if(leftInfo != null) {
        maxSubBstSize = leftInfo.maxSubBstSize;
        maxSubBstHead = leftInfo.maxSubBstHead;
    }
    if(rightInfo != null) {
        if(rightInfo.maxSubBstSize > maxSubBstSize) {
            maxSubBstSize = rightInfo.maxSubBstSize;
            maxSubBstHead = rightInfo.maxSubBstHead;
        }
    }

    if(
        (leftInfo == null ? true : leftInfo.maxSubBstHead === x.left) &&
        (rightInfo == null ? true : rightInfo.maxSubBstHead === x.right) &&
        (leftInfo == null ? true : leftInfo.max < x.value) &&
        (rightInfo == null ? true : rightInfo.min > x.value)
    ) {
        maxSubBstHead = x;
        maxSubBstSize = (leftInfo == null ? 0 : leftInfo.maxSubBstSize) +
            (rightInfo == null ? 0 : rightInfo.maxSubBstSize) + 1;
    }

    return new Info(maxSubBstHead,maxSubBstSize,min,max);
}