//有向无环图

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
console.log(sortedTopology(graph));
function sortedTopology(graph) {
    const inMap = new Map();
    const zeroInQue = [];

    for (const node of graph.nodes.values()) {
        inMap.set(node,node.in);
        if(node.in === 0) {
            zeroInQue.push(node);
        }
    }

    const res = [];
    while (zeroInQue.length) {
        const cur = zeroInQue.shift();
        res.push(cur.value);
        for (const next of cur.nexts) {
            inMap.set(next,inMap.get(next)-1);
            if(inMap.get(next) === 0) {
                zeroInQue.push(next);
            }
        }
    }

    return res;
}
