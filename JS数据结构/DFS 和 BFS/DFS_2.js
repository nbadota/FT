function deepTraversal(node) {
    var nodeList = [];
    if (node) {
        var stack = [];
        stack.push(node);
        while (stack.length !== 0) {
            var childrenItem = stack.pop();
            nodeList.push(childrenItem);
            var childrenList = childrenItem.children;
            for (var i = childrenList.length - 1; i >= 0; i--)
                stack.push(childrenList[i]);
        }
    }
    return nodeList;
}

var root = document.getElementById('root')
console.log(deepTraversal(root))


const deepTraversal1 = function (node) {
    const stack = [];
    const res = [];
    if (node) {
        stack.push(node)
        while (stack.length !== 0) {
            const childrenItem = stack.pop();
            res.push(childrenItem);
            const  childrenList = childrenItem.childNodes;
            for (let i = childrenList.length -1;i >= 0;i--) {
                if (childrenList[i].nodeType !== 3 ) {
                    stack.push(childrenList[i]);
                }
            }
        }
    }
    return res;
}

var root = document.documentElement;
console.log(deepTraversal1(root))
