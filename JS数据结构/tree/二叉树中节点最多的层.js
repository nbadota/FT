import {BinaryTree} from "./BinaryTree.js";
let tree1 = new BinaryTree([1,2,3,4,5,6,7]);
console.log(tree1);
function maxLevelNodes(root) {
    if(root == null) {
        return 0;
    }
    const queue = [root];
    let curEnd = root;//当前层最右节点
    let nextEnd  = null;//下一层最右节点
    let max = 0;
    let curLevelNodes = 0;//当前层节点数
    while (queue.length) {
        let cur = queue.shift();
        if(cur.left != null) {
            queue.push(cur.left);
            nextEnd = cur.left;
        }
        if(cur.right != null) {
            queue.push(cur.right);
            nextEnd = cur.right;
        }
        curLevelNodes++;
        if(cur === curEnd) {
            max = Math.max(max,curLevelNodes);
            curLevelNodes = 0;
            curEnd = nextEnd;
        }
    }
    return max;
}

console.log(maxLevelNodes(tree1.root));