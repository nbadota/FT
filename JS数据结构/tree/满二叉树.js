class Info {
    constructor(h,n) {
        this.height = h;
        this.nodes = n;
    }
}

function process(head) {
    if(head == null) {
        return new Info(0,0);
    }
    const leftInfo = process(head.left);
    const rightInfo = process(head.right);

    const height = Math.max(leftInfo.height,rightInfo.height) + 1;
    const nodes = leftInfo.nodes + rightInfo.nodes + 1;
    return new Info(height,nodes);
}