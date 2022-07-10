import {createGraph} from "./index.js";

const matrix = [
    [0,'a','b'],
    [0,'b','c'],
    [0,'b','g'],
    [0,'c','d'],
    [0,'c','e'],
    [0,'d','f'],
    [0,'e','f'],
    [0,'e','g']
];
let graph = createGraph(matrix);

console.log(dfs(graph.nodes.get('a')));


function dfs(node) {
    if(node == null) {
        return;
    }
    const stack = [];
    const set = new Set();
    stack.push(node);
    set.add(node);
    console.log(node.value);
    while (stack.length) {
        const cur = stack.pop();
        for (const next of cur.nexts) {
            if(!set.has(next)) {
                stack.push(cur);
                stack.push(next);
                set.add(next);
                console.log(next.value);
                break;
            }
        }
    }
}