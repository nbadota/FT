/*
【题目】
求一个二叉树两个节点间的最大距离，即从一个节点到另一个节点所经历的最长路径（节点数），节点不可重复利用
思路：
（1）若假定路径中不包含root（后续会迭代），则最长距离存在于其左子树或右子树中
（2）若假定路径中包含root，则为左子树高度+右子树高度+1
 */

class Info {
    maxDistance;
    height;
    constructor(dis,h) {
        this.maxDistance = dis;
        this.height = h;
    }
}

function process(x) {
    if (x == null) {
        return new Info(0,0);
    }
    let leftInfo = process(x.left);
    let rightInfo = process(x.right);
    let height = Math.max(leftInfo.height,rightInfo.height) + 1;
    let maxDistance = Math.max(Math.max(leftInfo.maxDistance,rightInfo.maxDistance),
        leftInfo.height+rightInfo.height+1);
    return new Info(maxDistance,height);
}