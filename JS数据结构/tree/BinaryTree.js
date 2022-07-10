export class Node {
    constructor(key) {
        this.key = key; // {1} 节点值
        this.left = null; // 左侧子节点引用
        this.right = null; // 右侧子节点引用
    }
}


export class BinaryTree {
    constructor(arr) {
        this.root = null;
        this.buildBt(arr);
    }
    buildBt (arr) {
        const nodes = [];
        for (let i = 0 ; i < arr.length ; i++) {
            const node = new Node(arr[i]);
            nodes.push(node);
        }
        this.root = nodes[0];
        let index = 0;
        //循环建立二叉树子节点的引用
        while(index < arr.length) {
            let leftIndex = 2*index+1;       //当前节点左孩子索引
            let rightIndex = 2*index+2;       //当前节点右孩子索引
            //给当前节点添加左孩子
            nodes[index].left = leftIndex < arr.length ? nodes[leftIndex] : null;
            //给当前节点添加右孩子
            nodes[index].right = rightIndex < arr.length ? nodes[rightIndex] : null;
            index++;
        }
    }
}