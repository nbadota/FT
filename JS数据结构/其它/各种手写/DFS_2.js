function deepTraversal(node) {
    var nodeList = [];
    if (node) {
        var stack = [];
        stack.push(node);
        while (stack.length != 0) {
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

