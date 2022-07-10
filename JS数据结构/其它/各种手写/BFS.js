function wideTraversal(node) {
    var nodes = [];
    if (node != null) {
        var queue = [];
        queue.unshift(node);
        while (queue.length !== 0) {
            var item = queue.shift();
            nodes.push(item);
            var children = item.children;
            for (var i = 0; i < children.length; i++)
                queue.push(children[i]);
        }
    }
    return nodes;
}
var root = document.getElementById('root');
console.log(wideTraversal(root));
/*
按照这个顺序进行广度优先遍历，明显是队列可以完美配合整个过程：

进队列 【1】
取出队列第一个元素1，将1的子节点234按顺序加入队列后面 【2，3，4】
取出队首元素2，将他的子节点按顺序加入队列 【3，4，5，6】
取出3，将子节点7加入 【4，5，6，7】
取出4，将子节点89加入【5，6，7，8，9】
取出5，没有子节点，没有什么干
继续一个个取出
到了最后，队列清空，树也遍历了一次
 */

let deep = function(root) {
    if(!root) return[]
    let res = []
    let queue = [root]
    while(queue.length) {
        let node = queue.shift()
        res.push(node)
        let child  = node.childNodes
        for(let i=0;i<child.length;i++) {
            queue.push(child[i])
        }
    }
    return res
}


