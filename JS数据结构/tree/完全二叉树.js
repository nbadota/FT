// 判断完全二叉树
class Info {
    constructor(full,cbt,h) {
        this.isFull = full;
        this.isCBT = cbt;
        this.height = h;
    }
}

function process(x) {
    if(x == null) {
        return new Info(true,true,0);
    }
    const leftInfo = process(x.left);
    const rightInfo = process(x.right);
    const height = Math.max(leftInfo.height,rightInfo.height) + 1;

    const isFull = leftInfo.isFull && rightInfo.isFull && leftInfo.height === rightInfo.height;

    let isCBT = false;

    if(isFull) {
        isCBT = true;
    }else {
        if(leftInfo.isCBT && rightInfo.isCBT) {
            if(leftInfo.isCBT && rightInfo.isFull && leftInfo.height === rightInfo.height + 1) {
                isCBT = true;
            }
            if(leftInfo.isFull && rightInfo.isFull && leftInfo.height === rightInfo.height + 1) {
                isCBT = true;
            }
            if(leftInfo.isFull && rightInfo.isCBT && leftInfo.height === rightInfo.height) {
                isCBT = true;
            }
        }
    }
    return new Info(isFull,isCBT,height);
}