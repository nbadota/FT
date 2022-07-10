/*
【题目】
class Employee{
    happy = 0; //这名员工带来的快乐值
    nexts = []; //这名员工有哪些直属下级
}
公司的每个员工都符合Employee类的描述。整个公司人员结构可以看作是一颗标准的，没有环的多叉树。
树的头节点是公司的唯一的老板，除老板外，每个员工都有唯一的直接上级。
叶节点是没有任何下属的基层员工，除基层员工外，每个员工都有一个或多个直接下级
这个公司现在要办party,你可以决定那些员工来，哪些员工不来，但是要遵循如下规则：

1、如果某个员工来了，那么这个员工的所有直接下级都不能来

2、派对的整体快乐值是所有到场员工快乐值的累加

3、你的目标是让派对的整体快乐值最大

给定一个头节点boss，请返回派对的最大快乐值
要求：如果以boss为头节点的整棵树有N个节点，请做到时间复杂度为O(N)
 */

class Info {
    constructor(y,n) {
        this.yes = y;
        this.no = n;
    }
}

function process(x) {
    if (x.nexts.length === 0) {
        return new Info(x.happy,0);
    }
    let yes = x.happy;
    let no = 0;
    for(let next of x.nexts) {
        let nextInfo = process(next);
        yes += nextInfo.no;
        no += Math.max(nextInfo.yes,nextInfo.no);
    }
    return new Info(yes,no);
}