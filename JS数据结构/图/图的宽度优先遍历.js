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

console.log(bfs(graph.nodes.get('a')));

function bfs(node) {
    if(node == null) {
        return;
    }
    const queue = [];
    const set = new Set();
    queue.push(node);
    set.add(node);
    while (queue.length) {
        const cur = queue.shift();
        console.log(cur.value);
        for (const next of cur.nexts) {
            if(!set.has(next)) {
                set.add(next);
                queue.push(next);
            }
        }
    }
}